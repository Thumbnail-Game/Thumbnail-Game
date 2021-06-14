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
export class Games extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => UserAccount)
  @Column({ nullable: true })
  userId: number
  @ManyToOne(() => UserAccount, (user) => user.games)
  @JoinColumn({ name: 'userId' })
  user: UserAccount

  @Field()
  @Column()
  score!: number

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date

  @Field(() => String)
  @UpdateDateColumn()
  updatedAt: Date
}
