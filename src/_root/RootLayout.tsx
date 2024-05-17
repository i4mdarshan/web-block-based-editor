import Sidebar from "@/components/shared/Sidebar";
import useIsCollapsed from "@/hooks/useIsCollapsed";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  return (
    <>
      <div className='relative h-full overflow-hidden bg-background'>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <main
          id='content'
          className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
        >
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
