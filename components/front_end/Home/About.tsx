import Image from "next/image";
import logo from "@/public/logo.svg";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full px-7 pt-5 bg-yellowLight">
      <h2 className=" text-textGrey text-2xl font-jua">Welcome to</h2>

      <h1 className="text-violetBlue text-4xl font-jua leading-7 text-center">
        Where is my bus?
      </h1>

      <p className="text-justify text-[13px] mt-7 leading-snug font-manrope">
        Your ultimate companion for hassle-free college commutes! Designed with
        students in mind, our progressive web application provides real-time
        tracking for college buses, ensuring you never miss a ride. Join us and
        experience the convenience of knowing exactly where your bus is, every
        step of the way!
      </p>

      <Image src={logo} alt="logo" className="size-40 translate-y-[15px]" />
    </div>
  );
};

export default About;
