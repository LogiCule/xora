import Button from "./Button";
import PropTypes from "prop-types";

const FeatureCard = ({ id, icon, title, caption, text, button }) => {
  return (
    <div
      className="relative z-2 md:px-10 px-5 md:pb-10 pb-5 flex-50 max-md:g7 max-md:border-2 max-md:border-s3 max-md:rounded-3xl max-md:flex-320"
      key={id}
    >
      <div className="w-full flex justify-start items-start">
        <div className="-ml-3 mb-12 flex items-center justify-center flex-col">
          <div className="w-0.5 h-16 bg-s3" />
          <img src={icon} className="size-28 object-contain" alt={title} />
        </div>
      </div>

      <p className="caption mb-5 max-md:mb-6 ">{caption}</p>
      <h2 className="max-w-400 mb-7 h3 text-p4 max-md:mb-6 max:md:h5">
        {title}
      </h2>
      <p className="mb-11 body-1 max-md:mb-8 max-md:body-3">{text}</p>
      <Button icon={button.icon}>{button.title}</Button>
    </div>
  );
};
FeatureCard.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string,
  caption: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.object,
};
export default FeatureCard;
