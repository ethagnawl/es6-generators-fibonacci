Example used in [Wikipedia article on generators](https://en.wikipedia.org/w/index.php?title=Generator_(computer_programming)#ECMAScript).

    function* fibonacci() {

        let init = 1;

        let [prev, curr] = [0, init];

        yield init;

        while (true) {

            [prev, curr] = [curr, prev + curr];

            yield curr;

        }

    }

    var gen = fibonacci();

    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 1
    console.log(gen.next().value); // 2
    console.log(gen.next().value); // 3
    console.log(gen.next().value); // 5
    console.log(gen.next().value); // 8

The example can be run with: `npm install . && node index.js`
