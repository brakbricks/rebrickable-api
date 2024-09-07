export interface ExternalIdsDetails {
  ext_ids: (number | null)[];
  ext_descrs: string[][];
}

export interface ExternalIds {
  BrickLink?: ExternalIdsDetails;
  BrickOwl?: ExternalIdsDetails;
  LEGO?: ExternalIdsDetails;
  Peeron?: ExternalIdsDetails;
  LDraw?: ExternalIdsDetails;
}
