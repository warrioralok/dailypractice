import { useState } from "react";

const userlist =[
    {name:"Alice2", age:25},
    {name:"Bob", age:30},
    {name:"Charlie", age:24},
    {name:"Angles", age:27}
]

const State2 = () =>{
    const [user, newsUsers] = useState(userlist);
    return(
        <>
            <div className="table">
        <div className="table-row header">
            <div className="table-cell">Name</div>
            <div className="table-cell">Age</div>
        </div>
       {user.map((data)=>{ 
              return(  
                <div className="table-row" key={data.name}>
                <div className="table-cell">{data.name}</div>
                <div className="table-cell">{data.age}</div>
        </div>
              )
        })}
    </div>
        </>
    )
}

export default State2;