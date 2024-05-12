import { useRouter } from "next/router";

export const useGoNext = () => {
  const router = useRouter();

  return (data: unknown) => {
    router.push({
      pathname: "/complete",
      query: { data: JSON.stringify(data) },
    });
  };
};
