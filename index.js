import {app} from './app.mjs';
import { connectDb } from './configs/database.mjs';
import {config} from './configs/config.mjs'

connectDb();

app.listen(config.port,()=>console.log("Listening at PORT:",config.port));