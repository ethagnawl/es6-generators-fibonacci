// inspired by: http://wiki.ecmascript.org/doku.php?id=harmony:generators

function* fibonacci() {

    let init = 1;

    let [prev, curr] = [0, init];

    yield init;

    while (true) {

        [prev, curr] = [curr, prev + curr];

        yield curr;

    }

    yield 1;

}

var gen = fibonacci();

export var run = function () {

    for (var i = 0; i < 10; i += 1) {

        console.log(gen.next().value);

    }

};
