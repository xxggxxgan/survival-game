
namespace Test{
    using System;
    using System.Collections;
    using System.Collections.Generic;
    using UnityEngine;

    public class controller : MonoBehaviour
    {
        public string json = "";
        void Start(){
            map map = new map(10,10);
            json = JsonUtility.ToJson(map);
            Debug.Log(json);
        }

        void Update()
        {
            view.receiver(json);
        }
    }
}