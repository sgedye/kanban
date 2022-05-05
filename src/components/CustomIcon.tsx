/* https://remixicon.com/ */

import bootstrapIcons from "../assets/bootstrapicon.symbol.svg";
import customIcons from "../assets/customicons.symbol.svg?url";
import remixIcons from "../assets/remixicon.symbol.svg?url";

interface CustomIconProps extends React.SVGAttributes<SVGElement> {
  iconType: "bootstrapIcons" | "customIcons" | "remixIcons";
  icon: string;
}
export const CustomIcon = ({
  iconType,
  icon,
  ...rest
}: CustomIconProps): JSX.Element | null => {
  switch (iconType) {
    case "bootstrapIcons":
      return (
        <svg {...rest}>
          <use xlinkHref={`${bootstrapIcons}#${icon}`}></use>
        </svg>
      );
    case "customIcons":
      return (
        <svg {...rest}>
          <use xlinkHref={`${customIcons}#${icon}`}></use>
        </svg>
      );
    case "remixIcons":
      return (
        <svg {...rest}>
          <use xlinkHref={`${remixIcons}#${icon}`}></use>
        </svg>
      );
    default:
      return null;
  }
};
