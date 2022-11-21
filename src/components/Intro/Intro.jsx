const Intro = () => {
  return (
    <div className=" flex items-center justify-center flex-col text-center pt-20 pb-5">
      <h1 className="transition delay-150 text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 pt-5 pb-2 font-bold">
        Rusakov Artyom
      </h1>
      <p className="transition delay-150 text-xl md:text-2xl mb-9 font-medium">
        React Frontend Developer
      </p>
      <p className="transition delay-150 text-base px-5 md:px-0 max-w-xl mb-6 font-medium">
        I'm a novice web developer from Russia, Saint-Petersburg. Constantly
        learning new technologies and tools for web-development.
      </p>
      <p className="transition delay-150 text-base px-5 md:px-0 max-w-xl mb-6 font-medium">
        Welcome to my portfolio website. I built it with React, Tailwind CSS and
        Vite.
      </p>
    </div>
  );
};
export default Intro;
