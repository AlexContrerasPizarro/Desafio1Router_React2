import "./Contacto.css"

const Contacto = () => {
  return (

    <div class="formContainer">
      <h2>Cuentanos en que podemos ayudar</h2>
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Ingresa tu correo electronico :</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="nombre@correo.com" />
          <small id="emailHelp" class="form-text text-muted">Nunca compartiremos tu correo electrónico con nadie más.</small>
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Descripcion :</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button type="submit" class="btn btn-dark">Enviar</button>
      </form>
    </div>

  )
}

export default Contacto;
