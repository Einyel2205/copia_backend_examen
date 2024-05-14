import Auth from "../../Dto/Auth/AuthDto";
import User from "../../Dto/UserDto";
import generateHash from "../../helpers/generateHash";
import userRepository from "../../repositories/users/UserRepository";

class userService{
    static async register(user:User){
        user.contrasenia = await generateHash(user.contrasenia);
        return await userRepository.register(user);
    }

    static async login(auth: Auth){
        return await userRepository.login(auth);
    }
}

export default userService;