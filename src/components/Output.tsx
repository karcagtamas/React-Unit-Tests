import { ReactNode } from "react";

const Output = (props: { children: ReactNode }) => {
  return <p>{props.children}</p>;
};

export default Output;
