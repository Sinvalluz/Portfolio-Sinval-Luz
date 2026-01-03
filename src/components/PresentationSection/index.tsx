import { Download } from 'lucide-react';
import { downloadResume } from '../../utils/downloadResume';
import LinkedinIcon from '../ui/LinkedinIcon';

const PresentationSection = () => {
	return (
		<section className='space-y-8'>
			<div className='inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60'>
				Engenheiro da computação
			</div>
			<h2 className='text-white max-w-4xl text-4xl md:text-5xl lg:text-6xl leading-tight'>
				Engenheiro de Computação em Formação Criando Soluções Digitais.
			</h2>
			<p className='text-white/70 max-w-2xl'>
				Estudante de Engenharia da Computação apaixonado por tecnologia,
				focado em transformar aprendizado em projetos práticos.
				Interesse em desenvolvimento de software, lógica, sistemas e
				boas práticas, com o objetivo de crescer profissionalmente e
				contribuir com soluções reais no futuro.
			</p>
			<div className='text-white flex gap-2 md:flex-row flex-col items-start'>
				<button
					type='button'
					className='px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all flex items-center gap-2 cursor-pointer'
					onClick={downloadResume}
				>
					<Download />
					Baixar currículo
				</button>
				<a
					href='https://www.linkedin.com/in/sinval-luz-268707229/'
					target='_blank'
					rel='noreferrer'
					className='px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-all flex items-center gap-2'
				>
					<LinkedinIcon />
					Visitar meu LinkedIn
				</a>
			</div>
		</section>
	);
};

export default PresentationSection;
