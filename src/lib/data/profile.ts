export interface Project {
	title: string;
	year: string;
	category: string;
	tags: string[];
	description: string;
	image: string;
	sourceCode?: string;
	liveDemo?: string;
	featured?: boolean;
}

export const profile = {
	name: 'Nova Ardiansyah',
	role: 'Full-stack Developer',
	location: 'Tangerang Selatan, Banten, Indonesia',
	availability: 'Open for Collaboration',
	email: 'admin@novaardiansyah.id',
	whatsapp: '+6289506668480',
	whatsappFormatted: '(+62) 895-0666-8480',
	website: 'https://novaardiansyah.id',
	github: 'https://github.com/novaardiansyah',
	linkedin: 'https://www.linkedin.com/in/novaardiansyah/',
	avatar: '/images/avatar-sharp.webp',

	tagline: 'Building elegant desktop tools and backend systems.',
	shortBio:
		'Nova Tables is a modern desktop SQL client for Microsoft SQL Server, bringing your connections, databases, tables, queries, and results together in one calm workspace.',

	projects: [
		{
			title: 'Nova Tables - Modern SQL Client Tools',
			year: '2026',
			category: 'Desktop & Database Tools',
			tags: ['Electron', 'React', 'MSSQL', 'Monaco Editor', 'Tailwind CSS', 'Vite'],
			description:
				'A modern desktop application for managing and exploring Microsoft SQL Server. Features smart Monaco SQL query editor, inline cell editing, encrypted export/import of connections (AES-256-GCM), and 100% local privacy with no cloud dependency.',
			image: '/logo.png',
			sourceCode: 'https://github.com/novaardiansyah/nova-tables',
			featured: true
		}
	] as Project[]
};