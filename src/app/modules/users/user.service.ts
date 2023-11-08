import config from '../../../config/index'
import { Iuser } from './user.interface'
import User from './user.model'
import { generateId } from './user.utils'

const createdUser = async (user: Iuser): Promise<Iuser | null> => {
  const id = await generateId()

  user.id = id

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const userCreation = await User.create(user)

  if (!userCreation) {
    throw new Error('data not getting ')
  }

  return userCreation
}

export default {
  createdUser,
}
