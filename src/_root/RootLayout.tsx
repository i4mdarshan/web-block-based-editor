import Sidebar from "@/components/shared/Sidebar";
import useIsCollapsed from "@/hooks/useIsCollapsed";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  return (
    <div className='w-full md:flex'>
      <section className='flex flex-1 h-full'>
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        <Outlet />
      </section>
    </div>
  );
};

export default RootLayout;
