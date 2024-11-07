"use client";
import React from "react";

const CompanyLayout = ({ sections, backgroundImageSrc }) => {
  return (
    <div
      className="container mx-auto py-10 bg-cover bg-center w-full h-[90vh]"
      style={{
        backgroundImage: `url(${backgroundImageSrc})`, // Corrected background image syntax
      }}
    >
      {sections.map((section, index) => (
        <div
          key={index}
          className="lg:mb-12 text-white backdrop-filter lg:p-6 p-2 w-full"
        >
          <div className="flex items-center mb-28 lg:mb-0 justify-between">
            <h2 className="text-3xl font-bold lg:mb-4">{section.title}</h2>
            <p className="text-lg max-w-[40%] lg:max-w-[20%]">{section.description}</p>
          </div>
          <div className="w-full lg:mt-[10%] flex">
            <div className="flex overflow-x-auto lg:w-full justify-between">
              {section.details.map((detail, idx) => (
                <div key={idx} className="mt-4 flex-1 min-w-[40%] lg:min-w-[25%] border-l flex flex-col justify-between lg:max-w-[25%] p-3">
                  <h3 className="lg:text-xl font-semibold">{detail.subtitle}</h3>
                  <p className="lg:mt-[50%] mt-[10%] text-5xl font-extrabold">{detail.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompanyLayout;
