$(".mail-btn").on("click touchstart", function (event) {
  event.preventDefault(); // Impede o comportamento padrão do botão

  var form = $(this).closest("form"); // Encontra o formulário mais próximo
  var isValid = form[0].checkValidity(); // Verifica se o formulário é válido

  if (isValid) {
    // Se o formulário for válido, inicia a animação
    $(this).addClass("fly");

    // Envia o formulário para o Formspree usando fetch
    var formData = new FormData(form[0]);

    fetch(form.attr("action"), {
      method: form.attr("method"),
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          // Sucesso no envio
          console.log("Formulário enviado com sucesso!");
        } else {
          // Algo deu errado
          console.error("Erro ao enviar o formulário.");
          alert("Houve um problema ao enviar o formulário.");
        }
      })
      .catch(function (error) {
        console.error("Erro de rede:", error);
        alert("Não foi possível enviar o formulário. Verifique sua conexão.");
      });

    // Remove a classe "fly" e limpa os campos após a animação
    var that = this;
    setTimeout(function () {
      $(that).removeClass("fly");

      // Limpa os campos do formulário
      form.find("input, select, textarea").val("");
    }, 3400); // Duração do tempo da animação
  } else {
    // Formulário inválido, exibe mensagem de erro
    alert("Por favor, preencha todos os campos obrigatórios.");
  }
});
