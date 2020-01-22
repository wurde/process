/**
 * Dependencies
 */

export {}
const { request } = require('graphql-request');

/**
 * Constants
 */

const url = 'http://localhost:5000/graphql';

/**
 * Assertions
 */

describe("Model", () => {
  it('listModels', async () => {
    const query = `
      {
        listModels {
          title
        }
      }
    `;

    const res = await request(url, query)
    expect(res).toStrictEqual({"listModels": [{"title": "Restaurant"}]})
  })
});
