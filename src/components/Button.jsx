import clsx from "clsx";
import Proptypes from "prop-types";
import Marker from "./Marker";

const Button = ({
  icon,
  children,
  href,
  extraClasses,
  onClick,
  markerFill,
}) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <img
            src={icon}
            alt="circle"
            className="size-10 mr-5 object-contain z-10"
          />
        )}
        <span className="realtive z-2 font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>
      <span className="glow-before glow-after" />
    </>
  );
  return href ? (
    <a
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        extraClasses
      )}
      href={href}
    >
      <Inner />
    </a>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        extraClasses
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

Button.propTypes = {
  icon: Proptypes.string || null,
  children: Proptypes.node,
  href: Proptypes.string || null,
  extraClasses: Proptypes.string || null,
  onClick: Proptypes.func || null,
  markerFill: Proptypes.string,
};
export default Button;
