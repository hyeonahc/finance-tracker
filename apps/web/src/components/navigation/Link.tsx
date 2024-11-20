import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";
import React from "react";
import { LinkProps as RouterLinkProps } from "react-router-dom";

import { LinkBehavior } from "./LinkBehaviour";

export type LinkProps = MuiLinkProps & Omit<RouterLinkProps, "to">;

export const Link: React.FC<LinkProps> = (props) => (
  <MuiLink component={LinkBehavior} {...props} />
);
