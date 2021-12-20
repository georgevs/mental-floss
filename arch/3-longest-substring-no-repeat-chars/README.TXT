https://leetcode.com/problems/longest-substring-without-repeating-characters/

iterable = { [Symbol.iterator]: () => iterator }
iterator = { next }
generator = { next, [Symbol.iterator]() { return this } } 
next = () => ({ done: nextValue === undefined, value: nextValue })
