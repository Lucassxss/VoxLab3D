// OBJETO DE PRODUTOS
const produtos = {
    // ===== CHAVEIROS =====
    "chaveiro-letra": {nome:"Chaveiro Letra", preco:5, imagem:"img/letra.jpg", descricao:"Chaveiro inicial de nome feito em PLA Premium."},
    "chaveiro-gamer": {nome:"Chaveiro Gamer", preco:5, imagem:"img/chaveiro gamer.jpg", descricao:"Modelo perfeito para fãs de videogame."},
    "chaveiro-nossa-senhora": {nome:"Chaveiro Nossa Senhora", preco:5, imagem:"img/chaveiroNossaSenhora.jpg", descricao:"Chaveiro delicado e religioso, muito procurado."},
    "chaveiro-coracao": {nome:"Chaveiro Coração", preco:5, imagem:"img/coracao.jpg", descricao:"Chaveiro fofo em forma de coração."},
    "chaveiro-peixinho": {nome:"Chaveiro Peixinho", preco:5, imagem:"img/peixe.jpg", descricao:"Chaveiro delicado em forma de peixinho articulado."},
    "chaveiro-banguela": {nome:"Chaveiro Banguela", preco:12.90, imagem:"img/chaveiroBanguela.jpg", descricao:"Chaveiro do dragão Banguela articulado 9cm de pura magia."},
    "chaveiro-furia-luz": {nome:"Chaveiro Fúria da Luz", preco:19.90, imagem:"img/chaveiroFuriaDaLuz.jpg", descricao:"Chaveiro do dragão Fúria da Luz chegou para conquistar corações."},
    "chaveiro-academia": {nome:"Chaveiro Academia", preco:8, imagem:"img/academia.png", descricao:"Chaveiro para os amantes de academia, levando motivação sempre junto."},

    "chaveiro-pokebola": {nome:"Chaveiro Pokébola", preco:8, imagem:"img/pokebola.jpg", descricao:"Chaveiro Pokébola impresso em 3D."},
    "chaveiro-antistress": {nome:"Chaveiro Antistress", preco:9, imagem:"img/antistress.jpg", descricao:"Chaveiro antistress articulado."},
    "chaveiro-polvo": {nome:"Chaveiro Polvo", preco:8, imagem:"img/polvo.jpg", descricao:"Chaveiro polvo articulado."},
    "chaveiro-cachorrinho": {nome:"Chaveiro Cachorrinho", preco:9, imagem:"img/chaveiroCachorro.jpg", descricao:"Chaveiro cachorrinho estilo tricô."},
    "chaveiro-emote": {nome:"Chaveiro de Emote", preco:5, imagem:"img/chaveiroEmote.jpg", descricao:"Chaveiro de emote personalizado."},
    "chaveiro-esmalte": {nome:"Chaveiro Esmalte", preco:5, imagem:"img/esmalte.jpg", descricao:"Chaveiro/Abridor de latas formato esmalte."},
    "chaveiro-hollow-knight": {nome:"Chaveiro Hollow Knight", preco:9, imagem:"img/hollow.jpg", descricao:"Chaveiro personagem Hollow Knight."},
    "chaveiro-polaroid": {nome:"Chaveiro Polaroid", preco:12.90, imagem:"img/polaroid.jpg", descricao:"Chaveiro estilo polaroid personalizável (Envie sua foto em alta resolução)."},

    // ===== LETREIROS =====
    "letreiro-te-amo": {nome:'Letreiro "Te Amo"', preco:9.90, imagem:"img/Letreito.jpg", descricao:"Letreiro fofo ideal para presentes e decoração."},
    "letreiro-personalizado": {nome:"Letreiro com Nome", preco:23.50, imagem:"img/letreiroNome.jpg", descricao:"Faça um letreiro totalmente personalizado com seu nome."},

    // ===== BONECOS =====
    "jolteon": {nome:"Jolteon", preco:20.90, imagem:"img/Jolteon.jpg", descricao:"Modelo Pokémon em 3D com acabamento premium."},
    "rayquaza": {nome:"Rayquaza", preco:125.90, imagem:"img/Rayquaza.jpg", descricao:"Figura Pokémon detalhada e com ótima qualidade."},
    "scooby-doo": {nome:"Scooby-Doo", preco:32.90, imagem:"img/scooby.jpg", descricao:"Boneco Scooby-Doo em 3D, ótimo acabamento."},
    "creeper": {nome:"Creeper Minecraft", preco:20.90, imagem:"img/creeper.jpg", descricao:"Figura Minecraft em 3D, ótima qualidade."},
    "dragao-deitado": {nome:"Dragão Deitado", preco:13.90, imagem:"img/dragao-deitado.jpg", descricao:"Figura de dragão deitado em 3D."},
    "boneco-furia-luz": {nome:"Boneco Fúria da Luz", preco:31.90, imagem:"img/furia da luz2.jpg", descricao:"Boneco Fúria da Luz em 3D."},
    "boneco-banguela": {nome:"Boneco Banguela", preco:29.90, imagem:"img/banguela2.jpg", descricao:"Boneco Banguela em 3D."},

    // ===== UTENSÍLIOS =====
    "suporte-controle1": {nome:"Suporte de Controle", preco:27.90, imagem:"img/suporte1.jpg", descricao:"Suporte prático para controles."},
    "suporte-controle2": {nome:"Suporte de Controle", preco:26.90, imagem:"img/suporte2.jpg", descricao:"Suporte prático para controles."},
    "suporte-celular": {nome:"Suporte para Celular", preco:8, imagem:"img/suporteCelular.jpg", descricao:"Suporte para celular em 3D."},
    "suporte-toalhas": {nome:"Suporte para Toalhas", preco:17.90, imagem:"img/suporteToalha.jpg", descricao:"Suporte para toalhas impresso em 3D."},

    // ===== ADICIONADOS =====
    "qrcode-pix": {nome:"Placa QRCode Pix", preco:18.90, imagem:"img/teste2.jpg", descricao:"Placa personalizada com QRCode Pix ideal para comércios."},
    "letreiro-empresa": {nome:"Letreiro Empresa", preco:45.90, imagem:"img/LetreiroEmpresa.jpg", descricao:"Letreiro 3D personalizado com nome ou logo."},
    "dino-surpresa": {nome:"Dino Surpresa", preco:14.90, imagem:"img/dino.jpg", descricao:"Saco surpresa com dinossauro surpresa dentro."}
};

