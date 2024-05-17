import { useEffect, useState } from "react";

const SelectLesson = () => {
  useEffect(() => {
    // fetch lesson data from API
    (async () => {
      const Resp = await fetch("/api/get-lesson");
      const fetchedData = await Resp.json();
    })();
  }, []);

  return <div>SelectLesson</div>;
};

export default SelectLesson;
