import Image from "next/image";
import LoadingImg from '../assets/loadings/Coffee-1.1s-200px.gif';

export default function Loading() {
  return (
    <div className="flex items-center justify-center content-center h-full w-full">
      <Image src={LoadingImg} width={125} height={125} alt="loading" role="status" aria-label="loading" />
    </div>
  )
}