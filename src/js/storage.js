const CHAVE = "contatoInstituto";


export function salvarDados(dados) {

    localStorage.setItem(
        CHAVE,
        JSON.stringify(dados)
    );
}


export function recuperarDados() {

    const dados =
        localStorage.getItem(CHAVE);

    if (!dados) {
        return null;
    }

    return JSON.parse(dados);
}