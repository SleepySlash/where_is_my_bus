import hero from "@/public/hero.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import location from "@/public/location.svg";
import arrow_down from "@/public/arrow_down.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className='flex flex-row justify-center items-center w-full'>
        <Image src={hero} alt='hero' className='w-full h-[68vh] object-cover' />
      </div>

      <div className="flex flex-col items-center p-9 bg-grey w-full ">
        <div
          className={
            "group flex flex-col gap-7 text-violetBlue font-jua text-5xl"
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

        <Link href="/signup" passHref className="-mt-12 w-full mx-10">
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
  )
}

export default Hero;