import Image from 'next/image'

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
  return (
    <div className={`
      ${style.container}
      flex flex-col items-center
      bg-white rounded-md drop-shadow-xl
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