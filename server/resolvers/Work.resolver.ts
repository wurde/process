/**
 * Dependencies
 */

import { Resolver, Query, Arg, Int } from "type-graphql";
import { Work } from "../models/Work";

/**
 * Define resolver
 */

@Resolver(of => Work)
export class WorkResolver {
    @Query(() => [Work])
    listWork(@Arg("modelID", () => Int) id: number): Promise<Work> {
        return Work.find({ model_id: id });
    }
}
