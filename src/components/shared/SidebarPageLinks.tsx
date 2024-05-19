import { Link } from "react-router-dom";
import { Button, buttonVariants } from "./custom/Button";

import { cn, getCurrentUnixTimestamp } from "@/lib/utils";
import useCheckActiveNav from "@/hooks/useCheckActiveNav";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "../ui/tooltip";
import { INavLink } from "@/types";
import { IconCirclePlus, IconNotebook } from "@tabler/icons-react";
import { Dispatch, SetStateAction } from "react";

interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed: boolean;
  links: INavLink[];
  closeNav: () => void;
  className: string;
  setSidelinks: Dispatch<() => INavLink[]>;
  sidelinks: [];
}

export default function SidebarPageLinks({
  links,
  isCollapsed,
  className,
  closeNav,
  setSidelinks,
  sidelinks,
}: NavProps) {
  const renderLink = ({ ...rest }: INavLink) => {
    const key = `${Math.abs(Math.random() * 0.5 * 10000)}`;

    if (isCollapsed)
      return <NavLinkIcon {...rest} key={key} closeNav={closeNav} />;

    return <NavLink {...rest} key={key} closeNav={closeNav} />;
  };
  return (
    <div
      data-collapsed={isCollapsed}
      className={cn(
        "group border-b bg-background py-2 transition-[max-height,padding] duration-500 data-[collapsed=true]:py-2 md:border-none",
        className
      )}
    >
      <TooltipProvider delayDuration={0}>
        <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
          {links.map(renderLink)}
          <Button
            className={cn(
              buttonVariants({
                variant: "default",
                size: "sm",
              }),
              "h-8 justify-center rounded-none text-wrap px-1 my-1"
            )}
            onClick={() =>
              setSidelinks(() => {
                const href = "/new-page-" + getCurrentUnixTimestamp();

                return [
                  ...sidelinks,
                  {
                    title: "New Page",
                    label: "",
                    href: href,
                    icon: <IconNotebook size={18} />,
                  },
                ];
              })
            }
          >
            <div>
              <IconCirclePlus
                stroke={1.5}
                className={`h-5 w-5 ${isCollapsed ? "rotate-180" : ""}`}
              />
            </div>
            {!isCollapsed && <span className='mx-2'>Add New Page</span>}
          </Button>
        </nav>
      </TooltipProvider>
    </div>
  );
}

interface NavLinkProps extends INavLink {
  closeNav: () => void;
}

function NavLink({ title, icon, label, href, closeNav }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const pageLink = "/page" + href;
  return (
    <Link
      to={pageLink}
      onClick={closeNav}
      className={cn(
        buttonVariants({
          variant: checkActiveNav(href) ? "secondary" : "ghost",
          size: "sm",
        }),
        "h-8 justify-start text-wrap rounded-none px-6"
      )}
      aria-current={checkActiveNav(href) ? "page" : undefined}
    >
      <div className='mr-2'>{icon}</div>
      {title}
      {label && (
        <div className='ml-2 rounded-lg bg-primary px-1 text-[0.625rem] text-primary-foreground'>
          {label}
        </div>
      )}
    </Link>
  );
}

function NavLinkIcon({ title, icon, label, href }: NavLinkProps) {
  const { checkActiveNav } = useCheckActiveNav();
  const pageLink = "/page" + href;
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          to={pageLink}
          className={cn(
            buttonVariants({
              variant: checkActiveNav(href) ? "secondary" : "ghost",
              size: "icon",
            }),
            "h-8 w-8"
          )}
        >
          {icon}
          <span className='sr-only'>{title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side='right' className='flex items-center gap-4'>
        {title}
        {label && (
          <span className='ml-auto text-muted-foreground'>{label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  );
}
