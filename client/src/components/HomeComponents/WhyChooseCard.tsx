
const WhyChooseCard = () => {
    return (
        < div className = "min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 relative overflow-hidden" >
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
                <div className="bg-white rounded-3xl shadow-2xl border-4 border-red-800 p-8 md:p-12 relative">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-red-800 mb-4 leading-tight">
                            Why Consultation with Nakshatra Kripaa?
                        </h1>
                    </div>
                    <div className="space-y-6 text-gray-800 leading-relaxed">
                        <p className="text-lg md:text-xl">
                            Nakshatra Kripaa is a unique platform dedicated to{' '}
                            <span className="underline font-semibold text-red-700">research-level and result-oriented</span>{' '}
                            online astrology consultation, guided by the wisdom of Deepanshu Giri Ji. Unlike other astrology platforms,
                            we provide personalized consultations through a scheduled video calls, where we present your chart live and
                            explain its workings in detail. With a team-based approach and genuine care, we ensure every session is
                            meaningful and transformative. To book a consultation you should select the desired service if you want us
                            to assign the best astrologer as per your concern.
                        </p>

                        <p className="text-lg md:text-xl font-medium text-gray-700">
                            You should scroll down to get an detailed explanation why everyone should take astrology consultation with
                            Nakshatra Kripaa only!
                        </p>

                        <div className="bg-red-50 border-l-4 border-red-800 p-4 rounded-r-lg">
                            <p className="text-base md:text-lg text-gray-700">
                                <strong>Note:</strong> If you prefer a particular consultant with whom you've previously had a meeting,
                                please select the{' '}
                                <span className="text-red-800 font-bold underline cursor-pointer hover:text-red-900 transition-colors">
                                    RE-CONSULTATION OPTION
                                </span>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
  )
}

export default WhyChooseCard