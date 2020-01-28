/**
 * Dependencies
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
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

  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updatedAt?: Date;
}

/**
 * Export model
 */

export default Work;
