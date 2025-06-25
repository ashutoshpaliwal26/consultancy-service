import React, { useState } from 'react';
import { 
  Star, 
  Users, 
  Clock, 
  Award, 
  BookOpen, 
  Video, 
  Globe, 
  Phone, 
  Mail, 
  ChevronDown,
  ChevronUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Eye,
  Heart,
  Zap,
  Target,
  Calendar,
  GraduationCap
} from 'lucide-react';

const FAQ_DATA = [
  {
    question: "What is Jyotish, and why is it called a sacred sadhana?",
    answer: "Jyotish, or Vedic astrology, is an ancient science that connects us with divine wisdom. It's more than an intellectual pursuit—it's a sacred sadhana (spiritual discipline) that guides us to uncover hidden solutions and navigate life's challenges with divine insight."
  },
  {
    question: "Is this course suitable for beginners?",
    answer: "Yes, this course is designed for both beginners and those with some knowledge of astrology. Our structured curriculum starts from basics and progresses to advanced concepts, ensuring everyone can follow along."
  },
  {
    question: "Can this course help me build a Career in Jyotish?",
    answer: "Absolutely! This course is specifically designed to prepare you for a professional career in Jyotish. With our internship program and practical training, you'll be equipped to start your own practice or join our panel of astrologers."
  },
  {
    question: "What will I learn in this course?",
    answer: "You'll learn chart analysis, predictive astrology, remedial measures, client counseling, spiritual practices, and the business aspects of astrology. The course includes over 200 hours of content covering all aspects of Jyotish."
  },
  {
    question: "How long does it take to establish a Career in astrology?",
    answer: "With dedicated study and practice, you can start offering consultations within 6-12 months of completing the course. Our internship program provides hands-on experience to accelerate your professional journey."
  },
  {
    question: "What is the cost of pursuing a career in astrology?",
    answer: "The course fee is ₹185,000, with an early access fee of ₹135,000. This includes all materials, live classes, consultations, and internship opportunities - everything you need to start your career."
  }
];

const FEATURES = [
  {
    icon: Video,
    title: "LIVE LECTURES",
    description: "Every month live lectures for every student"
  },
  {
    icon: Users,
    title: "INTERNSHIP",
    description: "Internship after completion directly under Deepanshu sir"
  },
  {
    icon: Award,
    title: "CERTIFICATE",
    description: "Watch anytime anywhere with ease"
  },
  {
    icon: Globe,
    title: "BOTH LANGUAGES",
    description: "In both languages Hindi + English"
  },
  {
    icon: Clock,
    title: "200+ HRS OF LECTURES",
    description: "More than 200 hours of recorded lectures"
  },
  {
    icon: Heart,
    title: "FREE CONSULTATION",
    description: "A Free consultation to everyone once enrolled"
  },
  {
    icon: BookOpen,
    title: "FREE STUDY KIT",
    description: "A complete package, you don't need anything else"
  }
];

const STEPS = [
  {
    number: 1,
    title: "Enroll into the Course",
    description: "Begin your journey by enrolling in our comprehensive astrology course. Access all resources, learning materials, and live classes."
  },
  {
    number: 2,
    title: "Join Live Classes Every Month",
    description: "Attend live, interactive classes held every month with expert instructors and real-time learning opportunities."
  },
  {
    number: 3,
    title: "Get Free Career Consultation",
    description: "Receive personalized guidance to align your passion for astrology with the best career opportunities."
  },
  {
    number: 4,
    title: "Submit Your Assignments",
    description: "Complete assignments to solidify your understanding and demonstrate your progress throughout the course."
  },
  {
    number: 5,
    title: "Complete Course within 2 Years",
    description: "Finish the entire curriculum within two years to receive your certification and advance to the next level."
  },
  {
    number: 6,
    title: "Interview of Completion",
    description: "Undergo an assessment interview to confirm your knowledge, skills, and readiness to progress further."
  },
  {
    number: 7,
    title: "Certificate by Deepanshu Giri",
    description: "Receive an official certificate signed by renowned astrologer Deepanshu Giri upon successful completion."
  },
  {
    number: 8,
    title: "Call for Internship",
    description: "Begin your hands-on internship experience to apply your knowledge and gain practical insights."
  }
];

const WHY_JOIN = [
  {
    icon: Star,
    title: "Learn from Mr. Deepanshu Giri",
    description: "Learn directly from a renowned astrologer and founder of Lunar Astro. Gain valuable insights and advanced techniques."
  },
  {
    icon: Target,
    title: "Build a Rewarding Career",
    description: "Astrology is a booming profession. Establish a successful career in Jyotish and make a difference in people's lives."
  },
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Holistic learning combining theoretical concepts, practical applications, and spiritual insights."
  },
  {
    icon: Sparkles,
    title: "Transform Your Life",
    description: "Master Jyotish to decode cosmic patterns, gain clarity, and make better decisions for yourself and others."
  },
  {
    icon: GraduationCap,
    title: "6 Months Internship Program",
    description: "Gain hands-on experience, work on real-life cases, and earn while building your foundation."
  },
  {
    icon: Zap,
    title: "Flexible Learning",
    description: "Study anytime, anywhere with hands-on training that builds real-world skills and expertise."
  }
];

