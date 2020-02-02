/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg, FieldResolver, Root, Int } from "type-graphql";
import { Model } from "../models/Model";
import { Job } from "../models/Job";
import { Work } from "../models/Work";

/**
 * Define resolver
 */

@Resolver(of => Job)
export class JobResolver {
    @Query(() => [Job])
    listJobs(@Arg("modelID", () => Int) id: number): Promise<Job> {
        return Job.find({ model_id: id });
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

    @FieldResolver()
    work(@Root() job: Job) {
        return Work.find({ job_id: job.id });
    }

    @Mutation(() => Boolean)
    async removeJob(@Arg("id", () => Int) id: number): boolean {
        let j = await Job.findOne(id);
        if (j) {
            await j.remove();
            return true;
        }
        return false;
    }
}
