import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="bg-black text-gray-400 py-12 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div>
          <h2 className="sm:text-start md:text-center text-center font-bold mb-5">
            About us
          </h2>
          <p className="sm:text-start md:text-center text-center">
            At Harmony Academy, we believe in the transformative power of music.
            Our mission is to inspire and nurture the next generation of music.
          </p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold mb-5">Quick links</h2>
          <p className="hover:text-white cursor-pointer">Home</p>
          <p className="hover:text-white cursor-pointer">Courses</p>
          <p className="hover:text-white cursor-pointer">Webinar</p>
          <p className="hover:text-white cursor-pointer">Contact</p>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="font-bold mb-5">Follow us</h2>
          <p className="hover:text-white cursor-pointer">Facebook</p>
          <p className="hover:text-white cursor-pointer">Twitter</p>
          <p className="hover:text-white cursor-pointer">Linkedin</p>
          <p className="hover:text-white cursor-pointer">Instagram</p>
        </div>
        <div>
          <h2 className="font-bold mb-5">Contact us</h2>
          <p>
            555 Smith Street, Suite 210 Riverdale Corporate Plaza, District City
            of Mumbai State of Navi mumbai New Mumbai Postal Code: 123450
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-base">© {date} Music school. All rights reserved </p>
      </div>
    </div>
  );
};

export default Footer;
