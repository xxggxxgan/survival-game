using System;
public class Basic_grid{
    protected int y;
    protected int x;

    public Basic_grid(){
        this.y = 0;
        this.x = 0;
    }

    protected void setPosition(int x, int y){
        this.x = x;
        this.y = y;
    }

    public virtual string ToString()
    {
        return "basic";
    }
}