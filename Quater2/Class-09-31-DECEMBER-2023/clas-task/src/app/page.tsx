import Image from 'next/image'
import FeatureCard from './components/featureCard/featureCard';

export default function Home() {
  const features = [
    { color: '#EB2A40', title: 'Latest State of the art Technology', description: 'Train IT professionals who they can build million $ companies nationwide in cutting-edge technologies, fostering a technical revolution in Faisalabad and across Pakistan.' },
    { color: '#023e8a', title: 'Opportunity to learn Business', description: 'Opportunity to learn direct from top business leaders of Pakistan for a more successful business career.' },
    { color: '#17B5A2', title: 'Venture Capital Fund', description: 'This project will create a 100-million-dollar Cyberabad Venture Capital Fund to finance the IT companies and startups of Faisalabad.' },
    { color: '#5e503f', title: 'Angle Investor Club', description: 'A Cyberabad Angel Investor Club will also be formed and it will also provide initial seed money for startup businesses, in exchange for ownership equity in the company.' },
    { color: '#669bbc', title: 'Coworking Space', description: 'Establish the Cyberabad Coworking Space in Faisalabad\'s corporate district, offering flexible workspaces, 24/7 access, amenities, and networking opportunities. Energize and connect in this vibrant, fully-equipped environment.' },
    { color: '#ffb703', title: 'International Embassies', description: 'Set up Cyberabad International Embassies in Silicon Valley, USA, and Dubai Internet City, fostering global business connections and serving as hubs for Cyberabad\'s international outreach.' },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 px-2 md:grid-cols-2 md:px-16 lg:grid-cols-3 lg:px-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  )
}
