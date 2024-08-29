import { RebrickableApiClient } from "./rebrickable-api.client";

describe(RebrickableApiClient, () => {
  it("is defined", () => {
    const client = new RebrickableApiClient("token");
    expect(client).toBeDefined();
  });
});
