import useFocus from "../utils/useFocus";
import Image from "next/future/image";

export interface PhotoProperties {
  src: string
  alt: string
  size: PhotoSize
  title: string
  people: string[]
  colorless?: boolean
}

export type PhotoSize = 'normal' | 'large'

export default function Photo(properties: PhotoProperties) {
  const style = sizeStyles[properties.size]
  const setFocus = useFocus()

  return (
    <div
      onMouseEnter={() => setFocus(true)}
      onMouseLeave={() => setFocus(false)}
      className={`
        ${style.container}
        flex flex-col items-center
        group bg-white drop-shadow-xl
        border rounded-md border-slate-300
        hover:-translate-y-1 hover:scale-105 hover:z-20 hover:cursor-pointer
        transition ease-in-out duration-500 hover:delay-700
    `}>
      <div className={`
        ${style.gap} ${properties.colorless ? 'grayscale' : ''}
        brightness-125 saturate-150 blur-2xs
        group-hover:blur-0 group-hover:brightness-100 group-hover:saturate-200
        transition ease-in-out duration-500 group-hover:delay-700
      `}>
        <Image
          quality="100"
          width={style.width}
          height={style.height}
          className={`object-cover ${style.size}`}
          src={properties.src}
          alt={properties.alt}
        />
      </div>
      <div className="
        w-full h-full flex flex-col items-center justify-end
        font-indie-flower
      ">
        <span className="font-indie-flower text-2xl">{properties.title}</span>
        <span className="mb-4 text-sm">{properties.people.join(", ")}</span>
      </div>
    </div>
  )
}

interface SizeStyle {
  container: string
  gap: string
  width: number
  height: number
  size: string
}

const sizeStyles: Record<PhotoSize, SizeStyle> = {
  normal: {
    container: "w-[332px] h-[404px]",
    gap: "mt-[17px]",
    width: 298,
    height: 298,
    size: "w-[298px] h-[298px]"
  },
  large: {
    container: "w-[332px] md:w-[696px] h-[404px] md:col-span-2",
    gap: "mt-[17px]",
    width: 628,
    height: 298,
    size: "w-[298px] md:w-[628px] h-[298px]"
  }
}