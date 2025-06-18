import founder_pic from "../../public/founder_pic.png";
import { Star, Users, BookOpen, Globe, Award, Heart, ArrowRight, Sparkles } from 'lucide-react';

function AboutUs() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-marron-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-r from-maroon via-maroon-900 to-red-900">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-marron-600/30 to-purple-600/30"></div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-marron-500/10 rounded-full blur-3xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-8">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Master Astrologer & Spiritual Guide
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Dr. Karthik Jha
                            <span className="block text-3xl lg:text-4xl font-light text-purple-200 mt-4">
                                Journey into Astrology
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
                            Transforming lives through the ancient wisdom of astrology, bringing clarity and purpose to thousands across the globe
                        </p>

                        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="group px-8 py-4 bg-white text-marron-900 rounded-full font-semibold text-lg hover:bg-marron-50 transition-all duration-300 transform hover:scale-105 shadow-xl">
                                Discover Your Path
                                <ArrowRight className="inline-block w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 backdrop-blur-sm transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-marron-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">10,000+</div>
                            <div className="text-gray-600">Lives Transformed</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Globe className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
                            <div className="text-gray-600">Countries Reached</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                            <div className="text-gray-600">Years Experience</div>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-marron-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Award className="w-8 h-8 text-white" />
                            </div>
                            <div className="text-3xl font-bold text-gray-900 mb-2">100+</div>
                            <div className="text-gray-600">Research Papers</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Journey Section */}
            <section className="py-20 bg-gradient-to-r from-gray-50 to-marron-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-marron-100 rounded-full text-marron-700 text-sm font-medium mb-6">
                                <Star className="w-4 h-4 mr-2" />
                                Our Founder
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Dr. Karthik Jha
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-marron-600 to-purple-600"> Astrology</span>
                            </h2>

                            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                <p>
                                    Dr. Kartik Jha is not just an astrologer — he is a scholar, mentor, and spiritual guide who has devoted his life to studying and teaching the profound wisdom of Jyotish Shastra.
                                </p>

                                <p>
                                    Currently serving as an Assistant Professor of Jyotish, Dr. Jha has trained countless students, conducted extensive academic research, and guided over 1,000+ clients through personalized, life-changing consultations.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
                                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700 font-medium">Research-Based Approach</span>
                                </div>
                                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700 font-medium">Global Teaching</span>
                                </div>
                                <div className="flex items-center px-4 py-2 bg-white rounded-full shadow-md">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                                    <span className="text-gray-700 font-medium">Mystical Texts Decoded</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative bg-gradient-to-r from-marron-500 to-purple-600 rounded-3xl p-8 shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-r from-marron-600/20 to-purple-600/20 rounded-3xl"></div>
                                <div className="relative">
                                    <div className="w-full h-80 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                                        <div className="text-center text-white">
                                            <img src={founder_pic}/>
                                            <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <Sparkles className="w-12 h-12" />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-2">Lunar Astro</h3>
                                            <p className="text-white/80">Teaching Platform</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                                <Star className="w-8 h-8 text-yellow-900" />
                            </div>
                            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-400 rounded-full flex items-center justify-center shadow-lg">
                                <Heart className="w-6 h-6 text-pink-900" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            
        </div>
    );
}

export default AboutUs;