import deepEarth from "../assets/images/mobile/image-deep-earth.jpg";
import deepEarthDesktop from "../assets/images/desktop/image-deep-earth.jpg";
import nightArcade from "../assets/images/mobile/image-night-arcade.jpg";
import nightArcadeDesktop from "../assets/images/desktop/image-night-arcade.jpg";
import soccerTeam from "../assets/images/mobile/image-soccer-team.jpg";
import soccerTeamDesktop from "../assets/images/desktop/image-soccer-team.jpg";
import grid from "../assets/images/mobile/image-grid.jpg";
import gridDesktop from "../assets/images/desktop/image-grid.jpg";
import fromAbove from "../assets/images/mobile/image-from-above.jpg";
import fromAboveDesktop from "../assets/images/desktop/image-from-above.jpg";
import pocketBorealis from "../assets/images/mobile/image-pocket-borealis.jpg";
import pocketBorealisDesktop from "../assets/images/desktop/image-pocket-borealis.jpg";
import curiosity from "../assets/images/mobile/image-curiosity.jpg";
import curiosityDesktop from "../assets/images/desktop/image-curiosity.jpg";
import fisheye from "../assets/images/mobile/image-fisheye.jpg";
import fisheyeDesktop from "../assets/images/desktop/image-fisheye.jpg";

export default function Creations() {
  return (
    <section className="image-grid-container">
              <div className="hidden w-full md:flex md:justify-between md:items-center">
              <h2>Our creations</h2>
              <button className="btn"> See all </button>
              </div>
              <h2 className="md:hidden">Our creations</h2>
              <button className="btn order-last m-auto md:hidden"> See all </button>
              <div className="cards-container grid md:grid-cols-4">
                <div className="card group">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={deepEarthDesktop} />
                    <img src={deepEarth} alt="half globe image" />
                  </picture>
                  <h3> Deep earth </h3>
                </div>

                <div className="card group">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={nightArcadeDesktop}
                    />
                    <img src={nightArcade} alt="light image" />
                  </picture>
                  <h3>Night arcade </h3>
                </div>
                <div className="card group">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={soccerTeamDesktop} />
                    <img src={soccerTeam} alt="soccer player image" />
                  </picture>
                  <h3>Soccer team VR </h3>
                </div>
                <div className="card group">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={gridDesktop} />
                    <img src={grid} alt="car wheel image" />
                  </picture>
                  <h3>The grid </h3>
                </div>
                <div className="card group">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={fromAboveDesktop} />
                    <img src={fromAbove} alt="from above VR image" />
                  </picture>
                  <h3>From up above VR </h3>
                </div>
                <div className="card group">
                  <picture>
                    <source
                      media="(min-width: 768px)"
                      srcSet={pocketBorealisDesktop}
                    />
                    <img src={pocketBorealis} alt="" />
                  </picture>
                  <h3>Pocket borealis </h3>
                </div>
                <div className="card group">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={curiosityDesktop} />
                    <img src={curiosity} alt="" />
                  </picture>
                  <h3>The curiosity </h3>
                </div>
                <div className="card group">
                  <picture>
                    <source media="(min-width: 768px)" srcSet={fisheyeDesktop} />
                    <img src={fisheye} alt="" />
                  </picture>
                  <h3>Make it fisheye</h3>
                </div>
              </div>
            </section>
  );
}
