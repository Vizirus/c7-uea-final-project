const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("page_code"));
app.get("/", (req, res) => {
    res.sendFile('index.html', (err)=>{
    if (err)
        console.log(err);
    });
});
app.get("/goals", (req, res) => {
    res.sendFile('html/goals.html', (err)=>{
    if (err)
        console.log(err);
    });
});
app.listen(port, () => {
    console.log(`myapp is listening on port ${port}!`);
});
console.log("Server started on port " + port);