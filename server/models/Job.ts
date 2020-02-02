/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    JoinColumn
} from "typeorm";

import { ObjectType, Field, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Model } from "./Model";

/**
 * Define model
 */

@ObjectType({ description: "A request for work." })
@Entity("jobs")
export class Job extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(() => Model)
    @ManyToOne(() => Model, {
        nullable: false,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "model_id" })
    model: Model;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
