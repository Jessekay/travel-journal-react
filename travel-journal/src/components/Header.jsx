import globe from "../assets/globe.png"

export default function Header() {
  return (
    <>
      <header className="flex bg-[#F55A5A] justify-center align-center h-13.75 items-center">
          <img src={globe} alt="Globe logo" className="w-6 h-6 mr-1.75" />
          <h1 className="text-white">my travel journal</h1>
      </header>
      
    </>
  )
}