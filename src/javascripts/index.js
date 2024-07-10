$(document).ready(function () {
    async function SearchApi(event) {
        event.preventDefault();
        const cep = $('#cep').val();
        if (cep.length == 8) {
            try {
                const url = `https://viacep.com.br/ws/${cep}/json/`;
                const response = await fetch(url);
                if (!response.ok) {
                    alert('Erro ao buscar a API do ViaCEP');
                }
                const data = await response.json();
                if(data.error){
                    alert("cep não encotrado")
                }
                $('#pais').val("Brasil")
                $('#estado').val(data.uf);
                $('#cidade').val(data.localidade);
                $('#bairro').val(data.bairro);
                $('#rua').val(data.logradouro);
            } catch (error) {
                console.log(error);
            }
        } else {
            alert("CEP inválido");
        }
    }

    $('#buscarCep').click( function(event) {
        SearchApi(event);
    });
});