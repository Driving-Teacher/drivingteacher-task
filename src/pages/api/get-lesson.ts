// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

interface Lesson {
  code: string;
  price: number;
  name: string;
}

const MockLessons: Lesson[] = [
  { code: "ONE_NORMAL", price: 730_000, name: "1종 보통(신규)" },
  { code: "TWO_NORMAL", price: 730_000, name: "2종 보통(신규)" },
  { code: "ONE_LARGE", price: 780_000, name: "1종 대형(신규)" },
  { code: "TWO_SMALL_NEW", price: 500_000, name: "2종 소형 (신규)" },
  {
    code: "TWO_SMALL_HAVE_LICENSE",
    price: 490_000,
    name: "2종 소형 (1,2종면허 소지자)",
  },
  {
    code: "TWO_SMALL_HAVE_MOTOR",
    price: 343_000,
    name: "2종 소형 (원동기 소지자)",
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Lesson[]>
) {
  res.status(200).json(MockLessons);
}
