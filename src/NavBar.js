export default function NavBar() {
    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div className="separador"></div>
                    <img src="assets/img/logo.png" alt="logo" />
                </div>

                <div className="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="icones">
                    {icones.map(icone => <ion-icon name={icone}/>)}
                </div>
            </div>
        </div>
    )

}