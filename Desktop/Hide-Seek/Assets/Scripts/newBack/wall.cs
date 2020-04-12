using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[System.Serializable]
public class wall : basic
{
    public int checkCollide()
    {
        return this.collide;
    }
    public wall(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}
