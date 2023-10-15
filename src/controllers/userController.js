const userService = require('../services/userService');


const createUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;

        const userCreated = await userService.createUser(name, email, password);
    
        return res.status(201).json(userCreated);
    }catch(error){
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
};

const updateUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        const { id } = req.params;
        
        const userUpdated = await userService.updateUser(name, email, password, id);

        return res.status(200).json(userUpdated);
    }catch(error){
        const { message, code } = error;

        return res.status(code).json({ message: message });
    }
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;

    try {
        
        const userLoggedIn = await userService.loginUser(email, password);
    
        return res.status(200).json(userLoggedIn);

      } catch (error) {
        const { message, code } = error;

        return res.status(code).json({ message: message });
      }
}
 
module.exports = {
    createUser,
    updateUser,
    loginUser
}