// QUnit.module("add", function () {
//    QUnit.test("two numbers", function (assert) {
//       assert.equal(add(1, 2), 3);
//    });
// });



// Create a file named main.js with the function function fixText(txt).

// Trim all leading and trailing whitespace from the input.

// Format the string so the first letter is uppercase and all subsequent letters are lowercase.

// Test-first requirement: Write QUnit tests for the new lowercase rule before updating your function to pass them.

QUnit.test("Uppercase first letter", function (assert) {
   const actual = fixText("terje");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("No space before or after", function (assert) {
   const actual = fixText(" terje ");
   const expected = "Terje";
   assert.equal(actual, expected);
});