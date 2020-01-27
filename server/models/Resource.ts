/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

/**
 * Define model
 */

@ObjectType()
@Entity()
class Resource extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  title: string;

  @Field({ nullable: true })
  @Column("text")
  description: string;

  @Field({ nullable: true })
  @Column("text")
  availability: string;
}

/**
 * Export model
 */

export default Resource
