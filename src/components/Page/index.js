import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Container } from "react-bootstrap";

const Page = forwardRef(({ children, title = '', containerFluid, padding, className, ...rest }, ref) => (
  <main ref={ref} {...rest}>
    <Helmet>
      <title>{title}{process.env.REACT_APP_SITE_NAME ? ` | ${process.env.REACT_APP_SITE_NAME}` : ''}</title>
    </Helmet>
    <Container fluid={containerFluid} className={`${padding ? 'ps-0 pe-4' : 'p-0'} ${className}`}>
      {children}
    </Container>
  </main>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  containerFluid: PropTypes.bool,
  padding: PropTypes.bool,
  className: PropTypes.string
};

Page.defaultProps = {
  containerFluid: false,
  padding: true,
  className: ""
}

export default Page;