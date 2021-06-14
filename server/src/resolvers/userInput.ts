import { InputType, Field } from 'type-graphql'

@InputType()
export class UserInput {
  @Field()
  uid: string
  @Field()
  displayName: string
  @Field()
  email: string
  @Field({ nullable: true })
  photoURL: string
}
