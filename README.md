# Brakbricks RebrickableAPI

A typescript library for Rebrickable API V3

See https://rebrickable.com/article/52664/api-version-3-documentation

This implementation follows the API documentation, so methods of the client match those described in the documentation from rebrickable.

It maps date strings from the API response to Javascript Date objects.

## Usage

Obtain an API Key for the Rebrickable API, [check here](https://rebrickable.com/article/52664/api-version-3-documentation)

```ts
import { RebrickableApiClient } from "@brakbricks/rebrickable-api";

const client = new RebrickableApiClient("your-super-secret-api-key");

//Get a single set by set
const [set] = await client.getSets({
  setNumber: "42172-1",
});

const instructions = await client.getInstructionsBySetNumber("42172-1");
```

## Documentation

See https://brakbricks.github.io/rebrickable-api/

## Report bugs

See https://github.com/brakbricks/rebrickable-api/issues
