import java.io.Console;
import java.lang.reflect.Array;
import java.util.ArrayList;


public class Main {

//	private Validador[] validadores = new Validador[3];
	
	private ArrayList<Validador> validadores = new ArrayList<Validador>();

	void Validadores(Validador v){
		
		validadores.add(v);

	}

	String printLine(int i)
		{
			String r = "";
		
			for(int j = 1; j<=i;j++)
			{
				r += check(j);
				r +=",";
			}
			r = r.substring(0, r.length() -1);
			 System.out.println(r);
			return r;
		}

	String check(int i)
		 {
			
			 for(int k = 0; k < validadores.size() ; k++)
			 {
				 if(validadores.get(k).Test(i) != ""){ return validadores.get(k).Test(i);}
			 
			 }
			 return  Integer.toString(i);

		 }
		
}
	
	

