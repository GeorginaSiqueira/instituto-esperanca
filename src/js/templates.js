export function paginaInicio() {
    return `
        <section class="inicio">

            <div class="inicio-conteudo">

                <div class="inicio-texto">

                    <h1>Instituto Esperança</h1>

                    <p>
                        Bem-vindo ao Instituto Esperança.
                        Trabalhamos para promover educação,
                        inclusão social e sustentabilidade.
                    </p>

                </div>

                <div class="inicio-imagem">

                    <img
                        src="${import.meta.env.BASE_URL}imagens/banner.webp"
                        alt="Instituto Esperança - ações sociais"
                    >

                </div>

            </div>

        </section>
    `;
}


export function paginaProjetos() {
    return `
        <section class="conteudo">

            <h1>Nossos Projetos</h1>

            <div class="lista-projetos">

                <article class="card-projeto">

                    <img
                        src="${import.meta.env.BASE_URL}imagens/projetos/educacao.webp"
                        alt="Projeto de educação"
                    >

                    <h2>Apoio à Educação</h2>

                    <p>
                        Ações destinadas ao incentivo
                        e apoio à educação.
                    </p>

                </article>


                <article class="card-projeto">

                    <img
                        src="${import.meta.env.BASE_URL}imagens/projetos/inclusao.webp"
                        alt="Projeto de inclusão social"
                    >

                    <h2>Inclusão Social</h2>

                    <p>
                        Projetos voltados à inclusão
                        e à transformação social.
                    </p>

                </article>


                <article class="card-projeto">

                    <img
                        src="${import.meta.env.BASE_URL}imagens/projetos/sustentabilidade.webp"
                        alt="Projeto de sustentabilidade"
                    >

                    <h2>Sustentabilidade</h2>

                    <p>
                        Iniciativas para promover
                        práticas sustentáveis.
                    </p>

                </article>

            </div>

        </section>
    `;
}


export function paginaContato() {
    return `
        <section class="conteudo">

            <h1>Entre em contato</h1>

            <form id="formContato" class="formulario">

                <div class="campo">

                    <label for="nome">
                        Nome
                    </label>

                    <input
                        type="text"
                        id="nome"
                        name="nome"
                    >

                    <small class="mensagem-erro"></small>

                </div>


                <div class="campo">

                    <label for="email">
                        E-mail
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                    >

                    <small class="mensagem-erro"></small>

                </div>


                <div class="campo">

                    <label for="mensagem">
                        Mensagem
                    </label>

                    <textarea
                        id="mensagem"
                        name="mensagem"
                    ></textarea>

                    <small class="mensagem-erro"></small>

                </div>


                <button type="submit">
                    Enviar mensagem
                </button>

            </form>

        </section>
    `;
}