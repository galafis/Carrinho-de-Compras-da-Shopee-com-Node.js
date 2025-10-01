# Shopee Terminal - Simulador de Carrinho de Compras 🛒💻

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)


**Bem-vindo ao Shopee Terminal!**
Este projeto traz a experiência de compras da Shopee diretamente para o seu terminal, utilizando apenas Node.js puro. Aqui você pode adicionar, remover, alterar quantidades e finalizar suas compras como um verdadeiro cliente online!

## 🚀 Visão Geral do Projeto

O "Shopee Terminal" é um simulador de carrinho de compras desenvolvido em Node.js, que replica a funcionalidade essencial de um e-commerce diretamente no terminal. O objetivo principal é demonstrar a construção de um sistema de gerenciamento de produtos e carrinho de compras utilizando JavaScript puro no backend. Este projeto é ideal para quem busca entender a lógica de um sistema de e-commerce e a interação com o usuário via linha de comando.

## ✨ Funcionalidades Principais

*   **Listagem de Produtos:** Exibe uma lista clara e organizada dos produtos disponíveis na loja.
*   **Adição de Produtos:** Permite adicionar itens ao carrinho, especificando a quantidade desejada.
*   **Remoção de Produtos:** Possibilita remover produtos do carrinho a qualquer momento.
*   **Alteração de Quantidade:** Ajusta a quantidade de um produto já existente no carrinho.
*   **Visualização Detalhada do Carrinho:** Apresenta um resumo completo do carrinho, incluindo produtos, quantidades, preços unitários e o total da compra.
*   **Finalização da Compra:** Simula o processo de checkout, consolidando os itens e calculando o valor final.

## 🛠️ Tecnologias Utilizadas

*   **Node.js:** Ambiente de execução JavaScript server-side.
*   **JavaScript:** Linguagem de programação principal para toda a lógica do sistema.

## 📚 Como Usar

Para executar o Shopee Terminal em sua máquina local, siga os passos abaixo:

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/galafis/Carrinho-de-Compras-da-Shopee-com-Node.js.git
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd Carrinho-de-Compras-da-Shopee-com-Node.js
    ```
3.  **Instale as dependências (se houver):**
    ```bash
    npm install
    ```
    (Neste projeto, não há dependências externas, mas é uma boa prática incluir este passo).
4.  **Execute o aplicativo:**
    ```bash
    node index.js
    ```
5.  **Interaja:** Siga as instruções no terminal para navegar pelo menu e realizar suas compras.

## 💡 Inspiração

Este projeto foi desenvolvido como parte do desafio da Formação Node.js da DIO, com inspiração na interface e experiência de compra do popular site de e-commerce Shopee.

## 📄 Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Gabriel Demetrios Lafis**

*   [GitHub](https://github.com/galafis)
*   [LinkedIn](https://www.linkedin.com/in/gabriel-demetrios-lafis/)

---


## 📊 Fluxo do Aplicativo

```mermaid
graph TD
    A[Início] --> B{Menu Principal};
    B -- 1: Ver Produtos --> C[Listar Produtos];
    B -- 2: Adicionar Produto --> D[Selecionar Produto e Quantidade];
    B -- 3: Remover Produto --> E[Selecionar Produto para Remover];
    B -- 4: Alterar Quantidade --> F[Selecionar Produto e Nova Quantidade];
    B -- 5: Ver Carrinho --> G[Exibir Carrinho];
    B -- 6: Finalizar Compra --> H[Processar Compra];
    B -- 7: Sair --> I[Fim];
    C --> B;
    D --> B;
    E --> B;
    F --> B;
    G --> B;
    H --> B;
```
```

