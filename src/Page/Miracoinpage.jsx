import { useState, useEffect } from "react";
import MiraCoinICO from "../MIRA Coin/MIRA Coin";
import MiraCoinPage1 from "../MIRA Coin/MiraCoin1page";
import IcoRegistration from "../MIRA Coin/IcoRegistration";
import VestingInsightsSection from "../MIRA Coin/VestingInsights";

function MiraCoinICOpage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulated delay

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
      <MiraCoinICO />
      <MiraCoinPage1 />
      <VestingInsightsSection />
      <IcoRegistration />
    </div>
  );
}

export default MiraCoinICOpage;
