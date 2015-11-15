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
	var conteudonaoformatado = $('#conteudonaoformatado');
	var conteudoformatado = $('#conteudoformatado');

	var conteudo = conteudonaoformatado.val();

	conteudo = conteudo.replace(/\s\s/g, ' ');
	conteudo = conteudo.replace(/(\.)\s/g, '$1<br />');
	conteudo = conteudo.replace(/([a-zA-Z\u00C0-\u00FF ]+:)\s(\d)/gi,
			'</p><p class="form-control-static"><strong>$1</strong><br />$2');
	conteudo = conteudo.replace(/\n/g, ' ');
	conteudo = '<p class="hidden">' + conteudo + '</p>';

	conteudoformatado.html(conteudo);

	var conteudoformatadodiv = $('#conteudoformatadodiv');
	conteudoformatadodiv.removeClass('hidden');

	clipboard.destroy();
	clipboard = initClipboard();
}