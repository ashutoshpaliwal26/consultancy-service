import React, { useState } from 'react';

interface ZodiacSign {
    name: string;
    symbol: string;
    dates: string;
    element: string;
    description: string;
}

const zodiacSigns: ZodiacSign[] = [
    { name: 'Aries', symbol: '♈', dates: 'Mar 21 - Apr 19', element: 'Fire', description: 'The Ram - Bold and ambitious' },
    { name: 'Taurus', symbol: '♉', dates: 'Apr 20 - May 20', element: 'Earth', description: 'The Bull - Reliable and patient' },
    { name: 'Gemini', symbol: '♊', dates: 'May 21 - Jun 20', element: 'Air', description: 'The Twins - Curious and adaptable' },
    { name: 'Cancer', symbol: '♋', dates: 'Jun 21 - Jul 22', element: 'Water', description: 'The Crab - Intuitive and emotional' },
    { name: 'Leo', symbol: '♌', dates: 'Jul 23 - Aug 22', element: 'Fire', description: 'The Lion - Generous and warm-hearted' },
    { name: 'Virgo', symbol: '♍', dates: 'Aug 23 - Sep 22', element: 'Earth', description: 'The Maiden - Loyal and analytical' },
    { name: 'Libra', symbol: '♎', dates: 'Sep 23 - Oct 22', element: 'Air', description: 'The Scales - Cooperative and fair-minded' },
    { name: 'Scorpio', symbol: '♏', dates: 'Oct 23 - Nov 21', element: 'Water', description: 'The Scorpion - Resourceful and passionate' },
    { name: 'Sagittarius', symbol: '♐', dates: 'Nov 22 - Dec 21', element: 'Fire', description: 'The Archer - Generous and idealistic' },
    { name: 'Capricorn', symbol: '♑', dates: 'Dec 22 - Jan 19', element: 'Earth', description: 'The Goat - Responsible and disciplined' },
    { name: 'Aquarius', symbol: '♒', dates: 'Jan 20 - Feb 18', element: 'Air', description: 'The Water Bearer - Progressive and original' },
    { name: 'Pisces', symbol: '♓', dates: 'Feb 19 - Mar 20', element: 'Water', description: 'The Fish - Compassionate and artistic' }
];

const YearlyHoroscope2025: React.FC = () => {
    const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

    return (
            <div className="min-h-screen relative" style={{ backgroundColor: '#4a1c1c' }}>
                {/* Scattered dots/stars background */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(80)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-200 rounded-full opacity-30"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        />
                    ))}
                </div>

                <div className="relative z-10 container mx-auto px-16 py-12">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                            Yearly Horoscope 2025: What Your Zodiac<br />
                            Sign Says About the Year Ahead!
                        </h1>
                    </div>

                    {/* Zodiac Grid - 6 columns, 2 rows */}
                    <div className="grid grid-cols-3 md:grid-cols-6  mb-8">
                        {zodiacSigns.map((sign)=> (
                            <div
                                key={sign.name}
                                className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
                                onClick={() => setSelectedSign(selectedSign?.name === sign.name ? null : sign)}
                            >
                                <div className="bg-white rounded-full w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 mx-auto">
                                    {/* Watercolor-style background */}
                                    {/* <div className="absolute inset-0 rounded-full opacity-20 bg-gradient-to-br from-orange-300 via-red-300 to-pink-300"></div> */}

                                    {/* Zodiac illustration placeholder - using symbol for now */}
                                    <div className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                                        {sign.symbol}
                                    </div>
                                </div>

                                {/* Sign name below */}
                                <p className="text-white text-center mt-2 text-sm md:text-base font-medium">
                                    {sign.name}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Selected Sign Details */}
                    {selectedSign && (
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20 mt-8 animate-fade-in">
                            <div className="text-center">
                                <div className="w-32 h-32 mx-auto mb-6 bg-white rounded-full flex items-center justify-center shadow-xl">
                                    <div className="text-5xl font-bold text-gray-700">{selectedSign.symbol}</div>
                                </div>

                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{selectedSign.name}</h2>
                                <p className="text-orange-200 text-lg mb-2">{selectedSign.dates}</p>
                                <p className="text-white/80 mb-6">{selectedSign.description}</p>

                                <div className="bg-white/5 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Your 2025 Forecast</h3>
                                    <p className="text-white/90 leading-relaxed">
                                        2025 brings transformative energy for {selectedSign.name}. As a {selectedSign.element.toLowerCase()} sign,
                                        you'll find new opportunities for growth and self-discovery. This year emphasizes personal development,
                                        meaningful relationships, and achieving long-held goals. Trust your intuition and embrace the changes ahead.
                                    </p>
                                </div>

                                <button
                                    className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
                                    onClick={() => setSelectedSign(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Footer text */}
                    <div className="text-center mt-12">
                        <p className="text-orange-200 text-lg">
                            Click on any zodiac sign to discover what 2025 has in store for you!
                        </p>
                    </div>
                </div>
            </div>
    );
};

export default YearlyHoroscope2025;