interface Props {
  htmlFor: string;
}

export const Label = ({ htmlFor }: Props) => {
  return (
    <label className="text-lg cursor-pointer" htmlFor={htmlFor}>
      Join the meeting
    </label>
  );
};
