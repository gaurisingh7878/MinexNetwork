import { useEffect, useState } from "react";

import HeroSection from "../Component/Hero";
import MinexLandingPage from "../Component/MiraLanding";
import CoinsCardSection from "../Component/CoinsCardSection";
import RoadmapSection from "../Component/roadmap";
import CommunityEventsSection from "../Component/CommunityEvent";
import PricingSection from "../Component/PricingSection";
import FAQSection from "../Component/FAQSection";
import OurClient from "../Component/OurClient";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading (replace with actual logic like API fetch if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Show spinner for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
       <div className="flex items-center justify-center h-screen bg-[#0f0f0f]">
       
  <div class="flex  p-8 justify-center items-center h-[450px]">
    <div class="text-center space-y-6">
      <div
        class="w-24 h-24 border-4 border-t-[#00e600] border-gray-700 rounded-full animate-spin mx-auto"
      ></div>
      
    </div>
  </div>

  



      </div>
    );
  }

  return (
    <div>
      <HeroSection />
      <OurClient />
      <MinexLandingPage/>
      <CoinsCardSection />
      <RoadmapSection />
      <CommunityEventsSection />
      <PricingSection />
      <FAQSection />
    </div>
  );
}

export default Home;
