/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Resource } from "../models/Resource";
import { CreateResourceInput } from "../inputs/CreateResourceInput";

/**
 * Define resolver
 */

@Resolver(of => Resource)
export class ResourceResolver {
    @Query(() => [Resource])
    listResources() {
        return Resource.find();
    }

    @Mutation(() => Resource)
    async createResource(@Arg("input") input: CreateResourceInput): Promise<Resource> {
        let r = new Resource();
        r = Object.assign(r, input);
        await r.save();
        return r;
    }
}
