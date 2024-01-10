import java.util.ArrayList;
import java.util.Arrays;

public class CafeUtil {

    public String getStreakGoal(int weeks) {
        int streakGoal = 0;
        for(int i = 1; i <= weeks; i++) {
            streakGoal += i;
        }
        return ("You need to drink " + streakGoal + " coffees in the next " + weeks + " weeks to activate your streak goal.");
    }

    public Double getOrderTotal(double[] items) {
        double result = 0;
        for(int i = 0; i < items.length; i++) {
            result += items[i];
        }
        return result;
    }

    public void displayMenu(ArrayList<String> list) {
        for(int i = 0; i < list.size(); i++) {
            System.out.println(i + " " + list.get(i));
        }
    }

    public void addCustomer(ArrayList<String> customers) {
        System.out.println("Please enter your name.");
        String username = System.console().readLine();
        System.out.println("Hello, " + username + "!");
        System.out.println("There are " + customers.size() + "0 people in front of you.");
        customers.add(username);
        System.out.println(customers);
    }
}
