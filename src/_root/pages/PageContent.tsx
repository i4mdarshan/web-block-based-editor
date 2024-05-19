import { useState } from "react";
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
import pageBlocks from "./../../data/Blocks.json";

const PageContent = () => {
  const { title } = useParams();
  const [blocks, setBlocks] = useState(pageBlocks);
  return (
    <div className='flex flex-col sm:gap-4 sm:py-4 h-svh'>
      {/* {title} */}
      {blocks ? (
        <div className='flex flex-1 justify-center items-center flex-col'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size='sm'>
                <CirclePlus className='mr-2 h-4 w-4' />
                Add Block
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <TextCursor className='mr-2 h-4 w-4' />
                <span>Text</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Image className='mr-2 h-4 w-4' />
                <span>Image</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        pageBlocks.map((block) => {
          return <div>{block} blocks exist</div>;
        })
      )}
    </div>
  );
};

export default PageContent;
