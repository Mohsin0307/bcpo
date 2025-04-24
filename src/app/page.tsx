import ConstructionSectors from "./components/ConstructionSectors";
import Consultation from "./components/Consultation";
import ContactSection from "./components/ContactSection";
import Hero from "./components/Hero";
import ServicesComponent from "./components/ServiceComponent";
import WhyChooseUsComponent from "./components/WhyChooseUs";
import WorkProcess from "./components/WorkProcess";

export default function Home() {
  return (
    <div>
      <Hero />
      <ConstructionSectors />
      <ServicesComponent />
      <WhyChooseUsComponent />
      <Consultation />
      <WorkProcess />
      <ContactSection />
      {/* Add other sections later */}
    </div>
  );
}