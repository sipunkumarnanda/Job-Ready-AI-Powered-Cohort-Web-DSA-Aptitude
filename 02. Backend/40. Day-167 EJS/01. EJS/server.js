
import app from "./src/app.js";


app.post('/api/auth/register', (req,res)=>{
    // res.send("Register endpoint")
    res.status(201).json({
        message : "user registered successfully"
    })
})

app.get('/', (req,res)=>{
    res.render('index', {message : "Hello from  EJS"})
})

app.get('/mama', (req,res)=>{
    res.render('mama',  {
        messages : [
        "Hello from ejs",
        "Welcome to the express view engine",
        "This is a sample message",
        "EJS makes templating easy",
        "Enjoy coding with ejs"
    ]})
})




app.get('/mami', (req,res)=>{
    res.render('unescapedOutput', {
        htmls : [
            `<h1>Hello world</h1>`,
            `<h2>This is a simple html snippet</h2>`,
            `<p>This is a paragraph</p>`,
            `<button>click me</button>`
        ]
    })
})



app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})