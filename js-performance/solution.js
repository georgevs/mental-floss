const compose = (...fns) => fns.reduceRight((g, f) => x => f(g(x)))
const compose1 = (...fns) => x => fns.reduceRight((x, f) => f(x), x)
const concat = (acc, x) => acc.concat([x])
const concat1 = (acc, x) => (acc.push(x), acc)
const map = f => reduce => (acc, x) => reduce(acc, f(x))
const filter = p => reduce => (acc, x) => p(x) ? reduce(acc, x) : acc
const transduce = transform => (reduce, seed) => xs => xs.reduce(transform(reduce), seed)

const double = x => x * x
const even = x => x % 2 === 0
const doubleEvens1 = transduce(compose(map(double), filter(even)))(concat, [])
const doubleEvens1a = transduce(compose(map(double), filter(even)))(concat1, [])
const doubleEvens1b = transduce(compose1(map(double), filter(even)))(concat1, [])
const doubleEvens1c = transduce(map(double)(filter(even)))(concat1, [])

const doubleEvens2 = xs => {
    const r = []
    for (const x of xs) {
        if (x % 2 === 0) r.push(x * x)
    }
    return r
}
const doubleEvens2a = xs => {
    const r = []
    const n = xs.length
    for (let i = 0; i < n; ++i) {
        const x = xs[i]
        if (x % 2 === 0) r.push(x * x)
    }
    return r
}

const doubleEvens3 = xs => xs.filter(even).map(double)

const doubleEvens4 = xs => xs.reduce((acc, x) => { if (even(x)) {acc.push(double(x))}; return acc }, [])
const doubleEvens4a = xs => xs.reduce((acc, x) => even(x) ? acc.concat([double(x)]) : acc, [])

const test = doubleEvens => {
    console.log(doubleEvens([1, 2, 3, 4]))

    const t = performance.now()
    for (let i = 0; i < 1000000; ++i) {
        doubleEvens([1, 2, 3, 4])
    }
    console.log(performance.now() - t)
}
