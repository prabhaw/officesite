export const TextInput = props =>{
    return(<>
    
    <input type='text' type={props.type === 'password' ? 'password': 'text'} placeholder={props.placeholder ? props.placeholder : ""} 
    onChange={props.onChange}
     className={`rounded outline-none w-full ${props.error ? 'border-2 border-red-700 ' : ''} bg-gray-300  py-2 px-4`}
     />
    {props.error && <label className='text-red-700'>Error occours</label>}
    
    </>)
}


