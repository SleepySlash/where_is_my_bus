import Image from "next/image";
import Link from "next/link";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import twitter from "@/public/twitter.svg";
import titleLogo from "@/public/titleLogo.svg";

const Footer = () => {
  return (
    <div className="flex flex-col justify-start text-white max-w-screen-md p-1 bg-greyfooter relative">
      <div className="flex flex-row max-w-screen ">
        <div className="flex flex-col items-start justify-start mt-5 w-60 ">
          <p className="text-yellowDark px-4 text-[12px] ">About us</p>
          <div className="flex flex-col items-center justify-center px-4 text-justify ">
            <p className="tracking-[-0.02em] text-justify text-[0.7rem] leading-2 relative font-kumbh_sans">
              Our mission is to provide students with the tools they need to
              travel efficiently and stress-free. Gone are the days of waiting
              at the bus stop unsure of when your ride will arrive. With
              &quot;Where is my bus?&quot;, you&apos;ll have real-time tracking
              information at your fingertips, ensuring you never miss a bus
              again.{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-start justify-between pl-9 mt-5 w-34">
          <p className="text-yellowDark text-[12px] ">Follow Us</p>
          <div className="flex flex-row items-start justify-between">
            <Link
              href="https://www.instagram.com/whereismybus.tech"
              className="flex flex-row gap-2"
            >
              <Image src={instagram} alt="instagram" className="size-3 " />

              <p className="tracking-[-0.02em] text-justify text-[0.55rem] leading-snug relative font-manrope">
                whereismybus.tech
              </p>
            </Link>
          </div>

          <div className="flex flex-row items-start justify-between">
            <Link
              href="https://x.com/whereismybus22?t=ugT-_o-yZ_BksxELLf1YYg&s=08"
              className="flex flex-row gap-2"
            >
              <Image src={twitter} alt="instagram" className="size-3 " />
              <p className="tracking-[-0.02em] text-justify text-[0.55rem] leading-snug relative font-manrope">
                whereismybus22
              </p>
            </Link>
          </div>

          <div className="flex flex-row items-start justify-between">
            <Link
              href="https://www.youtube.com/@Whereismybus"
              className="flex flex-row gap-2"
            >
              <Image src={youtube} alt="instagram" className="size-3 " />
              <p className="tracking-[-0.02em] text-justify text-[0.55rem] leading-snug relative font-manrope">
                whereismybus
              </p>
            </Link>
          </div>

          <Image
            src={titleLogo}
            alt="Where is my Bus"
            className="size-28 relative bottom-5 "
          />
        </div>
      </div>

      <div className="flex flex-col max-w-screen-md px-4 mt-5 tracking-wide text-justify text-[0.6rem] relative font-manrope">
        <p>
          <span className="text-yellowDark font-kumbh_sans font-bold">
            Want to Reach Out ?{" "}
          </span>
          Mail us at <b>whereismybus22@gmail.com</b>
        </p>
      </div>

      <div className="flex flex-col max-w-screen-md px-4 mr-10 mt-2 tracking-wide text-justify text-[0.6rem] relative font-manrope">
        <p>
          <span className="text-yellowDark font-kumbh_sans">Location: </span>
          MLR Institute of Technology, Dundigal Police Station Road, Hyderabad,
          Telangana 500043
        </p>
      </div>

      <p className="px-4 text-justify text-[0.8rem] my-6 font-kumbh_sans">
        <span className="text-yellowDark font-kumbh_sans font-bold">
          {" "}
          © 2023.
        </span>{" "}
        All Rights Reserved.{" "}
        <span className="text-yellowDark font-kumbh_sans font-bold">
          Where is my bus?
        </span>
      </p>
    </div>
  );
};

export default Footer;
