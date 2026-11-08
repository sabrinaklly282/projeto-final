
function Configuracoes() {
    return (
        <>
            <div id="geralConfigs" className=" container text-start">
                <div id="opcoesConfigs" className=" row">
                    <div className="col">
                        <div class="mb-4">
                            <label id="labelConfigs" for="Input" class="form-label">Mudar nome de usuário</label>
                            <input id="inputConfigs" type="text" class="form-control" className="Input" placeholder="novo nome de usuário"/>
                            <br/>
                            <button type="button" className="btn btn-outline-secondary">Enviar</button>
                        </div>
                        <div class="mb-4">
                            <label id="labelConfigs" for="Input" class="form-label">Mudar a bio</label>
                            <input id="inputConfigs" type="text" class="form-control" className="Input" placeholder="nova bio"/>
                            <br/>
                            <button type="button" className="btn btn-outline-secondary">Enviar</button>
                        </div>
                        <div class="mb-4">
                            <label id="labelConfigs" for="Input" class="form-label">Buscar seguidor</label>
                            <input id="inputConfigs" type="text" class="form-control" className="Input" placeholder="hall de seguidores"/>
                            <br/>
                            <button type="button" className="btn btn-outline-secondary">Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Configuracoes;