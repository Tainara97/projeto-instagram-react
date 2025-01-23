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
    );
}

function Post({ usuario, imagemPost, acoesPost, curtidasPost, index }) {
    
    const [salvo, setSalvo] = React.useState("bookmark-outline");
    const [curtido, setCurtido] = React.useState("heart-outline");
    const [numeroCurtidas, setNumeroCurtidas] = React.useState(101523);
    
    function salvarPost() {
        const iconeSalvarClicado = "bookmark";
        setSalvo(salvo === "bookmark-outline"  ? iconeSalvarClicado : "bookmark-outline");
    }

    function curtirPost() {
        const postCurtido = (curtido === "heart-outline" ? "heart" : "heart-outline")
        setCurtido(postCurtido);

        setNumeroCurtidas(postCurtido === "heart" ? numeroCurtidas + 1 : numeroCurtidas - 1);
    }

    function curtirImagem() {
        if (curtido === "heart-outline") {
            setCurtido("heart");
            setNumeroCurtidas(numeroCurtidas + 1);
        }
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
                <img onClick={curtirImagem} src={imagemPost.imagem} alt={imagemPost.nome} />
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        {acoesPost.map(acao => <ion-icon onClick={acao === "heart-outline" ? curtirPost : null} name={acao === "heart-outline" ? curtido : acao} />)}
                    </div>
                    <div>
                        <ion-icon onClick={salvarPost} name={salvo}></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={curtidasPost.imagem} alt={curtidasPost.nome} />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras {numeroCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}


