import { MutatingDots } from  'react-loader-spinner'

const Loading = () => {
  return (
    <MutatingDots 
      height="100"
      width="100"
      color="#134559"
      secondaryColor= '#134559'
      radius='12.5'
      ariaLabel="loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  )
}

export default Loading;