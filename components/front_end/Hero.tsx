import hero from "@/public/hero.svg";
import pchero from "@/public/titleLogo.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import location from "@/public/location.svg";
import arrow_down from "@/public/arrow_down.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full md:flex items-center md:bg-violetBlue justify-center">
      <Image src={hero} alt="hero" className="w-full object-cover md:hidden" />
      <Image
        src={hero}
        alt="hero"
        className="w-[50vw] object-cover max-md:hidden"
      />

      <div className="flex flex-col items-center p-9 bg-grey w-full justify-center">
        <div
          className={
            "group flex flex-col gap-7 text-violetBlue font-jua text-5xl md:hidden"
          }
        >
          <div className="flex">
            <span className="tracking-tighter"> Where is</span>
            <span
              className="transform rotate-45 font-medium text-[4.5rem] group-hover:text-yellowDark relative bottom-5"
              style={{ transform: "rotate(-35deg)" }}
            >
              {" "}
              ?{" "}
            </span>
          </div>

          <div className="flex relative bottom-[4rem]">
            <span> my </span>
            <span className="text-[4.8rem] pt-1 pl-2 font-normal group-hover:text-yellowDark">
              {" "}
              BUS{" "}
            </span>
          </div>
        </div>
        <Image
          src={pchero}
          alt="Company Logo"
          className="w-[280px] mb-10 max-md:hidden"
        />

        <Link
          href="/signup"
          passHref
          className="max-md:-mt-12 w-full max-w-sm mx-10"
        >
          <Button
            variant="outline"
            className="bg-yellowDark shadow-xl border-[1.5px] border-black w-full py-5"
          >
            <Image
              src={location}
              alt="location_marker"
              className="size-6 p-[0.2rem]"
            />
            <span className="text-xl font-[600] font-manrope">Track Buses</span>
          </Button>
        </Link>

        <Link className="flex gap-2 mt-1 items-center" href={"#moreinfo"}>
          <Image
            src={arrow_down}
            alt="arrowdown"
            className="object-contain size-4"
          />
          <p className="text-lg underline">Know More</p>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
