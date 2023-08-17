import React from 'react';
import { Outlet } from 'react-router-dom';
const Root = () => {
  return (
    <div style={{color:"red"}}>
      <h1>Hello World</h1>
        <Outlet />
    </div>
  );
}

export default Root;
