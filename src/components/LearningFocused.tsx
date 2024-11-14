import { useState } from "react";
import { learningFocused } from "../data";
import SharedImage from "../common/SharedImage";

const LearningFocused = () => {
  const [business, _setBusiness] = useState(learningFocused);
  const [changeImage, setChangeImage] = useState<{ imageone?: string }>({});

  // Handles the image update when an item is clicked
  const handlePassImage = (imageone: string) => {
    setChangeImage({ imageone });
  };

  return (
    <div className="grid grid-cols-2 p-4 items-start">
      <div>
        {business.length &&
          business.map((item) => {
            const { id, imageone, label, descriptionone, descriptiontwo } = item;
            return (
              <div
                className="flex col-span-1 border-l-8 border border-purple-500 px-4 w-[500px] rounded-md bg-white items-center gap-5 py-10 my-4"
                key={id}
                onClick={() => handlePassImage(imageone)}
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
        <SharedImage imageSrc={changeImage.imageone || "https://cms-images.udemycdn.com/96883mtakkm8/7kN9RBFSMFNHzsGWsElMPi/dde73f8d1c47e046f035274e78410590/hands-on-practice.png"} />
      </div>
    </div>
  );
};

export default LearningFocused;

