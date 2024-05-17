import { Button } from "@/components/shared/custom/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CirclePlus, Image, TextCursor } from "lucide-react";
import { useParams } from "react-router-dom";

const PageContent = () => {
  const { title } = useParams();
  return (
    <div className="flex justify-start mt-16 h-screen">
      {/* {title} */}
      {false ? (
        <div className="flex flex-1 justify-center items-center flex-col">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="sm">
                <CirclePlus className="mr-2 h-4 w-4" />
                Add Row
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <TextCursor className="mr-2 h-4 w-4" />
                Text
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Image className="mr-2 h-4 w-4" />
                Image
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div>blocks exist</div>
      )}
    </div>
  );
};

export default PageContent;
