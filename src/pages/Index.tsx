import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import FeaturesSection from "@/components/FeaturesSection";
import ProcessSection from "@/components/ProcessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroBanner />
        <FeaturesSection />
        <ProcessSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
