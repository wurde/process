/**
 * Dependencies
 */

import { Query, Resolver } from 'type-graphql';

/**
 * Define resolver
 */

@Resolver()
class Hello {
  @Query(() => String)
  hello() {
    return 'Hi!';
  }
}

/**
 * Export resolver
 */

export default Hello;
