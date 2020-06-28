import { createPool } from "promise-mysql";

import keys from "./keys";

const pool = createPool(keys.database);

pool.then(function(con) {
    return con.getConnection()
}).then(function(){
    console.log('DB is connected');
}).catch(err => console.log(err));

export default pool