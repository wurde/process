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

@ObjectType({ description: "A request for work." })
@Entity("jobs")
export class Job extends BaseEntity {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(() => ID)
    @Column("int")
    modelID: number;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
