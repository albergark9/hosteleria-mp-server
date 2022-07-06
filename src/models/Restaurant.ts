import { Entity, Column, PrimaryColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { MealCategory } from './index';

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

    @OneToMany(type => MealCategory, mealCategory => mealCategory.restaurant)
    @JoinColumn({
        name: 'meal_categories'
    })
    mealCategories: MealCategory[];

}