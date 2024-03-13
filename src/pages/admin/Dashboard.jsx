import React from "react";

const Dashboard = () => {
  const postCounts = {
    totalPosts: 50,
    publishedPosts: 40,
    draftPosts: 10,
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="font-bold mb-2">Total Posts</h2>
          <p className="text-xl text-blue-500">{postCounts.totalPosts}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="font-bold mb-2">Published Posts</h2>
          <p className="text-xl text-green-500">{postCounts.publishedPosts}</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="font-bold mb-2">Draft Posts</h2>
          <p className="text-xl text-yellow-500">{postCounts.draftPosts}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
