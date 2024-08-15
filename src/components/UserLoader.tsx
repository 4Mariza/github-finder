import React from "react";
import classes from "./UserLoader.module.css"; // Assuming UserLoader.module.css is defined elsewhere

const UserLoader: React.FC = () => {
  return (
    <div className={classes.loader}>
      <div className={classes.spinner} />
      <p>Carregando...</p>
    </div>
  );
};

export default UserLoader;