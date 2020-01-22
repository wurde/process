/**
 * Dependencies
 */

export {};
import { request } from 'graphql-request';

/**
 * Constants
 */

const url = 'http://localhost:5000/graphql';

/**
 * Assertions
 */

describe("Query", () => {
  it('hello', async () => {
    const query = `
      {
        hello
      }
    `;

    const res = await request(url, query)
    expect(res).toStrictEqual({"hello": "Hi!"})
  })
});
