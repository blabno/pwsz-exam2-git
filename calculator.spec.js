@@ -9,4 +9,11 @@ describe('calculator', function ()
expect(calculator.add(1, 2)).toEqual(3);
});
});
+ describe('subtract', function ()
+ {
+ it('should return difference between second and first number', function ()
+ {
+ expect(calculator.subtract(1, 2)).toEqual(1);
+ });
+ });
});
