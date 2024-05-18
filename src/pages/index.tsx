import React, { useEffect, useState } from "react";
import { TextBold } from "@/components/TextBold";
import { SelectLicenseBox } from "@/components/SelectLicenseBox";
import { Lesson, LicenseGroup } from "@/model/selectLesson";
import { useGoNext } from "@/hooks/use-go-next";
import {
  INITIAL_LICENSE_GROUP,
  INITIAL_LICENSE_SELECTED,
  INITIAL_Final_Selected,
} from "@/constants";
import {
  addCommaToPrice,
  convertLicenseTypeEngToKr,
  getLicenseGroup,
  getLicenseNameStr,
} from "@/utils";

const SelectLesson = () => {
  const [licenseGroup, setLicenseGroup] = useState<LicenseGroup>(
    INITIAL_LICENSE_GROUP
  );
  const [licenseSelected, setLicenseSelected] = useState<(string | Lesson[])[]>(
    INITIAL_LICENSE_SELECTED
  );
  const [finalSelected, setFinalSelected] = useState<Lesson>(
    INITIAL_Final_Selected
  );

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
                      setFinalSelected(
                        value.length === 1 ? value[0] : INITIAL_Final_Selected
                      );
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
                  let isSelected = v.name === finalSelected.name;
                  return (
                    <SelectLicenseBox
                      isSelected={isSelected}
                      text={getLicenseNameStr(v.name)}
                      onClick={() => {
                        setFinalSelected(v);
                      }}
                      key={`finalSelected${idx}`}
                    />
                  );
                })}
              </div>
            </section>
          ) : null}
        </section>
        <section className="flex justify-between items-center px-[10px] shadow-[0_-5px_20px_0_rgba(0,0,0,0.3)]">
          <div className=" w-fit">
            <div className="font-bold text-gray-500">{finalSelected.name}</div>
            <TextBold
              text={`${addCommaToPrice(finalSelected.price)} 원`}
              size="15px"
            />
          </div>
          <button
            className="bg-yellow-300 hover:bg-opacity-50 cursor-pointer w-[80px] h-[40px] disabled:bg-gray-400 disabled:text-gray-600"
            disabled={!finalSelected.name.length || !licenseSelected.length}
            onClick={() => {
              goNext(finalSelected);
              console.log("final data: ", finalSelected);
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
