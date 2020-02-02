/**
 * Dependencies
 */

import {
    Resolver,
    Query,
    Mutation,
    Arg,
    Int,
    FieldResolver,
    Root
} from "type-graphql";

import { getConnection } from "typeorm";

import { CreateActivityInput } from "../inputs/CreateActivityInput";
import { UpdateActivityInput } from "../inputs/UpdateActivityInput";
import { Activity } from "../models/Activity";
import { Resource } from "../models/Resource";
import { Model } from "../models/Model";

/**
 * Define resolver
 */

@Resolver(of => Activity)
export class ActivityResolver {
    @Query(() => [Activity])
    listActivities(@Arg("modelID", () => Int) id: number): Promise<Activity> {
        return Activity.find({ model_id: id });
    }

    @Mutation(() => Activity)
    async createActivity(
        @Arg("input") input: CreateActivityInput
    ): Promise<Activity> {
        let m = await Model.findOne(input.modelID);
        if (!m) throw new Error("Model not found.");
        delete input.modelID;

        let a = new Activity();
        a = Object.assign(a, input);
        a.model = m;
        await a.save();
        return a;
    }

    @Mutation(() => Activity, { nullable: true })
    async updateActivity(
        @Arg("id", () => Int) id: number,
        @Arg("input") input: UpdateActivityInput
    ): Promise<Activity | null> {
        let a = await Activity.findOne(id);
        if (a) {
            a = Object.assign(a, input);
            await a.save();
            return a;
        }
        return null;
    }

    @Mutation(() => Boolean)
    async removeActivity(@Arg("id", () => Int) id: number): boolean {
        let a = await Activity.findOne(id);
        if (a) {
            await a.remove();
            return true;
        }
        return false;
    }

    @Mutation(() => Boolean)
    async addResourceToActivity(
        @Arg("activityId", () => Int) activityId: number,
        @Arg("resourceId", () => Int) resourceId: number
    ): boolean {
        let a = await Activity.findOne(activityId);
        let r = await Resource.findOne(resourceId);
        if (a && r) {
            await getConnection()
                .createQueryBuilder()
                .relation(Activity, "resources")
                .of(a)
                .add(r);
            return true;
        }
        return false;
    }

    @FieldResolver()
    resources(@Root() activity: Activity) {
        return getConnection()
            .createQueryBuilder()
            .relation(Activity, "resources")
            .of(activity)
            .loadMany();
    }
}
