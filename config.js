const mongoose = require('mongoose');
const dbconnect = () => {
    mongoose.connect("mongodb://localhost:27017/p3tp_apirest")
    .then((success) => app.listen(3001))
    .catch((err) => console.log(err.message));  
    
}
          
module.exports = dbconnect;