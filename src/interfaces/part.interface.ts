export interface Part {
    part_num: string;
    name: string;
    part_cat_id: number;
    year_from?: number;
    year_to?: number;
    part_url: string;
    part_img_url: string;
    prints?: string[];
    molds?: string[];
    alternates?: string[];
    external_ids: {
        BrickLink: string[];
        BrickOwl: string[];
        BrickSet: string[];
        LDRaw: string[];
        LEGO: string[];
    };
    print_of: number | null
}
