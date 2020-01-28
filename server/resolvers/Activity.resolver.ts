/**
 * Dependencies
 */

import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { Activity } from '../models/Activity';

/**
 * Define resolver
 */

@Resolver()
export class ActivityResolver {
  @Query(() => [Activity])
  listActivities() {
    return Activity.find();
  }

  @Mutation(() => Activity)
  async createActivity(@Arg('title', () => String) title: string) {
    const t = new Activity();
    t.title = title;
    await t.save();
    return t;
  }

  @Query(() => Activity)
  findActivity(@Arg('title', () => String) title: string) {
    return Activity.find({ title });
  }
}
