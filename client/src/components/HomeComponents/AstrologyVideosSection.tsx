import React, { useState } from 'react';

interface VideoData {
  id: string;
  title: string;
  thumbnail: string;
  videoUrl?: string;
}

const AstrologyVideosSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  const videos: VideoData[] = [
    {
      id: '1',
      title: 'Astrology feedback...',
      thumbnail: 'astrology-chart-1.jpg'
    },
    {
      id: '2', 
      title: 'Astrology consultation...',
      thumbnail: 'astrology-chart-2.jpg'
    },
    {
      id: '3',
      title: 'Special Positions of...',
      thumbnail: 'astrology-chart-3.jpg'
    },
    {
      id: '4',
      title: 'Astrology consultation...',
      thumbnail: 'astrology-chart-4.jpg'
    }
  ];

  const handleVideoClick = (video: VideoData) => {
    setSelectedVideo(video);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="bg-white py-16 px-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {videos.map((video) => (
            <div 
              key={video.id}
              className="cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => handleVideoClick(video)}
            >
              <div className="relative bg-gray-200 rounded-lg overflow-hidden shadow-md">
                {/* Video Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative">
                  {/* Astrology Chart Background */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full bg-white flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-1 text-xs text-gray-600">
                        {/* Simulated astrology chart */}
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Mo</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Sa</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Ju</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Ma</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center bg-red-100">As</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Me</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Ve</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Su</div>
                        <div className="w-8 h-8 border border-gray-400 flex items-center justify-center">Ra</div>
                      </div>
                    </div>
                  </div>

                  {/* YouTube Play Button */}
                  <div className="relative z-10 bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>

                  {/* Channel Icon */}
                  <div className="absolute top-3 left-3 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">LA</span>
                  </div>

                  {/* Menu Icon */}
                  <div className="absolute top-3 right-3 text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>

                {/* Video Title */}
                <div className="p-3 bg-white">
                  <h3 className="text-sm font-medium text-gray-800 truncate">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Note Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="text-gray-800 text-lg leading-relaxed">
            <span className="font-bold">Important Note:</span> While Shri Deepanshu Giri Ji has devoted his life to training what many consider the{' '}
            <span className="font-bold">best astrologers online</span>, he has chosen to focus exclusively on mentorship rather than direct client consultations. 
            His wisdom flows through our expert panel, whom he continues to guide and elevate through ongoing development.
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center">
          <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl text-lg">
            INSTANT BOOKING
          </button>
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold text-gray-800">{selectedVideo.title}</h3>
                <button 
                  onClick={closeVideo}
                  className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
              <div className="p-4">
                {/* Video Element */}
                <video 
                  className="w-full aspect-video bg-black rounded-lg"
                  controls
                  autoPlay
                  poster="/api/placeholder/800/450"
                >
                  <source src={selectedVideo.videoUrl || "/path/to/default-video.mp4"} type="video/mp4" />
                  <source src={selectedVideo.videoUrl || "/path/to/default-video.webm"} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
                <div className="mt-4">
                  <p className="text-gray-600">
                    This is a sample astrology consultation video. Replace the video source with your actual video files.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AstrologyVideosSection;