import React, {useContext} from 'react';
import UserContext from "./UserContext";
import AppTheme from "./AppTheme";
const Main = () => {
  const userInfo = useContext(UserContext);

  return(
      <div>
        <h1>{document.cookie.accessToken}</h1>
        <h1>{userInfo.userID}</h1>  
        <h1>{userInfo.accessToken}</h1>  
      </div>
  );
}

export default Main;