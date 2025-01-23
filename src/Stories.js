export default function Stories() {
    const stories = [
        { nome: "9gag", imagem: "assets/img/9gag.svg" },
        { nome: "meowed", imagem: "assets/img/meowed.svg" },
        { nome: "barked", imagem: "assets/img/barked.svg" },
        { nome: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
        { nome: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
        { nome: "respondeai", imagem: "assets/img/respondeai.svg" },
        { nome: "filomoderna", imagem: "assets/img/filomoderna.svg" },
        { nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }
    ];

    return (
        <div className="stories">
            {stories.map((story, index) => <Story nome={story.nome} imagem={story.imagem} key={index}/>)}
        </div>
    )
}

function Story({nome, imagem}) {
    return (
        <div className="story">
            <div className="imagem">
                <img src={imagem} alt={nome} />
            </div>
            <div className="usuario">
                {nome}
            </div>
        </div>
    )

}