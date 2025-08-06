import './Card.css'


function Card(props){
return(

<>
<div className='card'>
        <img src={props.info.foto}/>
        <h1>{props.info.num}</h1>
        <h1>{props.info.name}</h1>
        <h1>{props.info.type}</h1>
    </div>
</>
    )

}
export default Card