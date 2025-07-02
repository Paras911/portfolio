const projects = [
  {
    id: 1,
    title: 'Self Hosted Media Hub ',
    description: 'I set up a personal home server using Ubuntu Server on VirtualBox with a static IP for stable access. Secure remote connectivity was enabled via PiVPN with WireGuard and Duck DNS. I configured Samba for cross-platform file sharing with custom permissions and deployed Jellyfin as a self-hosted media server for streaming music and videos.',
    link: 'https://github.com/Paras911/Self-Hosted-Media-Hub-',
  },
  {
    id: 2,
    title: 'Pi Shield',
    description: 'Created a virtualized Ubuntu Server using VirtualBox to host Pi-hole for DNS-level ad blocking across all devices. Installed PiVPN with WireGuard to enable secure, encrypted remote access, and integrated Pi-hole with the VPN to ensure ad-blocking works even outside the local network. Configured static IP assignment and port forwarding for stable and consistent connectivity.',
    link: 'https://github.com/Paras911/Pi-Shield',
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gray-900 text-gray-200 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-left">
        <h2 className="text-3xl font-bold text-blue-400 border-b-4 border-blue-600 inline-block mb-10">
          Projects
        </h2>
        
        <div className="flex flex-col gap-8">
          {projects.map(({ id, title, description, link }) => (
            <div
              key={id}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-transform hover:scale-[1.02] p-6"
            >
              <h3 className="text-2xl font-semibold text-blue-300 mb-2">{title}</h3>
              <p className="text-gray-300 mb-4">{description}</p>
              <a
                href={link}
                className="text-blue-400 hover:text-blue-300 underline font-medium"
              >
                Full Guide →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
