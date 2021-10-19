import {
  Resolver,
  Mutation,
  Arg,
  Field,
  ObjectType,
  Query,
  Int,
} from 'type-graphql'
import { getConnection } from 'typeorm'

import { UserAccount } from '../entities/index'
import { UserInput } from './userInput'

@ObjectType()
class FieldError {
  @Field()
  field: string
  @Field()
  message: string
}

@ObjectType()
//  return the errors associated and the user
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => UserAccount, { nullable: true })
  user?: UserAccount
}

@Resolver(UserAccount)
export class UserResolver {
  @Query(() => UserAccount, { nullable: true })
  async user(@Arg('uid', () => String, { nullable: true }) uid: string | null) {
    const user = await UserAccount.findOne({ where: { uid } })

    if (!user) return null

    return user
  }

  @Query(() => UserAccount, { nullable: true })
  async userByDisplayName(
    @Arg('displayName', () => String, { nullable: true })
    displayName: string | null
  ) {
    const user = await UserAccount.findOne({ where: { displayName } })

    if (!user) return null

    return user
  }

  @Query(() => [UserAccount], { nullable: true })
  users() {
    const users = UserAccount.find()

    if (!users) return null

    return users
  }

  @Mutation(() => UserResponse)
  async createUser(@Arg('options') options: UserInput): Promise<UserResponse> {
    let user
    try {
      const result = await getConnection()
        .createQueryBuilder()
        .insert()
        .into(UserAccount)
        .values({
          uid: options.uid,
          displayName: options.displayName,
          email: options.email,
          photoURL: options.photoURL,
        })
        .returning('*')
        .execute()
      user = result.raw[0]
    } catch (err) {
      if (err.code === '23505') {
        return {
          errors: [
            {
              field: 'username',
              message: 'username already taken',
            },
          ],
        }
      }
    }

    return { user }
  }

  @Mutation(() => Boolean)
  updateHighscore(
    @Arg('uid', () => String) uid: string,
    @Arg('highscore', () => Int) highscore: number
  ) {
    UserAccount.update(
      { uid },
      {
        highscore,
      }
    )
    return true
  }
}
