/**
 * Dependencies
 */

import { InputType, Field } from "type-graphql";
import { MinLength, MaxLength } from "class-validator";
import { Model } from "../models/Model";

/**
 * Define input
 */

@InputType({ description: "New model data." })
export class CreateModelInput implements Partial<Model> {
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
}
