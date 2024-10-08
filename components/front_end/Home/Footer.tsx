import Image from "next/image";
import Link from "next/link";
import mail from "@/public/mail.svg";
import instagram from "@/public/instagram.svg";
import youtube from "@/public/youtube.svg";
import twitter from "@/public/twitter3.svg";
import Logo from "@/public/titleLogo.svg";
import Social from "@/components/ui/Sidebar/Social";

const Footer = () => {
  return (
    <div className="text-white px-3 py-4 bg-greyfooter font-kumbh_sans text-sm md:p-10">
      <div className="md:flex">
        <div className="md:pr-10">
          <h3 className="text-yellowDark text-2xl md:text-[42px] leading-[1.5] font-semibold md:font-bold">
            About Us
          </h3>
          <p className="md:text-lg">
            Our mission is to provide students with the tools they need to
            travel efficiently and stress-free. Gone are the days of waiting at
            the bus stop unsure of when your ride will arrive. With &quot;Where
            is my bus?&quot;, you&apos;ll have real-time tracking information at
            your fingertips, ensuring you never miss a bus again.
          </p>
          <h4 className="text-yellowDark mt-8 text-base font-semibold md:text-2xl">
            Want to reach out?
          </h4>
          <Link
            href={"mailto:whereismybus22@gmail.com"}
            className="flex gap-2 md:text-lg"
          >
            <Image src={mail} alt="mail" />
            <p>whereismybus22@gmail.com</p>
          </Link>

          <div className="max-md:flex mt-8 gap-5 items-center">
            <h4 className="text-yellowDark text-base font-semibold md:text-2xl">
              Follow Us
            </h4>
            <div className="flex gap-5 md:mt-3">
              <Social
                source="https://www.instagram.com/whereismybus.tech"
                icon={instagram.src}
                alt="Instagram"
              />
              <Social
                source="https://www.youtube.com/@Whereismybus "
                icon={youtube.src}
                alt="Youtube"
              />
              <Social
                source="https://x.com/whereismybus22?t=ugT-_o-yZ_BksxELLf1YYg&s=08 "
                icon={twitter.src}
                alt="Twitter"
              />
            </div>
          </div>
          <div className="flex items-center mt-8 gap-2 md:hidden">
            <div className="flex-1">
              <h4 className="text-yellowDark text-base md:text-2xl font-semibold">
                Location:{" "}
              </h4>
              <p className="md:text-lg">
                MLR Institute of Technology,
                <br /> Dundigal,
                <br /> Police Station Road,
                <br /> Hyderabad,
                <br /> Telangana 500043
              </p>
            </div>
            <Image src={Logo} alt="logo" className="object-contain" />
          </div>
        </div>
        <div className="mt-8 max-md:hidden min-w-[30vw]">
          <div className="flex-1">
            <h4 className="text-yellowDark text-base md:text-2xl font-semibold">
              Location:{" "}
            </h4>
            <p className="md:text-lg">
              MLR Institute of Technology,
              <br /> Dundigal,
              <br /> Police Station Road,
              <br /> Hyderabad,
              <br /> Telangana 500043
            </p>
          </div>
          <Image
            src={Logo}
            alt="logo"
            className="object-contain w-[15vw] mt-10"
          />
        </div>
      </div>

      <p className="mt-8 text-yellowDark w-full text-center md:text-lg">
        © 2023. All Rights Reserved. Where is my bus?
      </p>
    </div>
  );
};

export default Footer;
