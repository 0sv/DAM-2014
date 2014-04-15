import static org.junit.Assert.*;

import org.junit.Test;


public class TestFizzBuzz {

	@Test
	public void test() {
		
		FizzBuzz fbt = new FizzBuzz();
		
		assertEquals("FizzBuzz Test ", false, fbt.Test(1));
		assertEquals("FizzBuzz Test ", false, fbt.Test(2));
		assertEquals("FizzBuzz Test ", false, fbt.Test(3));
		assertEquals("FizzBuzz Test ", false, fbt.Test(4));
		assertEquals("FizzBuzz Test ", false, fbt.Test(5));
		assertEquals("FizzBuzz Test ", false, fbt.Test(6));
		assertEquals("FizzBuzz Test ", false, fbt.Test(7));
		assertEquals("FizzBuzz Test ", false, fbt.Test(8));
		assertEquals("FizzBuzz Test ", false, fbt.Test(9));
		assertEquals("FizzBuzz Test ", false, fbt.Test(10));
		assertEquals("FizzBuzz Test ", false, fbt.Test(11));
		assertEquals("FizzBuzz Test ", false, fbt.Test(12));
		assertEquals("FizzBuzz Test ", false, fbt.Test(13));
		assertEquals("FizzBuzz Test ", false, fbt.Test(14));
		assertEquals("FizzBuzz Test ", true,  fbt.Test(15));
		assertEquals("FizzBuzz Test ", false, fbt.Test(16));
		assertEquals("FizzBuzz Test ", false, fbt.Test(17));
		assertEquals("FizzBuzz Test ", false, fbt.Test(18));
		assertEquals("FizzBuzz Test ", false, fbt.Test(19));
		assertEquals("FizzBuzz Test ", false, fbt.Test(20));
		assertEquals("FizzBuzz Test ", true,  fbt.Test(30));
		
		//fail("Not yet implemented");
	}

}
