import React, { useEffect, useState } from "react";
import { TextBold } from "../components/TextBold";
import { SelectLicenseBox } from "@/components/SelectLicenseBox";
import { Lesson, LicenseGroup } from "@/model/selectLesson";
import { useGoNext } from "@/hooks/use-go-next";
import {
  initialLicenseGroup,
  initialLicenseSelected,
  initialLicenseHave,
} from "../constants";
import {
  addCommaToPrice,
  convertLicenseTypeEngToKr,
  getLicenseGroup,
  getLicenseNameStr,
} from "@/utils";

const SelectLesson = () => {
  const [licenseGroup, setLicenseGroup] =
    useState<LicenseGroup>(initialLicenseGroup);
  const [licenseSelected, setLicenseSelected] = useState<(string | Lesson[])[]>(
    initialLicenseSelected
  );
  const [licenseHave, setLicenseHave] = useState<Lesson>(initialLicenseHave);

  const goNext = useGoNext();

  useEffect(() => {
    // fetch lesson data from API
    (async () => {
      const Resp = await fetch("/api/get-lesson");
      const fetchedData: Lesson[] = await Resp.json();
      const licenseGroupResp = getLicenseGroup(fetchedData);
      setLicenseGroup(licenseGroupResp);
    })();
  }, []);

  return (
    <div className="flex justify-center">
      <main className="flex flex-col justify-between border w-[400px] h-[600px] border-black">
        <section className="px-[10px] flex flex-col flex-1 gap-[30px]">
          <TextBold text="수업을 선택해주세요." size="30px" />
          <section className="flex flex-col gap-[15px]">
            <TextBold text="면허 종류" size="20px" />
            <div className="flex flex-wrap gap-[10px]">
              {Object.entries(licenseGroup).map(([key, value], idx) => {
                let isSelected = key === licenseSelected[0];
                return (
                  <SelectLicenseBox
                    isSelected={isSelected}
                    text={convertLicenseTypeEngToKr(key)}
                    onClick={() => {
                      setLicenseSelected([key, value]);
                      setLicenseHave(
                        value.length === 1 ? value[0] : initialLicenseHave
                      );
                      console.log("selected", key, value);
                    }}
                    key={`licenseType${idx}`}
                  />
                );
              })}
            </div>
          </section>
          {licenseSelected[1].length > 1 ? (
            <section className="flex flex-col gap-[15px]">
              <TextBold text="면허 보유 여부" size="20px" />
              <div className="flex flex-wrap gap-[10px]">
                {Object.values(licenseSelected[1]).map((v, idx) => {
                  // console.log(v);
                  let isSelected = v.name === licenseHave.name;
                  return (
                    <SelectLicenseBox
                      isSelected={isSelected}
                      text={getLicenseNameStr(v.name)}
                      onClick={() => {
                        setLicenseHave(v);
                        console.log("licenseHave", v);
                      }}
                      key={`licenseHave${idx}`}
                    />
                  );
                })}
              </div>
            </section>
          ) : null}
        </section>
        <section className="flex justify-between items-center px-[10px] shadow-[0_-5px_20px_0_rgba(0,0,0,0.3)]">
          <div className=" w-fit">
            <div className="font-bold text-gray-500">{licenseHave.name}</div>
            <TextBold
              text={`${addCommaToPrice(licenseHave.price)} 원`}
              size="15px"
            />
          </div>
          <button
            className="bg-yellow-300 hover:bg-opacity-50 cursor-pointer w-[80px] h-[40px] disabled:bg-gray-400 disabled:text-gray-600"
            disabled={!licenseHave.name.length || !licenseSelected.length}
            onClick={() => {
              console.log("click next!", licenseHave);
              goNext(licenseHave);
            }}
          >
            <TextBold text="다음" size="15px" />
          </button>
        </section>
      </main>
    </div>
  );
};

export default SelectLesson;
