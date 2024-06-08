import { Button, TextField, Label } from "@/shared/ui";

export const JoinMeeting = () => {
  return (
    <form className="flex flex-col mt-4 gap-2" action="src/features/meeting/ui">
      <Label htmlFor="room" />
      <TextField id="room" />
      <Button variant="button" text="Join" />
    </form>
  );
};