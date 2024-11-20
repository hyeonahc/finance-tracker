import React from "react";
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from "react-router-dom";

export type LinkBehaviourProps = { href: RouterLinkProps["to"] } & Omit<
  RouterLinkProps,
  "to"
>;

export const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  LinkBehaviourProps
>((props, ref) => {
  const { href, ...other } = props;

  // Map href (Material UI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />;
});
