import { SlideFade } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{}>;
const PageTransition = ({ children }: Props) => {
  return <SlideFade in>{children}</SlideFade>;
};

export default PageTransition;
