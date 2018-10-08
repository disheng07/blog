
 
function show(parm){
    console.log(parm);
    window.document.getElementById('app').innerText = 'hello2,' + parm;
}

module.exports = show;