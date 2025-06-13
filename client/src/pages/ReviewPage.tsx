import { useState } from 'react';
import { ArrowLeft, Play, User, Star } from 'lucide-react';

interface VideoType {
  id: number,
  title: string,
  thumbnail: string,
  videoUrl: string,
  customerName: string,
  rating: number,
  location: string
}

const ReviewPage = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoType | null>();

  // Sample video testimonials data - you can replace with actual video URLs
  const testimonials = [
    {
      id: 1,
      title: "Talk to Astrologers - Customer Review 1",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Priya Sharma",
      rating: 5,
      location: "Mumbai"
    },
    {
      id: 2,
      title: "Talk to Astrologers - Customer Review 2",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Rajesh Kumar",
      rating: 5,
      location: "Delhi"
    },
    {
      id: 3,
      title: "Talk to Astrologers - Customer Review 3",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Sunita Patel",
      rating: 4,
      location: "Ahmedabad"
    },
    {
      id: 4,
      title: "Talk to Astrologers - Customer Review 4",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Amit Singh",
      rating: 5,
      location: "Bangalore"
    },
    {
      id: 5,
      title: "Talk to Astrologers - Customer Review 5",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Meera Joshi",
      rating: 5,
      location: "Pune"
    },
    {
      id: 6,
      title: "Talk to Astrologers - Customer Review 6",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Vikram Gupta",
      rating: 4,
      location: "Jaipur"
    },
    {
      id: 7,
      title: "Talk to Astrologers - Customer Review 7",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Kavita Reddy",
      rating: 5,
      location: "Hyderabad"
    },
    {
      id: 8,
      title: "Talk to Astrologers - Customer Review 8",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
      customerName: "Rohit Verma",
      rating: 5,
      location: "Chennai"
    }
  ];

  const handleVideoPlay = (video: any) => {
    setSelectedVideo(video);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <div className="mb-8 text-center">
          <button className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition-colors duration-200 mb-6">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back To Consultation Booking
          </button>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">Customer Reviews & Testimonials</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their experience with our astrology consultations.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gray-200 cursor-pointer group"
                onClick={() => handleVideoPlay(testimonial)}>
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-orange-100 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-red-600 hover:bg-red-700 rounded-full p-4 group-hover:scale-110 transition-transform duration-200">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                  <User className="h-3 w-3 inline mr-1" />
                  Review
                </div>
              </div>

              {/* Video Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 text-sm mb-2 line-clamp-2">
                  {testimonial.title}
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-700">{testimonial.customerName}</p>
                  <div className="flex items-center">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className="text-xs text-gray-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200">
            Load More Reviews
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-full overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-800">{selectedVideo.title}</h3>
              <button
                onClick={closeVideoModal}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="aspect-video">
              <video
                controls
                autoPlay
                className="w-full h-full"
                src={selectedVideo.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-800">{selectedVideo.customerName}</p>
                  <p className="text-sm text-gray-600">{selectedVideo.location}</p>
                </div>
                <div className="flex items-center">
                  {renderStars(selectedVideo.rating)}
                  <span className="ml-2 text-sm text-gray-600">({selectedVideo.rating}/5)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;