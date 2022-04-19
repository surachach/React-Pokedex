import './ImageItem.css'
function ImageItem(props) {
    const { pokemont, onPokemonClick } = props;
    return (
        <div className='image-item'>
          <img  src= {pokemont.image} onClick={() => {onPokemonClick(pokemont)}} />
          <h1>{pokemont.title}</h1>
       </div>
    );
}

export default ImageItem;