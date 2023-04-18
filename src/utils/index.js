import moment from 'moment';
import find from 'lodash/find';
import isEmpty from 'lodash/isEmpty';

export function getNameInitials(string = '') {
  if (!string) {
    return null;
  }
  let arr = string.trim().toUpperCase().split(' ');
  return arr.length > 1 ? `${arr[0].charAt(0)}${arr[1].charAt(0)}` : `${arr[0].charAt(0)}`;
}

export function queryParams(obj = {}, url = '') {
  let params = [];
  for (let key in obj) {
    if (key !== 'sort' && key !== 'order' && obj[key]) {
      params.push(`${key}=${obj[key]}`);
    }
  }

  if (obj.sort) {
    params.push(`sort=${obj.sort},${obj.order && obj.order === 'asc' ? `desc` : 'asc'}`);
  }

  if (!params.length) {
    return url ? url : '';
  }

  return url ? `${url}?${params.join('&')}` : params.join('&');
}

export function getDataTableQueryParams(query) {
  if (!query) return {};

  const params = {
    page: query.page ? parseInt(query.page) + 1 : 1,
    limit: query.pageSize ? parseInt(query.pageSize) : 10,
  };

  if (query.orderBy && query.orderBy.field) {
    params.sort = `${query.orderDirection && query.orderDirection === 'asc' ? '-' : ''}${query.orderBy.field}`;
  }

  if (query.search) {
    params.search = query.search;
  }

  if (query.filters && query.filters.length > 0) {
    for (let filter of query.filters) {
      if (filter.name && filter.value) {
        switch (filter.type) {
          case 'select':
            params[`filter_${filter.name}`] = filter.value.value;
            break;
          case 'daterange':
            params[`filter_${filter.name}`] = {
              date_from: moment(filter.value.start).format('YYYY-MM-DD'),
              date_to: moment(filter.value.end).format('YYYY-MM-DD'),
            };
            break;
          default:
            params[`filter_${filter.name}`] = filter.value;
        }
      }
    }
  }

  return params;
}

export function validateRoutesAccess(routes, userRole = undefined) {
  const { children } = routes;

  if (userRole === undefined) {
    const allowedRoutes = [];
    children.forEach((child) =>
      child.validateRole
        ? allowedRoutes.push({ ...child, isValidRole: false })
        : allowedRoutes.push({ ...child, isValidRole: true })
    );

    return { ...routes, children: allowedRoutes };
  } else if (userRole === null) {
    const allowedRoutes = [];
    children.forEach((child) => allowedRoutes.push({ ...child, isValidRole: true }));

    return { ...routes, children: allowedRoutes };
  }

  const { attributes } = userRole;

  const attributesKey = [];
  attributes.forEach((attribute) => {
    if (attribute.name === 'users' && attribute.access.details) attributesKey.push('user/:id');
    return attribute.access.read && attributesKey.push(attribute.name);
  });

  const allowedRoutes = [];
  children.forEach((child) =>
    !child.validateRole || attributesKey.includes(child.key)
      ? allowedRoutes.push({ ...child, isValidRole: true })
      : allowedRoutes.push({ ...child, isValidRole: false })
  );

  return { ...routes, children: allowedRoutes };
}

export function checkModuleAccess(attributeName, accessType, userRole) {
  return (
    userRole === null ||
    !isEmpty(find(userRole.attributes, (attribute) => attribute.name === attributeName && attribute.access[accessType]))
  );
}
