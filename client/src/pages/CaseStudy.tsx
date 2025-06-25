import React, { ChangeEvent, useEffect, useState } from "react";
import { apiClient } from "../components/config/api";
import { Link } from "react-router-dom";
import { useAuthenticate } from "../context/AuthContext";
import Loading from "../components/Loading";

interface BlogTypes {
  blog_id: string,
  title: string,
  date: string,
  comments: number,
  tag: string,
  image: string,
  excerpt: string
}


const CaseStudy: React.FC = () => {
  const [caseStudies, setCaseStudies] = useState<BlogTypes[]>([]);
  const { setLodingForPage, mainLoading } = useAuthenticate();
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<boolean>();

  const fetch_blog_data = async () => {
    setLodingForPage(true);
    try {
      const res = await apiClient.get("/blog/");
      if (res.status === 200) {
        const data = res.data.data;
        const blog_data: BlogTypes[] = [];
        data.map((blog: any) => {
          blog_data.push({
            blog_id: blog.id,
            title: blog.title,
            comments: blog.comments.length,
            date: blog.create_at,
            excerpt: blog.description,
            image: `http://localhost:8000${blog.image}`,
            tag: "Blog"
          })
        })
        setCaseStudies(blog_data);
      }
    } catch (err) {
      console.error(err);
    }
    setLodingForPage(false);
  }

  const searchBlog = () => {
    if(query.length !== 0) {

      const cs:BlogTypes[] = caseStudies;
      let study:BlogTypes[] = [];
      cs.map((blog)=>{
        if(blog.title.startsWith(query)){
          study.push(blog);
        }
      })
      setCaseStudies(study);
    }else{
      fetch_blog_data();
    }
  }

  useEffect(() => {
    fetch_blog_data();
  }, [])

  if (mainLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-red-600 mb-4">
          Astrology Consultation Case Studies
        </h1>
        <div className="flex justify-center mb-6">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border shadow-sm rouded-l-md w-1/2"
          />
          <button onClick={searchBlog} className="px-4 py-2 bg-gray-300 border border-l-0 rounded-r-md">
            🔍
          </button>
        </div>
        <p className="text-center max-w-3xl mx-auto text-gray-700 mb-6">
          Welcome to the Nakshatra Kripaa Blog section, where we share transformative
          case studies and real-life examples from our clients’ astrological
          journeys. This section aims to provide you with a deeper understanding
          of how personalized astrological consultations can bring clarity and
          solutions to various life challenges.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow outline-2 outline-gray-900"
            >
              <div className="relative">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                  {study.tag}
                </span>
              </div>
              <div className="p-4">
                <h2 className="text-md font-semibold text-red-600 mb-2">
                  {study.title}
                </h2>
                <p className="text-sm text-gray-600 mb-2">{study.excerpt}</p>
                <Link
                  to={`${study.blog_id}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  READ MORE »
                </Link>
                <div className="text-xs text-gray-500 mt-2">
                  {study.date} • {study.comments} Comment
                  {study.comments > 1 ? "s" : ""}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CaseStudy;
