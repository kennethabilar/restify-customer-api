const config = {
    ENV: process.env.NODE_ENV || 'development',
    MONGODB_URI: process.env.MONGODB_URI || '<MONGODB_URI>',
    PORT: process.env.PORT || 3000,
    URL: process.env.URL || 'http://localhost:3000',
    JWT_SECRET: process.env.JWT_SECRET || 'secretkey'
}

module.exports = config;
