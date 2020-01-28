/**
 * Dependencies
 */

import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

/**
 * Define model
 */

@ObjectType()
@Entity("resources")
class Resource extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  title: string;

  @Field({ nullable: true })
  @Column("text")
  description?: string;

  @Field({ nullable: true })
  @Column("text")
  availability?: string;
}

/**
 * Export model
 */

export default Resource;
