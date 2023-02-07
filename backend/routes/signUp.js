import User from '../models/user.model.js';
import express from 'express';
export const router = express.Router();
import { body, validationResult } from 'express-validator';

router.post(
    body('firstName').exists(),
    body('lastName').exists(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('confirmPassword').equals(body.password),

    async (req, res, next) => {
        const errors = validationResult(req)
        const { email } = req.body
        const userEmail = await userSchema.findOne({ email })

        try {
            if (!errors.isEmpty() && errors.errors[0].param === 'firstName') {
                return res.status(400).send('Invalid Name')
            }
            if (!errors.isEmpty() && errors.errors[0].param === 'lastName') {
                return res.status(400).send('Invalid Name')
            }
            if (!errors.isEmpty() && errors.errors[0].param === 'email') {
                return res.status(400).send('Invalid email address. Please try again')
            }
            if (!errors.isEmpty() && errors.errors[0].param === 'password') {
                return res.status(400).send('Password must be longer than 6 characters')
            }
            if (!errors.isEmpty() && errors.errors[0].param === 'confirmPassword') {
                return res.status(400).send('Two passwords are different')
            }
            if (userEmail) {
                return res.status(400).send('email already exise')
            }
            const user = await User.create(req.body)
            req.login(user, err => (err ? next(err) : res.json(user)))
        } catch (err) {
            next(err)
        }
    }
)