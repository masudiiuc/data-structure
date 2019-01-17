var Queue = function () {
    var arr = [];

    this.enqueue = function (val) {
        arr[arr.length] = val;
        return arr;
    }

    this.dequeue = function () {
        var popItem = arr.splice(0,1)
        return popItem[0];
    }
    this.size = function () {
        return arr.length;
    }
    this.show = function () {
        return arr;
    }
};


var PassingPotator = function (params, rounds) {
    var queue = new Queue();

    for(var key in params) {
        queue.enqueue(params[key]);
    }

    while(queue.size() != 1) {
        var seq = Math.floor(Math.random() * rounds);
        console.log('rounds: ', seq);
        for(var i=0; i < seq; i++) {
            var next = queue.dequeue();
            queue.enqueue(next);
        }
        queue.dequeue();
    }
    
    console.log('Winner:', queue.show());
}

PassingPotator(["Bill","David","Susan","Jane","Kent","Brad"], 6);
PassingPotator(['masud', 'bipool', 'mahmuda', 'fariha', 'tamanna', 'aymaan', 'fahin', 'aynaan', 'rakin'], 15);
