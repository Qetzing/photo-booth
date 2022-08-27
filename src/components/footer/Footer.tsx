const imprintUrl = process.env.IMPRINT_URL || ""

export default function Footer() {
  return (
    <div className="w-full mt-auto bg-gray-900 text-white py-4">
      <div className="flex flex-col">
        <div className="flex justify-center sm:justify-start">
          <p className="sm:ml-20 inline">&copy; 2022</p>
          <p className="ml-3 inline"><a href={imprintUrl}>Imprint</a></p>
        </div>
        <div className="flex justify-center sm:justify-end mt-1.5">
          <p className="sm:mr-20">
            Made by
            <a href="https://qetz.de"> Qetz </a>
            with {'\u2764'}
            ️</p>
        </div>
      </div>
    </div>
  )
}