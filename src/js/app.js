import {
    paginaInicio,
    paginaProjetos,
    paginaContato
} from "./templates.js";

import {
    salvarDados,
    recuperarDados
} from "./storage.js";


const app = document.getElementById("app");


function renderizar() {

    const rota =
        window.location.hash.replace("#", "") || "inicio";


    if (rota === "projetos") {

        app.innerHTML = paginaProjetos();

        return;
    }


    if (rota === "contato") {

        app.innerHTML = paginaContato();

        configurarFormulario();

        return;
    }


    app.innerHTML = paginaInicio();
}


/* Detecta mudança na URL */

window.addEventListener(
    "hashchange",
    renderizar
);


/* Links do menu */

document.addEventListener(
    "click",
    function (event) {

        const link =
            event.target.closest(
                "a[data-rota]"
            );


        if (!link) {
            return;
        }


        event.preventDefault();


        window.location.hash =
            link.dataset.rota;
    }
);


/* Formulário */

function configurarFormulario() {

    const formulario =
        document.getElementById("formContato");


    if (!formulario) {
        return;
    }


    const dados =
        recuperarDados();


    if (dados) {

        document.getElementById("nome").value =
            dados.nome || "";

        document.getElementById("email").value =
            dados.email || "";

        document.getElementById("mensagem").value =
            dados.mensagem || "";
    }


    formulario.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const nome =
                document.getElementById("nome");

            const email =
                document.getElementById("email");

            const mensagem =
                document.getElementById("mensagem");


            if (
                nome.value.trim() === "" ||
                email.value.trim() === "" ||
                mensagem.value.trim() === ""
            ) {

                Swal.fire({
                    icon: "error",
                    title: "Atenção!",
                    text: "Preencha todos os campos."
                });

                return;
            }


            const dadosFormulario = {

                nome: nome.value.trim(),

                email: email.value.trim(),

                mensagem: mensagem.value.trim()
            };


            salvarDados(dadosFormulario);


            Swal.fire({
                icon: "success",
                title: "Mensagem enviada!",
                text: "Os dados foram armazenados com sucesso."
            });
        }
    );
}


/* Primeira renderização */

renderizar();