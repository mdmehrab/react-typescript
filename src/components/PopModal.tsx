import { Modal } from "antd";
import { useTranslation } from "react-i18next";

interface PopModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const PopModal = ({ isModalOpen, setIsModalOpen }: PopModalProps) => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang: string) => {
    i18n.changeLanguage(lang);
    setIsModalOpen(false);
  };

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
      <p className="hover:text-gray-500 cursor-pointer" onClick={() => handleLanguageChange('bn')}>
        Bangla
      </p>
      <p className="hover:text-gray-500 my-3 cursor-pointer" onClick={() => handleLanguageChange('en')}>
        English
      </p>
      <p className="hover:text-gray-500 my-3 cursor-pointer" onClick={() => handleLanguageChange('cn')}>
        China
      </p>

    </Modal>
  );
};

export default PopModal;
