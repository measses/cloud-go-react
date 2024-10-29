const PostList = ({ posts }) => (
  <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post) => (
      <div key={post.id} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {post.category && (
          <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full mb-4">
            #{post.category.name}
          </span>
        )}
        <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.content}</p>
      </div>
    ))}
  </div>
);

export default PostList;
