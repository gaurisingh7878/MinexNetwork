import { useState, useEffect } from "react";
import ContactPage from "../Contact/Contacthero";

function Contact() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Simulate loading delay

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
      <ContactPage />
    </div>
  );
}

export default Contact;