// ===== VARIÁVEIS =====
let PRODUTO_ATUAL = null;
let frete = 0;

// ===== CARREGAR PRODUTO =====
window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (!id || !produtos[id]) {
        alert("Produto não encontrado!");
        window.history.back();
        return;
    }

    PRODUTO_ATUAL = produtos[id];

    document.getElementById("nome-produto").textContent = PRODUTO_ATUAL.nome;
    document.getElementById("preco-produto").textContent =
        `R$ ${PRODUTO_ATUAL.preco.toFixed(2)}`;
    document.getElementById("imagem-produto").src = PRODUTO_ATUAL.imagem;
    document.getElementById("descricao-produto").textContent =
        PRODUTO_ATUAL.descricao;

    document.getElementById("quantidade").addEventListener("input", atualizarTotal);

    atualizarTotal();
});

// ===== BUSCAR CEP =====
async function buscarCEP(cep) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            alert("CEP não encontrado.");
            return null;
        }
        return data;
    } catch (error) {
        alert("Erro ao buscar CEP. Tente novamente.");
        return null;
    }
}

// ===== FRETE =====
async function calcularFrete() {
    const cep = document.getElementById("cep").value.replace(/\D/g,'');

    if (cep.length !== 8) {
        alert("Digite um CEP válido (8 números).");
        return;
    }

    const endereco = await buscarCEP(cep);
    if (!endereco) return;

    document.getElementById("endereco-info").textContent =
        `${endereco.localidade}, ${endereco.uf}`;

    if (endereco.uf === 'SP') {
        frete = endereco.localidade === 'São Paulo' ? 10 : 15;
    } else {
        frete = 20;
    }

    atualizarTotal();
}

// ===== TOTAL =====
function atualizarTotal() {
    const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
    const subtotal = PRODUTO_ATUAL.preco * quantidade;
    const total = subtotal + frete;

    window.precoFinal = total;

    document.getElementById("total-valor").textContent =
        `Total: R$ ${total.toFixed(2)}`;
}

// ===== COMPRAR PELO WHATSAPP =====
function comprarWhats() {
    const numeroWhats = "5516994038011";
    const quantidade = parseInt(document.getElementById("quantidade").value) || 1;
    const valor = window.precoFinal ?? PRODUTO_ATUAL.preco;

    const mensagem =
`Olá! Tenho interesse neste produto:

Produto: ${PRODUTO_ATUAL.nome}
Quantidade: ${quantidade}
Valor total: R$ ${valor.toFixed(2)}

Aguardo retorno 🙂`;

    window.open(
        `https://wa.me/${numeroWhats}?text=${encodeURIComponent(mensagem)}`,
        "_blank"
    );
}


