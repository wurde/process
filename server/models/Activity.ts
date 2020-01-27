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

  @Field()
  @Column("text")
  title: string;
}

/**
 * Export model
 */

export default Activity
