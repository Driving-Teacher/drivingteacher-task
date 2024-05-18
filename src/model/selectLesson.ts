export type Lesson = {
  code: string;
  price: number;
  name: string;
};

export type LicenseGroup = {
  ONE_NORMAL: Lesson[];
  ONE_LARGE: Lesson[];
  TWO_SMALL: Lesson[];
  TWO_NORMAL: Lesson[];
};
