# Brakbricks RebrickableAPI

A typescript library for Rebrickable API V3

See https://rebrickable.com/api/v3/docs/

## Usage

```ts
import { RebrickableApiClient } from "@brakbricks/rebrickable-api";

const client = new RebrickableApiClient("your-super-secret-api-key");

//Search for some sets
const sets = await client.getSets({
  search: "Lambo",
});

```

## Documentation

See https://brakbricks.github.io/rebrickable-api/

## Report bugs

See https://github.com/brakbricks/rebrickable-api/issues
