
const SelectionCard = () => {
    return (
        < div className="max-w-6xl mx-auto px-6 py-12" >
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Content - Image */}
                <div className="lg:sticky lg:top-8">
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                            src="https://images.pexels.com/photos/7092364/pexels-photo-7092364.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Astrology students working on laptops in classroom"
                            className="w-full object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div className="space-y-8">
                    {/* Title */}
                    <h1 className="text-5xl font-bold text-red-900 leading-tight">
                        Rigorous Astrologer Selection Process
                    </h1>

                    {/* Content Paragraphs */}
                    <div className="space-y-6">
                        <p className="text-gray-800 text-lg leading-relaxed">
                            At Nakshatra Kripaa, we choose our astrologers very carefully. We check each candidate's knowledge, skills, and honesty. We conduct strict tests on astrology, and we interview them to see if they can help people well.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed">
                            Every astrologer undergoes multiple rounds of evaluation, including deep scriptural knowledge tests, practical prediction assessments, and personal interviews to ensure not just technical proficiency but also ethical integrity.
                        </p>

                        <p className="text-gray-800 text-lg leading-relaxed font-medium">
                            Only those who do very well and share our values join our team.
                        </p>
                    </div>

                    {/* Call to Action Button */}
                    <div className="pt-6">
                        <button className="bg-red-900 hover:bg-red-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg">
                            Check Eligibility To Become Astrologer At Nakshatra Kripaa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectionCard