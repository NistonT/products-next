import type { PropsWithChildren } from "react";

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-(--my-max-width) mx-auto px-2">{children}</div>;
};
