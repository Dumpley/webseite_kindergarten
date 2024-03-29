module.exports = {
    port: process.env.PORT || 3000,
    db: {
        database: process.env.DB_NAME || "tabtracker",
        email: process.env.DB_USER || "tabtracker",
        password: process.env.DB_PASS || "tabtracker",
        options: {
            dialect: process.env.DIALECT || "sqlite",
            host: process.env.HOST || "localhost",
            storage: "./tabtracker.sqlite",
        },
    },
};
