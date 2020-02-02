/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { CreateResourceInput } from "../inputs/CreateResourceInput";
import { Resource } from "../models/Resource";
import { Model } from "../models/Model";

/**
 * Define resolver
 */

@Resolver(of => Resource)
export class ResourceResolver {
    @Query(() => [Resource])
    listResources(@Arg("modelID", () => Int) id: number): Promise<Resource> {
        return Resource.find({ model_id: id });
    }

    @Mutation(() => Resource)
    async createResource(@Arg("input") input: CreateResourceInput): Promise<Resource> {
        let m = await Model.findOne(input.modelID);
        if (!m) throw new Error("Model not found.");
        delete input.modelID;

        let r = new Resource();
        r = Object.assign(r, input);
        r.model = m;
        await r.save();
        return r;
    }
}
