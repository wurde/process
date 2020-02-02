/**
 * Dependencies
 */

import { InputType, Field, Int } from "type-graphql";
import { MinLength, MaxLength } from "class-validator";
import { Resource } from "../models/Resource";

/**
 * Define input
 */

@InputType({ description: "New resource data." })
export class CreateResourceInput implements Partial<Resource> {
    @Field(() => Int)
    modelID: number;

    @Field()
    title: string;

    @Field({ nullable: true })
    @MinLength(15, {
        message: "Description is too short."
    })
    @MaxLength(300, {
        message: "Description is too long."
    })
    description?: string;

    @Field({ nullable: true })
    @MinLength(2, {
        message: "Availability is too short."
    })
    @MaxLength(200, {
        message: "Availability is too long."
    })
    availability?: string;
}
