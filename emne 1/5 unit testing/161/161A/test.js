// Create a file named main.js with the function function fixText(txt).

// Trim all leading and trailing whitespace from the input.

// Format the string so the first letter is uppercase and all subsequent letters are lowercase.

// Test-first requirement: Write QUnit tests for the new lowercase rule before updating your function to pass them.

QUnit.test("Null", function (assert) {
   const actual = fixText(null);
   const expected = "No text received";
   assert.equal(actual, expected);
});

QUnit.test("Undefined", function (assert) {
   const actual = fixText(undefined);
   const expected = "No text received";
   assert.equal(actual, expected);
});

QUnit.test("Empty", function (assert) {
   const actual = fixText("");
   const expected = "No text received";
   assert.equal(actual, expected);
});

QUnit.test("Multiple spaces", function (assert) {
   const actual = fixText("        ");
   const expected = "No text received";
   assert.equal(actual, expected);
});

QUnit.test("Space only", function (assert) {
   const actual = fixText(" ");
   const expected = "No text received";
   assert.equal(actual, expected);
});

QUnit.test("All uppercase", function (assert) {
   const actual = fixText("TERJE");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("Random uppercase", function (assert) {
   const actual = fixText("tErJE");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("Random uppercase with outer spaces", function (assert) {
   const actual = fixText("    tErJE   ");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("Lowercase first letter", function (assert) {
   const actual = fixText("terje");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("Space after text", function (assert) {
   const actual = fixText("terje ");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("Space before text", function (assert) {
   const actual = fixText(" terje");
   const expected = "Terje";
   assert.equal(actual, expected);
});

QUnit.test("Space after and before text", function (assert) {
   const actual = fixText(" terje ");
   const expected = "Terje";
   assert.equal(actual, expected);
});
