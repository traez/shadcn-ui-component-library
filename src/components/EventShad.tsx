"use client";
import { Edit, Trash2, Check } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const EventShad = () => {
  const speakers = [
    {
      id: 1,
      name: "Speaker name A",
      avatar: "👨‍💼",
      image: "avatar-man.jpg",
      color: "bg-yellow-200",
    },
    {
      id: 2,
      name: "Speaker name B",
      avatar: "👨‍🦲",
      image: "avatar-rage.jpg",
      color: "bg-orange-200",
    },
    {
      id: 3,
      name: "Speaker name C",
      avatar: "👩‍💼",
      image: "avatar-teen.jpg",
      color: "bg-blue-200",
    },
  ];

  const handleButtonClick = (buttonText: string) => {
    console.log(`shad: ${buttonText}`);
  };

  return (
    <div className="p-4 h-auto flex items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-2xl font-bold text-gray-900">
            Event Name
          </CardTitle>
          <CardDescription className="text-gray-500 text-sm">
            Event Date
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Event Description
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {speakers.map((speaker) => (
                <Avatar
                  key={speaker.id}
                  className={`w-12 h-12 border-2 border-white shadow-sm ${speaker.color}`}
                >
                  <AvatarImage src={speaker.image} alt={speaker.name} />
                  <AvatarFallback className={`${speaker.color} text-lg`}>
                    {speaker.avatar}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
            <div className="text-gray-700">
              <p className="text-sm font-medium">
                3 Guest Speakers: Speaker name A, Speaker name B, Speaker name
                C.
              </p>
              <p className="text-sm font-medium mt-1">300 Attendees</p>
            </div>
          </div>
          <div className="space-y-3 pt-4">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center space-x-2 py-3 bg-transparent cursor-pointer"
              onClick={() => handleButtonClick("Edit")}
            >
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </Button>
            <Button
              variant="destructive"
              className="w-full flex items-center justify-center space-x-2 py-3 cursor-pointer"
              onClick={() => handleButtonClick("Delete")}
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </Button>
            <Button
              className="w-full flex items-center justify-center space-x-2 py-3 bg-green-600 hover:bg-green-700 cursor-pointer"
              onClick={() => handleButtonClick("Mark as completed")}
            >
              <Check className="w-4 h-4" />
              <span>Mark as completed</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EventShad;
