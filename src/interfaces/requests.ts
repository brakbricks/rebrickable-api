// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface Request {}

export interface PagedRequest extends Request {
  page?: number;
  pageSize?: number;
}

export interface OrderedRequest extends Request {
  ordering: string;
}

export type PagedOrderedRequest = PagedRequest & OrderedRequest;

export interface MinifigSearch {
  minParts?: number;
  maxParts?: number;
  inSetNum?: string;
  inThemeId?: string;
  search?: string;
}

export type MinifigSearchRequest = PagedOrderedRequest & MinifigSearch;

export interface SetSearch {
  themeId?: number;
  minYear?: number;
  maxYear?: number;
  minParts?: number;
  maxParts?: number;
  search?: string;
}

export type SetSearchRequest = PagedOrderedRequest & SetSearch;

export interface PartSearch {
  partNum?: string;
  partNums?: string[];
  partCatId?: string;
  colorId?: string;
  bricklinkId?: string;
  brickowlId?: string;
  legoId?: string;
  ldrawId?: string;
  search?: string;
}

export type PartSearchRequest = PagedOrderedRequest & PartSearch;
