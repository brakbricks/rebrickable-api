import { ExternalIds } from "./external-ids.interface";

export interface Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: ExternalIds;
}
