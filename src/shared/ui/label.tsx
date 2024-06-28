interface Props {
  htmlFor: string;
  text: string;
}

export const Label = ({ htmlFor, text }: Props) => {
  return (
    <label className="text-lg cursor-pointer" htmlFor={htmlFor}>
      {text}
    </label>
  );
};
