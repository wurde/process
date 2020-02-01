/**
 * Dependencies
 */

import { CreateDateColumn, UpdateDateColumn } from "typeorm";

/**
 * Define embedded entity
 */

export class Timestamp {
    @CreateDateColumn()
    created: Date;

    @UpdateDateColumn()
    updated: Date;
}
