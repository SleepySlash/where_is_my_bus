import Navbar from "@/components/front_end/Navbar";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <div className="px-7 py-4 font-kumbh_sans min-h-[93vh] flex flex-col justify-between">
        <div className="mb-3 flex-1">
          <h2 className="text-2xl text-[#919191] font-semibold">
            Any Queries?
          </h2>
          <h1 className="text-5xl text-violetBlue font-bold">Contact Us</h1>
          {/* Name */}

          <div className="mt-5">
            <h4 className="text-violetBlue font-bold pl-4 mb-1">
              Your Name <span className="text-red-600 align-super">*</span>
            </h4>
            <input
              type="text"
              className="w-full p-4 border border-violetBlue rounded-xl"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div className="mt-3">
            <h4 className="text-violetBlue font-bold pl-4 mb-1">
              Email Id <span className="text-red-600 align-super">*</span>
            </h4>
            <input
              type="text"
              className="w-full p-4 border border-violetBlue rounded-xl"
              placeholder="Enter your email id"
            />
          </div>

          {/* Message */}
          <div className="mt-3">
            <h4 className="text-violetBlue font-bold pl-4 mb-1">
              Message <span className="text-red-600 align-super">*</span>
            </h4>
            <textarea
              name="Message"
              className="border border-violetBlue p-3 w-full min-h-[20vh] h-full rounded-xl"
              placeholder="Type your message here"
            />
          </div>
        </div>

        {/* Submit */}
        <button className="w-full bg-violetBlue rounded-xl text-white p-3 mb-3">
          Submit
        </button>
      </div>

      {/* Footer */}
      <div className="bg-yellowLight relative min-h-[20vh] p-3 flex flex-col justify-end">
        <div className="flex gap-2 items-center">
          <Image
            src={"/arrow_down.svg"}
            alt="logo"
            height={1}
            width={2}
            className="bg-white rounded-full h-6 w-6 p-2"
          />
          <p className="font-kumbh_sans font-semibold text-sm">
            whereismybus22@gmail.com
          </p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <Image
            src={"/arrow_down.svg"}
            alt="logo"
            height={1}
            width={2}
            className="bg-white rounded-full h-6 w-6 p-2"
          />
          <p className="font-kumbh_sans font-semibold text-sm">
            whereismybus22@gmail.com
          </p>
        </div>
        <div className="flex gap-2 items-center mt-2">
          <Image
            src={"/arrow_down.svg"}
            alt="logo"
            height={1}
            width={2}
            className="bg-white rounded-full h-6 w-6 p-2"
          />
          <p className="font-kumbh_sans font-semibold text-sm">
            whereismybus22@gmail.com
          </p>
        </div>
        <Image
          src={"/logo.svg"}
          alt={"Logo"}
          height={100}
          width={100}
          className="h-[15vh] aspect-square absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default ContactUs;
