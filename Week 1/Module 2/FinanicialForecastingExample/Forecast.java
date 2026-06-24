public class Forecast {
    public static void main(String[] args) {
        double startMoney = 1000.0; 
        double[] growthRates = {0.05, 0.03, 0.06, 0.04, 0.05}; 

        // predict after 5 years
        double result = predict(startMoney, growthRates, 5);
        System.out.println("Result: $" + String.format("%.2f", result));
    }

    static double predict(double amount, double[] rates, int year) {
        // base case: stop at year 0 and return starting money
        if (year <= 0) {
            return amount;
        }

        // recursive call: previous year's money * (1 + rate of current year)
        return predict(amount, rates, year - 1) * (1 + rates[year - 1]);
    }
}
