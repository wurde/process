/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    BaseEntity
} from "typeorm";

import { ObjectType, Field, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Model } from "./Model";
import { Activity } from "./Activity";
import { Job } from "./Job";
import { Resource } from "./Resource";

/**
 * Define model
 */

@ObjectType({ description: "A unit of work." })
@Entity()
export class Work extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(() => Model)
    @ManyToOne(() => Model, {
        nullable: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "model_id" })
    model: Model;

    @Field(() => Job)
    @ManyToOne(() => Job, {
        nullable: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    @JoinColumn({ name: "job_id" })
    job: Job;

    @Field(() => Activity)
    @ManyToOne(() => Job, {
        nullable: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    activity: Activity;

    @Field(() => [Resource])
    @OneToMany(
        () => Resource,
        resource => resource.model
    )
    resources: Resource[];

    @Field()
    @Column("datetime")
    startAt: Date;

    @Field({ nullable: true })
    @Column("datetime")
    endAt?: Date;

    @Field(() => Int)
    duration: number;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
