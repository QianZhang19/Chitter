import User from '../models/user.model.js';
import express from 'express';
export const router = express.Router();
import { body, validationResult } from 'express-validator';

router.post(
    '/signup',
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    async (req, res, next) => {
        const errors = validationResult(req)

        try {
            if (!errors.isEmpty() && errors.errors[0].param === 'email') {
                return res.status(400).send('Invalid email address. Please try again.')
            }
            if (!errors.isEmpty() && errors.errors[0].param === 'password') {
                return res.status(400).send('Password must be longer than 6 characters.')
            }
            const user = await User.create(req.body)
            req.login(user, err => (err ? next(err) : res.json(user)))
        } catch (err) {
            next(err)
        }
    }
)