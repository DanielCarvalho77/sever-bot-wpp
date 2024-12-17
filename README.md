# sever-bot-wpp

Este projeto foi realizado somente para fins de estudo, para que seja avaliado no PDI.

O recurso que a aplicação disponibiliza é simples, e por hora é apenas 1 no contexto geral. Ele serve para enviar o código de autenticação de 2 fatores para os usuários que utilizam a plataforma do Voors. Lembrando que esse projeto é apenas conceitual; por esse motivo, não foi implementado no Voors de fato, mas a ideia é que serviria bem como uma alternativa a mais do que já é utilizado para autenticação de dois fatores.

Ainda sim o bot pode ser explorado para outras funcionalidades, como interações e respostas com os usuário.

## Desenvolvimento

Foi criado um serviço usando o [Express.js](https://expressjs.com/), devido à confiança na biblioteca e à quantidade de documentação disponível.

![alt text](/doc_img/express.png)

Para o bot, foi usada a biblioteca [WWeb.js](https://wwebjs.dev/).

![Imagem do WWeb.js](#)

No controller, o endpoint pode ser chamado via AJAX, Axios ou qualquer outra biblioteca de request, assim enviando apenas o código para o número correto.

## Disclaimer

O uso da biblioteca WWeb.js deve ser feito com cautela, pois é necessário conectar o dispositivo celular que será usado como bot, e o WhatsApp pode banir o número.
