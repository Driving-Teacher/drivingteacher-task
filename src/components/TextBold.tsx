type Props = {
  text: string;
  size: string;
};
type FontSizeVariantsType = {
  "15px": string;
  "20px": string;
  "30px": string;
  [key: string]: string;
};
export const TextBold = ({ text, size }: Props) => {
  const fontSizeVariants: FontSizeVariantsType = {
    "15px": "text-[15px]",
    "20px": "text-[20px]",
    "30px": "text-[30px]",
  };
  return <div className={`${fontSizeVariants[size]} font-bold`}>{text}</div>;
};
