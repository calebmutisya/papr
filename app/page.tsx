import Image from "next/image";
import TopCard from "@/components/ui/TopCard";
import SideCard from "@/components/ui/SideCard";

export default function Home() {
  return (
    <div className="container">
      {/* Hero */}
      <section className="pt-[15px] pb-[30px] lg:pt-[60px] flex flex-col lg:flex-row justify-between ">
        <TopCard />
        <div className="mt-[30px] lg:mt-0">
          <h2 className="mb-[30px] w-fit">Recent News</h2>
          <SideCard/>
        </div>
      </section>
      {/* Top Stories */}
      <section>

      </section>
    </div>
  );
}
