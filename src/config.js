module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8082,
    apiHost: process.env.APIHOST || 'localhost',
    apiPort: process.env.APIPOR || 8082, 
    app: {
        title: 'React Redux Example',
        description: 'All the modern best practices in one example.'
    }
}