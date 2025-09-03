import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
export class UserService {
    // Register
    static async createUser(data) {
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const user = new User({ ...data, password: hashedPassword });
        return user.save();
    }
    // Login
    static async loginUser(data) {
        const { email, password } = data;
        const user = await User.findOne({ email });
        if (!user)
            throw new Error("User not found");
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            throw new Error("Invalid credentials");
        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: "7d" });
        return { user, token };
    }
}
//# sourceMappingURL=user.service.js.map