import Image from "next/image";

export default function Home() {
  return (
      <main className="flex flex-1 items-center justify-center">
          <section className="grid grid-cols-2 gap-4 max-w-7xl">
              <div className="flex flex-col items-start">
                  <h1>Video calls and meeting for everyone</h1>
                  <p className="mt-2">
                      WEBRTC provides video calling for collaboration and fun - no mater where you are.
                  </p>
              </div>
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
  );
}
