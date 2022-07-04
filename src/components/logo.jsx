import '../hojas-de-estilo/logo.css';

const Logo = () => {
  return (
    <div className="container-fluid d-flex justify-content-center my-3">
      <img className="imagen-logo img-fluid" src={require("../imagenes/freecodecamp-logo.png")} alt="logo-fcc" />
    </div>
  );
};

export default Logo;