export default function NavBar() {
    const icones = ["paper-plane-outline", "compass-outline", "heart-outline", "person-outline"];

    return (
        <div class="navbar">
            <div class="container">
                <div class="logo">
                    <ion-icon name="logo-instagram"></ion-icon>
                    <div class="separador"></div>
                    <img src="assets/img/logo.png" alt="logo" />
                </div>

                <div class="pesquisa">
                    <input type="text" placeholder="Pesquisar" />
                </div>

                <div class="icones">
                    {icones.map(icone => <ion-icon name={icone}/>)}
                </div>
            </div>
        </div>
    )

}