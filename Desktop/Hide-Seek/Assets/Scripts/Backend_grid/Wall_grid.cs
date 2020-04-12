using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Wall_grid: Basic_grid{
    // collide = 1 证明该物品会被collide到
    public int collide = 1;
    public Wall_grid(int x, int y){
        setPosition(x, y);
    }
    public override string ToString(){
        return "this is a wall";
    }
    
}
