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
  listModels() {
    return Model.find();
  }

  @Mutation(() => Model)
  async createModel(@Arg("input") input: CreateModelInput) {
    let m = new Model();
    m = Object.assign(m, input);
    await m.save();
    return m;
  }

  @Mutation(() => Model)
  async updateModel(
    @Arg("id", () => Int) id: number,
    @Arg("input") input: UpdateModelInput
  ) {
    let m = await Model.findOne(id);
    if (m) {
      m = Object.assign(m, input);
      await m.save();
      return m;
    }
    return null
  }

  @Query(() => Model)
  findModel(@Arg("title", () => String) title: string) {
    return Model.findOne({ title });
  }
}
