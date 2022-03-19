// IMPORT MODULES under test here:
import { renderCrochets } from "../products/crochets-render.js";
import { findByID } from "../utils.js";

const test = QUnit.test;

//for find by ID test
const crochets = [
  {
    id: 1,
    name: "Mittens",
    image: "../assets/mittens.jpg",
    description: "A warm and cozy pair of mittens!",
    category: "accessories",
    price: 15,
  },

  {
    id: 2,
    name: "Blanket",
    image: "../assets/mittens.jpg",
    description: "A warm and cozy pair of mittens!",
    category: "accessories",
    price: 15,
  },
];

//render function test
test("given obj, return correctly filled HTML string ", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const expected = `<li><h3 class="item-name">Mittens</h3><div class="img-container"><img src="../assets/mittens.jpg" alt="A warm and cozy pair of mittens!"></div><div class="text-container"><p class="item-category">Category: accessories</p><p class="item-price">Price: $15</p><p class="item-description">A warm and cozy pair of mittens!</p></div><button class="add-button">Add to cart</button></li>`;

  //Act
  // Call the function you're testing and set the result to a const
  const actual = renderCrochets(crochets[0]);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.equal(actual.outerHTML, expected);
});

//findByID function test
test("given an ID and an array, return corresponding obj from arr with same ID", (expect) => {
  //Arrange
  // Set up your arguments and expectations
  const expected = crochets[0];

  //Act
  // Call the function you're testing and set the result to a const
  const actual = findByID(1, crochets);

  //Expect
  // Make assertions about what is expected versus the actual result
  expect.deepEqual(actual, expected);
});
