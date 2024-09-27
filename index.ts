function add(numbers:String): Number{
    let sum = 0;
    numbers.split(",").forEach(element => {
        console.log(element);
        console.log(element.split("\n"));
        console.log(element.indexOf("\n"));
        if(element.indexOf("\n") > -1){
            let internalArray = element.split("\n");
            console.log(internalArray);
            sum += Number(internalArray[0]) + Number(internalArray[1]);
        }else{
            sum += Number(element);
        }
    });
    return sum;
}

export default add;