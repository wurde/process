/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, Root } from "type-graphql";
// import Activity from './Activity';

/**
 * Define model
 */

@ObjectType()
@Entity()
class Model extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  title: string;

  @Field()
  allCapsTitle(@Root() parent: Model): string {
    return parent.title.toUpperCase();
  }

  // @Field(() => Activity)
  // @Column("text")
  // initialActivity: Activity;
}

/**
 * Export model
 */

export default Model;
