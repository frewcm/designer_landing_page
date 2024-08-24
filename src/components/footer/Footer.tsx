import { IoLogoFacebook } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-24 min-h-96">
      <div className="w-11/12 md:w-10/12 mx-auto h-full grid grid-cols-4 gap-8">
        <div className="col-span-4 md:col-span-1 flex items-start justify-start">
          <img className="w-24" src="bed-logo.png" alt="" />
        </div>
        <div className="col-span-4 md:col-span-1 flex flex-col items-start justify-start gap-2 text-white text-sm">
          <p>Specific Location, with a reference</p>
          <p className="font-bold">Addis Ababa, Ethiopia</p>
          <p>0911000000 / 0911000000</p>
          <p>email@gmail.com</p>
          <div className="flex items-center gap-2 mt-2">
            <IoLogoFacebook className="opacity-50" size={30} />
            <FaXTwitter className="opacity-50" size={30} />
            <FaInstagramSquare className="opacity-50" size={30} />
            <FaLinkedin className="opacity-50" size={30} />
            <FaTelegram className="opacity-50" size={30} />
          </div>
        </div>
        <div className="w-full col-span-4 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <input
              className="w-full h-14 p-2 border border-white bg-custom focus:outline-none"
              type="text"
              placeholder="Name"
            />
            <input
              className="w-full h-14 p-2 border border-white bg-custom focus:outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full h-14 p-2 border border-white bg-custom focus:outline-none"
              type="text"
              placeholder="Phone"
            />
          </div>
          <div>
            <textarea
              className="w-full h-[120px] flex-grow py-2 px-2 border border-white bg-custom focus:outline-none"
              name="message"
              placeholder="Message"
              id=""
            ></textarea>
            <button className="w-full h-14 p-2 border border-white text-white bg-custom">
              Submit
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
