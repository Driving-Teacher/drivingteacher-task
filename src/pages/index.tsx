import cn from 'classnames'
import type { GetServerSideProps } from 'next'
import type { Lesson } from './api/get-lesson'
import { BASE_URL } from '@/constants/api'
import { Button } from '@/components/ui/button/Button'
import { useSelectLessonPage } from '@/hooks/pages/useSelectLessonPage'
import { commaizeNumber } from '@toss/utils'

export interface SelectLessonPageProps {
  data: Lesson[]
}

export const getServerSideProps: GetServerSideProps<SelectLessonPageProps> = (async () => {
  const response = await fetch(`${BASE_URL}/api/get-lesson`)
  const data = await response.json()
  return {
    props: { data }
  }
})

const SelectLessonPage = ({ data }: SelectLessonPageProps) => {

  const {
    selectedLicenseItem,
    selectedClassItem,
    showsNextStepUI,
    classList,
    finalLicenseName,
    finalPrice,
    hasMultipleClasses,
    handleClickLicenseTypeButton,
    handleClickClassButton,
    handleClickNextButton,
  } = useSelectLessonPage()

  return (
    <div className={cn('w-full h-full', 'p-3')}>
      <h1 className={cn('text-3xl font-bold')}>수업을 선택해 주세요.</h1>
      <div className={cn('flex flex-col')}>
        <h2 className={cn('text-xl font-bold', 'mt-5')}>면허 종류</h2>
        <div className={cn('grid grid-cols-2 grid-rows-2 gap-3', 'mt-2')}>
          {data.map((item) => (
            <Button
              key={item.name}
              buttonType='outlined'
              label={item.name}
              active={item.name === selectedLicenseItem?.name}
              onClick={() => handleClickLicenseTypeButton(item)}
            />
          ))}
        </div>
      </div>
      {hasMultipleClasses && (
        <div className={cn('flex flex-col')}>
          <h2 className={cn('text-xl font-bold', 'mt-5')}>면허 보유 여부</h2>
          <div className={cn('grid grid-cols-2 grid-rows-2 gap-3', 'mt-2')}>
            {classList.map((item) => (
              <Button
                key={item.type}
                buttonType='outlined'
                label={item.type}
                active={item.type === selectedClassItem?.type}
                onClick={() => handleClickClassButton(item)}
              />
            ))}
          </div>
        </div>
      )}
      {/* bottom UI */}
      {showsNextStepUI && (
        <section
          className={cn(
            'fixed bottom-0 left-0',
            'flex justify-between',
            'w-full h-[84px]',
            'shadow-md',
            'bg-white',
            'py-2 px-3',
            'shadow-[0_-3px_20px_#ddd]'
          )}
        >
          <div className={cn('flex flex-col items-start justify-center')}>
            <p className={cn('text-base text-[#a3a3a0]')}>
              {finalLicenseName}
            </p>
            <p className={cn('font-semibold')}>
              {commaizeNumber(finalPrice || 0)}원
            </p>
          </div>
          <div className={cn('flex justify-end', 'w-1/2')}>
            <Button
              buttonType='filled'
              classNames={cn('w-full max-w-[200px]', 'h-full')}
              label="다음"
              onClick={handleClickNextButton}
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default SelectLessonPage;
