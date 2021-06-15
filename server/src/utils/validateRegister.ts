import { UserInput } from '../resolvers/userInput'

export const validateRegister = (options: UserInput) => {
  if (!options.email.includes('@')) {
    return [
      {
        field: 'email',
        message: 'invalid email',
      },
    ]
  }

  return null
}
