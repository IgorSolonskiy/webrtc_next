import Image from "next/image";

import { HeroBlock } from "@/widgets/home";
import { AuthHeader } from "@/widgets/header";

export default function Home() {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-1 items-center justify-center">
        <section className="grid grid-cols-2 gap-4 max-w-7xl">
          <HeroBlock />
          <div className="flex items-center justify-end">
            <Image
              width={600}
              height={600}
              src="/meetTeam.svg"
              alt="Meet your friends"
            />
          </div>
        </section>
      </main>
    </>
  );
}
