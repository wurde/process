/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    BaseEntity
} from "typeorm";

import { ObjectType, Field, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Model } from "./Model";

/**
 * Define model
 */

@ObjectType({ description: "A process resource." })
@Entity("resources")
export class Resource extends BaseEntity {
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
