import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT || 3003;

app.listen(port, () => {
    console.log(`Initialized the app with the configuration on port ${port}`);
});
