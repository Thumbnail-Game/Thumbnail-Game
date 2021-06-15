import { Resolver, Mutation, Arg, Field, ObjectType, Query } from 'type-graphql'
import { getConnection } from 'typeorm'
// import * as argon2 from 'argon2'

//  firebase does this validation for us
// import { validateRegister } from '../utils/validateRegister'
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
  async user(@Arg('uid') uid: string) {
    const user = await UserAccount.findOne({ where: { uid } })

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
      return {
        errors: [
          {
            field: 'username',
            message: 'there was an error creating a user',
          },
        ],
      }
    }

    return { user }
  }
}
