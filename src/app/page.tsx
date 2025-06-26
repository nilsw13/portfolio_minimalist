import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import MissionsSection from "./components/MissionsSection";
import OpenSourceSection from "./components/OpenSourceSection";


export default function Home() {
  return (
    <div className="  min-h-screen overflow-hidden w-full ">
     
          <main className=" w-full">

            <HeroSection/>


            <MissionsSection/>

            <OpenSourceSection/>

            <ContactSection/>



          </main>
     
    </div>
  );
}
