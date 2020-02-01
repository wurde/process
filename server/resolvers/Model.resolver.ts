/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg, Int } from "type-graphql";
import { CreateModelInput } from "../inputs/CreateModelInput";
import { UpdateModelInput } from "../inputs/UpdateModelInput";
import { Model } from "../models/Model";

/**
 * Define resolver
 */

@Resolver()
export class ModelResolver {
    @Query(() => [Model])
    listModels(): Promise<Model[]> {
        return Model.find();
    }

    @Query(() => Model, { nullable: true })
    findModelByID(@Arg("id", () => Int) id: number): Promise<Model> {
        return Model.findOne({ id });
    }

    @Query(() => Model, { nullable: true })
    findModelByTitle(@Arg("title", () => String) title: string): Promise<Model> {
        return Model.findOne({ title });
    }

    @Mutation(() => Model)
    async createModel(@Arg("input") input: CreateModelInput): Promise<Model> {
        let m = new Model();
        m = Object.assign(m, input);
        await m.save();
        return m;
    }

    @Mutation(() => Model, { nullable: true })
    async updateModel(
        @Arg("id", () => Int) id: number,
        @Arg("input") input: UpdateModelInput
    ): Promise<Model | null> {
        let m = await Model.findOne(id);
        if (m) {
            m = Object.assign(m, input);
            await m.save();
            return m;
        }
        return null;
    }

    @Mutation(() => Boolean)
    async removeModel(@Arg("id", () => Int) id: number): boolean {
        let m = await Model.findOne(id);
        if (m) {
            await m.remove();
            return true;
        }
        return false;
    }
}
