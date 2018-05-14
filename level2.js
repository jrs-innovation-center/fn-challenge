import test from 'tape'
import hex2color from './lib/hex2color'
import { map, filter, reduce, compose, merge, find } from 'ramda'

export default function() {
  /* Level 2 - colors */

  const ex1 = `complete the provided mapStateToProps function that takes in an object named "state" and returns an object that contains the following properties:
    1. age
    2. gender
    3. examDates
    4. isStatin
    `
  const exercise1 = _ => {
    const state = {
      firstName: 'Steve',
      lastName: 'Smith',
      examDates: ['2012-01-03', '2013-02-04', '2014-05-01'],
      weight: 267,
      age: 45,
      gender: 'M',
      isStatin: true
    }

    const mapStateToProps = state => null

    return mapStateToProps(state)
  }

  const ex2 = `A user has updated a person's data by increasing their annual income.
  The application state is represented by the "person" object.
    You need to update the application state to reflect the changes made by the user.
    The exercise2 function will be passed an "action" object
    containing a property named "payload" whose value represents the data changed by the user.
    merge the payload value into the "person" object and return an updated "person" object.
    Do not mutate the original person object."`

  const exercise2 = action => {
    const person = {
      first: 'Ted',
      last: 'Sermons',
      age: 25,
      annualIncome: 50000
    }

    return null
  }

  const ex3 = `A user wants to add a person to the list of persons.
 The application state is represented by the "persons" array.
  The exercise3 function will be passed an "action" object
      containing a property named "payload" whose value is an person object.
      Add the person to the persons array.
    Do not mutate the original persons array, rather,
    return a new array containing the person.`

  const exercise3 = action => {
    const persons = [{ name: 'Michael' }, { name: 'Trudy' }, { name: 'Elliot' }]
    return null
  }

  const ex4 = `The exercise4 function will be passed an "action" object
      containing a property named "payload" whose value is an person object.
      Find and remove the person from the persons array.
    Do not mutate the original persons array, rather,
    return a new array sans person.`

  const exercise4 = action => {
    const persons = [{ name: 'Michael' }, { name: 'Trudy' }, { name: 'Elliot' }]
    return null
  }

  const ex5 = `The exercise5 function will be passed an "action" object
      containing a property named "payload" whose value is an person object.
      Find and update the person within the persons array.
    Do not mutate the original persons array, rather,
    return a new array containing the updated person.`

  const exercise5 = action => {
    const persons = [{ name: 'ET' }, { name: 'Trudy' }, { name: 'Elliot' }]
    return null
  }

  const ex6 = `complete the provided mapStateToProps function which takes in state and
  returns a new object with a property named "foundPerson".
  Use personId to find the correct person in state.`

  const exercise6 = state => {
    const personId = '6'
    const mapStateToProps = state => null
    return mapStateToProps(state)
  }

  const ex7 = `In the UI, a customer needs to see a list of persons
  or they need to see a message that there are no persons in the list.
  Your job is to prep the data before it is rendered as UI.
  Complete the provided mapStateToProps function which takes in state and
  returns a new object containing a property named "hasPersons".
  The value of the "hasPersons" property should be a boolean.
  If the number of persons in the array is greater than 0,
  then the value of the "hasPersons" is true otherwise false.`

  const exercise7 = state => {
    const mapStateToProps = state => null
    return mapStateToProps(state)
  }

  /* tests to validate exercises go here */
  test('test', assert => {
    assert.plan(7)
    assert.same(
      exercise1(),
      {
        age: 45,
        gender: 'M',
        examDates: ['2012-01-03', '2013-02-04', '2014-05-01'],
        isStatin: true
      },
      ex1
    )

    assert.same(
      exercise2({
        action: 'INCOME_UPDATED',
        payload: { annualIncome: 75000 }
      }),
      { first: 'Ted', last: 'Sermons', age: 25, annualIncome: 75000 },
      ex2
    )

    assert.deepEquals(
      exercise3({
        action: 'PERSON_ADDED',
        payload: { name: 'ET' }
      }),
      [
        { name: 'Michael' },
        { name: 'Trudy' },
        { name: 'Elliot' },
        { name: 'ET' }
      ],
      ex3
    )

    assert.deepEquals(
      exercise4({
        action: 'PERSON_DELETED',
        payload: { name: 'Michael' }
      }),
      [{ name: 'Trudy' }, { name: 'Elliot' }],
      ex4
    )

    assert.deepEquals(
      exercise5({
        action: 'PERSON_UPDATED',
        payload: { name: 'ET', hasHeartLight: true }
      }),
      [
        { name: 'ET', hasHeartLight: true },
        { name: 'Trudy' },
        { name: 'Elliot' }
      ],
      ex5
    )

    assert.deepEquals(
      exercise6({
        userLevel: 1,
        ready: true,
        persons: [
          { id: 1, name: 'Jenkins', isDeceased: true },
          { id: 6, name: 'Jones', isDeceased: false },
          { id: 7, name: 'Waterford', isDeceased: false }
        ]
      }),
      { foundPerson: { id: 6, name: 'Jones', isDeceased: false } },
      ex6
    )

    assert.deepEquals(
      exercise7({
        ready: true,
        persons: []
      }),
      { hasPersons: false },
      ex7
    )
  })
}
