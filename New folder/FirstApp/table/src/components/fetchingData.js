import React, {useState, useEffect} from "react";
import axios from "axios";

const DataFetch = () => {

    const [data, setData] = useState([]);
  
  
    useEffect( () => {
       axios.get("http://localhost:3000/users")
        .then(response => setData(response.data))
    }, [])
  
    return (
      <div>
        {
          data.length ?
            data.map(item => <p key={item.id}>{item.name}{item.email}</p>) :
            <h1> loading....</h1>
  
  
        }
      </div>

  )
  };
  export default DataFetch