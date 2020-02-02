/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToOne,
    ManyToMany,
    JoinTable,
    JoinColumn
} from "typeorm";

import { MinLength, MaxLength } from "class-validator";
import { ObjectType, Field, Int } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Model } from "./Model";
import { Resource } from "./Resource";

/**
 * Define model
 */

@ObjectType({ description: "A process activity." })
@Entity("activities")
export class Activity extends BaseEntity {
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

    @Field(() => [Resource])
    @ManyToMany(() => Resource)
    @JoinTable({
        name: "activity_resources",
        joinColumn: {
            name: "activity",
            referencedColumn: "id"
        },
        inverseJoinColumn: {
            name: "resource",
            referencedColumn: "id"
        }
    })
    resources: Resource[]

    @Field()
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @MinLength(15, { message: "Description is too short." })
    @MaxLength(300, { message: "Description is too long." })
    @Column("text", { nullable: true })
    description?: string;

    @Column(() => Timestamp)
    timestamp: Timestamp;
}
