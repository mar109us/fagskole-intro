//skriv test først
//test sjekker om epost
//skriv så funksjon som sjekker om @ er inkludert

QUnit.test("Email has @", function (assert) {
   const test = checkEmail("@");
   const expected = true;
   assert.equal(test, expected);
});
QUnit.test("Email has .", function (assert) {
   const test = checkEmail(".");
   const expected = true;
   assert.equal(test, expected);
});
