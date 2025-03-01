// Online Java Compiler
// Use this editor to write, compile and run your Java code online

class Main {
    public static void main(String[] args) {
        Pen p=new Pen();
        p.color="white";
        p.type="ink";
        p.write();
        p.pcolor();
        Pen p1=new Pen();
        p1.color="black";
        p1.pcolor();
    }
    
}
class Pen{
    String color;
    String type;
    public void write(){
        System.out.println("writing somethig");
    }
    public void pcolor(){
        System.out.println(this.color);
        }
}