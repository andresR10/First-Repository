function countDown(time) {
    let interval = 1000
    let timer = setInterval(function() {
        time--;
        if(time <= 0){
            clearInterval(timer);
            console.log('DONE!!');
        }
        else {
            console.log(time);
        }

    }, interval)
}