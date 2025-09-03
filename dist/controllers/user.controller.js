// import { UserService } from "../services/user.service";
import { UserService } from "../services/user.service.js";
export const registerUser = async (req, res) => {
    try {
        const user = await UserService.createUser(req.body);
        res.status(201).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
export const loginUser = async (req, res) => {
    try {
        const user = await UserService.loginUser(req.body);
        res.status(200).json(user);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
};
//# sourceMappingURL=user.controller.js.map