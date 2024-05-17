import { useEffect, useState } from "react";
import { TextBold } from "../components/TextBold";

const SelectLesson = () => {
  const [licenseSelected, setLicenseSelected] = useState("");
  const [licenseHave, setLicenseHave] = useState("");

  useEffect(() => {
    // fetch lesson data from API
    (async () => {
      const Resp = await fetch("/api/get-lesson");
      const fetchedData = await Resp.json();
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
              {["1", "2", "3", "4"].map((v, idx) => {
                let isSelected = v === licenseSelected;
                return (
                  <div
                    className={`w-[180px] border ${
                      isSelected ? "border-yellow-500 bg-yellow-100" : ""
                    } font-bold flex justify-center items-center h-[50px] rounded-lg hover:cursor-pointer`}
                    key={idx}
                    onClick={() => {
                      setLicenseSelected(v);
                      setLicenseHave("");
                    }}
                  >
                    <TextBold text="2종 보통" size="15px" />
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex flex-col gap-[15px]">
            <TextBold text="면허 보유 여부" size="20px" />
            <div className="flex flex-wrap gap-[10px]">
              {["1", "2", "3"].map((v, idx) => {
                let isSelected = v === licenseHave;
                return (
                  <div
                    className={`w-[180px] border ${
                      isSelected ? "border-yellow-500 bg-yellow-100" : ""
                    } font-bold flex justify-center items-center h-[50px] rounded-lg hover:cursor-pointer`}
                    key={idx}
                    onClick={() => {
                      setLicenseHave(v);
                    }}
                  >
                    <TextBold text="2종 보통" size="15px" />
                  </div>
                );
              })}
            </div>
          </section>
        </section>
        <section className="flex justify-between items-center px-[10px] shadow-[0_-5px_20px_0_rgba(0,0,0,0.3)]">
          <div className=" w-fit">
            <div className="font-bold text-gray-500">2종 소형(신규)</div>
            <TextBold text="XXX 원" size="15px" />
          </div>
          <button
            className="bg-yellow-300 hover:bg-opacity-50 cursor-pointer w-[80px] h-[40px] disabled:bg-gray-400 disabled:text-gray-600"
            disabled={!licenseHave.length || !licenseSelected.length}
            onClick={() => {
              alert("click next!");
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
