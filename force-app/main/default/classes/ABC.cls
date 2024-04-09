public class ABC {
    Final Decimal pi = 3.14;
    
    Decimal radius;
    Decimal area;
    public void circlearea(Decimal radius){
        area = this.pi*radius*radius;
        system.debug('Area = '+area);
    }
}