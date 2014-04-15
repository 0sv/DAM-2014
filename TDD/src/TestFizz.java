import static org.junit.Assert.*;

import org.junit.Test;


public class TestFizz {

	@Test
	public void test() {
		
		Fizz ft = new Fizz();
		
		assertEquals("FizzBuzz Test ", false, ft.Test(1));
		assertEquals("FizzBuzz Test ", false, ft.Test(2));
		assertEquals("FizzBuzz Test ", true, ft.Test(3));
		assertEquals("FizzBuzz Test ", false, ft.Test(4));
		assertEquals("FizzBuzz Test ", false, ft.Test(5));
		assertEquals("FizzBuzz Test ", true, ft.Test(6));
		assertEquals("FizzBuzz Test ", false, ft.Test(7));
		assertEquals("FizzBuzz Test ", false, ft.Test(8));
		assertEquals("FizzBuzz Test ", true, ft.Test(9));
	}

}
