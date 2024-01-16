import Spinner from './Spinner/Spinner'

type Props = {
  isLoading: boolean
  children: React.ReactNode
}

// HOC High Order Component - composant prenant en argument un autre composant
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
