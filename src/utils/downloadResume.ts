export const downloadResume = () => {
	const link = document.createElement('a');
	link.href = '/Curriculo_Sinval_Luz_Souza_Filho.pdf';
	link.download = 'Curriculo_Sinval_Luz_Souza_Filho.pdf';
	document.body.appendChild(link);
	link.click();
	document.body.removeChild(link);
};
