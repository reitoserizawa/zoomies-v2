import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`Initialized the app with the configuration on port ${port}`);
});
