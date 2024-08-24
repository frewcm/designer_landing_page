import { MutableRefObject } from "react";

interface Member {
  name: string;
  img: string;
  position: string;
  profession: string;
}
export default function Member({ name, img, position, profession }: Member) {
  return (
    <div className="member relative min-h-80 md:my-4 flex flex-col justify-end items-center gap-0.5">
      <img
        className="member z-[-1] w-full absolute h-full object-cover"
        src={img}
        alt=""
      />
      <p className="text-white text-sm font-bold">{name}</p>
      <p className="text-orange-500 text-xs">{position}</p>
      <p className="text-orange-500 text-xs mb-1">{profession}</p>
    </div>
  );
}
