import { LogOut, Settings } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { signOutAccount } from "@/lib/appwrite/api";

const Topbar = () => {
  const { user } = useUserContext();

  const navigate = useNavigate();

  const handleSignOut = async () => {
    const signOut = await signOutAccount();

    if (signOut) {
      navigate(0);
    }
  };
  return (
    <>
      <div className='relative'>
        <header className='fixed top-0 left-0 right-0 z-30 h-14 px-4 flex items-center justify-end gap-4 border-b bg-background'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='outline'
                size='icon'
                className='overflow-hidden rounded-full'
              >
                <img
                  src={user.imageURL || "/assets/icons/profile-placeholder.svg"}
                  width={36}
                  height={36}
                  alt='Avatar'
                  className='overflow-hidden rounded-full'
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
              <DropdownMenuLabel>
                <span className='text-sm'>
                  {user.username ? "@" + user.username : ""}
                </span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Settings className='mr-2 h-4 w-4' />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleSignOut}>
                <LogOut className='mr-2 h-4 w-4' />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
      </div>
    </>
  );
};

export default Topbar;
