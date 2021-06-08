import React from "react";
import type { FC } from "react";

export const AppClones: FC<{}> = ({ children }) => {
  return (
    <div>
      <p>App Clones</p>
      {children}
    </div>
  );
};
