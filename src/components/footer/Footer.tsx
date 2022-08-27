export default function Footer() {
  return (
    <div className="w-full mt-auto bg-gray-900 text-white py-4">
      <div className="flex flex-col">
        <div className="">
          <p className="ml-20 inline">&copy; 2022</p>
          <p className="ml-3 inline"><a href="https://qetz.de/impressum">Imprint</a></p>
        </div>
        <div className="flex justify-end mt-1.5">
          <p className="mr-20">
            Made by
            <a href="https://qetz.de"> Qetz </a>
            with {'\u2764'}
            ️</p>
        </div>
      </div>
    </div>
  )
}