describe('Fizz', function() {
  it('returns fizzbuzz for multiples of 3 and 5', function(){
    expect(FizzBuzz.prototype.play(15)).toEqual('FizzBuzz');
  });
  it('returns fizz for multiples of 3', function(){
    expect(FizzBuzz.prototype.play(3)).toEqual('Fizz');
  });
  it('returns buzz for multiples of 5', function(){
    expect(FizzBuzz.prototype.play(5)).toEqual('Buzz');
  });
  it('returns the number if its not a multiple of 3 or 5', function(){
    expect(FizzBuzz.prototype.play(7)).toEqual(7);
  });
});
