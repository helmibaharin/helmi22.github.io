const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');


const app = express();


app.use(cors());
app.use(bodyParser.json());

app.listen(5000,()=>{
    console.log('server running');
});

//MySQL


const db = mysql.createConnection({
    host        : 'localhost',
    user        : 'root',
    password    : '',
    database    : 'topwebsite',
    port        :3306
});

// check mysql connection

db.connect(err=>{
    if (err){console.log(err, 'dberr');
    console.log('database not connected..');}
})

// GET DATA

app.get('/top_website',(req,res)=>{

    let qr =`SELECT * FROM top_website ORDER BY id DESC`;

    db.query(qr,(err,result)=>{

        if(err){
            console.log(err,'errs');
        }

        if(result.length>0){
            res.send({
                message:'All Registered Website',
                data:result
            });
        }

    });

});

// GET DATE

app.get('/top_website/date',(req,res)=>{

    let qr =`SELECT DISTINCT date FROM top_website ORDER BY date DESC`;

    db.query(qr,(err,result)=>{

        if(err){
            console.log(err,'errs');
        }

        if(result.length>0){
            res.send({
                message:'All Registered Website',
                data:result
            });
        }

    });

});

// GET ALL TIME DATA

app.get('/top_website/alltime',(req,res)=>{

    let qr =`SELECT id, date, icon, link, sum(visitor) as visitor FROM top_website GROUP BY link ORDER BY visitor DESC`;

    db.query(qr,(err,result)=>{

        if(err){
            console.log(err,'errs');
        }

        if(result.length>0){
            res.send({
                message:'All Registered Website',
                data:result
            });
        }

    });

});

//GET TOP 5 WEBSITE by DATE

app.get('/top_website/:date',(req,res)=>{

    let gDATE = req.params.date;
    let qr = `SELECT * FROM top_website WHERE date='${gDATE}' ORDER BY visitor DESC LIMIT 5`;

    db.query(qr,(err,result)=>{

        if(err){
            console.log(err);
        }

        if(result.length>0){
            res.send({
                message:'TOP 5 WEBSITE',
                data:result
            });
        } else {
            res.send({
                message:'data no found'
            });
        }

    });

});

//GET WEBSITE by ID

app.get('/top_website/single/:id',(req,res)=>{

    let gID = req.params.id;
    let qr = `SELECT * FROM top_website WHERE id='${gID}'`;

    db.query(qr,(err,result)=>{

        if(err){
            console.log(err);
        }

        if(result.length>0){
            res.send({
                message:'single website',
                data:result
            });
        } else {
            res.send({
                message:'single data no found'
            });
        }

    });

});

//POST DATA

app.post('/top_website',(req,res)=>{

    console.log(req.body,'createdata');

    let Date = req.body.date;
    let Name = req.body.name;
    let Link = req.body.link;
    let Icon = req.body.icon;
    let Visitor = req.body.visitor;

    let qr =`INSERT INTO top_website(date,name,link,icon,visitor)
            value ('${Date}','${Name}','${Link}','${Icon}','${Visitor}')`;

    console.log(qr,'qr')
        db.query(qr,(err,result)=>{

            if(err){console.log(err);}

    console.log(result,'result')

        res.send({
            message:'data inserted successfully',
        });

    });
});

//UPDATE DATA

app.put('/top_website/update/:id',(req,res)=>{

    console.log(req.body,'updatedata');

    let gID = req.params.id;

    let Date = req.body.date;
    let Name = req.body.name;
    let Visitor = req.body.visitor;

    let qr =`UPDATE top_website SET date = '${Date}' , name = '${Name}' ,
            visitor = '${Visitor}' WHERE id='${gID}'`;

    db.query(qr,(err)=>{

        if(err) {console.log(err);}

        res.send({
            message:'date updated',
        });

    });

});

//DELETE DATA

app.delete('/top_website/:id',(req,res)=>{

    console.log(req.body,'deletedata');

    let gID = req.params.id;

    let qr =`DELETE FROM top_website WHERE id='${gID}'`;

    db.query(qr,(err)=>{

        if(err) {console.log(err);}

        res.send({
            message:'date deleted',
        });

    });

});
