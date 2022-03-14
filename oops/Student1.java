package oops;

public class Student1 {
	int id;
	String name;
	static int age=18;
	Student1(int i,String n,int a){
		id=i;
		name=n;
		
	}
	Student1(int i,String n)
	{
		id=i;
		name=n;
	}
	void display()
	{
		System.out.println(id+" "+name+" "+age);
	}
	public static void main(String[] args) {
	Student std=new Student();
	std.display();
	Hello obj=new Hello();
	
	Student1 s1=new Student1(123,"sanvi");
	Student1 s2=new Student1(122,"hello");
s1.display();
s2.display();
	}

}
