import { useState } from "react";
import axios from "axios";
import { Dialog } from "@headlessui/react";

const Modal = ({ setIsModalOpen, fetchCategories, fetchPosts, categories }) => {
  const [isCategory, setIsCategory] = useState(true); 
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryID, setCategoryID] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (isCategory) {
        await axios.post("http://localhost:8080/categories/", { name });
        fetchCategories();
      } else {
        await axios.post("http://localhost:8080/posts/", {
          title,
          content,
          category_id: Number(categoryID), 
        });
        fetchPosts();
      }
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  
  

  return (
    <Dialog open={true} onClose={() => setIsModalOpen(false)} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded shadow-lg">
        <Dialog.Title as="h3" className="text-lg font-bold">
          {isCategory ? "Yeni Kategori Ekle" : "Yeni Post Ekle"}
        </Dialog.Title>
        
        <form onSubmit={handleSubmit} className="mt-4">
          {isCategory ? (
            <input
              type="text"
              placeholder="Kategori Adı"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded mt-2"
              required
            />
          ) : (
            <>
              <input
                type="text"
                placeholder="Başlık"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded mt-2"
                required
              />
              <textarea
                placeholder="İçerik"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-2 border rounded mt-2"
                required
              />
              <select
                value={categoryID}
                onChange={(e) => setCategoryID(e.target.value)}
                className="w-full p-2 border rounded mt-2"
                required
              >
                <option value="">Kategori Seçin</option>
                {categories.map((category) => (
                  <option key={category.ID} value={category.ID}>
                    {category.name}
                  </option>
                ))}
              </select>
            </>
          )}
          
          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => setIsCategory(!isCategory)} 
              className="text-blue-500 hover:underline"
            >
              {isCategory ? "Post Ekle" : "Kategori Ekle"}
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Kaydet
            </button>
          </div>
        </form>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Modal;
