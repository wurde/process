/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    OneToMany,
    JoinColumn
} from "typeorm";

import { ObjectType, Field, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Model } from "./Model";
import { Work } from "./Work";

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

    @Field(() => [Work])
    @OneToMany(() => Work, work => work.job, {
        cascade: ["insert"]
    })
    work: Work[];

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
