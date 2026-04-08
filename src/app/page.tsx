import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SplashScreen from "@/components/sections/SplashScreen";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Locations from "@/components/sections/Locations";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Reservation from "@/components/sections/Reservation";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specialties />
        <Gallery />
        <Testimonials />
        <Locations />
        <InstagramFeed />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
