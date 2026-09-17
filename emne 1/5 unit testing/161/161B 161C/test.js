QUnit.test("Positive: Contains '@'", function (assert) {
   const test = checkEmail("@");
   const expected = true;
   assert.equal(test, expected);
});
QUnit.test("Negative: No '@'", function (assert) {
   const test = checkEmail("asd");
   const expected = false;
   assert.equal(test, expected);
});
QUnit.test("Positive: Contains '.'", function (assert) {
   const test = checkEmail(".");
   const expected = true;
   assert.equal(test, expected);
});
QUnit.test("Negative: No '.'", function (assert) {
   const test = checkEmail("asd");
   const expected = false;
   assert.equal(test, expected);
});
QUnit.test("Positive: Contains '.' before '@'", function (assert) {
   const test = checkEmail("a.sd@asd");
   const expected = ".@";
   assert.equal(test, expected);
});
QUnit.test("Positive: Contains '.' after '@'", function (assert) {
   const test = checkEmail("asd@asd.com");
   const expected = "@.";
   assert.equal(test, expected);
});
