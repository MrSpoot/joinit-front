import * as React from "react";

import { cn } from "@/lib/utils";

type InputProps = React.ComponentProps<"input"> & {
  icon?: React.ReactNode;
  position?: "start" | "end";
  separator?: boolean;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, position, separator, ...props }, ref) => {
    return (
      <div className="relative w-full">
        {icon && (
          <div
            className={cn("absolute top-1/2 -translate-y-1/2 transform px-1", {
              "border-r-2": separator && position === "start",
              "left-1.5": position === "start",
              "border-l-2": separator && position === "end",
              "right-4": position === "end",
            })}
          >
            {icon}
          </div>
        )}

        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-full border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50",
            { "pl-8": position === "start" && icon },
            { "pl-10": position === "start" && separator },
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
