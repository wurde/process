# Process

A backend server for process modeling applications. It stores enough information to calculate bottlenecks and resource utilization. When sampling job times you can use start/end times or use explicit durations.

## Models

Our server has 5 unique types:

- [Activity](./server/models/Activity.ts)
- [Job](./server/models/Job.ts)
- [Model](./server/models/Model.ts)
- [Resource](./server/models/Resource.ts)
- [Work](./server/models/Work.ts)

## Backend API

This server uses a GraphQL API.

**Queries:**

- [Models](#querying-models)
- [Activities](#querying-activities)
- [Jobs](#querying-jobs)
- [Work](#querying-work)
- [Resources](#querying-resources)

**Mutations**

- Models
  - [Create](#create-models)
  - [Update](#update-models)
  - [Delete](#delete-models)

- Activities
  - [Create Activities](#create-activities)
  - [Update Activities](#update-activities)
  - [Delete Activities](#delete-activities)

- Jobs
  - [Create Jobs](#create-jobs)
  - [Update Jobs](#update-jobs)
  - [Delete Jobs](#delete-jobs)

- Work
  - [Create Work](#create-work)
  - [Update Work](#update-work)
  - [Delete Work](#delete-work)

- Resources
  - [Create Resources](#create-resources)
  - [Update Resources](#update-resources)
  - [Delete Resources](#delete-resources)

## Querying Models

TODO

## License

[MIT licensed](./LICENSE)
