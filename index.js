
// Server Variables
const server = require('./api/server');

const port = 5000;

// Listen Server
server.listen(port, () => {
    console.log(`listening on port ${port}`);
});