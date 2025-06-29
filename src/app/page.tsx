import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-auto bg-gray-100">
      <section className="flex flex-col justify-start items-center py-2 px-8 w-full max-w-[1440px] min-h-[calc(100vh-82.96px)] mx-auto">
        <div>
          <Button>
            <CirclePlus className="" /> Click me
          </Button>
        </div>
        {/* Navbar */}
        <nav className="bg-white shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-blue-600">Logo</div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Features
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Pricing
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Contact
              </a>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </nav>
      </section>
    </div>
  );
}
