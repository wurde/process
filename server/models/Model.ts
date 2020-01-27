/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from "type-graphql";
import Activity from './Activity';

/**
 * Define model
 */

@ObjectType()
@Entity()
class Model extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  title: string;

  @Field(() => Activity)
  @Column("text")
  initialActivity: Activity;
}

/**
 * Export model
 */

export default Model;
