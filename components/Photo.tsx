import Image from 'next/image'
import useFocus from "../utils/useFocus";

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
      bg-white drop-shadow-xl
      border rounded-md border-slate-300
      transition ease-in-out duration-500 hover:delay-700
      hover:-translate-y-1 hover:scale-105 hover:z-20 hover:cursor-pointer
    `}>
      <div className={`
        ${style.gap} ${properties.colorless ? 'grayscale' : ''}
        brightness-125 saturate-150 blur-2xs
      `}>
        <Image
          quality="100"
          objectFit="cover"
          width={style.width}
          height={style.height}
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
}

const sizeStyles: Record<PhotoSize, SizeStyle> = {
  normal: {
    container: "w-[332px] h-[404px]",
    gap: "mt-[17px] ",
    width: 298,
    height: 298
  },
  large: {
    container: "w-[696px] h-[404px] col-span-2 justify-self-center",
    gap: "mt-[17px]",
    width: 298 * 2 + 32,
    height: 298
  }
}