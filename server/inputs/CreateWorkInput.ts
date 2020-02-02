/**
 * Dependencies
 */

import { InputType, Field, Int } from "type-graphql";
import { MinLength, MaxLength } from "class-validator";
import { Work } from "../models/Work";

/**
 * Define input
 */

@InputType({ description: "New work data." })
export class CreateWorkInput implements Partial<Work> {
    @Field(() => Int)
    modelID: number;

    @Field(() => Int)
    jobID: number;

    @Field(() => Int)
    activityID: number;

    @Field(() => Date, { nullable: true })
    startAt?: Date;

    @Field(() => Date, { nullable: true })
    endAt?: Date;

    @Field(() => Int, { nullable: true })
    duration?: number;
}
