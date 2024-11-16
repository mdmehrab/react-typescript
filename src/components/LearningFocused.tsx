import { useEffect, useState } from "react";
import { learningFocused, secoundImage } from "../data";
import SharedImage from "../common/SharedImage";

const LearningFocused = () => {
  const [showImage, setShowImage] = useState<{
    id: number;
    imageone: string;
    imagetwo: string;
  } | null>(null);

  const [activeCard, setActiveCard] = useState<number | null>(null);

  useEffect(() => {
    setActiveCard(learningFocused[0].id);
  }, []);

  const handleCardClick = (id: number) => {
    setActiveCard(id);
  };

  const handlePassImage = (id: number) => {
    const selectedLearning = learningFocused.find((item) => item.id === id);
    const selectedSecoundImage = secoundImage.find((item) => item.id === id);

    if (selectedLearning && selectedSecoundImage) {
      setShowImage({
        id,
        imageone: selectedLearning.imageone,
        imagetwo: selectedSecoundImage.imagetwo,
      });
    }
  };

  return (
    <>
      <div className="bg-blue-gray-50 p-4">
        <p className="text-3xl my-6">Learning focused on your goals</p>
        <div className="grid grid-cols-2  items-start">
          <div>
            {learningFocused.map((item) => {
              const {
                id,
                imageone,
                label,
                descriptionone,
                descriptiontwo,
                icon: Icon,
                more,
                plan,
              } = item;
              return (
                <div
                  className={`flex col-span-1 border-l-8 border border-purple-500 px-4 w-[500px] rounded-md items-center gap-5 py-10 my-4 hover:bg-blue-gray-50 bg-white ${
                    activeCard === id
                      ? "border-blue-500"
                      : " border border-gray-400"
                  }`}
                  key={id}
                  onClick={() => {
                    handlePassImage(id);
                    handleCardClick(id);
                  }}
                  onMouseLeave={() => setActiveCard(id)}
                >
                  <div>
                    <img
                      className="w-16"
                      src={
                        imageone ||
                        "https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png"
                      }
                      alt="image"
                    />
                  </div>

                  <div>
                    <div className="flex place-items-center gap-4">
                      <p className="font-bold text-[18px]">{label}</p>
                      <p
                        className={`${
                          plan && `border border-purple-600 bg-blue-gray-50`
                        } text-[12px] font-bold text-purple-700 px-2  rounded-md cursor-pointer hover:bg-gray-50`}
                      >
                        {plan && <p>{plan}</p>}
                      </p>
                    </div>

                    <div className="text-gray-600 text-[15px] mt-2">
                      <p>{descriptionone}</p>
                      <p>{descriptiontwo}</p>
                      <div className="flex place-items-center gap-4 text-purple-900 font-bold cursor-pointer">
                        <p>{more && <p>{more}</p>}</p>
                        <p>{Icon && <Icon />} </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-span-1">
            {showImage ? (
              <>
                <SharedImage imageSrc={showImage.imagetwo} />
              </>
            ) : (
              <p>
                <img
                  src="https://cms-images.udemycdn.com/96883mtakkm8/4kbyXne3Slx9Sfz4nTBqdf/8ac2b75db1a118f15e2fb5dfe2bb4567/desktop-hands-on-learning-2x.png"
                  alt="image"
                />
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LearningFocused;
