/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from "typeorm";

import { ObjectType, Field, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";

/**
 * Define model
 */

@ObjectType({ description: "A process resource." })
@Entity("resources")
export class Resource extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field()
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    description?: string;

    @Field({ nullable: true })
    @Column("text", { nullable: true })
    availability?: string;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
