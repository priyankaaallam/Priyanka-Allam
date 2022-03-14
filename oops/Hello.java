package oops;

public class Hello { //constructor
	
Hello()
{ 
System.out.println("print hello");	
} 
Hello(int i,int j)
{
	System.out.println(i+" "+j);
	
}

Hello(String str){
	System.out.println(str);
}
Hello(float f){
	System.out.println(f);
}
	public static void main(String[] args) {
		Student std=new Student();
		std.display();
		Hello obj=new Hello(1,2);
		Hello obj1=new Hello();
        Hello obj3=new Hello(10.2f);
		Hello obj2=new Hello("priyanka");
	}

}
