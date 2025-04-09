import { JSX } from 'react'
const Loading = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center h-[400px]'>
      <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500'></div>
    </div>
  )
}

export default Loading
