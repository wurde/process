/**
 * Dependencies
 */

import { InputType, Field } from "type-graphql";
import { MinLength, MaxLength } from "class-validator";
import { Model } from "../models/Model";

/**
 * Define input
 */

@InputType({ description: "Model data changes." })
export class UpdateModelInput implements Partial<Model> {
    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    @MinLength(15, {
        message: "Description is too short."
    })
    @MaxLength(300, {
        message: "Description is too long."
    })
    description?: string;
}
