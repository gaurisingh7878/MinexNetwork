import React from "react";
import "./Ourclient.css";

const logos = [
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75dd65ed6da0299911ab5_AWS-p-2000.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75dd65ed6da0299911ab5_AWS-p-2000.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75dd6dab288764da6aa0d_Firebaswe3-p-2000.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75e18c0f109a49db5ce23_Group%202.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75e181b53f75930b18641_Bank.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75e181b53f75930b18641_Bank.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75dd6dab288764da6aa0d_Firebaswe3-p-2000.png",
  "https://cdn.prod.website-files.com/66d5b6a02b5afc0fcee740d5/66d75e18c0f109a49db5ce23_Group%202.png",
];

const OurClient = () => {
  return (
    <>
      <div className="bg-[#0f0f0f] md:mt-[-12rem] mt-[-6rem]">
        <div className="ourclient-container ">
          <div className="ourclient">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`logo-${index}`}
                className="client-logo"
              />
            ))}
            {logos.map((logo, index) => (
              <img
                key={`copy-${index}`}
                src={logo}
                alt={`logo-${index}-copy`}
                className="client-logo"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurClient;
