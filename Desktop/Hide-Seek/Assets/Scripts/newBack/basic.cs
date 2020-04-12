using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class basic
{
    //位置
    public int x = 0;
    public int y = 0;

    // 1 代表不可穿过
    // 0 代表可以穿过
    public int collide = 0;

    public void set_collidable()
    {
        this.collide = 1;
    }
}
