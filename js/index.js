function initClipboard() {
	var clipboard = new Clipboard('.btn');

	clipboard.on('success', function(e) {
		console.log(e);
	});

	clipboard.on('error', function(e) {
		console.log(e);
	});

	return clipboard;
}

var clipboard = initClipboard();

function format() {
	var conteudoNaoFormatado = $('#conteudonaoformatado');
	var conteudoFormatado = $('#conteudoformatado');

	var conteudoEmFormatacao = conteudoNaoFormatado.val();

	conteudoEmFormatacao = linearizar(conteudoEmFormatacao);
	conteudoEmFormatacao = removeEspacosDuplos(conteudoEmFormatacao);
	conteudoEmFormatacao = quebraLinha(conteudoEmFormatacao);
	conteudoEmFormatacao = formataTitulo(conteudoEmFormatacao);
	conteudoEmFormatacao = '<p>' + conteudoEmFormatacao + '</p>';

	conteudoFormatado.html(conteudoEmFormatacao);

	var conteudoformatadodiv = $('#conteudoformatadodiv');
	conteudoformatadodiv.removeClass('hidden');

	clipboard.destroy();
	clipboard = initClipboard();
}

function linearizar(conteudo) {
	return conteudo.replace(/\n/g, ' ');
}

function removeEspacosDuplos(conteudo) {
	return conteudo.replace(/\s\s/g, ' ');
}

function quebraLinha(conteudo) {
	return conteudo.replace(/(\.)\s/g, '$1<br />');
}

function formataTitulo(conteudo) {
	var regex = /(.+?:)\s(.*?\.<br \/>)([A-Z])/g;

	var result;
	var conteudoRetorno = '';
	var resto;

	while ((result = regex.exec(conteudo)) !== null) {
		conteudoRetorno += '</p><p class="form-control-static"><strong>'
				+ (resto !== null ? resto : '') + result[1] + '</strong><br />'
				+ result[2];
		resto = result[3];
	}

	return conteudoRetorno;
}
