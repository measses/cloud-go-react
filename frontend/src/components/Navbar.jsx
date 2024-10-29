import { useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { CiCoffeeCup } from "react-icons/ci";
import { MdPersonAddAlt1 } from "react-icons/md";

const Navbar = ({ setIsModalOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        {/* Başlık */}
        <h1 className="text-xl font-bold">Kategori ve Post Yönetimi</h1>

        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            <AiOutlinePlusCircle className="mr-2" />
            Yeni Kategori / Post
          </button>
          <a
            href="https://github.com/measses"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.buymeacoffee.com/mertaraz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <CiCoffeeCup />
          </a>
          <a
            href="https://bento.me/mertaraz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <MdPersonAddAlt1 />
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="flex flex-col md:hidden mt-4 space-y-4">
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false); 
            }}
            className="flex items-center bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
          >
            <AiOutlinePlusCircle className="mr-2" />
            Yeni Kategori / Post
          </button>
          
          <a
            href="https://github.com/measses"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg hover:text-gray-400"
          >
            <FaGithub className="mr-2" />
            <span>Github</span>
          </a>
          
          <a
            href="https://www.buymeacoffee.com/mertaraz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg hover:text-gray-400"
          >
            <CiCoffeeCup className="mr-2" />
            <span>Buy Me a Coffee</span>
          </a>
          
          <a
            href="https://bento.me/mertaraz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg hover:text-gray-400"
          >
            <MdPersonAddAlt1 className="mr-2" />
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
