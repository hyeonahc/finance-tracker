import { ReactNode } from "react";

import MuiProvider from "./MuiProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return <MuiProvider>{children}</MuiProvider>;
};

export default Providers;
