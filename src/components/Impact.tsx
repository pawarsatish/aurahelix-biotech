

export default function Impact() {
  const metrics = [
    { figure: "20+", context: "Validated Targets", minor: "Active clinical profiles" },
    { figure: "4.8M", context: "Data Nodes Mapped", minor: "Per deep matrix projection" },
    { figure: "14x", context: "Throughput Velocity", minor: "Over legacy screening pools" },
    { figure: "99.8%", context: "Vector Specificity", minor: "Zero global marker indicators" }
  ];

  return (
    <section id="impact" className="max-w-7xl mx-auto px-6 py-20 border-y border-gray-900/40 bg-gradient-to-r from-transparent via-gray-900/5 to-transparent">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
        {metrics.map((stat, index) => (
          <div key={index}>
            <div className="text-3xl md:text-5xl font-black text-white mb-2 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              {stat.figure}
            </div>
            <div className="text-xs md:text-sm font-semibold text-emerald-400 mb-1">{stat.context}</div>
            <div className="text-gray-500 text-xs font-medium">{stat.minor}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
