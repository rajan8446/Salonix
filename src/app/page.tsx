import BookAppointments from "./(website)/(home)/appointment";
import FAQ from "./(website)/(home)/faq";
import Footer from "./(website)/(home)/footer";
import Header from "./(website)/(home)/header";
import HeroSection from "./(website)/(home)/herosection";
import SalonixText from "./(website)/(home)/salonixtext";
import SalonNearLocation from "./(website)/(home)/salonNearLocation";
import SearchBar from "./(website)/(home)/searchbar";
import Snapshot from "./(website)/(home)/snapshot";
import TopDeals from "./(website)/(home)/topdeals";
import TrendingSaloons from "./(website)/(home)/trendingsaloons";

const Page = () => {
  return (
    <div className="gap-10">
      <Header />
      <SearchBar/>
      <HeroSection/>
      <TrendingSaloons />
      <TopDeals/>
      <SalonNearLocation/>
      <Snapshot/>
      <BookAppointments />
      <FAQ/>
      <SalonixText/>
      <Footer/>
    </div>
  );
};

export default Page;
