import interactiveVR from "../assets/images/mobile/image-interactive.jpg";
import interactiveVRdesktop from "../assets/images/desktop/image-interactive.jpg";

export default function InteractiveSection() {
  return (
    <section
      className="interactive-vr relative flex flex-col md:flex-row"
      aria-labelledby="interactive-heading"
    >
      {/* Mobile Image */}
      <img
        className="block md:hidden"
        src={interactiveVR}
        alt="man wearing VR"
      />

      {/* Desktop Image */}
      <img
        className="hidden md:block md:max-w-2/3 "
        src={interactiveVRdesktop}
        alt="man wearing VR"
      />
      <article className="md:absolute md:bottom-0 md:right-[-18%] top-[40%] bg-white md:p-2 md:max-w-2/3">
        <h2 id="interactive-heading" className="md:text-left md:px-8 md:py-2">
          The leader in interactive VR
        </h2>
        <p className="text-[15px] leading-6  text-center font-alata font-normal text-black opacity-50 px-8 md:text-left md:px-4">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </article>
    </section>
  );
}
