message = () => {
    let result = 0;
    for(let i=1; i<1000000600000; i++){
        result += i;
    }
    postMessage(result)
}