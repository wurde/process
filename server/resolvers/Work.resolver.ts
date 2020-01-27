/**
 * Dependencies
 */

import { Resolver, Query } from 'type-graphql';
import Work from '../models/Work';

/**
 * Define resolver
 */

@Resolver()
class WorkResolver {
  @Query(() => [Work])
  listWork() {
    return Work.find();
  }
}

/**
 * Export resolver
 */

export default WorkResolver;
