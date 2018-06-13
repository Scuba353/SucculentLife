 
var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var mongoose= require("mongoose");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.use(express.static( __dirname + '/client/dist' ));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/succulents3db');
var Schema = mongoose.Schema;

var SucculentSchema = new mongoose.Schema({
    name: {type: String, minlength: [3, "Name must contian at least 3 characters"], required: [true, "Name is required"]},
    email: {type: String, required: [true, "Email is requited"]},
    city: {type: String},
    mail: {type: Boolean},
    plantdescription: {
        color: {type: String, required:[true, "Minimium, color description required"] },
        rosettes: {type: Boolean},
        otherdesc: {type: String}
    },
    cuttingtype: {type: String},
    request: {
        reqname: {type: String, minlength: [3, "Name must contian at least 3 characters"]},
        reqemail: {type: String},
        reqpickup: {type: Boolean},
        reqaddress: {type: String, minlength: [3, "Address must contian at least 5 characters"]},
        reqother: {type: String}
    },

} , {timestamps: true})

var QuestionSchema = new mongoose.Schema({
    question: {type: String, minlength: [3, "Questions must contian at least 3 characters"], required: [true, "A question is required"]},
    poster: {type: String, minlength: [3, "Name must contian at least 3 characters"], required: [true, "Name is required"]},
    answers: [{
        answer:{type: String},
        responder: {type: String},
    }]
}, {timestamps: true})

const Succulent =mongoose.model('Succulent', SucculentSchema); 
const Question =mongoose.model('Question', QuestionSchema);

//get all
app.get('/all', function(req, res) {
    Succulent.find({}, function(err, data){
        if(err){
        //    console.log("Returned error", err);
           res.json({message: "Error", err: err})
        }
        else {
           res.json({message: "Success", allplants: data})
        }
     })
})    

//create one
app.post('/new', function(req, res) {
    // console.log("console logging request body", req.body)
    var newsucculent = new Succulent({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        mail: req.body.mail,
        plantdescription: {
            color: req.body.color,
            rosettes: req.body.rosettes,
            otherdesc:req.body.otherdesc 
        },
        cuttingtype: req.body.cuttingtype
    })
    newsucculent.save(function(err){
        if(err) {
            // console.log("err in server", err)
            res.json(err)   
        } 
        else{
            // console.log("added new place", newPlace)
            res.json(newsucculent) 
        }
    })
})

//create one
app.post('/newquestion', function(req, res) {
    console.log("console logging request body server question", req.body)
    var newquestion = new Question({
        poster: req.body.poster,
        question: req.body.question,
    })
    newquestion.save(function(err){
        if(err) {
            // console.log("err in server", err)
            res.json(err)   
        } 
        else{
            // console.log("added new place", newPlace)
            res.json(newquestion) 
        }
    })
})


//create new responce
app.put('/newanswer/:id', function(req, res) {
    console.log("from server update request", req.body)
    Question.findById({_id: req.params.id}, function(err, newresponce){
        if(err) {
            res.json({message: "Error", error: err})
        } else {
            newresponce.answers.push(req.body)
            // newresponce.answers.answer= req.body.answer
            // newresponce.answers.responder= req.body.responder
            newresponce.save(function(err){
            if(err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Update", data: newresponce})  
            }
            })
        }
    }) 
})
      

// //get all questions
app.get('/questions', function(req, res) {
    Question.find({}, function(err, data){
        if(err){
        //    console.log("Returned error", err);
           res.json({message: "Error", err: err})
        }
        else {
           res.json({message: "Success", allquestions: data})
        }
     })
})  


//reterive one 
app.get('/answer/:id', function(req, res) {
    Question.find({_id: req.params.id}, function(err, data){
        if(err) {
            res.json({message: "Error", error: err})
        } else {
            res.json({message: "Show", getone: data})
        }
    }) 
})


//update one 
app.put('/request/:id', function(req, res) {
    console.log("from server update request", req.body)
    Succulent.findById({_id: req.params.id}, function(err, sucuclentRequest){
        if(err) {
            res.json({message: "Error", error: err})
        } else {
            sucuclentRequest.request.reqname= req.body.reqname
            sucuclentRequest.request.reqemail= req.body.reqemail
            sucuclentRequest.request.reqpickup= req.body.reqpickup
            sucuclentRequest.request.reqaddress= req.body.reqaddress
            sucuclentRequest.request.reqother= req.body.reqother
            sucuclentRequest.save(function(err){
            if(err) {
                res.json({message: "Error", error: err})
            } else {
                res.json({message: "Update", data: sucuclentRequest})  
            }
            })
        }
    }) 
})



app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  });

// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});

    