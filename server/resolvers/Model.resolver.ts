/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg } from "type-graphql";
import Model from "../models/Model";

/**
 * Define resolver
 */

@Resolver()
class ModelResolver {
  @Query(() => [Model])
  listModels() {
    return Model.find();
  }

  @Mutation(() => Model)
  async createModel(@Arg('title', () => String) title: string) {
    const m = new Model();
    m.title = title;
    await m.save();
    return m;
  }

  @Query(() => Model)
  findModel(@Arg('title', () => String) title: string) {
    return Model.findOne({ title });
  }
}

/**
 * Export resolver
 */

export default ModelResolver;
