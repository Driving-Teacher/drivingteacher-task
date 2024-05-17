import { useState } from "react"
import type { Lesson } from "@/pages/api/get-lesson"


export const useSelectLessonPage = () => {
  const [selectedLicenseItem, setSelectedLicenseItem] = useState<Lesson | null>(null)
  function handleClickLicenseTypeButton(value: Lesson) {
    setSelectedLicenseItem(value)
    setSelectedClassItem(null)
  }
  return {
    selectedLicenseItem,
    handleClickLicenseTypeButton,
  }
}