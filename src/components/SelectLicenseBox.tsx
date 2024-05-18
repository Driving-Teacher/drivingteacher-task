import React from "react";
import { TextBold } from "../components/TextBold";

type Props = {
  isSelected: boolean;
  text: string;
  onClick(): void;
};
export const SelectLicenseBox = ({ isSelected, text, onClick }: Props) => {
  return (
    <div
      className={`w-[180px] border ${
        isSelected ? "border-yellow-500 bg-yellow-100" : ""
      } font-bold flex justify-center items-center h-[50px] rounded-lg hover:cursor-pointer`}
      onClick={onClick}
    >
      <TextBold text={text} size="15px" />
    </div>
  );
};
