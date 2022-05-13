import { ObjectType, Field } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  BaseEntity,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { UserAccount } from './UserAccount'

@ObjectType()
@Entity()
export class LeaderboardGames extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => UserAccount)
  @ManyToOne(() => UserAccount, (user) => user.games)
  @JoinColumn({ name: 'user_id' })
  user_id: UserAccount

  @Field()
  @Column()
  score!: number

  @Field({ nullable: true })
  @Column({ nullable: true })
  gamemode: string

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date
}
