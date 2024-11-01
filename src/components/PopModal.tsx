import { Modal } from "antd";
import { Dispatch, SetStateAction } from "react";

interface PopModalProps {
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  handleLanguageChange: (lang: string) => void;
}

const PopModal = ({ isModalOpen, setIsModalOpen, handleLanguageChange }: PopModalProps) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Choose a language"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="hover:text-gray-500 cursor-pointer" onClick={() => handleLanguageChange("Bangla")}>
        Bangla
      </p>
      <p className="hover:text-gray-500 my-3 cursor-pointer" onClick={() => handleLanguageChange("English")}>
        English
      </p>
      <p className="hover:text-gray-500 my-3 cursor-pointer" onClick={() => handleLanguageChange("China")}>
        Chinese
      </p>
    </Modal>
  );
};

export default PopModal;
