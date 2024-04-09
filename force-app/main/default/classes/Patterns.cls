public class Patterns {

    public static void Display(Integer a){
        
        for(Integer i=1;i<=10;i++){
            a=a*i;
            System.debug(a+'X'+i+'='+a);
        }
    }
}