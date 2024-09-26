function add(numbers:String): Number{
    let sum = 0;
    numbers.split(",").forEach(element => {
        sum += Number(element);
    });
    return sum;
}

export default add;