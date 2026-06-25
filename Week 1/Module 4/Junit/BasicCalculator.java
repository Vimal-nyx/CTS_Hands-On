public class BasicCalculator 
{
    public int add(int a, int b)
    {
        return a + b;
    }
    public int subtract(int a, int b)
    {
        return a - b;
    }
    public int multiply(int a, int b)
    {
        return a * b;
    }
    public int divide(int a, int b)
    {
        if (b == 0)
            throw new ArithmeticException("Division by zero is not allowed.");
        return a / b;
    }
    public double power(double base, double exponent)
    {
        return Math.pow(base, exponent);
    }
    public int modulo(int dividend, int divisor) 
    {
        if (divisor == 0)
            throw new ArithmeticException("Modulo by zero is not allowed.");
        return dividend % divisor;
    }
}
