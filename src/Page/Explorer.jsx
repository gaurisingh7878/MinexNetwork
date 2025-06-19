import { useState, useEffect } from "react";
import HeroSection from "../Component/Hero";

function Explorer() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      {loading ? (
         <div className="flex items-center justify-center h-screen bg-[#0f0f0f]">
       
  <div class="flex  p-8 justify-center items-center h-[450px]">
    <div class="text-center space-y-6">
      <div
        class="w-24 h-24 border-4 border-t-[#00e600] border-gray-700 rounded-full animate-spin mx-auto"
      ></div>
      
    </div>
  </div>

  



      </div>
      ) : (
        <HeroSection/>
      )}
    </div>
  );
}

export default Explorer;
