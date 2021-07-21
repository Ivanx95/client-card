function curry(fn, ...values) {
    return (...next) => (next.length) ? curry(fn, ...values, ...next) : fn(...values);
}


export default curry;