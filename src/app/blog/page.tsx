import { blogs } from "@/data/data";
import BlogList from "./_blogComponents/BlogList";

export default function Blog() {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto flex flex-col">
      {blogs.map((blog, index) => (
        <BlogList key={index} {...blog} />
      ))}
    </div>
  );
}
