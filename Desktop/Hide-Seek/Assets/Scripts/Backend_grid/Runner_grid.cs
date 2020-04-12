using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Runner_grid{
    // this shows how many different numbers we want to have on x axis and y axis
    public int x = 0;
    public int y = 0;
    // this shows how for each [x,y], what do we have on top
    public Runner_grid(int x, int y){
        this.x = x;
        this.y = y;
    }
    
    public void move(string direction){
        if (direction == "left"){
            moveLeft();
        }
        if (direction == "right"){
            moveRight();
        }
        if (direction == "up"){
            moveUp();
        }
        if (direction == "down"){
            moveDown();
        }
    }

    private void moveLeft(){
        this.x -= 1;
    }
    private void moveRight(){
        this.x += 1;
    }
    private void moveUp(){
        this.y += 1;
    }
    private void moveDown(){
        this.y -= 1;
    }
}
