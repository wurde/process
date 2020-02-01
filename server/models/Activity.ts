/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    ManyToMany,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";

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

    @Field(() => Int)
    @Column("int")
    modelID: number;

    @Field()
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @MinLength(15, { message: "Description is too short." })
    @MaxLength(300, { message: "Description is too long." })
    @Column("text", { nullable: true })
    description?: string;

    // @Field(() => [Activity])
    // @ManyToMany(type => Activity)
    // nextActivities: Activity[];

    @Field({ nullable: true })
    @CreateDateColumn()
    createdAt?: Date;

    @Field({ nullable: true })
    @UpdateDateColumn()
    updatedAt?: Date;
}
