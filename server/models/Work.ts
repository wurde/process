/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import Resource from './Resource';

/**
 * Define model
 */

@ObjectType()
@Entity()
class Work extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => Int)
  @Column("int")
  activityID: number;

  @Field(() => Int)
  @Column("int")
  jobID: number;

  @Field({ nullable: true })
  @Column("text")
  title: string;

  @Field()
  @Column("datetime")
  startAt: Date;

  @Field({ nullable: true })
  @Column("datetime")
  endAt: Date;

  @Field(() => [Resource])
  resources: Resource[];

  @Field(() => Int)
  duration: number;
}

/**
 * Export model
 */

export default Work
