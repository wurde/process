import { ManyToOne } from "typeorm";

export function ManyToOneCascade(type: any, options = {}) {
    return ManyToOne(() => type, {
        nullable: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        blah: "CASCADE",
        ...options
    });
}
