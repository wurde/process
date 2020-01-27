/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from "type-graphql";

/**
 * Define model
 */

@ObjectType()
@Entity()
class Activity extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column("int")
  modelID: number;

  @Field()
  @Column("text")
  title: string;

  @Field({ nullable: true })
  @Column("text")
  description?: string;

  @Field(() => [Activity])
  @Column("text")
  nextActivities: Activity[];
}

/**
 * Export model
 */

export default Activity;
