const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

const db = mongoose.connection;
	
db.on('connected', () => {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});

// // database connection event
// mongoose.connection.on('connected', () => {
//   console.log(`Mongoose connected to: ${process.env.DATABASE_URL.slice(0,24)}`);
// });

module.exports = mongoose;