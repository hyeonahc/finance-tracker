import { ReactNode } from "react";

import MuiProvider from "./MuiProvider";
import { QueryClientProvider } from "./QueryClientProvider";

type Props = {
  children: ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider>
      <MuiProvider>{children}</MuiProvider>
    </QueryClientProvider>
  );
};

export default Providers;
