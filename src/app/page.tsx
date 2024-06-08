import Image from "next/image";

import { HeroBlock } from "@/widgets/home";
import { Header } from "@/widgets/header";
import { homeNavigation } from "@/shared/constants";

export default function Home() {
  return (
    <>
      <Header navigations={homeNavigation} />
      <main className="flex flex-1 items-center justify-center">
        <section className="grid grid-cols-2 gap-4 max-w-7xl">
          <HeroBlock />
          <div className="flex items-center justify-end">
            <Image
              width={600}
              height={600}
              src="/meeting.svg"
              alt="Meet your friends"
            />
          </div>
        </section>
      </main>
    </>
  );
}
