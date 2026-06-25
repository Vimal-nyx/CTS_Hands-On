import org.junit.Test;
import static org.junit.Assert.assertEquals;
public class BasicCalculatorTest 
{
    private final BasicCalculator calculator = new BasicCalculator();
    @Test
    public void testAdd() 
    {
        assertEquals(10, calculator.add(4, 6));
        assertEquals(-2, calculator.add(3, -5));
    }
    @Test
    public void testSubtract() 
    {
        assertEquals(8, calculator.subtract(15, 7));
        assertEquals(5, calculator.subtract(2, -3));
    }
    @Test
    public void testMultiply()
    {
        assertEquals(24, calculator.multiply(4, 6));
        assertEquals(0, calculator.multiply(5, 0));
        assertEquals(-15, calculator.multiply(-3, 5));
    }
    @Test
    public void testDivide()
    {
        assertEquals(3, calculator.divide(12, 4));
        assertEquals(-2, calculator.divide(10, -5));
    }
    @Test(expected = ArithmeticException.class)
    public void testDivideByZero()
    {
        calculator.divide(10, 0);
    }
    @Test
    public void testPower()
    {
        assertEquals(8.0, calculator.power(2, 3), 0.0001);
        assertEquals(1.0, calculator.power(5, 0), 0.0001);
        assertEquals(0.25, calculator.power(2, -2), 0.0001);
    }
    @Test
    public void testModulo()
    {
        assertEquals(1, calculator.modulo(10, 3));
        assertEquals(0, calculator.modulo(12, 4));
    }
    @Test(expected = ArithmeticException.class)
    public void testModuloByZero()
    {
        calculator.modulo(5, 0);
    }
}
