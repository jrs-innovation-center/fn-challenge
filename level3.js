import test from 'tape'
import hex2color from './lib/hex2color'
import {
  map,
  filter,
  reduce,
  compose,
  merge,
  find,
  prop,
  add,
  assoc,
  tap
} from 'ramda'

export default function() {
  /* Level 2 - colors */
  const ex1 = `A customer wishes to see cost and count totals for all items in their online shopping cart.
  Prep the data for display before it is rendered onto the screen.
  Complete the provided mapStateToProps function that takes in an object named "state"
  and returns an object that contains these 2 properties:
    1. totalCost - sum of the cost for all goods in cart using price multiplied by quantity
    2. cartCount - a count of all goods in cart using quantity`
  const exercise1 = state => {
    const mapStateToProps = state => null
    return mapStateToProps(state)
  }

  const ex2 = `
  A customer wishes to see savings and cost totals for all items in their online shopping cart.
  Prep the data for display before it is rendered onto the screen.
  Complete the provided mapStateToProps function that takes in an object named "state"
  and returns an object that contains the following properties:
    1. savings - a sum of all the discounts for all the goods in the cart.
    2. totalTax - a sum of all the tax for all goods in the cart.
    `
  const exercise2 = state => {
    const mapStateToProps = state => null
    return mapStateToProps(state)
  }

  const ex3 = `A customer has selected some items to purchase.
  The exercise3 function contains an "action" parameter with a "payload" representing
    a single shopping history session including the items selected for purchase.
  The "customer" constant simulates application state.
  Your task is to update the application state to reflect the items selected for purchase.

    Using the "checkoutDateTime" value as a way to identify an item in the shopping history,
    correctly update or append the customer's shopping history.
    Return an entire updated "customer" object.
    Do not mutate the original customer object.`

  const exercise3 = action => {
    const customer = {
      first: 'Joe',
      last: 'Hipster',
      clubMember: true,
      customerStatus: 'Gold',
      shoppingHistory: [
        {
          checkoutDateTime: '2018-03-05 16:02:01',
          isComplete: false,
          storeNumber: 5982,
          cart: []
        },
        {
          checkoutDateTime: '2018-02-22 12:05:34',
          isComplete: true,
          storeNumber: 5982,
          cart: [
            { name: 'Fjallraven backpack', price: 59.99, quantity: 1 },
            { name: 'Oversized glasses', price: 29.99, quantity: 1 },
            { name: 'Converse shoes', quantity: 1 }
          ]
        }
      ]
    }
    return null
  }

  const ex4 = `A welcome center app allows the user to select various interests and
  then tailors an agenda based upon those interests. This exercise deals with toggling a
  user's selected interest from false to true or vice versa.

  The exercise4 function will be passed an "action" object
    containing a property named "payload" whose value is an object representing
    a selected activity.  The "interests" constant simulates application state.
    Use the payload to identify and toggle the appropriate
    interest within state. Return a new array of interests as state.
    Do not mutate the original array.`

  const exercise4 = action => {
    const interests = [
      { interest: 'Baseball', selected: false },
      { interest: 'Fishing', selected: false },
      { interest: 'Fine Dining', selected: false }
    ]
    return null
  }

  const ex5 = `The welcome center app has been upgraded.
  Interests have been organized into categories.

  Toggle a user's selected interests.
  The exercise5 function will be passed an "action" object
    containing a property named "payload" whose value is an object representing
    a selected category and activity.  Use the payload to identify and toggle the appropriate
    interest. Return a new array of interests.
    Do not mutate the original array.`

  const exercise5 = action => {
    const interests = [
      {
        category: 'Sports',
        interests: [
          { interest: 'Baseball', selected: false },
          { interest: 'Soccer', selected: false },
          { interest: 'Football', selected: false }
        ]
      },
      {
        category: 'Fine Dining',
        interests: [
          { interest: 'Husk', selected: false },
          { interest: 'Coast', selected: false },
          { interest: 'Rue de Jean', selected: false }
        ]
      },
      {
        category: 'Water',
        interests: [
          { interest: 'Fishing', selected: false },
          { interest: 'Parasailing', selected: false },
          { interest: 'Nature Cruise', selected: false }
        ]
      }
    ]
    return null
  }

  /////////////////////////////////////////
  ///                TESTS
  /// tests to validate exercises go here
  /////////////////////////////////////////

  test('test', assert => {
    assert.plan(5)

    assert.deepEquals(
      exercise1({
        cart: [
          { name: 'Gobstoppers', price: 1.25, quantity: 20 },
          { name: 'Sour Patch Kids', price: 1.79, quantity: 10 },
          { name: 'Nerds', price: 1.99, quantity: 30 },
          { name: 'Twizzlers', price: 4.99, quantity: 5 }
        ]
      }),
      {
        totalCost: 127.55,
        cartCount: 65
      },
      ex1
    )

    assert.deepEquals(
      exercise2({
        clubMembershipDiscountPct: 5,
        taxRatePct: 8,
        cart: [
          { name: 'Gobstoppers', price: 1.25, quantity: 20 },
          { name: 'Sour Patch Kids', price: 1.79, quantity: 10 },
          { name: 'Nerds', price: 1.99, quantity: 30 },
          { name: 'Twizzlers', price: 4.99, quantity: 5 }
        ]
      }),
      {
        totalCost: 127.55,
        cartCount: 65
      },
      ex2
    )

    assert.deepEquals(
      exercise3({
        action: 'SHOPPING_CART_UPDATED',
        payload: {
          checkoutDateTime: '2018-03-05 16:02:01',
          isComplete: true,
          storeNumber: 5982,
          cart: [
            { name: 'Ironic Hipster T-shirt', price: 19.99, quantity: 1 },
            { name: 'Pork Pie Hat', price: 29.99, quantity: 1 }
          ]
        }
      }),
      {
        first: 'Joe',
        last: 'Hipster',
        clubMember: true,
        customerStatus: 'Gold',
        shoppingHistory: [
          {
            checkoutDateTime: '2018-03-05 16:02:01',
            isComplete: true,
            storeNumber: 5982,
            cart: [
              { name: 'Ironic Hipster T-shirt', price: 19.99, quantity: 1 },
              { name: 'Pork Pie Hat', price: 29.99, quantity: 1 }
            ]
          },
          {
            checkoutDateTime: '2018-02-22 12:05:34',
            isComplete: true,
            storeNumber: 5982,
            cart: [
              { name: 'Fjallraven backpack', price: 59.99, quantity: 1 },
              { name: 'Oversized glasses', price: 29.99, quantity: 1 },
              { name: 'Converse shoes', quantity: 1 }
            ]
          }
        ]
      },
      ex3
    )

    assert.deepEquals(
      exercise4({
        action: 'INTERESTS_UPDATED',
        payload: { interest: 'Fishing' }
      }),
      [
        { interest: 'Baseball', selected: false },
        { interest: 'Fishing', selected: true },
        { interest: 'Fine Dining', selected: false }
      ],

      ex4
    )

    assert.deepEquals(
      exercise5({
        action: 'INTERESTS_UPDATED',
        payload: {
          category: 'Fine Dining',
          interest: { interest: 'Husk', selected: true }
        }
      }),
      [
        {
          category: 'Sports',
          interests: [
            { interest: 'Baseball', selected: false },
            { interest: 'Soccer', selected: false },
            { interest: 'Football', selected: false }
          ]
        },
        {
          category: 'Fine Dining',
          interests: [
            { interest: 'Husk', selected: true },
            { interest: 'Coast', selected: false },
            { interest: 'Rue de Jean', selected: false }
          ]
        },
        {
          category: 'Water',
          interests: [
            { interest: 'Fishing', selected: false },
            { interest: 'Parasailing', selected: false },
            { interest: 'Nature Cruise', selected: false }
          ]
        }
      ],

      ex5
    )
  })
}

/*
[
  {
    category: 'Sports',
    interests: [
      { interest: 'Baseball', selected: false },
      { interest: 'Soccer', selected: false },
      { interest: 'Football', selected: false }
    ]
  },
  {
    category: 'Fine Dining',
    interests: [
      { interest: 'Husk', selected: false },
      { interest: 'Coast', selected: true },
      { interest: 'Rue de Jean', selected: false }
    ]
  },
  {
    category: 'Water',
    interests: [
      { interest: 'Fishing', selected: false },
      { interest: 'Parasailing', selected: false },
      { interest: 'Nature Cruise', selected: false }
    ]
  }
]
*/
