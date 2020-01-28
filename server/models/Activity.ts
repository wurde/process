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
@Entity("activities")
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

  // TODO add custom validator to ensure contents of title are in description.
  @Field({ nullable: true })
  @Column("text")
  description?: string;

  @Field(() => [Activity])
  @ManyToMany(type => Activity)
  nextActivities: Activity[];

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

export default Activity;
