import { IUser } from 'interfaces/IUser'
import User from 'models/userModel'

export const createUser = async (input: IUser) => {
  const { firstName, lastName, email, password } = input

  try {
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      throw new Error('User with this email already exists')
    }

    const user = new User(input)

    await user.save()

    return user.toObject({
      versionKey: false,
      transform: (doc, ret) => {
        delete ret.password
        return ret
      },
    })
  } catch (error) {
    throw new Error(`Error creating user: ${error.message}`)
  }
}
