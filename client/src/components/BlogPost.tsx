import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2, Send, User, Clock, Eye } from 'lucide-react';
import { apiClient } from './config/api';
import { useParams } from 'react-router-dom';

interface BlogTypes {
    blog_id: string,
    title: string,
    date: string,
    comments: number,
    tag: string,
    image: string,
    excerpt: string,
    created_by: string
}

export default function BlogPost() {
    const { blog_id } = useParams();

    const [comments, setComments] = useState([
        {
            id: 1,
            author: "Sarah Chen",
            content: "This is incredibly insightful! I've been struggling with this exact problem. Thank you for sharing your experience.",
            time: "2 hours ago",
            avatar: "SC"
        },
        {
            id: 2,
            author: "Marcus Johnson",
            content: "Great article! Could you elaborate more on the implementation details? I'd love to try this approach.",
            time: "4 hours ago",
            avatar: "MJ"
        }
    ]);

    const [newComment, setNewComment] = useState('');
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(47);
    const [blog, setBlog] = useState<BlogTypes>();

    const fetch_blog_by_id = async (id: string) => {
        try {
            const res = await apiClient.get(`blog/list/${id}`);
            const res_data: any = res.data.data
            if (res.status === 200) {
                const data: BlogTypes = {
                    blog_id: id,
                    comments: res_data.comments,
                    date: res_data.create_at,
                    excerpt: res_data.description,
                    image: `http://localhost:8000${res_data.image}`,
                    tag: "Blog",
                    title: res_data.title,
                    created_by: res_data.created_by.name
                }
                setBlog(data);
            }
        } catch (err) {
            console.error(err);
        }
    }


    const handleSubmitComment = (e: any) => {
        e.preventDefault();
        if (newComment.trim()) {
            const comment = {
                id: comments.length + 1,
                author: "You",
                content: newComment,
                time: "Just now",
                avatar: "YU"
            };
            setComments([comment, ...comments]);
            setNewComment('');
        }
    };

    const handleLike = () => {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
    };

    useEffect(() => {
        if (blog_id) {
            fetch_blog_by_id(blog_id);
        }
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-red-50 to-red-100">
            {/* Header */}


            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* Hero Image */}
                <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
                    <img
                        className="aspect-square flex items-center justify-center object-cover"
                        src={blog?.image}
                    />
                    {/* <div className="text-center text-white">
            <div className="w-24 h-24 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
            <p className="text-lg font-medium">Featured Blog Image</p>
          </div> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                {/* Blog Content */}
                <article className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                    <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center text-white font-bold mr-4">
                            {blog?.created_by.charAt(0)}
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-900">{blog?.created_by}</h3>
                            <div className="flex items-center text-gray-500 text-sm">
                                <Clock className="w-4 h-4 mr-1" />
                                <span>Published 5 hours ago • 8 min read</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        {blog?.title}
                    </h1>

                    <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                        <p>
                            {blog?.excerpt}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-8 mt-8 border-t border-gray-200">
                        <div className="flex items-center space-x-6">
                            <button
                                onClick={handleLike}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${liked
                                        ? 'bg-red-100 text-red-700'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                <Heart className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
                                <span>{likeCount}</span>
                            </button>

                            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors">
                                <MessageCircle className="w-5 h-5" />
                                <span>{comments.length}</span>
                            </button>

                            <button className="flex items-center space-x-2 text-gray-600 hover:text-red-700 transition-colors">
                                <Share2 className="w-5 h-5" />
                                <span>Share</span>
                            </button>
                        </div>
                    </div>
                </article>

                {/* Comments Section */}
                <section className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                        Discussion ({comments.length})
                    </h2>

                    {/* Comment Form */}
                    <div className="mb-8">
                        <div className="flex space-x-4">
                            <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                <User className="w-5 h-5" />
                            </div>
                            <div className="flex-1">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Ask a question or share your thoughts about this blog post..."
                                    className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                                    rows={3}
                                />
                                <div className="flex justify-end mt-3">
                                    <button
                                        onClick={handleSubmitComment}
                                        disabled={!newComment.trim()}
                                        className="flex items-center space-x-2 bg-red-900 text-white px-6 py-2 rounded-full hover:bg-red-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-4 h-4" />
                                        <span>Post Comment</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-6">
                        {comments.map((comment) => (
                            <div key={comment.id} className="flex space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-red-50 transition-colors">
                                <div className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {comment.avatar}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <h4 className="font-semibold text-gray-900">{comment.author}</h4>
                                        <span className="text-gray-500 text-sm">{comment.time}</span>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed">{comment.content}</p>
                                    <div className="flex items-center space-x-4 mt-3">
                                        <button className="text-sm text-gray-600 hover:text-red-700 transition-colors">
                                            Reply
                                        </button>
                                        <button className="flex items-center space-x-1 text-sm text-gray-600 hover:text-red-700 transition-colors">
                                            <Heart className="w-3 h-3" />
                                            <span>Like</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Comments */}
                    <div className="text-center mt-8">
                        <button className="text-red-700 hover:text-red-900 font-medium transition-colors">
                            Load more comments
                        </button>
                    </div>
                </section>
            </main>
        </div>
    );
}