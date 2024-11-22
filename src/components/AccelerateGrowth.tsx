import { accelerateGrowth } from "../data";

const AccelerateGrowth = () => {
  return (
    <>
      <div className="bg-white p-4">
        <div className="mx-5 my-4">
          <p className="text-3xl font-bold">
            Accelerate growth — for you or your organization
          </p>
          <p className="text-gray-700">
            Reach goals faster with one of our plans or programs. Try one free
            today or contact sales to learn more.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-5 mx-5 ">
          {accelerateGrowth?.map((item) => {
            const {
              id,
              plan,
              whom,
           iconOne,
              people,
              prize,
              billed,
              button,
              buttonIcon,
            } = item;
            return (
              <div className="border border-gray-400 border-t-8 border-t-purple-400 rounded-md">
                <div className="bg-gray-100 p-4" key={id}>
                  <p className="font-bold text-1xl">{plan}</p>
                  <p className="text-gray-700 text-sm">{whom}</p>
                  <div className="flex items-center gap-2">
                    <p>
                      <span className="text-gray-500">
                        <span>
                        <item.iconOne size={20} />
                        </span>
                      </span>
                    </p>
                    <p className="text-sm text-gray-600"> {people}</p>
                  </div>
                </div>

                <div className="mx-5 my-4">
                  <p className="font-bold text-[15px]">{prize}</p>
                  <p className="text-gray-500 text-[12px]">{billed}</p>
                  <div className="flex bg-black items-center justify-center gap-2 my-4 p-2">
                    <button className="text-white font-bold">{button}</button>
                    <p className="text-white">
                      <item.buttonIcon  />
                    </p>
                  </div>
                </div>
                {item.access?.map((ele) => {
                  const { id, accessIcon: AccessIcon, accessText } = ele;

                  return (
                    <div className="m-5 " key={id}>
                      <div className="flex gap-4 items-center my-1">
                        <p className="text-green-500  ">
                          <AccessIcon />
                        </p>
                        <p className="text-sm">{accessText}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AccelerateGrowth;
