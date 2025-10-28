// Step 1: Create a variable named automobiles
let automobiles = ['car', 'truck', 'motorcycle'];

// Step 2: Add airplane and skateboard to the end
automobiles.push('airplane', 'skateboard');

// Step 3: Add bike and helicopter to the front
automobiles.unshift('bike', 'helicopter');

// Step 4: Define a new variable automobilesCopy as a string template
let automobilesCopy = `Automobiles list: ${automobiles.join(', ')}`;

// Step 5: Remove the last item
automobiles.pop();

// Step 6: Remove the first item
automobiles.shift();

// Step 7: Assign the innerHTML of the element with id "result"
document.getElementById('result').innerHTML = automobiles.join(', ');

