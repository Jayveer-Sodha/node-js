<<<<<<< HEAD
import express from "express";
=======
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
export const successMessages = {
  Login: "Successfully logged in",
  Logout: "Successfully logout user",
  Register: "Successfully register new user",
  ForgotPassword:
    "Successfully Sent Reset Link to User Please check your mail! ",
  ResetPassword: "Your Password Successfully Updated !",
  Create: "Successfully Created !",
  Update: "Successfully Updated !",
  Delete: "Successfully Deleted !",
  profileSaved: "Profile updated successfully",
  Fetch: "Success!",
<<<<<<< HEAD
=======
  noMessage: "",
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
};

export const errorMessages = {
  missingParameter:
    "There are one or more parameters missing in the supplied request",
  duplicateUser: " Duplicate user in database",
  dbOperationError: "Database operation error",
  unverifiedUser: "Unverified User",
  invalidPassword: "Passwords do not match",
  internalServer: "Internal server error",
  accessTokenRequire: "Require Access Token",
<<<<<<< HEAD
  accesstokenInvalid: "Access token invalid",
=======
  accessTokenInvalid: "Access token invalid",
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
  accessTokenExpire: "Access token expired",
  noRole: "No role available",
  noEmailFound: "Email address not found",
  invalidRole: "You do not have Access permission",
  noError: "",
<<<<<<< HEAD
};
=======
  userExists: "User already exists",
  ParanoidUser: "User found in paranoid mode",
};

export const codes = {
  OK: 200,
  EntryCreated: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  ResourceNotFound: 404,
  MethodNotAllowed: 405,
  Conflict: 409,
  TokenInvalid: 412,
  InternalServer: 500,
  Invalid: 402,
  NotActive: 406,
  S3Bucket: 408,
  DBOperation: 410,
};
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
