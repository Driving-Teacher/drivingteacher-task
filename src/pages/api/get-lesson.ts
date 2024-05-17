// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export interface ClassItem {
  code: string;
  price: number;
  type: string;
}
export interface Lesson {
  name: string;
  classList: ClassItem[];
}

const MockLessons: Lesson[] = [
  {
    name: "1종 보통",
    classList: [
      {
        code: "ONE_NORMAL_NEW",
        price: 730_000,
        type: "신규",
      }
    ]
  },
  {
    name: "2종 보통",
    classList: [
      {
        code: "TWO_NORMAL_NEW",
        price: 730_000,
        type: "신규",
      }
    ],
  },
  {
    name: "1종 대형",
    classList: [
      {
        code: "ONE_LARGE_NEW",
        price: 780_000,
        type: "신규",
      },
    ],
  },
  {
    name: "2종 소형",
    classList: [
      {
        code: "TWO_SMALL_NEW",
        price: 500_000,
        type: "신규",
      },
      {
        code: "TWO_SMALL_HAVE_LICENSE",
        price: 490_000,
        type: "1,2종면허 소지자",
      },
      {
        code: "TWO_SMALL_HAVE_MOTOR",
        price: 343_000,
        type: "원동기 소지자",
      },
    ],
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Lesson[]>
) {
  res.status(200).json(MockLessons);
}
