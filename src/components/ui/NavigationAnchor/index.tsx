type NavigationAnchorProps = {
	name: string;
};

const NavigationAnchor = ({ name }: NavigationAnchorProps) => {
	return (
		<a
			href='/'
			className='text-white/60 hover:text-white/80 transition-colors '
		>
			{name}
		</a>
	);
};

export default NavigationAnchor;
