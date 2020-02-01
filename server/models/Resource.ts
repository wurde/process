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

@ObjectType({ description: "A process resource." })
@Entity("resources")
export class Resource extends BaseEntity {
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

    @Field({ nullable: true })
    @CreateDateColumn()
    createdAt?: Date;

    @Field({ nullable: true })
    @UpdateDateColumn()
    updatedAt?: Date;
}
