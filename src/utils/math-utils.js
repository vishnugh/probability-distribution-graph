export const binomialDistribution = (n, p) => {
    let results = [];

    // For Normal Approximation
    const mean = n * p;
    const sd = Math.sqrt(n * p * (1 - p));
    // 

    for (let i = 0; i < n + 1; i++) {
        const prob = combination(n, i) * Math.pow(p, i) * Math.pow((1 - p), n - i);
        const aproxProb = normalDistribution(i, mean, sd);
        results.push({ p: prob, np: aproxProb, x: i });
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

export const normalDistribution = (x, mean = 0, sd = 1) => {
    return Math.pow(Math.E, -0.5 * Math.pow((x - mean) / sd, 2)) / (sd * Math.sqrt(2 * Math.PI))
}
