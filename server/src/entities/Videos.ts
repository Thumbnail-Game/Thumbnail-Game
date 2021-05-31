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
  @Column({ unique: true })
  thumbnail!: string

  @Field()
  @Column()
  views!: number

  @Field()
  @Column({ unique: true })
  url: string

  @Field()
  @Column()
  date_published: String

  @Field()
  @Column()
  channel_id: String
}
