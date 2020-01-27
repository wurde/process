/**
 * Dependencies
 */

import { Resolver, Query } from 'type-graphql';
import Job from '../models/Job';

/**
 * Define resolver
 */

@Resolver()
class JobResolver {
  @Query(() => [Job])
  listJobs() {
    return Job.find();
  }
}

/**
 * Export resolver
 */

export default JobResolver;
