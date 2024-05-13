import { Button } from "@/components/ui/button";
import { signOutAccount } from "@/lib/appwrite/api";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    console.log("Clicked logout");
    const signOut = await signOutAccount();

    if (signOut) {
      navigate(0);
    }
  };

  return (
    <div>
      <Button type='button' onClick={handleSignOut}>
        Sign Out  
      </Button>
    </div>
  );
};

export default Home;
