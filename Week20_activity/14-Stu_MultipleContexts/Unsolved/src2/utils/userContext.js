import React from "react";

const UserContext = React.createContext({
  login: "",
  image: "",
  handleBtnClick: () => {}
});

export default UserContext;
