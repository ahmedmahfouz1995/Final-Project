"use strict";

var _require = require("../middlewear/authen"),
    roles = _require.roles;

var endPoint = {
  "class": {
    addClass: [roles.Teacher, roles.Admin]
  },
  admin: {
    getAllAdmins: [roles.Admin],
    editAdmin: [roles.Admin],
    deleteAdmin: [roles.Admin]
  },
  teacher: {
    getByStdentByTeacher: [roles.Teacher],
    editByStdentByTeacher: [roles.Teacher],
    deleteStdentByTeacher: [roles.Teacher]
  }
};
module.exports = {
  endPoint: endPoint
};