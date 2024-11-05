import heroImg from "../assets/hero.png";

export default function HeroBanner() {
  return (
    <div className="grid grid-cols-1 relative h-96">
      <div className="absolute top-1/2 left-24 transform -translate-y-1/2 bg-white p-7 w-[40%] shadow-lg">
        <h2 className="text-5xl font-bold">Flash Sale — today only</h2>
        <p className="text-inherit mt-5 mr-[28%]">
          Learn (almost) anything. Courses now on sale for as low as $10.99.
        </p>
      </div>

      <div className="col-span-1">
        <img
          src={
            heroImg ||
            "https://w7.pngwing.com/pngs/326/85/png-transparent-google-logo-google-text-trademark-logo-thumbnail.png"
          }
          alt="Banner Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
