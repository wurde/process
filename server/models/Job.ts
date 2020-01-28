/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from "type-graphql";

/**
 * Define model
 */

@ObjectType()
@Entity("jobs")
class Job extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column("int")
  modelID: number;

  @Field({ nullable: true })
  @Column("datetime")
  createdAt?: Date;
}

/**
 * Export model
 */

export default Job;
