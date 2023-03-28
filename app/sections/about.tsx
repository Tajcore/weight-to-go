import { FaAppleAlt } from "react-icons/fa";
import Image from "next/image";
export const AboutSection = () => {
  const cardObjects = [
    {
      id: 1,
      description:
        "Pre-packaged, pre-portioned and customized diet plan just for you.",
    },
    {
      id: 2,
      description:
        "Helping you lose weight, lower blood pressure and cholesterol levels",
    },
    {
      id: 3,
      description:
        "Balance your meals with a variety of foods to get all the essential vitamins and minerals your body needs",
    },
    {
      id: 4,
      description:
        "All Ingredients provided and delivered straight to your doorstep",
    },
  ];

  return (
    <section
      id="about"
      className="relative flex px-8 md:px-56 py-24 flex-col gap-14 w-full h-full md:h-screen text-white bg-teal items-start justify-center"
    >
      <Image
        fill
        src={"/fruits-2.png"}
        className="absolute left-10 hidden md:block"
        alt="fruits"
        style={{ left: "-60%", zIndex: 10, opacity: 0.85 }}
      />

      <div className="flex flex-col gap-2 justify-center items-start ">
        <h1 className="text-6xl font-bold">What We&apos;re</h1>
        <h1 className="text-6xl font-bold">All About</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-14 justify-between items-start relative">
        <div className="absolute md:top-9 left-7 top-0 border-goldenrod md:left-0 h-full md:h-0 md:w-full border-2" />
        {cardObjects.map((cardObject) => {
          return (
            <div
              key={`infographic-${cardObject.id}`}
              className="flex flex-col gap-2 justify-center items-start ml-9 md:ml-0"
            >
              <div className="relative">
                <FaAppleAlt className="text-6xl text-goldenrod" />
                <span className="absolute top-[42%] left-[46%] text-lg font-bold">
                  {cardObject.id}
                </span>
              </div>
              <div className="flex flex-col gap-2 text-sm font-medium">
                <p>{cardObject.description}</p>
                <div className="border-t border-4 border-goldenrod w-3/4" />
                <div className="border-t border-4 border-goldenrod w-1/3" />
              </div>
            </div>
          );
        })}
      </div>
      <div className="relative md:absolute md:top-[1%] md:left-[72%] p-8 md:max-w-sm  bg-forest font-semibold italic">
        <p>
          Embrace the journey of healthy eating, and remember that progress, not
          perfection, is the key to lifelong wellness.{" "}
        </p>
      </div>
    </section>
  );
};
