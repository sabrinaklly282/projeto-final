function Perfil() {
    return (
        <>
            <div className="perfil container text-center">
                <div className="row">
                    <div className="perfilDados col">
                        <div id="perfilNome">
                            <p>Nome de usuário</p>
                        </div>
                        <div id="perfilBio">
                            <p>Descrição da bio:<br />Compartilhe posts no feed,<br /> altere configurações<br /> e se conecte com amigos!</p>
                        </div>
                    </div>
                    <div className="col" >
                        <img src="https://placehold.co/200" alt="foto" />
                    </div>
                </div>

            </div>
            <div className="bioDados container text-center">
                <div className="row">
                    <div className="dadosBio col">
                        <p><strong>Seguidores</strong></p>
                        <p>3.000</p>
                    </div>
                    <div className="dadosBio col">
                        <p><strong>Seguindo</strong></p>
                        <p>200</p>
                    </div>
                    <div className="dadosBio col">
                        <p><strong>Posts</strong></p>
                        <p>400</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Perfil;