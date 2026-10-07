import Navbar from "./components/layout/Navbar/Navbar";
import Hero from "./components/sections/Hero/Hero";
import Welcome from "./components/sections/Welcome/Welcome";
import Arcade from "./components/sections/Arcade/ArcadeZone";
import Packages from "./components/sections/Packages/CoinPackages";
import Rides from "./components/sections/Rides/KidsRides";
import SoftPlay from "./components/sections/SoftPlay/SoftPlay";
import Gaming from "./components/sections/Gaming/GamingZone";
import Gallery from "./components/sections/Gallery/Gallery";
import Location from "./components/sections/Location/Location";
import FinalCTA from "./components/sections/FinalCTA/FinalCTA";
import Footer from "./components/layout/Footer/Footer";
import FloatingWhatsApp from "./components/layout/FloatingActions/FloatingWhatsApp";





function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Welcome />
      <Arcade />
      <Packages />
      <Rides />
      <SoftPlay />
      <Gaming />
      <Gallery />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

export default App;