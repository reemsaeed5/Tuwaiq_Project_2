// const express = require('express')
// const app = express()
// const fileHandler = require('fs');
// app.use(express.json());

// const {userRouter} = require("./Routers/routes/userRouter")

// // /* If we want our Express server to be able to access content that is passed in the body of the HTTP request, 
// // we need to include the body-parser middleware. 
// // The body-parser middleware extracts the entire body portion of an incoming request stream and exposes it on req.body.*/
// // const bodyParser = require('body-parser');
// // app.use(bodyParser.urlencoded({ extended: true }))
// // app.use(bodyParser.json())


// app.get('/name', function(req, res) {
//     console.log('App.get');
//     fileHandler.readFile('person.json', (err, data) => {
//         if (err) res.json({"message": 'File not found. First post to create file.'});
//         else
//             res.json({"message": `Hello World! ${data}`});
//     })
// })

// app.post('/name', (req, res) => {
//     console.log('App.post');
//     console.log(req.body);
//     fileHandler.writeFile('person.json', `{"name": "${req.body.name}"}`, (err) => {
//         if (err) throw err;
//         res.send({"message": "File created!"});
//     });
// })

// app.get('/id', function(req, res) {
//     console.log('App.get');
//     fileHandler.readFile('person.json', (err, data) => {
//         if (err) res.json({"message": 'File not found. First post to create file.'});
//         else
//             res.json({"message": `Hello World! ${data}`});
//     })
// })
// app.post('/id', (req, res) => {
//     console.log('App.post');
//     console.log(req.body);
//     fileHandler.writeFile('person.json', `{"id": "${req.body.id}"}`, (err) => {
//         if (err) throw err;
//         res.send({"message": "File created!"});
//     });
// })
// // app.use(function(err, req, res, next) {
// //     console.log(err.stack)
// //     res.status(500).send('Something broke!')
// // })

// app.use('/user',userRouter);



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

