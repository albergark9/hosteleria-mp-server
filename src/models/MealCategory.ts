import { Entity, Column, PrimaryColumn,PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from 'typeorm/repository/BaseEntity';
import { Restaurant } from './index';
@Entity()
export class MealCategory extends BaseEntity {

    
    @PrimaryGeneratedColumn('uuid')
        id: string;


    @Column({
        type: 'varchar',
        length: 300
    })
    fullname: string;

    @ManyToOne(type => Restaurant, restaurant => restaurant.mealCategories)
    @JoinColumn({
        name: 'restaurant'
    })
    restaurant: Restaurant;

}