import React, { useEffect, useState } from 'react';
import { Calendar, MessageCircle, Eye, ArrowRight, Phone, Mail } from 'lucide-react';
import { apiClient } from '../config/api';
import { Link, useNavigate } from 'react-router-dom';



interface CaseStudy {
  blog_id: string,
  title: string,
  date: string,
  comments: number,
  tag: string,
  image: string,
  excerpt: string,
  created_by: string
}

const CaseStudiesSection: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([])
  const navigate = useNavigate();

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'medical': return 'bg-blue-500';
      case 'karma': return 'bg-purple-500';
      case 'prediction': return 'bg-green-500';
      case 'blog': return 'bg-orange-500';
    }
  };

  const getCategoryBg = (category: string) => {
    switch (category) {
      case 'medical': return 'bg-blue-50 text-blue-700';
      case 'blog': return 'bg-orange-50 text-orange-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };


  const view_more = () => {
    navigate("/lunar-astro-blog");
  }

  const fetch_blog_data = async () => {
    try {
      const res = await apiClient.get("/blog/");
      if (res.status === 200) {
        const data = res.data.data;
        const blog_data: CaseStudy[] = [];
        data.map((blog: any) => {
          return blog_data.push({
            blog_id: blog.id,
            comments: blog.comments.length,
            created_by: blog.create_by,
            date: blog.create_at,
            excerpt: blog.description,
            image: `http://localhost:8000${blog.image}`,
            tag: "blog",
            title: blog.title
          });
        })
        setCaseStudies(blog_data);
      }
    } catch (err) {
      console.error(err);
    }
  }


  useEffect(() => {
    fetch_blog_data();
  }, [])

  return (
    <div className="min-h-1/2 bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800 mb-4 leading-tight">
            Case Studies and Research Articles based on our experience by our Expert Astrologers
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Large Featured Article */}
          <Link to={`/lunar-astro-blog/${caseStudies[0]?.blog_id}`} className='lg:col-span-2 lg:row-span-2'>
            {/* <div className="lg:col-span-2 lg:row-span-2"> */}
              <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="relative h-80 lg:h-full overflow-hidden">
                  <img
                    src={caseStudies[0]?.image}
                    alt={caseStudies[0]?.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryBg("blog")}`}>
                      {caseStudies[0]?.tag.charAt(0).toUpperCase() + caseStudies[0]?.tag.slice(1)}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">
                      {caseStudies[0]?.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-sm space-x-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {caseStudies[0]?.date}
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        {caseStudies[0]?.comments} Comment{caseStudies[0]?.comments !== 1 ? 's' : ''}
                      </div>
                      <div className="flex items-center">
                        {/* <Eye className="w-4 h-4 mr-2" />
                    {caseStudies[0].views} Views */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
          </Link>

          {/* Smaller Articles */}
          {caseStudies.slice(1).map((study) => (
            <div key={study.blog_id} className="group">
              <Link to={`/lunar-astro-blog/${study.blog_id}`} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-3 left-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getCategoryBg(study.tag)}`}>
                      {study.tag.charAt(0).toUpperCase() + study.tag.slice(1)}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight line-clamp-3 group-hover:text-red-700 transition-colors">
                    {study.title}
                  </h3>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {study.date}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {study.comments}
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-gray-400 text-sm">
                      {/* <Eye className="w-4 h-4 mr-1" />
                    {study.views} views */}
                    </div>
                    <ArrowRight className="w-5 h-5 text-red-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center">
          <button onClick={view_more} className="bg-gradient-to-r from-red-700 to-red-800 hover:from-red-800 hover:to-red-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center mx-auto">
            View More
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </div >
  );
};

export default CaseStudiesSection;