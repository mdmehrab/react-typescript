import React from "react";

const PartnersBanner: React.FC = () => {
  const logos = [
    {
      src: "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Volkswagen Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Samsung Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Cisco Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
      alt: "Vimeo Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
      alt: "P&G Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
      alt: "HP Enterprise Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Citi Logo",
    },
    {
      src: "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Ericsson Logo",
    },
  ];

  return (
    <div className="mt-14 bg-blue-gray-50 p-8">
      <p className="text-center">
        Trusted by over 16,000 companies and millions of learners around the world
      </p>
      <div className="overflow-hidden whitespace-nowrap w-full mt-6">
        <div className="flex gap-10 animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex-shrink-0">
              <img src={logo.src} alt={logo.alt} className="h-16" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersBanner;
