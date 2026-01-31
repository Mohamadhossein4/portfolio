import React, { PropsWithoutRef } from "react";

export function cn<T extends string | undefined | null | false>(
  ...classes: T[]
): string {
  return classes.filter(Boolean).join(" ");
}

export function forwardRefWithName<T, P extends object>(
  render: (
    props: PropsWithoutRef<P>,
    ref: React.Ref<T>
  ) => React.ReactElement | null,
  name: string
) {
  const Component = React.forwardRef<T, P>((props, ref) => render(props, ref));
  Component.displayName = name;
  return Component;
}
