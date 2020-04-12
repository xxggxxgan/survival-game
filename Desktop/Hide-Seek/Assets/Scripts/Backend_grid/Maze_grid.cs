using System.Collections;
using System.Collections.Generic;

[System.Serializable]
public class Maze_grid: Basic_grid{
    // this shows how for each [x,y], what do we have on top
    public List<List<int>> grids = new List<List<int>>();
    public Maze_grid(int x, int y){
        setPosition(x,y);
    }

    public void setWall(int height, int width)
    {   
        for (int j = 0; j < height; j++){
            List<int> sublist = new List<int>();
            for (int i = 0; i < width; i++){
                sublist.Add(1);
            }
            this.grids.Add(sublist);
        }
    }

    public void addWalls(int height, int width)
    {
        this.setWall(height,width);
    }

    public override string ToString()
    {
        string r = "";
        foreach (var sublist in this.grids)
        {
            r += "|";
            foreach (var value in sublist)
            {
                r += value;  
            }
        }
        return r;
        // return "this is a maze with " + y + "and" + x + " large";
    }
}
