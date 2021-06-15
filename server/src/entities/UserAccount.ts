import { ObjectType, Field } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  OneToMany,
} from 'typeorm'
import { Games } from './Games'

@ObjectType()
@Entity()
export class UserAccount extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column({ unique: true })
  uid!: string

  @Field()
  @Column({ unique: true })
  displayName!: string

  @Field()
  @Column({ unique: true })
  email!: string

  @Field()
  @Column({ nullable: true })
  photoURL: string

  @Field(() => [Games])
  @OneToMany(() => Games, (game) => game.userId)
  games: Games[]

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date
}
