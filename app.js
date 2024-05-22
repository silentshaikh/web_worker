let p1 = document.getElementById('para1');
let p2 = document.getElementById('para2');
const onCalculate = () => {
    let ourOwrkr = new Worker();
    ourOwrkr.postMessage('Start Working')
    ourOwrkr.onmessage = (e) => {
        p1.innerHTML= e.data;;
    }
};
const onPrint = () => {
    p2.innerText = 'Hello';
} 