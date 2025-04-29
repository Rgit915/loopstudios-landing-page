import CreationCard from "./CreationCard";
import creationsData from "../data/creationsData";
export default function Creations() {
  return (
    <section
      className="image-grid-container"
      aria-labelledby="creations-heading"
    >
      <div className="hidden w-full md:flex md:justify-between md:items-center">
        <h2 id="creations-heading">Our creations</h2>
        <button className="btn"> See all </button>
      </div>
      <h2 className="md:hidden">Our creations</h2>
      <button className="btn order-last m-auto md:hidden"> See all </button>
      <div className="cards-container grid md:grid-cols-4">
        {creationsData.map((item, index) => (
          <CreationCard
            key={index}
            title={item.title}
            mobile={item.mobile}
            desktop={item.desktop}
            alt={item.alt}
          />
        ))}
      </div>
    </section>
  );
}
