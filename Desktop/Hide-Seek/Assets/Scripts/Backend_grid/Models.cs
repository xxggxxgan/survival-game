using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Test{

    [System.Serializable]
    class Model
    {
        public Maze_grid maze = new Maze_grid(10,10);
        public Maze_grid Maze
        {
            get
            {
                return maze;
            }
        }
        public Model(){
            maze.addWalls(10, 10);
        }
    }
}
