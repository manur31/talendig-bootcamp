
function Header() {
  return (
    <header className="flex justify-between items-center max-w-[100%] m-auto mt-12 py-8 px-16 rounded-4xl bg-zinc-500 text-white">
        <h2 className="font-bold uppercase text-3xl">{"{/}"}</h2>
        <nav className="flex justify-around items-center gap-5 text-2xl">
            <a href='#home' className="hover:text-gray-300">Inicio</a>
            <a href='#about' className="hover:text-gray-300">Sobre mi</a>
            <a href='#hobbie' className="hover:text-gray-300">Pasatiempo</a>
        </nav>
    </header>
  )
}

export default Header