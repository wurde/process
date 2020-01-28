/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID, Root } from "type-graphql";
import { MaxLength, Length } from "class-validator";
// import Activity from './Activity';

/**
 * Define model
 */

@ObjectType()
@Entity("models")
class Model extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @MaxLength(100)
  @Column("text")
  title: string;

  @Field({ nullable: true })
  @Length(30, 300) // TODO add custom error message
  @Column({ type: "text", nullable: true })
  description?: string;

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
