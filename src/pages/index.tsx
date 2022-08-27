import Photo, {PhotoProperties} from "../components/Photo";
import path from "path";
import * as fs from "fs";
import PhotoContainer from "../components/PhotoContainer";
import React from "react";
import Navigation from "../components/navigation/Navigation";

type Photos = Record<string, (PhotoProperties & {id: number})[]>

export default function IndexPage({photos}: {photos: Photos}) {
  return (
    <>
      <Navigation entries={Object.keys(photos).map(category => {
        return {
          link: category,
          name: category
        }
      })}/>
      {Object.keys(photos).map(category => (
        <PhotoContainer key={category} title={category}>
          {photos[category].map(photo => (
            <Photo key={photo.id} {...photo}></Photo>
          ))}
        </PhotoContainer>
      ))}
    </>
  )
}

export async function getStaticProps() {
  const directory = path.join(process.cwd(), 'data')
  const data = fs.readFileSync(directory + '/photos.json', 'utf8')
  const raw: {[key: string]: [PhotoProperties & {id: number}]} = JSON.parse(data).photos
  let photos: Photos = {}

  for (const [category, content] of Object.entries(raw)) {
    const entries: (PhotoProperties & {id: number})[] = []
    for (const photo of content) {
      entries.push({
        id: photo.id,
        src: photo.src,
        alt: photo.alt,
        title: photo.title,
        people: photo.people,
        size: photo.size
      })
    }
    photos[category] = entries
  }

  return {
    props: {
      photos: photos
    }
  }
}