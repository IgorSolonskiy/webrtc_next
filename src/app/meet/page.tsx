import Image from "next/image";

import { HeroBlock, JoinMeeting } from "@/widgets/meet";

export default function Meet() {
  return (
    <>
      <section className="flex flex-col items-start max-w-xl">
        <HeroBlock />
        <JoinMeeting />
      </section>
      <section className="flex items-center justify-end max-w-lg">
        <Image
          width={600}
          height={600}
          src="/meeting.svg"
          alt="Meet your friends"
        />
      </section>
    </>
  );
}
