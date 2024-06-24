
export const Title = ({titleUser,Group,onIncrementPrev}) => {

  const {company:{employeeName},}=Group; //nested destructure// not good practice
   
    

   console.log(titleUser,"=employee search");
  return (
    <div>
      
       <h1>Hai Title, {titleUser}</h1>
       <h1>{Group.company.employeeName}</h1>
       <h1>destructure {employeeName} </h1>
    
    <button onClick={onIncrementPrev}>from Title component</button>
    </div>

    
  )
}

