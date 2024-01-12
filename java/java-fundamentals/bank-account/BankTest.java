public class BankTest {
    public static void main(String[] args){
        // Create 3 bank accounts
        BankAccount user1 = new BankAccount();
        BankAccount user2 = new BankAccount();
        BankAccount user3 = new BankAccount();

        // Deposit Test
        // - deposit some money into each bank account's checking or savings account and display the balance each time
        // - each deposit should increase the amount of totalMoney
        System.out.println(user1.depositChecking(500));
        System.out.println(user1.depositSavings(1000));
        System.out.println(user2.depositChecking(500));
        System.out.println(user2.depositSavings(2025));
        System.out.println(user3.depositChecking(100));
        System.out.println(user3.depositSavings(550));
        System.out.println(BankAccount.getTotalMoney());

        // Withdrawal Test
        // - withdraw some money from each bank account's checking or savings account and display the remaining balance
        // - each withdrawal should decrease the amount of totalMoney
        System.out.println(user1.withdrawChecking(20));
        System.out.println(user1.withdrawSavings(20));
        System.out.println(user2.withdrawChecking(20));
        System.out.println(user2.withdrawSavings(20));
        System.out.println(user3.withdrawChecking(20));
        System.out.println(user3.withdrawSavings(20));
        System.out.println(BankAccount.getTotalMoney());

        // Static Test (print the number of bank accounts and the totalMoney)
        System.out.println(BankAccount.getAccounts());
        System.out.println(BankAccount.getTotalMoney());

    }
}
