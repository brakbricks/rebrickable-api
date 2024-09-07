import { Color } from "./color.interface";
import { Part } from "./part.interface";

export interface Element {
  part: Part;
  color: Color;
  element_id: string;
  design_id: string;
  element_img_url: string;
  part_img_url: string;
}
