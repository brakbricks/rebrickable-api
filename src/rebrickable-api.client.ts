import type { PagedResponse, Color, Minifig, MinifigPart, PartCategory, Part, PartColor, Set, SinglePartColor, Moc, SetMinifig, Theme } from "./interfaces";

const REBRICKABLE_API_BASE_URI = 'https://rebrickable.com/api/v3/lego/';

const REBRICKABLE_API_PATH_COLORS = 'colors';
const REBRICKABLE_API_PATH_ELEMENTS = 'elements';
const REBRICKABLE_API_PATH_MINIFIGS = 'minifigs';
const REBRICKABLE_API_PATH_PART_CATEGORIES = 'part_categories';
const REBRICKABLE_API_PATH_PARTS = 'parts';
const REBRICKABLE_API_PATH_SETS = 'sets';
const REBRICKABLE_API_PATH_THEMES = 'themes';

const PART_ALTERNATES = 'alternates';
const PART_COLORS = 'colors';
const PART_MINIFIGS = 'minifigs'
const PART_PARTS = 'parts';
const PART_SETS = 'sets';

export class RebrickableApiClient {
  constructor(
    private readonly apiKey: string
  ) {}

  getColors(params?: {
    page?: number;
    pageSize?: number;
    ordering?: string;
  }): Promise<PagedResponse<Color>> {
    return this.request<PagedResponse<Color>>(REBRICKABLE_API_PATH_COLORS, params);
  }

  getColor(id: number, ordering?: string): Promise<Color> {
    return this.request<Color>(`${REBRICKABLE_API_PATH_COLORS}/${id}`, ordering ? { ordering } : undefined);
  }

  getElement(id: string): Promise<Element> {
    return this.request<Element>(`${REBRICKABLE_API_PATH_ELEMENTS}/${id}`);
  }

  getMinifigs(params?: {
    page?: number;
    pageSize?: number;
    minParts?: number;
    maxParts?: number;
    inSetNum?: string;
    inThemeId?: string;
    ordering?: string;
    search?: string;
  }): Promise<PagedResponse<Minifig>> {
    return this.request<PagedResponse<Minifig>>(REBRICKABLE_API_PATH_MINIFIGS, params);
  }

  getMinifig(setNum: string): Promise<Minifig> {
    return this.request<Minifig>(`${REBRICKABLE_API_PATH_MINIFIGS}/${setNum}`);
  }

  getMinifigParts(setNum: string, params?: {
    page?: number;
    pageSize?: number;
  }): Promise<PagedResponse<MinifigPart>> {
    return this.request<PagedResponse<MinifigPart>>(`${REBRICKABLE_API_PATH_MINIFIGS}/${setNum}/${PART_PARTS}`, params);
  }
    
  getMinifigSets(setNum: string, params?: {
    page?: number;
    pageSize?: number;
    ordering?: string;
  }): Promise<PagedResponse<Set>> {
    return this.request<PagedResponse<Set>>(`${REBRICKABLE_API_PATH_MINIFIGS}/${setNum}/${PART_SETS}`, params);
  }

  getPartCategories(params?: {
    page?: number;
    pageSize?: number;
    ordering?: string;
  }): Promise<PagedResponse<PartCategory>> {
    return this.request<PagedResponse<PartCategory>>(REBRICKABLE_API_PATH_PART_CATEGORIES, params);
  }

  getPartCategory(id: number, params?: {
    ordering?: string;
  }): Promise<PartCategory> {
    return this.request<PartCategory>(`${REBRICKABLE_API_PATH_PART_CATEGORIES}/${id}`, params);
  }

  getParts(): Promise<PagedResponse<Part>> {
    return this.request<PagedResponse<Part>>(REBRICKABLE_API_PATH_PARTS);
  }

  getPart(partNum: string): Promise<Part> {
    return this.request<Part>(`${REBRICKABLE_API_PATH_PART_CATEGORIES}/${partNum}`);
  }

  getPartColors(partNum: string): Promise<PagedResponse<PartColor>> {
    return this.request<PagedResponse<PartColor>>(`${REBRICKABLE_API_PATH_PART_CATEGORIES}/${partNum}/${PART_COLORS}`);
  }

  getPartColor(partNum: string, colorId: number): Promise<SinglePartColor> {
    return this.request<SinglePartColor>(`${REBRICKABLE_API_PATH_PART_CATEGORIES}/${partNum}/${PART_COLORS}/${colorId}`);
  }

  getPartColorSets(partNum: string, colorId: number): Promise<PagedResponse<Set>> {
    return this.request<PagedResponse<Set>>(`${REBRICKABLE_API_PATH_PART_CATEGORIES}/${partNum}/${PART_COLORS}/${colorId}/${PART_SETS}`);
  }

  getSets(params: {
    page?: number;
    pageSize?: number;
    themeId?: number;
    minYear?: number;
    maxYear?: number;
    minParts?: number;
    maxParts?: number;
    ordering?: string;
    search?: string;
  }): Promise<PagedResponse<Set>> {
    return this.request<PagedResponse<Set>>(REBRICKABLE_API_PATH_SETS, params);
  }

  getSet(setNum: string): Promise<Set> {
    return this.request<Set>(`${REBRICKABLE_API_PATH_SETS}/${setNum}`);
  }

  getSetAlternates(setNum: string): Promise<PagedResponse<Moc>> {
    return this.request<PagedResponse<Moc>>(`${REBRICKABLE_API_PATH_SETS}/${setNum}/${PART_ALTERNATES}`);
  }

  getSetMinifigs(setNum: string): Promise<PagedResponse<SetMinifig>> {
    return this.request<PagedResponse<SetMinifig>>(`${REBRICKABLE_API_PATH_SETS}/${setNum}/${PART_MINIFIGS}`);
  }

  getSetParts(setNum: string): Promise<PagedResponse<Part>> {
    return this.request<PagedResponse<Part>>(`${REBRICKABLE_API_PATH_SETS}/${setNum}/${PART_PARTS}`);
  }

  getSetSets(setNum: string): Promise<PagedResponse<Set>> {
    return this.request<PagedResponse<Set>>(`${REBRICKABLE_API_PATH_SETS}/${setNum}/${PART_SETS}`);
  }

  getThemes(): Promise<PagedResponse<Theme>> {
    return this.request<PagedResponse<Theme>>(REBRICKABLE_API_PATH_THEMES);
  }
    
  getTheme(id: number): Promise<Theme> {
    return this.request<Theme>(`${REBRICKABLE_API_PATH_THEMES}/${id}`);
  }

  private async request<T>(
    url: string,
    data?: Record<string, string | number>,
    method: string = 'GET'
  ): Promise<T> {
    const urlObj = new URL(`${REBRICKABLE_API_BASE_URI}/${url}`);
    urlObj.search = new URLSearchParams(
      this.objectToSnakeCase(data)
    ).toString();

    const response = await fetch(urlObj, {
      method,
      headers: {
        "Authorization": `key ${this.apiKey}`,
      },
    });
    
    return response.json();
  }

  private objectToSnakeCase(object?: Record<string, string | number>): Record<string, string> | undefined {
    if (object === undefined) {
      return object;
    }

    return Object.fromEntries (
      Object.entries(object).map(([key, val]) => [this.convertCamelToSnake(key), val + '']),
    );
  }

  private convertCamelToSnake(str: string): string {
    return str.replace(/([a-zA-Z])(?=[A-Z])/g,'$1_').toLowerCase()
  }
}
