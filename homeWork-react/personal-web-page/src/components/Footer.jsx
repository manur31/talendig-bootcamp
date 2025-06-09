import LinkRedes from './LinksRedes'

function Footer() {
  return (
    <footer className="flex justify-between items-center max-w-[50%] m-auto mt-46 mb-16 py-8 px-16 rounded-4xl bg-zinc-500 text-white">
        <h2 className="font-bold uppercase text-3xl">{"{/}"}</h2>
        <LinkRedes/>
    </footer>
  )
}

export default Footer