import { Lesson, LicenseGroup } from "@/model/selectLesson";

export const getLicenseGroup = (rawData: Lesson[]) => {
  let licenseGroup: LicenseGroup = {
    ONE_NORMAL: [],
    ONE_LARGE: [],
    TWO_SMALL: [],
    TWO_NORMAL: [],
  };
  rawData.forEach((v) => {
    if (v.code.includes("ONE_NORMAL")) {
      licenseGroup["ONE_NORMAL"].push(v);
    } else if (v.code.includes("ONE_LARGE")) {
      licenseGroup["ONE_LARGE"].push(v);
    } else if (v.code.includes("TWO_SMALL")) {
      licenseGroup["TWO_SMALL"].push(v);
    } else {
      licenseGroup["TWO_NORMAL"].push(v);
    }
  });
  return licenseGroup;
};

export const convertLicenseTypeEngToKr = (eng: string) => {
  switch (eng) {
    case "ONE_NORMAL":
      return "1종 보통";
    case "ONE_LARGE":
      return "1종 대형";
    case "TWO_NORMAL":
      return "2종 보통";
    case "TWO_SMALL":
      return "2종 소형";
    default:
      return "";
  }
};

export const getLicenseNameStr = (originalName: string) => {
  const regex = /\(([^)]+)\)/g;

  const result = regex.exec(originalName);
  return result ? result[1] : "";
};

export const addCommaToPrice = (price: number) => {
  return price.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
};
