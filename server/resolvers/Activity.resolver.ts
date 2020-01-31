/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { CreateActivityInput } from "../inputs/CreateActivityInput";
import { UpdateActivityInput } from "../inputs/UpdateActivityInput";
import { Activity } from "../models/Activity";

/**
 * Define resolver
 */

@Resolver()
export class ActivityResolver {
    @Query(() => [Activity])
    listActivities() {
        return Activity.find();
    }

    @Query(() => Activity, { nullable: true })
    findActivityByID(@Arg("id", () => Int) id: number) {
        return Activity.findOne({ id });
    }

    @Query(() => Activity, { nullable: true })
    findActivityByTitle(@Arg("title", () => String) title: string) {
        return Activity.find({ title });
    }

    @Mutation(() => Activity)
    async createActivity(@Arg("input") input: CreateActivityInput) {
        let a = new Activity();
        a = Object.assign(a, input);
        await a.save();
        return a;
    }

    @Mutation(() => Activity, { nullable: true })
    async updateActivity(
        @Arg("id", () => Int) id: number,
        @Arg("input") input: UpdateActivityInput
    ) {
        let a = await Activity.findOne(id);
        if (a) {
            a = Object.assign(a, input);
            await a.save();
            return a;
        }
        return null;
    }

    @Mutation(() => Boolean)
    async removeActivity(@Arg("id", () => Int) id: number) {
        let a = await Activity.findOne(id);
        if (a) {
            await a.remove();
            return true;
        }
        return false;
    }
}
