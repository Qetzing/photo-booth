import Photo, {PhotoProperties} from "../components/Photo";
import path from "path";
import * as fs from "fs";
import PhotoContainer from "../components/PhotoContainer";
import React from "react";
import Navigation from "../components/navigation/Navigation";

type Photos = (PhotoProperties & {id: number})[]

export default function IndexPage({photos}: {photos: Photos}) {
  return (
    <>
      <Navigation entries={[]}/>
      <PhotoContainer>
        {photos.map(photo => (
          <Photo key={photo.id} {...photo}/>
        ))}
      </PhotoContainer>
    </>
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