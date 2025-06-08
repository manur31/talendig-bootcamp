
function Button({children, handle}) {
  return (
    <button onClick={handle}
          className='rounded-lg font-medium py-1.5 px-3 border-b-4 border-transparent bg-white cursor-pointer transition-all hover:text-white hover:bg-blue-900 hover:border-blue-950' 
    >
        {children}
    </button>
  )
}

export default Button 