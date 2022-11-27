const PortfolioItem = ({ title, imgURL, imgAlt, stack, link }) => {
  return (
    <a
      className="transition delay-150 border-2 border-neutral-900 dark:border-neutral-100 rounded-md overflow-hidden"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
        src={imgURL}
        alt={imgAlt}
      />
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl dark:text-neutral-100 mb-2 md:text-xl mb-2 md:mb-3 font-bold">
          {title}
        </h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-neutral-100">
          {stack.map((item) => (
            <span
              key={item}
              className="transition delay-150 inline-block px-2 py-1 font-bold border-2 border-neutral-900 dark:border-neutral-100 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
};
export default PortfolioItem;
