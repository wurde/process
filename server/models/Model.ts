/**
 * Dependencies
 */

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
    OneToOne,
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
    readonly id: number;

    @Field(() => [Activity])
    @OneToMany(() => Activity, activity => activity.model, {
        cascade: ["insert"]
    })
    activities: Activity[];

    @Field(() => Activity, { nullable: true })
    @OneToOne(() => Activity, activity => activity.model)
    @JoinColumn()
    initialActivity?: Activity;

    @Field({ nullable: true })
    initialActivityId?: number;

    @Field()
    @MaxLength(100, { message: "Title is too long." })
    @Column("text")
    title: string;

    @Field({ nullable: true })
    @MinLength(15, { message: "Description is too short." })
    @MaxLength(300, { message: "Description is too long." })
    @Column({ type: "text", nullable: true })
    description?: string;

    @Column(() => Timestamp)
    timestamp: Timestamp;

    @Field()
    allCapsTitle(@Root() parent: Model): string {
        return parent.title.toUpperCase();
    }
}
