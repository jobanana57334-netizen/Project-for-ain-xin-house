const Input=({id,name,value,onChange})=>{
    return (
        <>
            <label htmlFor={id} className="">{name}</label>
            <input id={id} type="text" 
            value={value} onChange={onChange}/>
        </>
    )
}

export default Input