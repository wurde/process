/**
 * Dependencies
 */

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

import { MinLength, MaxLength } from "class-validator";
import { ObjectType, Field, ID, Root } from "type-graphql";
import { MaxLength, Length } from "class-validator";
import { Activity } from "./Activity";

/**
 * Define model
 */

@ObjectType({ description: "A process model." })
@Entity("models")
export class Model extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @MaxLength(100)
  @Column("text")
  title: string;

  @Field({ nullable: true })
  @MinLength(30, {
    message: "Description is too short."
  })
  @MaxLength(300, {
    message: "Description is too long."
  })
  @Column({ type: "text", nullable: true })
  description?: string;

  // @Field(() => Activity)
  // @OneToOne(type => Activity)
  // @JoinColumn()
  // initialActivity: Activity;

  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt?: Date;

  @Field({ nullable: true })
  @UpdateDateColumn()
  updatedAt?: Date;

  @Field()
  allCapsTitle(@Root() parent: Model): string {
    return parent.title.toUpperCase();
  }
}
