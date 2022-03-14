package oops;

public class Student {

	int id=123;
	String name="priyanka";
	void display()
	{
		System.out.println(id+" "+name);
	}
	public static void main(String[] args) {
		Student std=new Student();
		std.display();
		Hello obj2=new Hello("priyanka");
	}

}
