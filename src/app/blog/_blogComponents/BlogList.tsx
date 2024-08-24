interface BlogList {
  img: string;
  title: string;
  description: string;
  writtenBy: string;
  date: string;
}

export default function blogList({
  img,
  title,
  description,
  writtenBy,
  date,
}: BlogList) {
  return (
    <div className="blog-list w-full h-auto px-2 md:px-6 py-10 rounded-lg bg-white/20 my-10">
      <div className="w-full flex flex-col items-center justify-start">
        <img className="w-full h-[90%] object-cover" src={img} alt="" />
        <div className="py-4 w-full flex justify-between items-center">
          <p className="text-xs text-gray-400">{date}</p>
          <p className="text-xs text-gray-400">{writtenBy}</p>
        </div>
      </div>
      <div className="w-full flex flex-col gap-4">
        <p className="text-3xl font-bold">{title}</p>
        <p className="text-md hover:text-orange-500 transition duration-200 ease-in-out">
          {description}
        </p>
        <div className="w-full flex justify-start">
          <button className="px-4 py-3 rounded bg-orange-500 text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
