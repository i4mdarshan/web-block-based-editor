import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import useIsCollapsed from "@/hooks/useIsCollapsed";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  return (
    <>
      <div className='flex min-h-screen w-full flex-col bg-muted/40'>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
        <div className={`flex flex-col sm:gap-4 sm:py-4 sm:pl-14 md:overflow-y-hidden md:pt-0 transition-[margin] ${isCollapsed ? 'md:ml-0' : 'md:ml-52'}`}>
          <Topbar />
          <main
            id='content'
            className={`grid flex-1 items-start sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-1 xl:grid-cols-1 pt-14`}
          >
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
};

export default RootLayout;
