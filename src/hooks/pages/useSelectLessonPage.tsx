import { useState } from "react"
import { useGoNext } from "../use-go-next"
import type { ClassItem, Lesson } from "@/pages/api/get-lesson"

export const useSelectLessonPage = () => {
  const [selectedLicenseItem, setSelectedLicenseItem] = useState<Lesson | null>(null)
  const [selectedClassItem, setSelectedClassItem] = useState<ClassItem | null>(null)

  const goNext = useGoNext()

  /** computed */
  const classList = selectedLicenseItem?.classList || []
  const hasSingleClass = classList.length === 1
  const hasMultipleClasses = classList.length > 1
  const showsNextStepUI = hasSingleClass || (classList.length > 1 && selectedClassItem)
  const finalLicenseName = `${selectedLicenseItem?.name} ${selectedClassItem?.type ? `(${selectedClassItem.type})` : ''}`
  const finalPrice = hasSingleClass ? selectedLicenseItem?.classList[0].price : selectedClassItem?.price

  function handleClickLicenseTypeButton(value: Lesson) {
    setSelectedLicenseItem(value)
    setSelectedClassItem(null)
  }
  
  function handleClickClassButton(value: ClassItem) {
    setSelectedClassItem(value)
  }

  function handleClickNextButton() {
    goNext({
      data: {
        selectedLicenseItem,
        selectedClassItem,
      }
    })
  }

  return {
    selectedLicenseItem,
    selectedClassItem,
    showsNextStepUI,
    classList,
    finalLicenseName,
    finalPrice,
    hasMultipleClasses,
    handleClickLicenseTypeButton,
    handleClickClassButton,
    handleClickNextButton
  }
}