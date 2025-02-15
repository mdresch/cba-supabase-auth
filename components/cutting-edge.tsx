export default function CuttingEdgeSection() {
  const features = [ // Make the content more manageable
      {
          title: "Cutting-edge Technology",
          description: "Our solutions leverage the latest advancements in AI and machine learning.",
      },
      {
          title: "Scalable Solutions",
          description: "Our products grow with your business, ensuring long-term success.",
      },
      {
          title: "Expert Support",
          description: "Our team of experts is always ready to assist you with any questions or issues.",
      },
  ];

  return (
      <section className="container mx-auto px-4 py-12 mb-16"> {/* Container for better responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Grid for layout */}
              {features.map((feature, index) => (
                  <div
                      key={index}
                      className="bg-card p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:-translate-y-1" // Added hover effects
                  >
                      <h2 className="text-xl font-semibold mb-4">{feature.title}</h2>
                      <p className="text-card-foreground">{feature.description}</p>
                  </div>
              ))}
          </div>
      </section>
  );
}