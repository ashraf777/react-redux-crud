import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUrl = 'mongodb://localhost:27017/crudwithredux';

mongodb.MongoClient.connect(dbUrl, function(err, db){

	app.get('/api/games', (req, res) => {
		db.collection('games').find({}).toArray((err, games) =>{
			res.json({games});
		});
	});

	app.use((req, res) => {
		res.status(404).json({
			errors: {
				global: "Ooops something wrong! Pls try again later"
			}
		})
	})


	app.listen(8080, () => console.log('Server is running in localhost:8080'));

});