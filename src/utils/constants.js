const Constants = {
  MEMBER: {
    SUPER_ADMIN: "Super Admin",
  },
  GENDER_TYPES: {
    MALE: "Male",
    FEMALE: "Female",
  },
  PLAN: {
    TYPES: {
      MONTHLY: "Monthly",
      YEARLY: "Yearly",
    },
  },
  GOAL: {
    CATEGORIES: {
      ESTABLISH_RESIDENCY: "Establish Residency",
      VISA_DURATION: "Visa Duration",
      CUSTOM_GOAL: "Custom Goal",
    },
    TYPES: {
      ACHIEVE: "ACHIEVE",
      AVOID: "AVOID",
    },
    STATUS: {
      IN_PROGRESS: "In progress",
      COMPLETED: "Completed",
      INCOMPLETE: "Incomplete",
      DELETED: "Deleted",
      AT_RISK: "At risk",
      ARCHIVED: "Archived",
    },
  },
  SUBSCRIPTION: {
    PLATFORM: {
      ANDROID: "Android",
      IOS: "Ios",
    },
    STATUS: {
      PAID: "Paid",
      CANCELLED: "Cancelled",
    },
  },
  ADMIN_ROLES: {
    SECTIONS: {
      TEST: "test", // update sections list
    },
    PERMISSIONS: {
      CREATE: "CREATE",
      READ: "READ",
      UPDATE: "UPDATE",
      DELETE: "DELETE",
      LIST: "LIST",
    },
  },
  VERIFICATION_TYPES: {
    EMAIL: "EMAIL",
    MOBILE: "MOBILE",
  },
  USER_ADDRESS_TYPES: {
    PRIMARY: "PRIMARY",
    SECONDARY: "SECONDARY",
  },
  LOCATION: {
    TYPES: {
      COUNTRY: "COUNTRY",
      STATE: "STATE",
      CITY: "CITY",
    },
    TRACKING: {
      TYPES: {
        MANUAL: "MANUAL",
        PASSIVE: "PASSIVE",
      },
    },
  },
  ROLE_ATTRIBUTES: {
    DASHBOARD: "dashboard",
    USER: "users",
    GOAL: "goals",
    TEAM: "team",
    ROLE: "roles",
    SETTING: "settings",
    NOTIFICATION: "notifications",
  },
  ROLE_ACCESS_TYPES: {
    CREATE: "create",
    READ: "read",
    UPDATE: "update",
    DELETE: "delete",
    DETAIL: "details",
  },
  DISTANCE_FORMAT: {
    MILES: "Miles",
    KILOMETERS: "Kilometers",
  },
  DATE_FORMAT: {
    MMDDYYYY: "MM/DD/YYYY",
    DDMMYYY: "DD/MM/YYYY",
  },
  PLATFORM_TYPE: {
    WEB: "WEB",
    MOBILE: "MOBILE",
  },
};

export default Constants;
