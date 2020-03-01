import React from "react";

const UserContext = React.createContext({
  userID: null,
  accessToken: null,
});
export default UserContext;