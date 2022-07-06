import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';

@Entity()
export class Restaurant extends BaseEntity {

    @PrimaryColumn({
        type: 'varchar',
        length: 30
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 300
    })
    fullname: string;

}