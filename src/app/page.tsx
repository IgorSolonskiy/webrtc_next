import Image from "next/image";

import { HeroBlock } from "@/widgets/home";
import { AuthHeader } from "@/widgets/header";
import { JoinMeeting, NewMeeting } from "@/widgets/meet";

export default function Home() {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-1 items-center justify-center">
        <section className="grid grid-cols-2 gap-4 max-w-7xl">
          <div className="flex flex-col items-start">
            <HeroBlock />
            <div className="flex gap-10 mt-10">
              <NewMeeting />
              <JoinMeeting />
            </div>
          </div>
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
