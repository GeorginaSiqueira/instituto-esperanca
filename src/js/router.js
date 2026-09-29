export function obterRota() {
    const rota = window.location.hash.replace("#", "");

    return rota || "inicio";
}

export function navegar(rota) {
    window.location.hash = rota;
}

export function iniciarRouter(renderizar) {
    renderizar(obterRota());

    window.addEventListener("hashchange", () => {
        renderizar(obterRota());
    });
}