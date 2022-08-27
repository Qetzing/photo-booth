import Photo, {PhotoProperties} from "../components/Photo";
import path from "path";
import * as fs from "fs";

type Photos = (PhotoProperties & {id: number})[]

export default function IndexPage({photos}: {photos: Photos}) {
  return (
    <div className="flex justify-center my-5">
      <div className="grid grid-cols-2 lg:grid-cols-3 grid-flow-row-dense gap-x-8 gap-y-4">
        {photos.map(photo => (
          <Photo key={photo.id} {...photo}/>
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'data')
  const data = fs.readFileSync(directory + '/photos.json', 'utf8')
  const photos: Photos = []

  for (const photo of JSON.parse(data).photos) {
    photos.push({
      id: photo.id,
      src: photo.src,
      alt: photo.alt,
      title: photo.title,
      people: photo.people,
      size: photo.size
    })
  }

  return {
    props: {
      photos: photos
    }
  }
}