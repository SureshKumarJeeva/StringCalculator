import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/api/add", (req, res)=>{
    res.json([{
        data:req.body
    }]);
});


app.listen(8080, ()=>{
    console.log("Server running at https://localhost:8080");
});

function add(numbers:String): Number{
    let sum = 0;
    let negative = false;
    let delimiter = ",";
    let negativeNumbers = Array();
    if(numbers.substring(0,2) == "//"){
        delimiter = numbers.substring(2,numbers.indexOf("\n"));
        numbers = numbers.substring(numbers.indexOf("\n") + 1);
    }
    numbers.split(delimiter).forEach(element => {
        let internalArray = element.split("\n");
        internalArray.forEach(subelement =>{
            if(Number(subelement) < 0){
                negativeNumbers.push(subelement);
                negative = true;
            }
            if(!negative)
                sum += Number(subelement);
        });
    });
    if (!negative)
        return sum;
    else{
        throw new Error("Negative numbers are not allowed:"+negativeNumbers.join(","));
    }
}

export default add;