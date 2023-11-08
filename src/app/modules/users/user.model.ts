import { Model, Schema, model } from 'mongoose'
import { Iuser } from './user.interface'

type UserModel = Model<Iuser, object>

const userSchema = new Schema<Iuser>(
  {
    id: { type: String, unique: true, required: true },
    role: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
)

const User = model<Iuser, UserModel>('User', userSchema)

export default User
