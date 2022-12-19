function randomGame(){
    let num = 0;
    let many = 0;
    let selector = setInterval(function() {
        num = Math.random();
        many++;
        if(num > .75){
            clearInterval(selector);
            console.log('It took ' + many + ' tries');
        }

    } , 1000);

}
