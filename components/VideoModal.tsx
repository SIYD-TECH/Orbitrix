import { Dispatch, SetStateAction } from "react"
import { BiExit } from "react-icons/bi"

interface Props {
  setVideoModalActive: Dispatch<SetStateAction<boolean>>
}

const VideoModal = ({ setVideoModalActive }: Props) => {
  const close = () => {
    setVideoModalActive(false)
  }
  
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-black/80 z-20 flex-center'>
      <div className="w-[90%] sm:w-[600px] md:w-[700px] lg:w-[800px] p-2">
        <video autoPlay loop>
          <source src='space.mp4' />
        </video>

        <button
          onClick={close} 
          className="bg-white mt-6 mx-auto rounded-md font-jsans text-sm py-3 cursor-pointer px-4 flex-center gap-2"
        >
          <span>Exit</span>
          <BiExit />
        </button>
      </div>
    </div>
  )
}

export default VideoModal