async function listaCadastros(){
    const conexao = await fetch("http://localhost:3000/user");
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function criarCadastro(nome, email, senha, senhaConfirma){
    const conexao = await fetch("http://localhost:3000/user",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify({nome:nome,
            email:email,
            senha:senha,
            senhaConfirma:senhaConfirma})
    })
    if(!conexao.ok){
        throw new Error('Não foi possivel fazer o cadastro');
    }
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const conexaoApi = {
    listaCadastros,
    criarCadastro,
}