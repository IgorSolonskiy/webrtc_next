import { JoinMeeting, NewMeeting } from "@/features/meet";

export const HeroBlock = () => {
  return (
    <div className="flex flex-col items-start">
      <h1>Video calls and meeting for everyone</h1>
      <p className="mt-4">
        WEBRTC provides video calling for collaboration and fun - no mater where
        you are.
      </p>
      <div className="flex gap-10 mt-10">
        <NewMeeting />
        <JoinMeeting />
      </div>
    </div>
  );
};
