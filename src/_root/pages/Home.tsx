import { Button } from "@/components/ui/button";

const Home = () => {
  const handleSignOut = () => {
    console.log("Clicked logout");
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
