import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { Restaurant, Dish } from './index';
@Entity()
export class MealCategory extends BaseEntity {

    
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

    @ManyToOne(type => Restaurant, restaurant => restaurant.mealCategories)
    @JoinColumn({
        name: 'restaurant'
    })
    restaurant: Restaurant;

    @OneToMany(type => Dish, dish => dish.meal_category)
    @JoinColumn({
        name: 'dishes'
    })
    dishes: Dish[];

}