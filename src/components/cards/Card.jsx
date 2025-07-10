import './Card.css';

const Card = (
    {
        imgURL,
        title,
        description,
        actionLabel
    }
)=>{
    return (
        <div className="card">
            <div className="card-header">
                <h1>{title}</h1>
                <img src={imgURL} alt={title}/>
            </div>

            <div className="card-body">
                <p>{description}</p>
            </div>

            <div className="card-footer">
                <button>{actionLabel}</button>
            </div>
        </div>
    );
}

export default Card;