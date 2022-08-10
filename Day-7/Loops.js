// Loops in JavaScript

// 1. Initialization
// 2. conditions to stop the loop
// 3. Increment|Decrement to move the loop next Iteration

// 1. while Loop

var i = 1;
while (i <= 10) {
  console.log("This is JavaScript Loop:" + i);
  i++;
}

// 2. Do while Loop: Iterate over the condition atleast once.

var j = 1;
do {
  console.log("This is JavaScript with Do while");
  j++;
} while (j < 1);

// for Loop
var k = 1;
for (;;) {
  if (k > 10) break;
  console.log("Odd: " + k);
  k += 2;
}

for (var p = 1; p <= 10; p++) {
  if (p == 7) continue;
  console.log(p);
}
