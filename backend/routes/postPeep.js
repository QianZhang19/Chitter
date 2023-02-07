import express from 'express';
import Peep from '../models/peep.model.js';
import { check, validationResult } from 'express-validator';

export const router = express.Router();

router.route('/')
    .post(
        [
            check('name').exists().notEmpty(),
            check('message').exists().notEmpty(),
            check('date').exists().notEmpty()
        ],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({ message: "Could not add your peep to Chitter" });
            }

            const newPeep = new Peep(req.body);
            try {
                const addPeep = await newPeep.save();
                res.status(201).json(addPeep);
            } catch (e) {
                res.json({ message: "Peep Fails" })
            }
        })