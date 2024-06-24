import { Footer } from "./components/footer"
import { Gallery } from "./components/gallery"
import { Hero } from "./components/hero"
import { Navbar } from "./components/navbar"
import { OurWeek } from "./components/our-week"
import { Journey } from "./journey"
import { Sponsor } from "./sponsor"
import { Vision } from "./vision"


function App() {
  return (
    <div className="relative container w-full mx-auto max-w-[2000px] bg-[#F7F7FF]">
      <Navbar />
      <Hero />
      <Vision />
      <Journey />
      <OurWeek />
      <Gallery />
      <Sponsor />
      <Footer />
    </div>
  )
}

export default App
