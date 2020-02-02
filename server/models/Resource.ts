/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from "typeorm";

import { ObjectType, Field, ID } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";

/**
 * Define model
 */

@ObjectType({ description: "A process resource." })
@Entity("resources")
export class Resource extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @Column("text")
    description?: string;

    @Field({ nullable: true })
    @Column("text")
    availability?: string;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
