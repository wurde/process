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
class Work extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({nullable: true})
  @Column("text")
  title: string;

  @Field(() => [Activity])
  activities: Activity[];
}

/**
 * Export model
 */

export default Work
