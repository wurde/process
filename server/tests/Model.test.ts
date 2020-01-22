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

    const data = await request(url, query)
    expect(data).toStrictEqual({"listModels": [{"title": "datataurant"}]})
  })

  it('createModel', async () => {
    const query = `
      mutation {
        createModel(title: "Cement Manufacturing")
      }
    `;

    const data = await request(url, query)
    expect(data).toStrictEqual({"createModel": [{"title": "Cement Manufacturing"}]})
  })
});
