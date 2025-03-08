import React from "react";
// import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import happyClient from "@/app/assets/happyClients/client.png";
import Image from "next/image";


  const HappyClients = () => {
    return (
      <section className="py-16 flex flex-col justify-center bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Happy Clients</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically
          innovate resource-leveling customer service for state-of-the-art customer service.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Image src={happyClient} alt="happy" className="w-full h-full object-contain" />
        </div>
        <button className="mt-6  text-[#1C4670] font-medium flex items-center justify-center">
          Show more →
        </button>
      </section>
    );
  };
  
  export default HappyClients;