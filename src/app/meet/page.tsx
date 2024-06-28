import Image from "next/image";

import { HeroBlock } from "@/widgets/meet";

export default function Meet() {
  return (
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
  );
}
