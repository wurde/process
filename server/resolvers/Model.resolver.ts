/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Model from '../models/Model';

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
    const model = new Model();
    model.title = title;
    await model.save()
    return model;
  }
}

/**
 * Export resolver
 */

export default ModelResolver;
