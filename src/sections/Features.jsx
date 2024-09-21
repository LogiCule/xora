import { Element } from "react-scroll";
import { features } from "../constants";

const Features = () => {
  return (
    <section>
      <Element name="features">
        <div className="container">
          <div className="relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hidden max-md:flex-col feature-after md:g7 max-md:border-none max-md:rounded-none max-md:gap-3">
            {features.map((feature) => {
              return (
                <div
                  className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7"
                  key={feature.id}
                >
                  {feature.title}
                </div>
              );
            })}
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Features;
