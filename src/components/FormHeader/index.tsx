import { GlobeOutline, LogoGithub } from "react-ionicons"
import background from "../../assets/images/1.jpg"

const FormHeader = () => {
  return (
    <div className="w-full flex items-center justify-center relative rounded-[10px]">
        <div className="absolute top-5 left-5 z-[10] flex items-center gap-3">
            <a href="#" target="_blank" rel="noreferrer">
                <LogoGithub color={"#fff"} width="25px" height="25px" cssClasses="cursor-pointer" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
                <GlobeOutline color={"#fff"} width="25px" height="25px" cssClasses="cursor-pointer" />
            </a>
        </div>
        <span className="text-3xl text-white font-medium absolute left-1/2 bottom-1/2 translate-x-[-50%] translate-y-[50%] rounded-tl-[10px] z-[50]">
            Quiz App
        </span>
        <img src={background} className="w-full h-full rounded-tr-[10px] rounded-tl-[10px]" alt="Quiz App" />
        <div className="w-full h-full absolute bg-[rgba(54,84,99,0.7)] rounded-tr-[10px] rounded-tl-[10px]"></div>
    </div>
  )
}

export default FormHeader
