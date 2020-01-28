/**
 * Dependencies
 */

import { InputType, Field } from "type-graphql";
import { MinLength, MaxLength } from "class-validator";
import { Activity } from "../models/Activity";

/**
 * Define input
 */

@InputType({ description: "New activity data." })
export class CreateActivityInput implements Partial<Activity> {
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
