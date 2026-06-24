public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        if (logger1 == logger2) {
            System.out.println("Same.");
        }
        else
        {
            System.out.println("Not Same.");
        }

        logger1.log("Hello from Singleton!");
    }
}
