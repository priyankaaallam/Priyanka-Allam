package controlStatements;

public class For {

	public static void main(String[] args) {
		for(int i=1;i<=3;i++)
		{
			System.out.println(i);
		}
		for(int i=1;i<=3;i++)
		{
			for(int j=1;j<=3;j++)
			{
				System.out.println(i+" "+j);
			}
		}
	}

}
