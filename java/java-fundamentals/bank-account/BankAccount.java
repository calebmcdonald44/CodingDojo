public class BankAccount {
    // MEMBER VARIABLES
    private double checkingBalance;
    private double savingsBalance;

    private static int accounts;
    private static double totalMoney; // refers to the sum of all bank account checking and savings balances

    public BankAccount() {
        this.checkingBalance = 0;
        this.savingsBalance = 0;
        accounts++;
        System.out.println("Thank you for creating an account with us! Your checking and savings balance are both at $0.00.");
    }

    // GETTERS
    // for checking, savings, accounts, and totalMoney

    public String getChecking() {
        return ("Your checking account balance is $" + this.checkingBalance);
    }
    public String getSavings() {
        return ("Your savings account balance is $" + this.savingsBalance);
    }
    public static String getAccounts() {
        return ("There are " + accounts + " total accounts at this bank.");
    }
    public static String getTotalMoney() {
        return ("The total amount of money in this bank is $" + totalMoney);
    }

    // METHODS
    // deposit
    // - users should be able to deposit money into their checking or savings account
    public String depositChecking(double amount) {
        double startingAmount = this.checkingBalance;
        this.checkingBalance += amount;
        totalMoney += amount;
        return ("Your starting balance was $" + startingAmount + ". Your new balance is $" + this.checkingBalance + ".");
    }
    public String depositSavings(double amount) {
        double startingAmount = this.savingsBalance;
        this.savingsBalance += amount;
        totalMoney += amount;
        return ("Your starting balance was $" + startingAmount + ". Your new balance is $" + this.savingsBalance + ".");
    }
    // withdraw 
    // - users should be able to withdraw money from their checking or savings account

    public String withdrawChecking(double amount) {
        double startingAmount = this.checkingBalance;
        if(amount < this.checkingBalance) {
            this.checkingBalance -= amount;
            totalMoney -= amount;
            return ("Your starting balance was $" + startingAmount + ". Your new balance is $" + this.checkingBalance + ".");
        }
        return ("Insufficient funds. You only have $" + startingAmount + " in your checking.");
    }
    public String withdrawSavings(double amount) {
        double startingAmount = this.savingsBalance;
        if(amount < this.savingsBalance) {
            this.savingsBalance -= amount;
            totalMoney -= amount;
            return ("Your starting balance was $" + startingAmount + ". Your new balance is $" + this.savingsBalance + ".");
        }
        return ("Insufficient funds. You only have $" + startingAmount + " in your savings.");
    }

    // - do not allow them to withdraw money if there are insufficient funds
    // - all deposits and withdrawals should affect totalMoney
    // getBalance
    // - display total balance for checking and savings of a particular bank account

    public String getBalance() {
        return ("Your checking balance is $" + this.checkingBalance + ". Your savings balance is $" + this.savingsBalance + ".");
    }
}
