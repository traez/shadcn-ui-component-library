import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-auto bg-gray-100">
      <section className="flex flex-col justify-start items-center py-2 px-8 w-full max-w-[1440px] min-h-[calc(100vh-88px)] mx-auto">
        <div>
          <Button>
            <CirclePlus className="" /> Click me
          </Button>
        </div>
      </section>
    </div>
  );
}
