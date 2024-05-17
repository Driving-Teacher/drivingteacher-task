import { useState } from "react"
import type { Lesson } from "@/pages/api/get-lesson"
import type { ClassItem, Lesson } from "@/pages/api/get-lesson"

export const useSelectLessonPage = () => {
  const [selectedLicenseItem, setSelectedLicenseItem] = useState<Lesson | null>(null)
  const [selectedClassItem, setSelectedClassItem] = useState<ClassItem | null>(null)

  /** computed */
  const classList = selectedLicenseItem?.classList || []
  const hasSingleClass = classList.length === 1
  const hasMultipleClasses = classList.length > 1

  function handleClickLicenseTypeButton(value: Lesson) {
    setSelectedLicenseItem(value)
    setSelectedClassItem(null)
  }
  
  function handleClickClassButton(value: ClassItem) {
    setSelectedClassItem(value)
  }

  return {
    selectedLicenseItem,
    selectedClassItem,
    classList,
    hasMultipleClasses,
    handleClickLicenseTypeButton,
    handleClickClassButton,
  }
}