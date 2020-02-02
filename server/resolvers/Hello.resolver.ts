/**
 * Dependencies
 */

import { Query, Resolver } from "type-graphql";

/**
 * Define resolver
 */

@Resolver()
export class Hello {
    @Query(() => String, {
        name: 'hi',
        description: 'A default greeting.',
        nullable: true
    })
    hello(): string {
        return 'Hello, world!';
    }
}
