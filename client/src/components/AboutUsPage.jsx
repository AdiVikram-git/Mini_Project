import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUsPage = () => {
    const navigate = useNavigate();
    
  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
        <p className="mb-4">
          The Department of Agriculture & Farmers Welfare is committed to empowering the backbone of India – the Indian farmer. Our mission is to implement inclusive policies, promote innovation in agriculture, and ensure food security while uplifting the rural economy.
        </p>
        <p className="mb-4">
          We work towards holistic development through schemes like PM-KISAN, Soil Health Cards, e-NAM, and crop insurance programs. By promoting sustainable agriculture and enhancing access to modern technologies, we ensure every farmer, from smallholders to large producers, has the support they need to thrive.
        </p>
        <p className="mb-4">
          With a farmer-first approach, we continuously engage in capacity building, digital access, and market linkages to make Indian agriculture globally competitive. Together, we strive for a future where agriculture is respected, profitable, and sustainable.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
