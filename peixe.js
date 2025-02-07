var config = 
{
    type: Phaser.AUTO,
    width: 800, // Largura da tela do jogo
    height: 600, // Altura da tela do jogo


    scene:
    {         
        preload: preload, // Função para carregar assets (imagens, sons, etc.)
        create: create,   // Função para criar e configurar objetos na cena
        update: update    // Função que é chamada a cada frame (atualizações contínuas)
    }
};

var game = new Phaser.Game(config);

var peixinho; // Variável para armazenar o objeto do peixe

function preload()
{
    this.load.image('mar', 'assets/bg_azul-claro.png'); //Fundo
    this.load.image('logo', 'assets/logo-inteli_azul.png'); //Logo
    this.load.image('peixe', 'assets/peixes/crustaceo.png'); //Peixe
}

function create()
{
    this.add.image(400,300, 'mar'); //Fundo
    peixinho = this.add.image(400,300, 'peixe'); //Guardar o peixe em uma variavel
    
    peixinho.setFlip(true, false); // Transformando a variável
}

function update()
{
    peixinho.x = this.input.x; // Atualiza a posição X do peixe para a posição X do mouse/touch
    peixinho.y = this.input.y; // Atualiza a posição Y do peixe para a posição Y do mouse/touch
}
