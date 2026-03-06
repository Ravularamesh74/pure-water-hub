import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type NavLinkCompatProps = NavLinkProps & {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  exact?: boolean;
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName = "text-primary font-semibold",
      pendingClassName = "opacity-60",
      exact,
      to,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        end={exact}
        className={({ isActive, isPending }) =>
          cn(
            "transition-colors duration-200",
            className,
            isActive && activeClassName,
            isPending && pendingClassName
          )
        }
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };