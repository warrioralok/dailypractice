import { useState } from "react";

const userlist =[
    {name:"Alice2", age:25},
    {name:"Bob", age:30},
    {name:"Charlie", age:24},
    {name:"Angles", age:27}
]

const State2 = () =>{
    // eslint-disable-next-line no-unused-vars
    const [user, newsUsers] = useState(userlist);
    
    const avgage = user.reduce((accu, elem) => {
        return accu + elem.age; // accumulate the age property
    }, 0)/user.length;
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
        
        <div className="table-row">
                    <div className="table-cell bold">Total Count:</div>
                    <div className="table-cell bold">{user.length}</div>
        </div>
        <div className="table-row">
                    <div className="table-cell bold">Average Age</div>
                    <div className="table-cell bold">{avgage}</div>
        </div>
    </div>
        </>
    )
}

export default State2;