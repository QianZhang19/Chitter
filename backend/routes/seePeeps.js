import express from 'express';
import Peep from '../models/peep.model.js';

export const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        try {
            const peeps = await Peep.find();
            if (peeps.length == 0) throw new Error();
            res.status(200).json(peeps);
        } catch (e) {
            res.status(404).json({ error: "Peeps collection not found in DB" });
        }
    })