const express = require('express');
const server = express();
const PORT = process.env.PORT || 5050;
server.listen(PORT, () => console.log(`\n** server is listening on port ${PORT}`));
