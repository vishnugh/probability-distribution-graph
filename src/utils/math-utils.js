export const binomialDistribution = (n, p) => {
    let results = [];

    for (let i = 0; i < n + 1; i++) {
        const prob = combination(n, i) * Math.pow(p, i) * Math.pow((1-p), n - i);
        results.push({p: prob, x: i});
    }
    return results;
}

export const simulateBinomialDistribution = (n, p, iterations) => {

    let results = {};

    for (let j = 0; j <= n; j++) {
        results[j] = 0;
    }


    for (let i = 0; i < iterations; i++) {
        let total = 0;
        for (let j = 1; j <= n; j++) {
            total += (Math.random() < p ? 1 : 0);
        }
        results[total] += 1;
    }
    return results;
}


export const combination = (n, r) => {
    return factorial(n) / (factorial(r) * factorial(n - r));
}

export const factorial = (n) => {
    if (n <= 0) {
        return 1;
    }
    return n * factorial(n - 1);
}