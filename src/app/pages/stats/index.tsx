import React from "react";

const stats = [
  { value: "1M+", label: "CUSTOMERS", gradient: "bg-gradient-to-r from-[#C58F22] to-[#1E3A8A]" },
  { value: "12+", label: "YEARS OF EXCELLENCE", gradient: "bg-gradient-to-r from-[#BE1E5A] to-[#1E3A8A]" },
  { value: "41+", label: "R&D ENGINEERS", gradient: "bg-gradient-to-r from-[#C58F22] to-[#1E3A8A]" },
  { value: "78+", label: "COUNTRIES", gradient: "bg-gradient-to-r from-[#C58F22] to-[#1E3A8A]" },
  { value: "3287+", label: "PARTNERS", gradient: "bg-gradient-to-r from-[#C58F22] to-[#1E3A8A]" },
  { value: "41+", label: "AWARDS RECEIVED", gradient: "bg-gradient-to-r from-[#C58F22] to-[#1E3A8A]" },
];

const StatsSection = () => {
  return (
    <section className="py-16 text-center bg-white">
  {/* Section Title */}
  <h3 className="text-sm text-orange-500 uppercase tracking-widest">
    Why Register Karo
  </h3>
  <h2 className="text-3xl font-semibold text-gray-900 mt-2">
    Some Numbers are Important
  </h2>

  {/* Stats Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-8 mt-8 justify-center">
    {stats.map((stat, index) => (
      <div key={index} className="flex flex-col items-center">
        <span className={`text-4xl font-bold text-transparent bg-clip-text ${stat.gradient}`}>
          {stat.value}
        </span>
        <p className="text-gray-800 text-sm font-bold mt-1">
          {stat.label}
        </p>
      </div>
    ))}
  </div>
</section>

  );
};

export default StatsSection;
