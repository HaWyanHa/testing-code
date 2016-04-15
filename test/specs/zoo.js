(function(){
	"use strict"


	var assert = chai.assert;
	var fixtureHTML = $(".class").html();

	suite("my-app", function(){

		setup(function(){

			$(".class").html(fixtureHTML);

		});

		// test("if a type equals the type", function(callback){

		// 	window.zoo.listAnimals("zebra", function example(){
		// 		var assertError;
		// 		try {


		// 		assert.strictEqual("tiger", "tiger", "input should equal function");
		// 		assert.strictEqual("zebra", "zebra", "does this work");
		// 		} catch(err) {
		// 			assertError = err;
		// 		}
		// 		callback(assertError);

		// 	})


		// }); 

		test("make sure we are appending LI", function(done){

			window.zoo.listAnimals("zebra", function testing(){
				var assertError;
				try {
					assert.strictEqual($('.animals li').length, 1, "test" )
				} catch(err) {
					assertError = err;
				}
				done(assertError);

			})
		});


		test("make sure the counter works", function(allDone){
	
			window.zoo.countAnimalsByType(function testCallback(totalCount){
				var assertError;

				try {
					assert.strictEqual( totalCount.otter , 5, "number of otters should not be 5" );
				} catch(err) {
					assertError = err;
				}
				console.log("ending");
				allDone(assertError);

			})
		});


	});

})();