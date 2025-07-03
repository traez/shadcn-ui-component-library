import EventShad from "@/components/EventShad";
import EventTail from "@/components/EventTail";

const Event = () => {
  return (
    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 min-h-[calc(100vh-102px)] w-full">
      <article className="bg-red-200 h-full w-full ">
        <EventShad />
      </article>
      <article className="bg-blue-200 h-full w-full ">
        <EventTail />
      </article>
    </div>
  );
};

export default Event;
