import { Button, TextField } from "@/shared/ui";

export const JoinMeeting = () => {
  return (
    <form className="flex gap-3">
      <TextField id="meet" placeholder="Enter meeting code" />
      <Button text="Join" />
    </form>
  );
};
