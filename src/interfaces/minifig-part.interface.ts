import { Color } from "./color.interface";
import { Part } from "./part.interface";

export interface MinifigPart {
    id: number;
    inv_part_id: number;
    part: Part;
    color: Color;
    set_num: string;
    quantity: number;
    is_spare: boolean;
    element_id: string
    num_sets: number;
}
