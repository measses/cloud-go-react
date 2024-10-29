const colors = [
  "bg-red-100 text-red-700",
  "bg-blue-100 text-blue-700",
  "bg-green-100 text-green-700",
  "bg-yellow-100 text-yellow-700",
  "bg-purple-100 text-purple-700",
  "bg-pink-100 text-pink-700",
  "bg-indigo-100 text-indigo-700",
  "bg-teal-100 text-teal-700",
  "bg-orange-100 text-orange-700",
];

const getRandomColorClass = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const CategoryList = ({ categories }) => (
  <div className="flex flex-wrap gap-4 mt-4">
    {categories.map((category) => (
      <div
        key={category.id}
        className={`${getRandomColorClass()} p-3 rounded shadow transition duration-300 transform hover:scale-105`}
      >
        {category.name}
      </div>
    ))}
  </div>
);

export default CategoryList;
