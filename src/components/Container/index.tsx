import type { PropsWithChildren } from "react";

// Контейнер

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-(--my-max-width) mx-auto px-2">{children}</div>;
};
