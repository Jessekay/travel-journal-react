import './App.css'
import Header from "./components/Header"
import Body from "./components/Body"
import fuji from "./assets/fuji.png"
import opera from "./assets/opera.png"
import geiran from "./assets/geiran.png"

function App() {
  return (
    <>
      <Header />

      <Body
        src={fuji}
        alt="Mount Fuji"
        country="Japan"
        title="Mount Fuji"
        googleMapLink="google.com/maps/place/Mount+Fuji,+Kitayama,+Fujinomiya,+Shizuoka+418-0112,+Japan/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!5m1!1e4?sa=X&ved=1t:242&ictx=111"
        dates = "12 Jan, 2023 - 24 Jan, 2023"
        text = "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
      />

      <Body
        src={opera}
        alt="Sydney opera house"
        country="Australia"
        title="Sydney Opera House"
        googleMapLink="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,672m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D"
        dates="27 May, 2023 - 8 Jun, 2023"
        text="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />

      <Body
        src={geiran}
        alt="Gieranger"
        country="Norway"
        title="Gieranger"
        googleMapLink="https://www.google.com/maps/place/6216+Geiranger,+Norway/@62.098805,7.1990516,1514m/data=!3m2!1e3!4b1!4m6!3m5!1s0x4614266d0e317cc9:0xee5b40919d3f7313!8m2!3d62.1008441!4d7.2058941!16zL20vMDRrazJy!5m1!1e4?entry=ttu&g_ep=EgoyMDI2MTEwMS4wIKXMDSoASAFQAw%3D%3D"
        dates="01 Oct, 2024 - 18 Nov, 2024"
        text="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </>
  )
}

export default App
