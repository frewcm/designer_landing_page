import PortfolioNav from "./_portfolioComponents/PortfolioNav";

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div className="w-full pt-20 pb-14 flex justify-center">
        <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-orange-500 tracking-wide">
          PORTFOLIO
        </p>
      </div>
      <PortfolioNav />
      {children}
    </div>
  );
}
