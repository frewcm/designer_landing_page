import { portfolioList } from "@/data/data";
import List from "../_portfolioComponents/List";

export default function NavTitle({
  params,
}: {
  params: { nav_title: string };
}) {
  return (
    <div className="portfolio-grid py-10 w-11/12 md:w-10/12 mx-auto">
      {portfolioList[0][params.nav_title]?.map((list, index) => (
        <List key={index} {...list} />
      ))}
    </div>
  );
}
