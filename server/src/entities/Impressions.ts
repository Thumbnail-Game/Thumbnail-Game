import { ObjectType, Field } from 'type-graphql'
import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import { Videos, UserAccount } from '.'

@ObjectType()
@Entity()
export class Impressions extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id!: number

  @Field(() => Videos)
  @ManyToOne(() => Videos, (video) => video.id)
  @JoinColumn({ name: 'video_id' })
  video_id: Videos

  @Field(() => UserAccount, { nullable: true })
  @ManyToOne(() => UserAccount, (user) => user.id, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user_id?: UserAccount

  @Field(() => String)
  @CreateDateColumn()
  createdAt: Date
}
