function add(numbers:String): Number | never{
    let sum = 0;
    let negative = false;
    let delimiter = ",";
    let negativeNumbers = Array();
    if(numbers.substring(0,2) == "//"){
        console.log("indexOf(\n):"+numbers.indexOf("\n"));
        delimiter = numbers.substring(2,numbers.indexOf("\n"));
        numbers = numbers.substring(numbers.indexOf("\n") + 1);
    }
    console.log("delimiter:"+delimiter);
    console.log("numbers:"+numbers);
    numbers.split(delimiter).forEach(element => {
        console.log(element);
        console.log(element.split("\n"));
        console.log(element.indexOf("\n"));
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