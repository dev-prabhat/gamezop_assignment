import Action from "./Action";
import Adventure from "./Adventure";
import Favourites from "./Favourites";
import Arcade from "./Arcade";
import Puzzle from "./Puzzle";
import Sports from "./Sports";
import Strategy from "./Strategy";
import Featured from "./Featured";
import { IconProps } from "@/types";

export const Icons: {
  [key: string]: (props: IconProps) => React.JSX.Element;
} = {
  action: Action,
  adventure: Adventure,
  'my favourites': Favourites,
  arcade: Arcade,
  "puzzle & logic": Puzzle,
  'sports & racing': Sports,
  strategy: Strategy,
  featured: Featured,
};

export const Icon = (props: IconProps) => {
  const { name } = props;
  const IconComponent = name && Icons[name.toLowerCase()];
  return IconComponent ? <IconComponent {...props} /> : null;
};

export default Icon;
