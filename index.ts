import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "index.html"));
});

app.use(bodyParser.raw({inflate:true, limit: '100kb', type: 'application/json'}));
app.use(express.json());

app.post("/api/add", (req, res)=>{
    let jsonData = JSON.parse(req.body);
    console.log(jsonData);
    try{
        let result = add(jsonData.numberstring);
        console.log(result);
        res.json([{"result":result}]);
    }catch(e:unknown){
        if(e instanceof Error)
            res.json([{"result":e.message}]);
    }
});

app.listen(8080, ()=>{
    console.log("Server running at https://localhost:8080");
});

function add(numbers:String): Number{
    let sum = 0;
    let negative = false;
    let delimiter = ",";
    let negativeNumbers = Array();
    numbers = numbers.substring(0);
    console.log("numbers:"+numbers);
    if(numbers.substring(0,2) == "//"){
        delimiter = numbers.substring(2,numbers.indexOf("\\n"));
        console.log("delimiter:"+delimiter);
        numbers = numbers.substring(numbers.indexOf("\\n") + 2);
        console.log("numbers:"+numbers);
    }
    numbers.split(delimiter).forEach(element => {
        let internalArray = element.split("\\n");
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