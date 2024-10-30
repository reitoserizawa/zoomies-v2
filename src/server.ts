import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`********************\n\nInitialized API on port: ${port}\n\n********************`);
});
