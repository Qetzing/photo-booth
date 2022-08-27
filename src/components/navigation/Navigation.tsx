export interface NavigationProperties {
  entries: EntryProperties[]
}

export default function Navigation(properties: NavigationProperties) {
  return (
    <nav className="
      bg-gray-800 mt-7 mb-14
      flex justify-center gap-14
      text-lg text-gray-400 font-medium tracking-widest
    ">
      {properties.entries.map(entry => (
        <Entry key={entry.link} link={entry.link} name={entry.name}/>
      ))}
    </nav>
  )
}

interface EntryProperties {
  link: string
  name: string
}

function Entry(properties: {link: string, name: string}) {
  return (
    <a
      href={properties.link}
      className="hover:text-cyan-400 transition ease-in-out duration-100"
    >
      {properties.name}
    </a>
  )
}