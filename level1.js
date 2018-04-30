import test from 'tape'
import { map, filter, reduce, compose } from 'ramda'

export default function() {
  /* Level 1 */
  const ex1 = 'use a loop to double each value and return'
  const exercise1 = _ => {
    const numbers = [1, 2, 4, 8, 16, 32]
    return [] // return answer here
  }

  const ex2 = 'use a loop and a conditional to only return even numbers'
  const exercise2 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    return [] // return answer her
  }

  const ex3 = 'use reduce to sum the numbers'
  const exercise3 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    return 0 // return answer here
  }

  const ex4 = 'use a loop to sum the numbers'
  const exercise4 = _ => {
    const numbers = [1, 2, 3, 4, 5, 6]
    return 0 // return answer here
  }

  const ex5 = `In order to make it in software development you will need to develop two skills:

  1. Break down a problem into smaller problems
  2. Learn how to learn.

use compose to do the following'

1. cube each number
2. remove any numbers less than 100
3. average any remaining numbers
`
  const exercise5 = _ => {
    const numbers = [1, 2, 4, 8, 16, 32]

    return 0
  }

  /* tests to validate exercises go here */
  test('Level 1', assert => {
    assert.plan(5)
    assert.same(exercise1(), [2, 4, 8, 16, 32, 64], ex1)
    assert.same(exercise2(), [2, 4, 6], ex2)
    assert.same(exercise3(), 21, ex3)
    assert.same(exercise4(), 4, ex4)
    assert.same(exercise5(), 6229.333333333333, ex5)
  })
}
