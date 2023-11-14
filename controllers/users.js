import { UsersModel } from "../models/users.js"
import jwt from 'jsonwebtoken'

export const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userDB = await UsersModel.find()
    const checkExist = userDB.find(item => item.username === username)
    if (!checkExist) {
        return res.status(404).json({ message: `Can't found user` })
    }
    if (!(checkExist.password == password)) {
        return res.status(401).json({ message: `Wrong password` })
    }

    const token = jwt.sign({
        id: checkExist.id
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    })

    return res.status(200).json({ user: checkExist, token: token })
}