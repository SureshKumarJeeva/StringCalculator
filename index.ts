import http from "http";

export const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': "text/html"});
    res.end(
        //JSON.stringify("data: It works")
        
    );
});

server.listen(3000, ()=>{
    console.log("Server running at https://localhost:3000");
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