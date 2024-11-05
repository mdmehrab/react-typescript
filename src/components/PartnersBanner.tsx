import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay } from 'swiper/modules';

const PartnersBanner: React.FC = () => {
  const swiperOptions: SwiperProps = {
    modules: [Autoplay],
    spaceBetween: 80,
    slidesPerView: 8, // Adjust this if you have more or less than 8 logos
    autoplay: { delay: 2000, disableOnInteraction: false }, // Autoplay delay
    loop: true,
    speed: 2000, // Transition speed in milliseconds (2 seconds)
  };

  const logos = [
    {
      src: "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Volkswagen Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Samsung Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Cisco Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
      alt: "Vimeo Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
      alt: "P&G Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
      alt: "HP Enterprise Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Citi Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Ericsson Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/tqevknj7om/svg/volkswagen_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Volkswagen Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/2gevcc0kxt/svg/samsung_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Samsung Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/mueb2ve09x/svg/cisco_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Cisco Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/ryaowrcjb2/svg/vimeo_logo_resized-2.svg?position=c&quality=80&x.app=portals",
      alt: "Vimeo Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/bthyo156te/svg/procter_gamble_logo.svg?position=c&quality=80&x.app=portals",
      alt: "P&G Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/luqe0d6mx2/svg/hewlett_packard_enterprise_logo.svg?position=c&quality=80&x.app=portals",
      alt: "HP Enterprise Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/siaewwmkch/svg/citi_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Citi Logo"
    },
    {
      src: "https://cms-images.udemycdn.com/content/swmv0okrlh/svg/ericsson_logo.svg?position=c&quality=80&x.app=portals",
      alt: "Ericsson Logo"
    },
    
  ];

  return (
    <>
      <div className="mt-14 bg-blue-gray-50 p-8">
        <p className="flex justify-center items-center">
          Trusted by over 16,000 companies and millions of learners around the world
        </p>
        <div className="mt-6 p-5">
          <Swiper {...swiperOptions}>
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <img src={logo.src} alt={logo.alt} className="h-16" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      
    </>
  );
};

export default PartnersBanner;
