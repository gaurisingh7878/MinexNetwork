import { useState, useEffect } from "react";
import Lumira from "../LumiraSection/Lumira";
import InfoCards from "../LumiraSection/InfoCards";
import CloudMiningSection from "../LumiraSection/CloudMining";

function Explorer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // adjust duration as needed

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
      <Lumira />
      <InfoCards />
      <CloudMiningSection />
    </div>
  );
}

export default Explorer;
