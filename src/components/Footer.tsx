import { useState } from "react";
import { Button } from "antd";
import { footerLinks } from "../data";
import PopModal from "./PopModal";
import { useTranslation } from "react-i18next";

import { GrLanguage } from "react-icons/gr";


const customStyle = {
  color: "#fff",
  borderColor: "#fff",
  background: "transparent",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#555",
  },
};

const Footer = () => {
  const { i18n } = useTranslation(); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [language, setLanguage] = useState("Select a language");

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <>
      <div className="grid grid-cols-5 bg-black text-white p-8">
        {footerLinks?.map((list, index) => (
          <div key={index} className="col-span-1">
            <ul>
              {list?.map((item) => (
                <li key={item.id} className="hover:underline my-3">
                  <a href={item.url}>
                    {item.content[i18n.language as keyof typeof item.content]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="text-end">
          <Button
            className="bg-transparent border border-white text-white rounded-none langModal"
            onClick={showModal}
            style={customStyle}
          >
            <span><GrLanguage/></span>
            {language}
          </Button>
        </div>
      </div>

      <PopModal 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        handleLanguageChange={handleLanguageChange} 
      />
    </>
  );
};

export default Footer;
