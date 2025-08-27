import type { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-(--my-max-width) mx-auto">{children}</div>;
};
