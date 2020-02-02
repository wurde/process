/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Model } from "../models/Model";
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

    @Mutation(() => Job)
    async createJob(@Arg("modelID") modelID: number): Promise<Job> {
        let m = await Model.findOne(modelID);
        if (!m) throw new Error("Model not found.");

        let j = new Job();
        j.model = m;
        await j.save();
        return j;
    }
}
