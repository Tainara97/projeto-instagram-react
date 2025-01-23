export default function Suggestions() {
    const sugestao = [
        { nome: "bad.vibes.memes.svg", imagem: "assets/img/bad.vibes.memes.svg", texto: "Segue você" },
        { nome: "chibirdart", imagem: "assets/img/chibirdart.svg", texto: "Segue você" },
        { nome: "razoesparaacreditar", imagem: "assets/img/razoesparaacreditar.svg", texto: "Novo no Instagram" },
        { nome: "adorable_animals", imagem: "assets/img/adorable_animals.svg", texto: "Segue você" },
        { nome: "smallcutecats", imagem: "assets/img/smallcutecats.svg", texto: "Segue você" },
    ];

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
           
            {sugestao.map((item, index) => <Sugestao nome={item.nome} imagem={item.imagem} texto={item.texto} key={index} />)}
               
          



            {/* <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/bad.vibes.memes.svg" alt="bad.vibes.memes.svg"/>
              <div class="texto">
                <div class="nome">bad.vibes.memes</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/chibirdart.svg" alt="chibirdart"/>
              <div class="texto">
                <div class="nome">chibirdart</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/razoesparaacreditar.svg" alt="razoesparaacreditar" />
              <div class="texto">
                <div class="nome">razoesparaacreditar</div>
                <div class="razao">Novo no Instagram</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/adorable_animals.svg" alt="adorable_animals"/>
              <div class="texto">
                <div class="nome">adorable_animals</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/smallcutecats.svg" alt="smallcutecats"/>
              <div class="texto">
                <div class="nome">smallcutecats</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div> */}
        </div>
    );
}

function Sugestao({ nome, imagem, texto }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={imagem} alt={nome} />
                <div class="texto">
                    <div class="nome">{nome}</div>
                    <div class="razao">{texto}</div>
                </div>
            </div>
            <div class="seguir">Seguir</div>
           
        </div>

    )
}