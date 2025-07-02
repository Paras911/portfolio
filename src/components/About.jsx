export default function About() {
  return (
    <section className="bg-gray-950 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-left"> {/* Removed lg:w-1/2 */}
          <h2 className="text-4xl font-bold text-blue-400 mb-4">
            About Me
          </h2>
          <p className="text-xl leading-relaxed text-gray-300">
            I am an aspiring networking professional with a strong foundation in computer networks, protocols, and infrastructure. Passionate about designing, implementing, and troubleshooting network solutions, I am eager to contribute my skills in configuring routers, switches, and security systems to support seamless and secure communication. Committed to continuous learning, I am ready to take on challenges in network administration, monitoring, and optimization to help organizations maintain robust and efficient network environments.
          </p>
        </div>
      </div>
    </section>
  );
}
