import { ObjectType, Field } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  //   CreateDateColumn,
  //   UpdateDateColumn,
  Column,
  BaseEntity,
} from 'typeorm'

@ObjectType()
@Entity()
export class Videos extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field()
  @Column()
  title!: string

  @Field()
  @Column()
  thumbnail!: string

  @Field()
  @Column({ type: 'bigint' })
  views!: number

  @Field()
  @Column()
  date_published: String

  @Field()
  @Column()
  channel_id: String

  @Field()
  @Column()
  url: string
}
