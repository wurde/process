/**
 * Dependencies
 */

import { Resolver, Query } from "type-graphql";
import { Job } from "../models/Job";

/**
 * Define resolver
 */

@Resolver()
export class JobResolver {
    @Query(() => [Job])
    listJobs() {
        return Job.find();
    }
}
