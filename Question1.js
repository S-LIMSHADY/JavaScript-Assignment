function generateMultiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`Multiplication table for {i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`{i} x {j} = {i * j}`);
        }
        console.log("------------------------");

    }
}
generateMultiplicationTable(5);


