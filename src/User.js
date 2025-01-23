import React from "react";

export default function User() {
    const avatarInicial = "https://i.pinimg.com/736x/ae/ae/d2/aeaed2f94d13e2faf3b72b010e681684.jpg";

    const [nome, setNome] = React.useState("");
    const [avatar, setAvatar] = React.useState(avatarInicial);

    function inserirNome() {
        const nomeInserido = prompt("Qual é o seu nome?");
        setNome(nomeInserido);
    }

    function mudarAvatar() {
        const linkInserido = prompt("Digite o link da sua imagem");
        setAvatar(linkInserido);
    }

    return (
        <div class="usuario">
          <img onClick={mudarAvatar} src={!avatar ? avatarInicial : avatar} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{!nome ? "Tainara" : nome}</strong>
              <ion-icon name="pencil" onClick={inserirNome}></ion-icon>
            </span>
          </div>
        </div>
    )
}