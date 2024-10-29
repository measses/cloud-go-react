import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import CategoryList from "./components/CategoryList";
import PostList from "./components/PostList";
import Modal from "./components/Modal";

function App() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchPosts();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8080/categories/", { withCredentials: true });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/posts/", { withCredentials: true });
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };
  
  return (
    <div className="App p-5">
      <Navbar setIsModalOpen={setIsModalOpen} />
      <CategoryList categories={categories} />
      <PostList posts={posts} />
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          fetchCategories={fetchCategories}
          fetchPosts={fetchPosts}
          categories={categories} 
        />
      )}
    </div>
  );
}

export default App;
