import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import carousel_item1svg from "@/public/carousel_item1.svg";
import carousel_item2svg from "@/public/carousel_item2.svg";
import carousel_item3svg from "@/public/carousel_item3.svg";
import carousel_item4 from "@/public/carousel_item4.png";

const CarouselSection = () => {
  return (
    <div className="flex flex-col items-center py-10 md:px-10 md:min-h-[80vh] max-md:py-14 justify-evenly">
      <h1 className="text-violetBlue md:text-5xl text-4xl font-jua mb-3">
        Our Features
      </h1>

      <Carousel opts={{ loop: true }} className="max-w-[100vw]">
        <CarouselContent className="-ml-3 ">
          <CarouselItem className="flex flex-col items-center justify-center md:basis-1/3">
            <Image
              src={carousel_item1svg}
              alt="student"
              className="w-[185px] h-[185px]"
            />

            <h2 className="text-violetBlue text-xl font-bold font-kumbh_sans">
              Tailored For College Life
            </h2>

            <p className="text-justify  font-kumbh_sans font-[400] text-[#545656] leading-5 w-[85%] mt-4">
              Our solution is uniquely designed for college students, providing
              practical and student-focused functionalities that cater to their
              daily needs and challenges.{" "}
            </p>
          </CarouselItem>

          <CarouselItem className="flex flex-col items-center justify-center md:basis-1/3">
            <Image
              src={carousel_item2svg}
              alt="student"
              className="w-[185px] h-[185px]"
            />

            <h2 className="text-violetBlue text-xl font-bold font-kumbh_sans">
              Reliable Tracking{" "}
            </h2>

            <p className="text-justify text-s font-kumbh_sans font-[400] text-[#545656] leading-5 w-[85%] mt-4">
              Our GPS technology ensures precise location tracking for accurate
              bus location updates. Continuous tracking ensures reliable updates
              even in areas with network issues.{" "}
            </p>
          </CarouselItem>

          <CarouselItem className="flex flex-col items-center justify-center md:basis-1/3">
            <Image
              src={carousel_item3svg}
              alt="student"
              className="w-[185px] h-[185px]"
            />

            <h2 className="text-violetBlue text-xl font-bold font-kumbh_sans">
              Real time precision{" "}
            </h2>

            <p className="text-justify text-s font-kumbh_sans font-[400] text-[#545656] leading-5 w-[85%] mt-4">
              Our system offers real-time precision, ensuring students can
              efficiently plan their journeys with accurate and up-to-date bus
              locations, reducing waiting times.
            </p>
          </CarouselItem>

          <CarouselItem className="flex flex-col items-center justify-center md:basis-1/3">
            <Image
              src={carousel_item4}
              alt="student"
              className="w-[290px] h-[188px]"
            />

            <h2 className="text-violetBlue text-xl font-bold font-kumbh_sans">
              Secure data handling{" "}
            </h2>

            <p className="text-justify text-s font-kumbh_sans font-[400] text-[#545656] leading-5 w-[85%] mt-4">
              Our encryption technology safeguards student location data,
              ensuring security and privacy. This ensures peace of mind for
              users, knowing their information is protected.{" "}
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="bg-transparent translate-y-[-50px]" />
        <CarouselNext className="bg-transparent translate-y-[-50px]" />
      </Carousel>
    </div>
  );
};

export default CarouselSection;
