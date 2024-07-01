import Image from "next/image";
import logo from "@/public/home.svg";
import bus from "@/public/logo.svg";

const About = () => {
  return (
    <div className="flex flex-col max-md:flex-between items-center w-full md:min-h-[93vh] px-7 pt-5 bg-yellowLight md:bg-white">
      <div className="md:w-[50vw] md:p-10">
        <h2 className=" text-textGrey text-2xl md:text-5xl font-jua text-center">
          Welcome to
        </h2>

        <h1 className="text-violetBlue text-4xl md:text-6xl font-jua leading-7 text-center">
          Where is my bus?
        </h1>

        <p className="text-justify text-[13px] mt-7 md:mt-14 max-md:leading-snug font-manrope md:text-xl md:text-center">
          Your ultimate companion for hassle-free college commutes! Designed
          with students in mind, our progressive web application provides
          real-time tracking for college buses, ensuring you never miss a ride.
          Join us and experience the convenience of knowing exactly where your
          bus is, every step of the way!
        </p>
      </div>

      <Image
        src={logo}
        alt="logo"
        className="size-40 max-md:translate-y-[15px] md:h-full md:object-cover max-md:hidden md:w-[45vw]"
      />
      <Image src={bus} alt="bus" className="md:hidden translate-y-[15px]" />
    </div>
  );
};

export default About;
