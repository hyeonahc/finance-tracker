import { Request, Response } from 'express'
import { createUser } from 'services/userService'

export const signupUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body
    const newUser = await createUser({
      firstName,
      lastName,
      email,
      password,
    })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
