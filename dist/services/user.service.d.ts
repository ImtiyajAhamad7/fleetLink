import { IUser } from "../models/user.model.js";
export declare class UserService {
    static createUser(data: Partial<IUser>): Promise<import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    static loginUser(data: {
        email: string;
        password: string;
    }): Promise<{
        user: import("mongoose").Document<unknown, {}, IUser, {}, {}> & IUser & Required<{
            _id: unknown;
        }> & {
            __v: number;
        };
        token: string;
    }>;
}
//# sourceMappingURL=user.service.d.ts.map