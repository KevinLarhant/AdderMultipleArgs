function adder()
{
	var res = 0;
	var args = Array.prototype.slice.call(arguments);
	
	return function(a)
	{
		args.forEach(function(val){ res += val(a); });
		return res;
	};
}
adder()(0); // 0
adder()(1); // 0
adder(mult(2))(1); // 2
adder(mult(2), mult(2))(1); // 4
adder(mult(2), mult(2), mult(2))(1); // 6
adder(mult(2), sub(2), mult(2))(1); // 5

function mult(v)
{
	return function(e)
	{
		return v*e;
	};
}

function sub(x)
{
	return function(y)
	{
		return x-y;
	};
}
sub(0)(0); // 0
sub(2)(1); // 1
sub(2)(2); // 0
sub(2)(4); // -2
