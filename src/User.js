import React from "react";

export default function User() {
    const avatarInicial = "assets/img/catanacomics.svg";

    const [nome, setNome] = React.useState("");
    

    function inserirNome() {
        const nomeInserido = prompt("Qual é o seu nome?");
        setNome(nomeInserido);
    }


    return (
        <div class="usuario">
          <img src={avatarInicial} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{!nome ? "Tainara" : nome}</strong>
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}