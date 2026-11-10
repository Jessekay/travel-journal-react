import locate from "../assets/locate.png"
export default function Entry(props) {
  console.log(props);
  
  return (
     <main>
      <div className="flex gap-8 p-8">
        <img
          className="w-52 h-72 object-cover rounded-xl shrink-0"
          src={props.img.src}
          alt={props.img.alt}
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-2 text-sm tracking-widest uppercase">
            <img className="w-3 h-4" src={locate} alt="location" />
            <span>{props.country}</span>
            <a href={props.googleMapLink} className="ml-2 text-gray-400 underline normal-case tracking-normal">
              View on Google Maps
            </a>
          </div>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">{props.title}</h1>

          <p className="mt-4 text-sm font-bold text-gray-900">
            {props.dates}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {props.text}
          </p>
        </div>
      </div>
    </main>
  )
}