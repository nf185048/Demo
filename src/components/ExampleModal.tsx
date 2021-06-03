import React from "react";
import { Modal } from "@ncr-design-system/react";

import type { FC } from "react";

export const ExampleModal: FC<{}> = ({ children }) => {
  return <Modal>{children}</Modal>;
};
