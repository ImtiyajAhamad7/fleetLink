import dotenv from "dotenv";
import connectDB from "./config/db.js";
import app from "./app.js";
// import app from "./app";
// import connectDB from "./config/db";
dotenv.config();
const PORT = process.env.PORT || 5000;
// Connect to DB first, then start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
//# sourceMappingURL=index.js.map