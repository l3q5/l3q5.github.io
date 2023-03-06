import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed w-full">
      <div className="p-4 m-auto max-w-3xl  w-screen">
        <ul className="flex items-center justify-between">
          <Link href="/">
            <li className="font-bold text-2xl font-mplus tracking-tight">
              Caio Duarte
            </li>
          </Link>
          <div className="flex gap-7">
            <Link href="/projects">
              <li>// Projects</li>
            </Link>
            <Link href="/blog">
              <li>// Blog</li>
            </Link>
          </div>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
