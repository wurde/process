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

  @Field(() => Int)
  @Column("int")
  modelID: number;

  @Field({ nullable: true })
  @Column("datetime")
  createdAt: Date;
}

/**
 * Export model
 */

export default Job
