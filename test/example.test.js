// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderDogCard, renderDogDetail } from '../render-utils.js';

const test = QUnit.test;

test('renderDogCard() renders a clickable DIV. A p tag with a name and an image are appended to the div. The div is appended to the anchor tag making it clickable.', (expect) => {
    //Arrange
    const dog = {
        name: 'spot',
        breed: 'corgi',
        id: 2,
    };
    // Set up your arguments and expectations
    const expected = '<a href="./detail/?id=2"><div class="dog-card"><p>spot</p><img src="./assets/corgi.jpeg"></div></a>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogCard(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderDogDetail() renders a clickable DIV. A p tag with a name and an image are appended to the div. The div is appended to the anchor tag making it clickable.', (expect) => {
    //Arrange
    const dog = {
        name: 'spot',
        breed: 'corgi',
        age: 5,
        id: 2,
    };
    // Set up your arguments and expectations
    const expected = '<div class="dog-detail"><p class="name">spot</p><img src="../assets/corgi.jpeg"><div class="age-and-breed"><p class="age">5 years old</p><p class="breed">corgi</p></div><p class="description"></p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderDogDetail(dog);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});