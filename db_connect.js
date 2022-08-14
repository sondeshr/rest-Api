const mongoose = require("mongoose");

const db_conect = async () => {
    try {
        const result =await mongoose.connect("process.env.DB_URI");
console.log("database is connected");
    } catch (error) {
        console.log(error);
    }
}; 

module.exports= db_conect;