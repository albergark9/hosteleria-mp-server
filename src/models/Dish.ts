import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { MealCategory } from './index';
@Entity()
export class Dish extends BaseEntity {
   
    @PrimaryGeneratedColumn('uuid')
        id: string;

    @Column({
        type: 'varchar',
        length: 300
    })
    fullname_es: string;


    @Column({
        type: 'varchar',
        length: 300
    })
    fullname_en: string;

    @Column({
        type: 'double precision',
        nullable: false,
        default: 0.0
    })
    prize: number;


    @ManyToOne(type => MealCategory, meal_category => meal_category.dishes)
    @JoinColumn({
        name: 'meal_category'
    })
    meal_category: MealCategory;

}