// src/components/FacebookPost.tsx
import React from 'react';

// Define the shape of the props for our FacebookPost component
interface FacebookPostProps {
  user: {
    name: string;
    avatar: string; // URL to the user's avatar image
  };
  timestamp: string; // e.g., "2 hours ago", "Yesterday at 5:00 PM"
  content: string; // The main text content of the post
  postImage?: string; // Optional URL to an image in the post
  likes: number;
  comments: number;
}

const FacebookPost: React.FC<FacebookPostProps> = ({
  user,
  timestamp,
  content,
  postImage,
  likes,
  comments,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 max-w-xl mx-auto border border-gray-200">
      {/* Post Header */}
      <div className="flex items-center mb-3">
        <img
          src={user.avatar}
          alt={`${user.name}'s avatar`}
          className="w-10 h-10 rounded-full mr-3 border border-gray-300"
        />
        <div>
          <p className="font-semibold text-gray-800">{user.name}</p>
          <p className="text-sm text-gray-500">{timestamp}</p>
        </div>
      </div>

      {/* Post Content */}
      <p className="text-gray-700 mb-3 leading-relaxed">{content}</p>

      {/* Post Image (optional) */}
      {postImage && (
        <div className="mb-3">
          <img
            src={postImage}
            alt="Post content"
            className="w-full h-auto rounded-lg object-cover max-h-96"
          />
        </div>
      )}

      {/* Post Stats */}
      <div className="flex justify-between items-center text-gray-500 text-sm mb-3 border-b pb-2 border-gray-200">
        <div className="flex items-center">
          {/* A simple like icon, you can replace with an SVG icon */}
          <span className="mr-1 text-blue-600">👍</span>
          <span>{likes}</span>
        </div>
        <div>
          <span>{comments} Comments</span>
        </div>
      </div>

      {/* Post Actions */}
      <div className="flex justify-around text-gray-600 text-sm font-medium">
        <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          {/* Like icon placeholder */}
          <span className="mr-1">👍</span> Like
        </button>
        <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          {/* Comment icon placeholder */}
          <span className="mr-1">💬</span> Comment
        </button>
        <button className="flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200">
          {/* Share icon placeholder */}
          <span className="mr-1">🔗</span> Share
        </button>
      </div>
    </div>
  );
};

export default FacebookPost;