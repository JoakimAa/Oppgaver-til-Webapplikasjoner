import { userService } from '../services/index.js'


export const get = async (req, res, next) => {
    const user = await userService.getUserById(req.params.id)
    if(!user) {
        res.status(404).json({error: 'Not found'})
    }
    res.status(200).json(user);
};

export const list = async (req, res, next) => {
    const result = await userService.listUsers();
    res.status(200).json({ ...result });
};

export const create = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body)
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({error: "Create error"});
    }
};

export const update = (req, res, next) => {};
export const remove = (req, res, next) => {};