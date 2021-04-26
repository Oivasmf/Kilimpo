# Kilimpo

Procedimento de instalação do projeto:
Criar e configurar uma máquina virtual (para o nosso projeto, foi utilizada uma instância EC2 Ubuntu 20.04.2 LTS), lembrando de liberar acesso nas portas desejadas (para o projeto, foi utilizada a porta 3889).

Instalar o Node.js:
1 Acessar a máquina onde estará o projeto pelo terminal ou por SSH
2 Instalar o Node.js 12 a partir do Snapcraft através do comando
	sudo snap install node --channel=12/stable --classic
3 Conferir a versão instalada (Node v12.19.0 e NPM v6.14.8)
4 Criar o diretório do projeto dentro do HOME chamado KiLimpo, e dentro deste, criar o diretório Kilimpo-backend:
	(resultado esperado: ~/KiLimpo/Kilimpo-backend)
5 Entrar no diretório criado 
	cd ~/KiLimpo/Kilimpo-backend
6 Instalar o Express e demais pacotes JavaScript necessários no projeto
	npm install express express-validator cors
7 Clonar os arquivos deste repositório Git para esse mesmo diretório
8 O arquivo server.js possui a constante port (que por padrão virá com 3389). Você pode alterar para a porta que foi liberada.
9 Para execução correta do programa, execute simultaneamente o servidor do back-end (configurado acima) e o servidor do front-end (disponível em https://github.com/Oivasmf/Kilimpo-frontend.git).


