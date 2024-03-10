const AuthController = require("./controller/Authentication");

module.exports = (app) => {
    /**
     * This is a post for registration
     */
    app.post("/register", AuthController.register);
    
    app.post("/login", AuthController.login)
};
