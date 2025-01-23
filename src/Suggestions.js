export default function Suggestions() {
    const sugestao = [
        { nome: "bad.vibes.memes.svg", imagem: "assets/img/bad.vibes.memes.svg", texto: "Segue você" },
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", texto: "Segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", texto: "Novo no Instagram" },
        { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", texto: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", texto: "Segue você" },
    ];

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
           
            {sugestao.map((item, index) => <Sugestao nome={item.nome} imagem={item.imagem} texto={item.texto} key={index} />)}
        </div>
    );
}

function Sugestao({ nome, imagem, texto }) {
    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={imagem} alt={nome} />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">{texto}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
           
        </div>

    )
}