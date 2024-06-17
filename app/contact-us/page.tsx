import Navbar from "@/components/front_end/Navbar";
import React from "react";
import Image from "next/image";

const ContactUs = () => {
  return (
    <div>
      <Navbar />

      <div className="px-7 pt-4 pb-2 font-kumbh_sans min-h-[90vh] flex flex-col justify-between">
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
        <button className="w-full bg-violetBlue rounded-xl text-white p-3">
          Submit
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
