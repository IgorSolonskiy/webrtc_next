import Image from "next/image";

import { HeroBlock } from "@/widgets/home";
import { AuthHeader } from "@/widgets/header";
import { JoinMeeting, NewMeeting } from "@/widgets/meet";

export default function Home() {
  return (
    <>
      <AuthHeader />
      <main className="flex flex-1 justify-center items-center gap-20">
        <section className="flex flex-col items-start max-w-lg">
          <HeroBlock />
          <div className="flex gap-10 mt-10">
            <NewMeeting />
            <JoinMeeting />
          </div>
        </section>
        <section className="flex items-center justify-end max-w-lg">
          <Image
            width={600}
            height={600}
            src="/meetTeam.svg"
            alt="Meet your friends"
          />
        </section>
      </main>
    </>
  );
}
