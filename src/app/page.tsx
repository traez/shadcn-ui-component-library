import Event from "@/components/Event";

export default function Home() {
  return (
    <div className="w-full h-auto bg-gray-200">
      <section className="flex flex-col justify-start items-center w-full max-w-[1440px] min-h-[calc(100vh-88px)] mx-auto">
        <Event />
      </section>
    </div>
  );
}
