import cn from 'classnames'
import type { GetServerSideProps } from 'next'
import type { Lesson } from './api/get-lesson'
import { BASE_URL } from '@/constants/api'

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
  return (
    <div className={cn('w-full h-full', 'p-3')}>
    </div>
  );
};

export default SelectLessonPage;
