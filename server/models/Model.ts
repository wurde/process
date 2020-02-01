/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    OneToMany,
    JoinColumn
} from "typeorm";

import { MinLength, MaxLength } from "class-validator";
import { ObjectType, Field, Int, Root } from "type-graphql";
import { Timestamp } from "./embed/Timestamp";
import { Activity } from "./Activity";

/**
 * Define model
 */

@ObjectType({ description: "A process model." })
@Entity("models")
export class Model extends BaseEntity {
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @MaxLength(100, { message: "Title is too long." })
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @MinLength(15, { message: "Description is too short." })
    @MaxLength(300, { message: "Description is too long." })
    @Column({ type: "text", nullable: true })
    description?: string;

    @Field(() => Activity, { nullable: true })
    @OneToOne(type => Activity)
    @JoinColumn()
    initialActivity?: Activity;

    @Field(() => [Activity], { nullable: true })
    @OneToMany(type => Activity, activity => activity.model)
    @JoinColumn()
    activities?: Activity[];

    @Column(type => Timestamp)
    timestamp: Timestamp;

    @Field()
    allCapsTitle(@Root() parent: Model): string {
        return parent.title.toUpperCase();
    }
}
