import { useState } from "react";
import { learningFocused, secoundImage } from "../data";
import SharedImage from "../common/SharedImage";

const LearningFocused = () => {
  const [showImage, setShowImage] = useState<{
    id: number;
    imageone: string;
    imagetwo: string;
  } | null>(null);

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
    <div className="grid grid-cols-2 p-4 items-start">
      <div>
        {learningFocused.map((item) => {
          const { id, imageone, label, descriptionone, descriptiontwo } = item;
          return (
            <div
              className="flex col-span-1 border-l-8 border border-purple-500 px-4 w-[500px] rounded-md bg-white items-center gap-5 py-10 my-4"
              key={id}
              onClick={() => handlePassImage(id)}
            >
              <div>
                <img
                  className="w-16"
                  src={
                    showImage?.imageone ||
                    "https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png"
                  }
                  alt="image"
                />
              </div>

              <div>
                <p className="font-bold text-[18px]">{label}</p>
                <div className="text-gray-600 text-[15px] mt-2">
                  <p>{descriptionone}</p>
                  <p>{descriptiontwo}</p>
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
  );
};

export default LearningFocused;
