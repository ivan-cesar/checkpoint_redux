function Addtask() {
     const onChangeHandler = ((e)=>{
       console.log(e.target.value)
    })
    
    return(
        <form action="">
            <input type="text" 
            onChange={onChangeHandler} 
            placeholder="Entrez votre tâche"/>
            <button type="submit">Soumettre</button>
        </form>
        
    )
    
}
export default Addtask