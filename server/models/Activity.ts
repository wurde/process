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
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

import { Model } from "./Model";
import { MinLength, MaxLength } from "class-validator";
import { ObjectType, Field, Int } from "type-graphql";

/**
 * Define model
 */

@ObjectType({ description: "A process activity." })
@Entity("activities")
export class Activity extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(() => Model)
    @ManyToOne(type => Model)
    model: Model;

    @Field()
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @MinLength(15, { message: "Description is too short." })
    @MaxLength(300, { message: "Description is too long." })
    @Column("text", { nullable: true })
    description?: string;

    @Field(() => [Activity])
    @ManyToMany(type => Activity)
    @JoinTable({ name: "next_activities" })
    nextActivities: Activity[];

    @Field({ nullable: true })
    @CreateDateColumn()
    createdAt?: Date;

    @Field({ nullable: true })
    @UpdateDateColumn()
    updatedAt?: Date;
}
