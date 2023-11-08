import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    //console.log('controler user', user)
    const result = await userService.createdUser(user)
    // console.log(result)

    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      messege: 'user creation failed',
      err: err,
    })
  }
}

export default {
  createUser,
}
