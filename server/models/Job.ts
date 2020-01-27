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
class Job extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  modelTitle: string;

  @Field({ nullable: true })
  @Column("datetime")
  createdAt: Datetime;
}

/**
 * Export model
 */

export default Job
