/* https://remixicon.com/ */

import bootstrapIcons from "../assets/bootstrapicon.symbol.svg";
import remixIcons from "../assets/remixicon.symbol.svg?url";

interface CustomIconProps extends React.SVGAttributes<SVGElement> {
  isRemixIcon?: boolean;
  icon: string;
}
export const CustomIcon = ({
  isRemixIcon = false,
  icon,
  ...rest
}: CustomIconProps): JSX.Element => {
  return (
    <svg {...rest}>
      <use
        xlinkHref={`${isRemixIcon ? remixIcons : bootstrapIcons}#${icon}`}
      ></use>
    </svg>
  );
};
