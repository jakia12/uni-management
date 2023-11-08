// let userId = 0

import User from './user.model'

export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1,
    })
    .lean()

  return lastUser?.id
}

export const generateId = async () => {
  // const currentId = (0).toString().padStart(0, '5')
  const currentId = (await findLastUserId()) || '0000000'

  const incrementedId = (parseInt(currentId) + 1).toString().padStart(5, '0')

  return incrementedId
}
