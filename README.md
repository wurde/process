# Process

This is a backend server for process modeling. It stores enough information to calculate bottlenecks and resource utilization. When sampling jobs you can use start/end times or use explicit work duration.

## Models

Our server has 5 unique types:

- [Activity](./server/models/Activity.ts)
- [Job](./server/models/Job.ts)
- [Model](./server/models/Model.ts)
- [Resource](./server/models/Resource.ts)
- [Work](./server/models/Work.ts)

A single process `Model` can have one or more `Activities` chained together in a directed graph. A `Job` is a unit of work that flows through the model from beginning to end. As a job enters each activity the work completed is recorded as start/end times or as an explicit duration.

## Getting started

Spin up a local GraphQL Playground with hot-reloading:

```
git clone https://github.com/wurde/process
cd process
npm install
npm run start:dev
```

## License

[MIT licensed](./LICENSE)
