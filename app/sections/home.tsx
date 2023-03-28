export const HomeContent = () => {
  return (
    <div className="px-8 md:px-24 flex flex-col justify-center items-start gap-3">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          Lose Weight
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">
          Not Your Favourite
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Foods!</h1>
      </div>

      <p className="text-md text-gray-600 w-full md:w-1/2">
        Discover the most effective weight loss program tailored to your needs
        and lifestyle, a no-deprivation, enjoyable approach to lasting weight
        loss.
      </p>
      <div className="flex flex-row justify-start items-center gap-3 font-semibold text-xs md:text-lg ">
        <button className="hover:bg-seafoam border-seafoam border-2 hover:text-white transition-all duration-75 ease-linear text-seafoam px-8 py-2 rounded-md ">
          Subscribe Now
        </button>
        <button className="hover:bg-seafoam border-seafoam border-2 hover:text-white transition-all duration-75 ease-linear text-seafoam px-8 py-2 rounded-md">
          Learn More
        </button>
      </div>
    </div>
  );
};
