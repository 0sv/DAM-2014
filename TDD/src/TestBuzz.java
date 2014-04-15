import static org.junit.Assert.*;

import org.junit.Test;


public class TestBuzz {

	@Test
	public void test() {
		
		Buzz bt = new Buzz();

		assertEquals("FizzBuzz Test ", false, bt.Test(1));
		assertEquals("FizzBuzz Test ", false, bt.Test(2));
		assertEquals("FizzBuzz Test ", false, bt.Test(3));
		assertEquals("FizzBuzz Test ", false, bt.Test(4));
		assertEquals("FizzBuzz Test ", true,  bt.Test(5));
		assertEquals("FizzBuzz Test ", false, bt.Test(6));
		assertEquals("FizzBuzz Test ", false, bt.Test(7));
		assertEquals("FizzBuzz Test ", false, bt.Test(8));
		assertEquals("FizzBuzz Test ", false, bt.Test(9));
		assertEquals("FizzBuzz Test ", true,  bt.Test(10));
		
		
	}

}
