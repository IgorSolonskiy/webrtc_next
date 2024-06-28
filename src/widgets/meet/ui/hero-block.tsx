import { JoinMeeting } from "@/features/meet";

export const HeroBlock = () => {
  return (
    <div className="flex flex-col items-start">
      <h1>Take part in video meetings wherever you are</h1>
      <p className="mt-2 mb-4">
        Stay connected and communicate with friends, family and colleagues from
        anywhere in the world.
      </p>
      <JoinMeeting />
    </div>
  );
};
