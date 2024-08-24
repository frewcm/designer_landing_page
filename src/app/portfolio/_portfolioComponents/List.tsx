interface List {
  img: string;
  type: string;
  location: string;
}

export default function List({ img, type, location }: List) {
  return (
    <div className="m-4 relative h-80 flex items-end justify-center">
      <img
        className="z-[-1] absolute opacity-80 w-full h-full object-cover"
        src={img}
        alt="image of a lion"
      />
      <div className="mb-2 flex flex-col gap-2">
        <p className="text-white text-xl font-bold text-center">{type}</p>
        <p className="text-white text-xl font-bold text-center">{location}</p>
      </div>
    </div>
  );
}
