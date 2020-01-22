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
 * Assertions
 */

describe("Model", () => {
  beforeEach(() => {
    setupTestDB()
  })

  it('listModels', async () => {
    const query = `
      {
        listModels {
          title
        }
      }
    `;

    const data = await request(url, query)
    expect(data).toStrictEqual({"listModels": [{"title": "Restaurant"}]})
  })

  it('createModel', async () => {
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
});
