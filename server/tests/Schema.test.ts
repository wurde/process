/**
 * Dependencies
 */

export {}
import { request } from 'graphql-request';
import { setupTestDB } from './helpers';

/**
 * Constants
 */

const url = 'http://localhost:5000/graphql';

/**
 * Config
 */

jest.setTimeout(10000);

/**
 * Assertions
 */

describe("Schema", () => {
  beforeAll(done => {
    setupTestDB(done)
  })

  it('Query.listModels', async () => {
    const query = `
      {
        listModels {
          title
        }
      }
    `;

    const data = await request(url, query)
    expect(data).toStrictEqual({
      listModels: [{ title: "Restaurant" }, { title: "Podcast" }]
    });
  })

  it('Mutation.createModel', async () => {
    const query = `
      mutation {
        createModel(title: "Cement Manufacturing") {
          title
        }
      }
    `;

    const data = await request(url, query)
    expect(data).toStrictEqual({"createModel": {"title": "Cement Manufacturing"}})
  })

  it('Query.findModel.activities', async () => {
    const query = `
      query {
        findModel(title: "Cement Manufacturing") {
          title
          activities {
            title
          }
        }
      }
    `;

    const data = await request(url, query)
    expect(data).toStrictEqual({"findModel": {
      "title": "Cement Manufacturing",
      "activities": [
        { "title": "Quarying limestone" },
        { "title": "Crushisg limestone" },
        { "title": "Blending mix" },
        { "title": "Preheating towers" },
        { "title": "Kiln" },
        { "title": "Slinker cooler" },
        { "title": "Grinding mill" },
        { "title": "Storage" },
        { "title": "Shipment" }
      ]
    }})
  })
});
