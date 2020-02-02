/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity
} from "typeorm";

import { ObjectType, Field, ID, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Resource } from "./Resource";

/**
 * Define model
 */

@ObjectType({ description: "A unit of work." })
@Entity()
export class Work extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(() => ID)
    modelID: number;

    @Field(() => ID)
    @Column("int")
    activityID: number;

    @Field(() => ID)
    @Column("int")
    jobID: number;

    @Field()
    @Column("datetime")
    startAt: Date;

    @Field({ nullable: true })
    @Column("datetime")
    endAt?: Date;

    @Field(() => [Resource])
    resources: Resource[];

    @Field(() => Int)
    duration: number;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
