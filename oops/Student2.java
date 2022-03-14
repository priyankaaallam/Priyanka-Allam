package oops;

public class Student2 {
	int id;
	String name;
    static int college=1234;
    static {
    	System.out.println("static block is invoked");
    }
    static void change()
    {
    	college=2234;
    }
    Student2(int i,String n){
    	id=i;
    	name=n;
    }
  void display()
    {
    	System.out.println(id+" "+name+" "+college);
    }


}
