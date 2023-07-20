const entrar = document.querySelector("#entrar");
entrar.addEventListener('click', funcaoEntrar);
const myModal = document.querySelector("#modal");
const myModalCadastrar = document.querySelector("#modalCadastrar")
const cancelar = document.querySelector("#cancelar");
const closeIcon = document.querySelector("#icone")
cancelar.addEventListener('click', funcaoFechar);
closeIcon.addEventListener('click', funcaoFechar);
const cadastrar = document.querySelector("#cadastrar");
cadastrar.addEventListener('click', funcaoCadastrar)
const cancelarCadastro = document.querySelector("#cancelarCadastrar");
const closeIconCadastro = document.querySelector("#iconeCadastrar")
cancelarCadastro.addEventListener('click', funcaoFecharCadastro);
closeIconCadastro.addEventListener('click', funcaoFecharCadastro);
const cadastrado = document.querySelector("#cadastrado");
cadastrado.addEventListener('click', funcaoCadastrado);
const nome = document.querySelector("#name");
const cadastrarEmail = document.querySelector("#cadastrarEmail");
cadastrarEmail.addEventListener('click', abrirModalCadastro);

function funcaoEntrar(){
    if(myModal.style.display = "none"){
        myModal.style.display = "block";
    }
}
function abrirModalCadastro(){
    if(myModalCadastrar.style.display = "none"){
        myModalCadastrar.style.display = "block";
    }
}
function funcaoCadastrado(){
    if(nome.value != ""){
        alert(`Obrigado(a) ${nome.value}. Seu cadastro foi concluído com sucesso!`);
        myModalCadastrar.style.display = "none";
    }
}
function funcaoCadastrar(){
    if(myModalCadastrar.style.display = "none"){
        myModalCadastrar.style.display = "block";
    }
}
function funcaoFechar(){
    if(myModal.style.display = "block"){
        myModal.style.display = "none";
    }
}
function funcaoFecharCadastro(){
    if(myModalCadastrar.style.display = "block"){
        myModalCadastrar.style.display = "none";
    }
}