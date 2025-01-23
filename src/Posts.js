import React from "react";

export default function Posts() {
    const elementosPost = [
        {
            usuario: { nome: "meowed", imagem: "assets/img/meowed.svg" },
            imagemPost: { nome: "gato-telefone", imagem: "assets/img/gato-telefone.svg" },
            acoesPost: ["heart-outline", "chatbubble-outline", "paper-plane-outline"],
            curtidasPost: { nome: "respondeai", imagem: "assets/img/respondeai.svg" },
        },
        {
            usuario: { nome: "barked", imagem: "assets/img/barked.svg" },
            imagemPost: { nome: "dog", imagem: "assets/img/dog.svg" },
            acoesPost: ["heart-outline", "chatbubble-outline", "paper-plane-outline"],
            curtidasPost: { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg" },
        },
        {
            usuario: { nome: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
            imagemPost: { nome: "vegas", imagem: "assets/img/vegas.jpeg" },
            acoesPost: ["heart-outline", "chatbubble-outline", "paper-plane-outline"],
            curtidasPost: { nome: "filomoderna", imagem: "assets/img/filomoderna.svg" },
        }

    ];

    return (
        <div class="posts">
            {elementosPost.map(({ usuario, imagemPost, acoesPost, curtidasPost }, index) =>
                <Post
                    usuario={usuario}
                    imagemPost={imagemPost}
                    acoesPost={acoesPost}
                    curtidasPost={curtidasPost}
                    key={index}
                />
            )}
        </div>
    )


}

function Post({ usuario, imagemPost, acoesPost, curtidasPost, index }) {
    
    const [salvo, setSalvo] = React.useState("bookmark-outline");

    function salvarPost() {
        const iconeSalvarClicado = "bookmark";
        setSalvo(salvo === "bookmark-outline"  ? iconeSalvarClicado : "bookmark-outline");
    }

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={usuario.imagem} alt={usuario.nome} />
                    {usuario.nome}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={imagemPost.imagem} alt={imagemPost.nome} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        {acoesPost.map(acao => <ion-icon name={acao} />)}
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={salvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={curtidasPost.imagem} alt={curtidasPost.nome} />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


