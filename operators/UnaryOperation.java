package operators;

public class UnaryOperation {

	public static void main(String[] args) {
		int i=10;
		System.out.println(i++); // post increment
		System.out.println(++i);// pre increment
		System.out.println(i--);//post decrement
		System.out.println(--i);
		System.out.println(i++ + ++i);
	}

}
