/** @format */

import React from "react";

const UserComponent = ({ id, name }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        marginBottom: 5,
        marginTop: 5,
      }}
    >
        
      {name}
    </div>
  );
};

export default UserComponent;
