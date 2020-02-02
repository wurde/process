/**
 * Dependencies
 */

import { Resolver, Query } from "type-graphql";
import { Work } from "../models/Work";

/**
 * Define resolver
 */

@Resolver(of => Work)
export class WorkResolver {
    @Query(() => [Work])
    listWork() {
        return Work.find();
    }
}
