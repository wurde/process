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
        name: 'helloWorld',
        description: 'A default greeting.',
        nullable: true
    })
    hello() {
        return 'Hello, world!';
    }

    @Query(() => String)
    hi() {
        return 'Hi!';
    }
}
