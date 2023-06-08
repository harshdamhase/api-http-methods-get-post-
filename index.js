import express from 'express';

const app = express();
app.get('/students',(req,res)=>{
    const students=['abc','def','ghi'];
    res.json(students);
});

app.listen(5000, ()=>{
    console.log('Listening on port 5000');
})