function Career() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen ">
      {/* Navigation */}
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1543793/pexels-photo-1543793.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center text-maroon px-4 py-2 rounded-full mb-6 border border-maroon-400/30">
              <Sparkles className="w-4 h-4 mr-2" />
              Only 9 seats available! Join the waiting list
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Diploma in <span className=" text-maroon">Jyotish</span>
              <br />with Internship
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Start Your Career in Jyotish with Expert Guidance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="bg-maroon text-white px-8 py-4 rounded-full font-bold text-lg hover:from-maroon-300 hover:to-orange-400 transition-all transform hover:scale-105 shadow-2xl">
                Enroll Now
              </button>
              <button className="border-2 border-400 text-gray-500 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Explore More
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <div className="backdrop-blur-md rounded-2xl p-6 border border-gray-700">
                <div className="text-3xl font-bold text-maroon mb-2">₹1,85,000</div>
                <div className="text-black">Course Fee</div>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-6 border border-red-400/30">
                <div className="text-3xl font-bold text-red-400 mb-2">₹1,35,000</div>
                <div className="text-back">Early Access Fee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message from Deepanshu Sir */}
      <section className="py-20 bg-maroon">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">A Message from Deepanshu Sir</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-maroon-400 to-orange-500 mx-auto"></div>
            </div>
            <div className="bg-red-200 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-black leading-relaxed mb-6">
                  <strong className="text-maroon">Course to Profession: A complete circle</strong> – It took us time to build our ecosystem, but finally we are here to not only teach you but to onboard you to our panel. As we are growing we need more astrologers who are properly trained and carry the same vision.
                </p>
                <p className="text-black leading-relaxed mb-6">
                  Over the past few years we have built an ecosystem to make sure you are ready and our next step is to help students who are ready for their professional journey. Once you complete your Diploma course at Lunar Astro, you are more than welcome for our internship program - now available online as well.
                </p>
                <p className="text-black leading-relaxed mb-6">
                  Internship is not only about Jyotish techniques and case studies but also about one-on-one interaction and helping you grow with various sadhnas, rituals, mantras and remedies required on your own birth chart. Every astrologer who joins our panel goes through a transformation and learns things which are otherwise inaccessible.
                </p>
                <div className="bg-gradient-to-r from-maroon-400/20 to-orange-500/20 rounded-2xl p-6 border border-maroon-400/30 mt-8">
                  <div className="flex items-center mb-4">
                    <Phone className="w-5 h-5 text-maroon mr-3" />
                    <span className="text-black font-semibold">Need counselling? Call: 8650333200</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-maroon mr-3" />
                    <span className="text-black font-semibold">Email: courses@lunarastro.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Course Features</h2>
            <p className="text-xl text-black max-w-2xl mx-auto">
              Everything you need to master Jyotish and build a successful career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {FEATURES.map((feature, index) => (
              <div key={index} className="bg-red-700 cursor-pointer backdrop-blur-md rounded-2xl p-6 border border-gray-500 hover:bg-white/15 transition-all group">
                <div className="w-12 h-12 bg-gradient-to-r from-maroon-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-200 font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="steps" className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Steps for Jyotish with Internships</h2>
            <p className="text-xl text-black max-w-3xl mx-auto">
              Your 8-Step Career Path to becoming a professional astrologer
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {STEPS.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-maroon-400 to-orange-500 rounded-full flex items-center justify-center mr-6">
                  <span className="text-black font-bold text-xl">{step.number}</span>
                </div>
                <div className="bg-gray-200 backdrop-blur-md rounded-2xl p-6 border border-gray-600 flex-1">
                  <h3 className="text-black font-bold text-xl mb-3">{step.title}</h3>
                  <p className="text-black leading-relaxed">{step.description}</p>
                  {step.number === 1 && (
                    <button className="mt-4 bg-maroon text-white px-6 py-2 rounded-full font-semibold hover:from-maroon-300 hover:bg-red-500 transition-all">
                      Enroll Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* Why Join Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Should You Join This Course?</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Transform your passion for astrology into a rewarding career
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_JOIN.map((reason, index) => (
              <div key={index} className="bg-gray-200 backdrop-blur-md rounded-2xl p-8 border border-gray-800 hover:bg-white/15 transition-all group">
                <div className="w-16 h-16 bg-gradient-to-r from-maroon-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-4">{reason.title}</h3>
                <p className="text-black leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Course Description */}
      <section className="py-20 bg-gray-200">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-4">Advanced Astrology Course</h2>
              <div className="w-24 h-1 mx-auto"></div>
            </div>
            <div className="bg-gray-100 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-black leading-relaxed mb-6">
                  Our course is designed to guide you on your journey into the profound world of Jyotish. Learning astrology is not merely an intellectual pursuit—it is a sacred sadhana that connects you with the divine wisdom of Jyotish's deity. The challenges you face in life often serve as a divine nudge, encouraging you to embrace this ancient science and uncover the solutions hidden within.
                </p>
                <p className="text-black leading-relaxed mb-6">
                  If you're considering a Career in Jyotish, this course provides the perfect starting point. It equips you with the knowledge and tools necessary to pursue astrology as a professional endeavor. Our curriculum balances technical expertise with spiritual discipline, ensuring a holistic understanding of Jyotish.
                </p>
                <p className="text-black leading-relaxed">
                  The transformative power of Jyotish lies not just in learning but in consistent practice and dedication. For those serious about building a Career in Jyotish, we also delve into techniques for client counseling, predictive accuracy, and even the business aspects of astrology. Trust in the process, embrace the sadhana, and let the divine guide your path as you step into this rewarding journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Get answers to common questions about the course
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full bg-gray-100 backdrop-blur-md rounded-2xl p-6 border border-gray-200 text-left hover:bg-gray-300 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-gray-800 font-semibold text-lg pr-4">{faq.question}</h3>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-maroon flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-maroon flex-shrink-0" />
                    )}
                  </div>
                </button>
                {expandedFAQ === index && (
                  <div className="mt-2 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <p className="text-black leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Career;