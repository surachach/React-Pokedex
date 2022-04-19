import './ImagePost.css'
function ImagePost(props) {
    const { pokemon, onBgClick } = props;
    return (
        <div className="image-post">
            <div className="image-post-bg" onClick={onBgClick}/>
            <div className="image-post-content">
                <img  src= {pokemon.image}/>
                <h4>{pokemon.title}</h4> 
            </div>
        </div>
    )
}

export default ImagePost;