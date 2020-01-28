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

import { ObjectType, Field, ID } from "type-graphql";

/**
 * Define model
 */

@ObjectType()
@Entity("jobs")
export class Job extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => ID)
  @Column("int")
  modelID: number;

  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updatedAt?: Date;
}
