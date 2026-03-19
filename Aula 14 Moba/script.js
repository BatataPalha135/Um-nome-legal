function iniciarSistema() {
    console.log("HUD de Treinamento carregado com sucesso.");
}

document.addEventListener('keydown', function(event) {
    const tecla = event.key.toUpperCase();
    const display = document.getElementById('hud-display');
    let acao = "";

    switch(tecla) {
        case 'Q': case 'W': case 'E': case 'R':
            acao = "HABILIDADE CONJURADA!"; 
            break;

        case 'D': case 'F':
            acao = "FEITIÇO DE INVOCADOR!";
            break;

        case '1': case '2': case '3': case '4': case '5': case '6': case '7':
            acao = "ITEM DO INVENTÁRIO ATIVADO!";
            break;

        case 'A': case 'X':
            acao = "MOVIMENTO DE ATAQUE (KITING)!";
            break;

        case 'S':
            acao = "PARAR (STOP ACTION)!";
            break;

        case 'B':
            acao = "RECALL: VOLTANDO PARA A BASE...";
            break;

        case 'Y':
            acao = "CÂMERA - TRAVAR/DESTRAVAR";
            break;

        case ' ': 
            acao = "CENTRALIZAR NO CAMPEÃO"; 
            break;

        case 'F1': case 'F2': case 'F3': case 'F4': case 'F5':
            acao = "VISUALIZANDO ALIADO " + tecla; 
            break;

        case 'ENTER':
            acao = "CHAT ABERTO"; 
            break;

        case 'ESCAPE':
            acao = "MENU DO JOGO"; 
            break;

        case 'C':
            acao = "STATUS DETALHADOS"; 
            break;

        case 'TAB':
            event.preventDefault(); 
            acao = "PLACAR DE KDA EXIBIDO"; 
            break;

        case 'P':
            acao = "LOJA DE ITENS ABERTA"; 
            break;
            default:
            return; 
    }

    registrarLog("TECLADO", tecla, acao, "🟩#00ff41");
});

const mouseArea = document.getElementById('mouseArea');

function atirar(e) {
    if (e.button === 0) {
        registrarLog("MOUSE", "CLICK 1", "🔥 TIRO DISPARADO!", "🟥#ef4444");

        mouseArea.classList.add('efeito-tiro');
        setTimeout(() => mouseArea.classList.remove('efeito-tiro'), 100);
    }
}

function mirar() {
    const estaMirando = mouseArea.classList.toggle('modo-mira');

    if (estaMirando) {
        registrarLog("MOUSE", "CLICK 2", "🎯 MIRA ZOOM ATIVADA!", "🟩#10b981");
        mouseArea.innerText = "MIRA ESTABILIZADA";
    }
}

function trocarArma() {
    registrarLog("MOUSE", "SCROLL", "🔁 TROCANDO ARMA...", "🟨#f59e0b");
    mouseArea.style.borderColor = "🟨#f59e0b";
    setTimeout(() => mouseArea.style.borderColor = "🟦#38bdf8", 400);
}

function registrarLog(origem, tecla, acao, cor) {
    const display = document.getElementById('hud-display');
    const item = document.createElement('div');
    item.className = 'log-item';
    item.style.borderLeftColor = cor;
    item.innerHTML = `<strong>[${origem}] [${tecla}]</strong> - ${acao}`;

    display.prepend(item);
}