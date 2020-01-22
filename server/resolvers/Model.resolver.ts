/**
 * Dependencies
 */

import { Query, Resolver } from 'type-graphql';
import Model from '../models/Model';

/**
 * Define resolver
 */

@Resolver()
class ModelResolver {
  @Query(() => [Model])
  listModels() {
    return Model.find()
  }
}

/**
 * Export resolver
 */

export default ModelResolver;
