const TeacherCard = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div className="space-y-8">
                    {/* Title */}
                    <h1 className="text-5xl font-bold text-red-900 leading-tight">
                        An Astrology Research Academy
                    </h1>

                    {/* Content Paragraphs */}
                    <div className="space-y-6">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            We are primarily an astrology learning academy, focused on deep research and teaching rather than regular consultations.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed">
                            We offer a limited number of consultations via Zoom, each conducted only after thorough research on the chart. Our astrologers also seek guidance when necessary before every session.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed">
                            Deepanshu sir as a mentor and guru, conduct training program for astrologer on regular basis. The approach of astrology consultation at Lunar Astro is dynamic.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                            This thoughtful and research-driven approach ensures our consultations are impactful, meaningful, and result-oriented.
                        </p>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="lg:sticky lg:top-8">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Astrology classroom with students learning"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeacherCard