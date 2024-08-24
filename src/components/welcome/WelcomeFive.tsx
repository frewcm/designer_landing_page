import { FaArrowRightFromBracket } from "react-icons/fa6";

export default function WelcomeFive() {
  return (
    <section className=" w-full py-24">
      <div className="welcome-five relative w-10/12 md:w-8/12 mx-auto min-h-96 flex items-end">
        <img
          className="welcome-five z-[-1] absolute opacity-60 w-full h-full object-cover"
          src="lion.jpg"
          alt=""
        />
        <div className="w-full px-6 md:px-20 py-8 flex items-center justify-between">
          <p className="text-white font-bold text-xl md:text-3xl">
            Explore Our Lastet Work.
          </p>
          <button className="bg-orange-500 rounded-full py-2 px-1 md:py-4 md:px-2">
            <FaArrowRightFromBracket className="w-6 md:w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
