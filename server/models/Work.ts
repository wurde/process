/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    BaseEntity
} from "typeorm";

import { ObjectType, Field, ID, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { ManyToOneCascade } from "./helpers/ManyToOneCascade";
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
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Field(() => Model)
    @ManyToOne(() => Model, {
        nullable: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    model: Model;

    @Field(() => Job)
    @ManyToOne(() => Job, {
        nullable: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    })
    job: Job;

    @Field(() => Activity)
    @ManyToOneCascade(Activity)
    activity: Activity;

    @Field(() => [Resource])
    @OneToMany(() => Resource, resource => resource.model)
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
