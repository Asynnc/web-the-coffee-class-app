import Image from "next/image";
import LoadingImg from '../assets/loadings/Coffee-1.1s-200px.gif';

export default function Loading() {
  return (
    <div className="flex items-center justify-center content-center h-full w-full">

      <Image src={LoadingImg} width={125} height={125} alt="loading" role="status" aria-label="loading"/>
      {/* <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-orange-400 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span
          className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
        >Loading... </span>
      </div> */}
    </div>
  )
}