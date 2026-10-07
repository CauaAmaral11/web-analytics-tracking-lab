const botoes = document.querySelectorAll(".add-to-cart");

botoes.forEach(function (botao) {

    botao.addEventListener("click", function () {

        const produto = botao.dataset.product;
        const preco = Number(botao.dataset.price);

        window.dataLayer.push({
            event: "add_to_cart",
            product_name: produto,
            price: preco
        });

        console.log("Evento enviado:", {
            event: "add_to_cart",
            product_name: produto,
            price: preco
        });

    });

});


const produtos = document.querySelectorAll(".produto");

produtos.forEach(function (produto) {

    const nome = produto.querySelector("h2").textContent;
    const precoTexto = produto.querySelector("p").textContent;

    const preco = Number(
        precoTexto
            .replace("Preço: R$ ", "")
            .replace(",", ".")
    );

    window.dataLayer.push({
        event: "view_item",
        product_name: nome,
        price: preco
    });

});