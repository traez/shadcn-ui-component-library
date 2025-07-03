import EventShad from "@/components/EventShad";
import SolarLanding from "@/components/SolarLanding";

export default function Home() {
  return (
    <div className="w-full h-auto bg-gray-200">
      <section className="flex flex-col justify-start items-center w-full max-w-[1440px] min-h-[calc(100vh-102px)] mx-auto">
        <EventShad />
        <SolarLanding />
      </section>
    </div>
  );
}
