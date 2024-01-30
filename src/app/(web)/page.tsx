import FeaturedRoom from "@/components/FeaturedRoom/FeaturedRoom";
import Gallery from "@/components/Gallery/Gallery";
import HeroSection from "@/components/HeroSection/HeroSection";
import NewsLetter from "@/components/NewsLetter/NewsLetter";
import { getFeaturedRoom } from "@/libs/apis";

const Home = async () => {

  const featuredRoom = await getFeaturedRoom()


  return <>
  <HeroSection />
  <FeaturedRoom featuredRoom={featuredRoom} />
  <Gallery />
  <NewsLetter />
  </>
    
  
}


export default Home;