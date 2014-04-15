import static org.junit.Assert.*;

import org.junit.Test;


public class test {

	@Test
	public void test() {
		
		Main fb = new Main();
		fb.Validadores(new FizzBuzz());
		fb.Validadores(new Buzz());
		fb.Validadores(new Fizz());
		
		assertEquals("FizzBuzz1 1 = 1", "1", fb.check(1));
		assertEquals("FizzBuzz1 2 = 2", "2", fb.check(2));
		assertEquals("FizzBuzz1 3 = Fizz", "Fizz", fb.check(3));
		assertEquals("FizzBuzz1 4 = 4", "4", fb.check(4));
		assertEquals("FizzBuzz1 5 = Buzz", "Buzz", fb.check(5));
		assertEquals("FizzBuzz1 6 = Fizz", "Fizz", fb.check(6));
		assertEquals("FizzBuzz1 7 = 7", "7", fb.check(7));
		assertEquals("FizzBuzz1 8 = 8", "8", fb.check(8));
		assertEquals("FizzBuzz1 9 = Fizz", "Fizz", fb.check(9));
		assertEquals("FizzBuzz1 10 = Buzz", "Buzz", fb.check(10));
		assertEquals("FizzBuzz1 11 = 11", "11", fb.check(11));
		assertEquals("FizzBuzz1 12 = Fizz", "Fizz", fb.check(12));
		assertEquals("FizzBuzz1 13 = 12", "13", fb.check(13));
		assertEquals("FizzBuzz1 14 = 14", "14", fb.check(14));
		assertEquals("FizzBuzz1 15 = Fizz Buzz", "Fizz Buzz", fb.check(15));
		assertEquals("FizzBuzz1 16 = 16", "16", fb.check(16));
		
		assertEquals("FizzBuzz2  1,", "1", fb.printLine(1));
		assertEquals("FizzBuzz2  2,", "1,2", fb.printLine(2));
		assertEquals("FizzBuzz2  3", "1,2,Fizz", fb.printLine(3));
		assertEquals("FizzBuzz2  4", "1,2,Fizz,4", fb.printLine(4));
		assertEquals("FizzBuzz2  5", "1,2,Fizz,4,Buzz", fb.printLine(5));
		assertEquals("FizzBuzz2  6", "1,2,Fizz,4,Buzz,Fizz", fb.printLine(6));
		assertEquals("FizzBuzz2  7", "1,2,Fizz,4,Buzz,Fizz,7", fb.printLine(7));
		assertEquals("FizzBuzz2  8", "1,2,Fizz,4,Buzz,Fizz,7,8", fb.printLine(8));
		assertEquals("FizzBuzz2  9", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz", fb.printLine(9));
		assertEquals("FizzBuzz2 10", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz", fb.printLine(10));
		assertEquals("FizzBuzz2 11", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11", fb.printLine(11));
		assertEquals("FizzBuzz2 12", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz", fb.printLine(12));
		assertEquals("FizzBuzz2 13", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13", fb.printLine(13));
		assertEquals("FizzBuzz2 14", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14", fb.printLine(14));
		assertEquals("FizzBuzz2 15", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz", fb.printLine(15));
		assertEquals("FizzBuzz2 16", "1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,Fizz Buzz,16", fb.printLine(16));
		
		//fail("Not yet implemented");
	}

}
