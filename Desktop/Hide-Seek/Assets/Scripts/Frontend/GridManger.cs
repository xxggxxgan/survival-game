using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GridManger : MonoBehaviour
{
    public Sprite sprite;
    public int[,] Grid;
    int Vertical, Horizontal, Columns, Rows;

    // Start is called before the first frame update
    void Start()
    {
        Vertical = (int)Camera.main.orthographicSize;
        Horizontal = Vertical * (Screen.width / Screen.height);
        Columns = Horizontal * 2;
        Rows = Vertical * 2;
        Grid = new int[Columns, Rows];
        for(int i = 0; i< Columns; i++)
        {
            for (int j = 0; j < Rows; j++)
            {
                Grid[i, j] = 1;
                SpawnTile(i, j, 1);
            }
        }
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    // get x y and spwan the tile
    private void SpawnTile(int x,int y,int Value)
    {
        GameObject g = new GameObject("X" + x+ "Y"+y);
        g.transform.position = new Vector3(x-(Horizontal - 0.5f),y-(Vertical - 0.5f));
        var s = g.AddComponent<SpriteRenderer>();
        s.sprite = sprite;
        s.color = new Color(1.0f, 1.0f, 1.0f);
    }
}
