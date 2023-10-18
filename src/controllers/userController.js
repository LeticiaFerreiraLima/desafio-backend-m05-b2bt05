const userService = require('../services/userService');


const createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userCreated = await userService.createUser(name, email, password);

        return res.status(201).json(userCreated);
    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
};

const updateUser = async (req, res) => {
    const { name, email, password } = req.body;
    const { user } = req;

    try {
        await userService.updateUser(name, email, password, user.id);

        return res.status(204).send();

    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {

        const userLoggedIn = await userService.loginUser(email, password);

        return res.status(200).json(userLoggedIn);

    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
}

const getUser = async (req, res) => {
    const { user } = req;

    try {
        const userLoggedIn = await userService.getUser(user.id);

        return res.status(200).json(userLoggedIn);

    } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
}

module.exports = {
    createUser,
    updateUser,
    loginUser,
    getUser
}