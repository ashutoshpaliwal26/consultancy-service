import Header from '../components/Header';
import Hero from '../components/Hero';
import ContactButtons from '../components/ContactButtons';
import TrustBadge from '../components/TrustBadge';
import WhyChooseCard from '../components/WhyChooseCard';
import TeacherCard from '../components/TeacherCard';
import SelectionCard from '../components/SelectionCard';
import ComparisonTable from '../components/ComparisionTable';
import CaseStudiesSection from '../components/CaseStudiesSection';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="border-t border-maroon"></div>
      <main className="flex-grow">
        <Hero />
      </main>
      <ContactButtons />
      <WhyChooseCard/>
      <TeacherCard/>
      <SelectionCard/>
      <ComparisonTable/>
      <CaseStudiesSection/>
      <TrustBadge />
    </div>
  );
}

export default Home;