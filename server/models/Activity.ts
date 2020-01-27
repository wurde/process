/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from "type-graphql";

/**
 * Define model
 */

@ObjectType()
@Entity()
class Activity extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column("int")
  modelID: number;

  @Field()
  @Column("text")
  title: string;

  @Field()
  @Column("text")
  description: string;

  @Field(() => [Activity])
  @Column("text")
  nextActivities: Activity[];
}

/**
 * Export model
 */

export default Activity
