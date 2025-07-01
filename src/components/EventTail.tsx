"use client";
import { Edit, Trash2, Check } from "lucide-react";

const EventTail = () => {
  const speakers = [
    { id: 1, name: "Speaker name A", avatar: "👨‍💼", color: "bg-yellow-200" },
    { id: 2, name: "Speaker name B", avatar: "👨‍🦲", color: "bg-orange-200" },
    { id: 3, name: "Speaker name C", avatar: "👩‍💼", color: "bg-blue-200" },
  ];

  return (
    <div className="h-auto  flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-sm mx-auto">
        <div className="p-6">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Event Name</h1>
            <p className="text-gray-500 text-sm mt-1">Event Date</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              Event Description
            </p>
          </div>

          {/* Speakers Section */}
          <div className="mb-8 space-y-4">
            {/* Speaker Avatars */}
            <div className="flex items-center space-x-2">
              {speakers.map((speaker) => (
                <div
                  key={speaker.id}
                  className={`w-12 h-12 rounded-full ${speaker.color} flex items-center justify-center text-lg border-2 border-white shadow-sm`}
                  title={speaker.name}
                >
                  {speaker.avatar}
                </div>
              ))}
            </div>

            {/* Speaker Info */}
            <div className="text-gray-700">
              <p className="text-sm font-medium">
                3 Guest Speakers: Speaker name A, Speaker name B, Speaker name
                C.
              </p>
              <p className="text-sm font-medium mt-1">300 Attendees</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => console.log("Tail: Edit")}
            >
              <Edit className="w-4 h-4 text-gray-600" />
              <span className="text-gray-700 font-medium">Edit</span>
            </button>

            <button
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              onClick={() => console.log("Tail: Delete")}
            >
              <Trash2 className="w-4 h-4" />
              <span className="font-medium">Delete</span>
            </button>

            <button
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => console.log("Tail: Mark as completed")}
            >
              <Check className="w-4 h-4" />
              <span className="font-medium">Mark as completed</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTail;
