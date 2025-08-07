import './Card.css'


function Card(props){
return(

<>
<div className='card'>
        <img src={props.info.foto}/>
        <strong>{props.info.num}</strong>
        <strong>{props.info.name}</strong>
        <strong>{props.info.type}</strong>
    </div>
</>
    )

}
export default Card