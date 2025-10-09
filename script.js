const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagem = document.getElementById('mensagem')

botaoSim.addEventListener('click', () => { mensagem.textContent = "Oownnnn, que bom que você fez a escolha certaaa"});

botaoNao.addEventListener('mouseover', () => { 
    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = 'absolute';
    botaoNao.style.left = `${x}px`;
    botaoNao.style.right = `${y}px`;
});