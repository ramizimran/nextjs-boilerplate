import { merge } from "lodash";
import Container from "./Container";
import MuiTooltip from "./MuiTooltip";

export default function ComponentsOverrides(theme) {
  return merge(Container(theme), MuiTooltip(theme));
}
