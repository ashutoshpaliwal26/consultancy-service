import Hero from '../components/HomeComponents/Hero';
import ContactButtons from '../components/HomeComponents/ContactButtons';
import TrustBadge from '../components/HomeComponents/TrustBadge';
import WhyChooseCard from '../components/HomeComponents/WhyChooseCard';
import TeacherCard from '../components/HomeComponents/TeacherCard';
import SelectionCard from '../components/HomeComponents/SelectionCard';
import ComparisonTable from '../components/HomeComponents/ComparisionTable';
import CaseStudiesSection from '../components/HomeComponents/CaseStudiesSection';
import YearlyHoroscope2025 from '../components/HomeComponents/YearlyHoroscorepe2025';
import ConsultationSection from '../components/HomeComponents/ConsultationSection';
import MeetAstrologersSection from '../components/HomeComponents/MeetAstrologersSection';
import AstrologyVideosSection from '../components/HomeComponents/AstrologyVideosSection';
import TrustSection from '../components/HomeComponents/TrustSection';
import ChartPreparations from '../components/HomeComponents/ChartPreparations';
import DifferencesSection from '../components/HomeComponents/DifferencesSection';
import ContactSection from '../components/HomeComponents/ContactSection';
import FAQSection from '../components/HomeComponents/FAQSection';

function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="border-t border-maroon"></div>
      <main className="flex-grow">
        <Hero />
      </main>
      <WhyChooseCard/>
      <TeacherCard/>
      <SelectionCard/>
      <ComparisonTable/>
      <CaseStudiesSection/>
      <YearlyHoroscope2025/>
      <ConsultationSection/>
      <MeetAstrologersSection/>
      <AstrologyVideosSection/>
      <TrustSection/>
      <ChartPreparations/>
      <DifferencesSection/>
      <ContactSection/>
      <FAQSection/>
      <TrustBadge />
    </div>
  );
}

export default Home;