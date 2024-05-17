import cn from "classnames";
import type { PropsWithChildren } from "react";

export const GlobalLayout = ({ children}: PropsWithChildren) => {
  return (
    <div className={cn('pt-[72px] pb-[180px]')}>
      {children}
    </div>
  )
}