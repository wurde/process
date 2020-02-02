/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { CreateWorkInput } from "../inputs/CreateWorkInput";
import { Work } from "../models/Work";
import { Model } from "../models/Model";

/**
 * Define resolver
 */

@Resolver(of => Work)
export class WorkResolver {
    @Query(() => [Work])
    listWork(@Arg("modelID", () => Int) id: number): Promise<Work> {
        return Work.find({ model_id: id });
    }

    @Mutation(() => Work)
    async createWork(@Arg("input") input: CreateWorkInput): Promise<Resource> {
        let m = await Model.findOne(input.modelID);
        if (!m) throw new Error("Model not found.");
        delete input.modelID;

        let w = new Work();
        w = Object.assign(w, input);
        w.model = m;
        await w.save();
        return w;
    }
}
