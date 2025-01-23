export default function User() {
    const imagemInicial = "assets/img/catanacomics.svg";

    return (
        <div class="usuario">
          <img src={imagemInicial} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>catanacomics</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}