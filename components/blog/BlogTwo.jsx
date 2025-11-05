import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const BlogTwo = () => {
  const [blogsData, setBlogsData] = useState([]);
  const { theme } = useTheme();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://pratiknborkar.com/fetch-rss.php");
        const data = await res.json();
        setBlogsData(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
      {blogsData.length > 0 ? (
        blogsData.map((item, idx) => (
          <div
            key={idx}
            style={{ background: theme === "dark" ? "transparent" : "#FCF4FF" }}
            className="p-5 rounded-lg dark:border-2"
          >
            {/* Image */}
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-lg mb-3"
                loading="lazy"
              />
            </a>

            {/* Meta info */}
            <div className="flex text-sm text-gray-500 dark:text-gray-400 mb-2">
              <span>{item.date}</span>
              {item.category && <span className="ml-4">{item.category}</span>}
            </div>

            {/* Title */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold dark:text-white hover:text-red-500"
            >
              {item.title}
            </a>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              {item.description}
            </p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 dark:text-gray-400 col-span-2">
          Loading blogs...
        </p>
      )}
    </div>
  );
};

export default BlogTwo;
