import Spinner from './Spinner/Spinner'

type Props = {
  isLoading: boolean
  children: React.ReactNode
}

const Loading = ({ isLoading, children }: Props) => {
  if (isLoading)
    return (
      <div className='flex justify-center my-8'>
        <Spinner />
      </div>
    )
  return children
}

export default Loading
