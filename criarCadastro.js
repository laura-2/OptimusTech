import { conexaoApi } from "./conexaoApi.js";

const formulario = document.querySelector("[data-formulario]");
async function criarCadastro(evento){
    evento.preventDefault();
    const nome = document.querySelector("[data-nome]").value;
    const email = document.querySelector("[data-email]").value;
    const senha = document.querySelector("[data-senha]").value;
    const senhaConfirma = document.querySelector("[data-senhaConfirma]").value;
    try{
    await conexaoApi.criarCadastro(nome, email, senha, senhaConfirma);
    } catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarCadastro(evento));