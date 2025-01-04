
import BestSeller from "../Components/BestSeller"
import Hero from "../Components/Hero"
import LatestCollection from "../Components/LatestCollection"
import NewsletterBox from "../Components/NewsletterBox"
import OurPolicy from "../Components/OurPolicy"

import Loader from "../Components/loader/Loader"


const Home = () => {
 


  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
     
    </div>
  )
}

export default Home