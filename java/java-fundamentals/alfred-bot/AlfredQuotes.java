import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return ("Hello " + name + ". Would you like a cup of tea?");
    }
    
    public String dateAnnouncement() {
        Date date = new Date();
        return ("The current date and time is " + date);
    }
    
    public String respondBeforeAlexis(String conversation) {
        if (conversation.contains("Alexis")) {
            return "Right away sir. She certainly isn't sophisticated enough for that.";
        }
        else if (conversation.contains("Alfred")) {
            return "At your service. Right away.";
        }
        return "Right. And with that, I shall retire.";
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}

