import { Modal } from "antd";

interface PopModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const PopModal = ({ isModalOpen, setIsModalOpen }: PopModalProps) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        title="Choose a language"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p className="hover:text-gray-500 cursor-pointer">Bangla</p>
        <p className="hover:text-gray-500 my-3 cursor-pointer">English</p>
      </Modal>
    </>
  );
};

export default PopModal;
