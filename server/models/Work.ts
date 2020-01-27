/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, Int } from 'type-graphql';
import Resource from './Resource';

/**
 * Define model
 */

@ObjectType()
@Entity()
class Work extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column("int")
  activityID: number;

  @Field(() => ID)
  @Column("int")
  jobID: number;

  @Field()
  @Column("datetime")
  startAt: Date;

  @Field({ nullable: true })
  @Column("datetime")
  endAt?: Date;

  @Field(() => [Resource])
  resources: Resource[];

  @Field(() => Int)
  duration: number;
}

/**
 * Export model
 */

export default Work;
