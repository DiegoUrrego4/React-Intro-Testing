export const getImagen = async () => {
  try {
    const apiKey = '2NHLC9d5sJ5s3t4F5R4TnsH6S09RL9ku';
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    return url;
  } catch (error) {
    // manejo del error
    console.error(error);
    return 'No se encontró la imagen'
  }
};

getImagen();
