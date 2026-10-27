export type Lang = 'en' | 'id';

export type TranslationKey =
	| 'nav.home'
	| 'nav.privacy'
	| 'nav.terms'
	| 'nav.language'
	| 'nav.theme'
	| 'hero.title'
	| 'hero.subtitle'
	| 'hero.cta'
	| 'hero.url'
	| 'about.title'
	| 'about.description'
	| 'about.note'
	| 'about.noteDetail'
	| 'features.title'
	| 'features.connections.title'
	| 'features.connections.description'
	| 'features.queries.title'
	| 'features.queries.description'
	| 'features.table.title'
	| 'features.table.description'
	| 'features.export.title'
	| 'features.export.description'
	| 'features.security.title'
	| 'features.security.description'
	| 'features.theme.title'
	| 'features.theme.description'
	| 'features.tech.title'
	| 'features.tech.items.electron'
	| 'features.tech.items.monaco'
	| 'features.tech.items.sqlserver'
	| 'features.tech.items.tailwind'
	| 'features.tech.items.vite'
	| 'features.copyright'
	| 'privacy.title'
	| 'privacy.intro'
	| 'privacy.section1.title'
	| 'privacy.section1.content'
	| 'privacy.section2.title'
	| 'privacy.section2.content'
	| 'privacy.section3.title'
	| 'privacy.section3.content'
	| 'privacy.section4.title'
	| 'privacy.section4.content'
	| 'privacy.section5.title'
	| 'privacy.section5.content'
	| 'terms.title'
	| 'terms.intro'
	| 'terms.section1.title'
	| 'terms.section1.content'
	| 'terms.section2.title'
	| 'terms.section2.content'
	| 'terms.section3.title'
	| 'terms.section3.content'
	| 'terms.section4.title'
	| 'terms.section4.content'
	| 'terms.section5.title'
	| 'terms.section5.content';

export const translations: Record<Lang, Record<TranslationKey, string>> = {
	en: {
		// Navigation
		'nav.home': 'Home',
		'nav.privacy': 'Privacy Policy',
		'nav.terms': 'Terms of Service',
		'nav.language': 'Language',
		'nav.theme': 'Theme',
		// Hero
		'hero.title': 'Nova Tables',
		'hero.subtitle': 'Modern desktop SQL client for Microsoft SQL Server - built for professionals who work with SQL Server every day.',
		'hero.cta': 'View project',
		'hero.url': 'https://nova-tables.novaardiansyah.id',
		// About
		'about.title': 'About Nova Tables',
		'about.description':
			'Nova Tables is a local desktop SQL client that brings your connections, databases, tables, queries and results together in one calm workspace. Built for people who work with Microsoft SQL Server every day - organize connections, browse object trees, write and run queries, read results in a high-performance grid, and generate ready-to-run UPDATE or CREATE TABLE scripts - all without ever uploading your data.',
		'about.note': 'Note: Nova Tables works with Microsoft SQL Server only.',
		'about.noteDetail':
			'It is a local desktop application - nothing is uploaded anywhere, and neither your data nor your credentials ever leave your computer.',
		// Features
		'features.title': 'Features',
		'features.connections.title': 'Connection Management',
		'features.connections.description': 'Organize all SQL Server connections with environment badges and collapsible folders.',
		'features.queries.title': 'Query Execution',
		'features.queries.description': 'Write and run queries with syntax highlighting, auto-completion, and query execution modes.',
		'features.table.title': 'Table Design',
		'features.table.description': 'Design and alter tables visually with column drag-and-drop reordering and searchable data types.',
		'features.export.title': 'Export Results',
		'features.export.description': 'Export results directly to RFC 4180 CSV or formatted JSON, and review query history anytime.',
		'features.security.title': 'Security & Privacy',
		'features.security.description': 'Your saved connections live on your computer only, and passwords are protected by your operating system\'s own secure storage.',
		'features.theme.title': 'Dark & Light Themes',
		'features.theme.description': 'Switch between dark and light themes, and customize fonts and editor typography.',
		'features.tech.title': 'Tech Stack',
		'features.tech.items.electron': 'Electron 30 - Desktop application framework',
		'features.tech.items.monaco': 'Monaco Editor - Editor engine behind VS Code',
		'features.tech.items.sqlserver': 'Microsoft SQL Server - Supported database engine',
		'features.tech.items.tailwind': 'Tailwind CSS - Styling',
		'features.tech.items.vite': 'Vite 5 - Build tool',
		'features.copyright': 'Copyright &copy; 2026 Nova Ardiansyah. https://novaardiansyah.id',
		// Privacy Policy
		'privacy.title': 'Privacy Policy',
		'privacy.intro': 'This privacy policy explains how Nova Tables handles your data.',
		'privacy.section1.title': '1. Local Application',
		'privacy.section1.content': 'Nova Tables is a local desktop application. Nothing is uploaded anywhere, and neither your data nor your credentials ever leave your computer.',
		'privacy.section2.title': '2. Data Collection',
		'privacy.section2.content': 'We do not collect any personal data. All saved connections live on your computer only.',
		'privacy.section3.title': '3. Password Storage',
		'privacy.section3.content': 'Passwords are protected by your operating system\'s own secure storage.',
		'privacy.section4.title': '4. Cookies & Tracking',
		'privacy.section4.content': 'This website does not use cookies or tracking scripts.',
		'privacy.section5.title': '5. Contact',
		'privacy.section5.content': 'Need to chat? Feel free to drop me a line via Email or WhatsApp.',
		// Terms of Service
		'terms.title': 'Terms of Service',
		'terms.intro': 'By using Nova Tables, you agree to the following terms.',
		'terms.section1.title': '1. Use of Application',
		'terms.section1.content': 'Nova Tables is made for people who work with Microsoft SQL Server every day and simply want a tidy place to look something up, write a query and read the answer.',
		'terms.section2.title': '2. Microsoft SQL Server Only',
		'terms.section2.content': 'Nova Tables works with Microsoft SQL Server only. It is a local desktop application.',
		'terms.section3.title': '3. Data Responsibility',
		'terms.section3.content': 'You are responsible for your own data and queries. Nova Tables does not execute silent modifications against your database.',
		'terms.section4.title': '4. Modifications',
		'terms.section4.content': 'Nova Tables is intentionally small and focused. Some advanced database tools are intentionally not part of the app.',
		'terms.section5.title': '5. Contact',
		'terms.section5.content': 'Need to chat? Feel free to drop me a line via Email or WhatsApp.'
	},
	id: {
		// Navigation
		'nav.home': 'Beranda',
		'nav.privacy': 'Kebijakan Privasi',
		'nav.terms': 'Syarat Layanan',
		'nav.language': 'Bahasa',
		'nav.theme': 'Tema',
		// Hero
		'hero.title': 'Nova Tables',
		'hero.subtitle': 'Klien SQL desktop modern untuk Microsoft SQL Server - dirancang khusus untuk para profesional yang bekerja dengan SQL Server setiap hari.',
		'hero.cta': 'Lihat proyek',
		'hero.url': 'https://nova-tables.novaardiansyah.id',
		// About
		'about.title': 'Tentang Nova Tables',
		'about.description':
			'Nova Tables adalah klien SQL desktop lokal yang membawa koneksi, database, tabel, kueri, dan hasil Anda menjadi satu ruang kerja yang tenang. Dibangun untuk orang-orang yang bekerja setiap hari dengan Microsoft SQL Server - kelola koneksi, brows objek, tulis dan jalankan kueri, baca hasil dalam grid performa tinggi, dan generate perintah UPDATE atau CREATE TABLE siap jalankan - tanpa mengunggah data Anda sama sekali.',
		'about.note': 'Catatan: Nova Tables bekerja hanya dengan Microsoft SQL Server.',
		'about.noteDetail':
			'Ini adalah aplikasi desktop lokal - tidak ada yang diunggah ke mana pun, dan baik data Anda maupun kredensial Anda tidak pernah keluar dari komputer Anda.',
		// Features
		'features.title': 'Fitur',
		'features.connections.title': 'Manajemen Koneksi',
		'features.connections.description': 'Kelola semua koneksi SQL Server dengan badge lingkungan dan folder yang dapat dikompres.',
		'features.queries.title': 'Eksekusi Kueri',
		'features.queries.description': 'Tulis dan jalankan kueri dengan penyorotan sintaks, auto-completion, dan mode eksekusi kueri.',
		'features.table.title': 'Desain Tabel',
		'features.table.description': 'Desain dan ubah tabel secara visual dengan reordering kolom drag-and-drop dan tipe data yang dapat dicari.',
		'features.export.title': 'Ekspor Hasil',
		'features.export.description': 'Ekspor hasil langsung ke RFC 4180 CSV atau JSON yang diformat, dan tinjau riwayat kueri kapan saja.',
		'features.security.title': 'Keamanan & Privasi',
		'features.security.description': 'Koneksi yang tersimpan hanya ada di komputer Anda, dan kata sandi dilindungi oleh penyimpanan aman sistem operasi Anda.',
		'features.theme.title': 'Tema Gelap & Terang',
		'features.theme.description': 'Beralih antara tema gelap dan terang, dan kustomisasi font serta tipografi editor.',
		'features.tech.title': 'Stack Teknologi',
		'features.tech.items.electron': 'Electron 30 - Framework aplikasi desktop',
		'features.tech.items.monaco': 'Monaco Editor - Mesin editor di balik VS Code',
		'features.tech.items.sqlserver': 'Microsoft SQL Server - Mesin basis data yang didukung',
		'features.tech.items.tailwind': 'Tailwind CSS - Styling',
		'features.tech.items.vite': 'Vite 5 - Alat build',
		'features.copyright': 'Copyright &copy; 2026 Nova Ardiansyah. https://novaardiansyah.id',
		// Privacy Policy
		'privacy.title': 'Kebijakan Privasi',
		'privacy.intro': 'Kebijakan privasi ini menjelaskan bagaimana Nova Tables menangani data Anda.',
		'privacy.section1.title': '1. Aplikasi Lokal',
		'privacy.section1.content': 'Nova Tables adalah aplikasi desktop lokal. Tidak ada yang diunggah ke mana pun, dan baik data Anda maupun kredensial Anda tidak pernah keluar dari komputer Anda.',
		'privacy.section2.title': '2. Pengumpulan Data',
		'privacy.section2.content': 'Kami tidak mengumpulkan data pribadi apa pun. Semua koneksi yang tersimpan hanya ada di komputer Anda.',
		'privacy.section3.title': '3. Penyimpanan Kata Sandi',
		'privacy.section3.content': 'Kata sandi dilindungi oleh penyimpanan aman sistem operasi Anda sendiri.',
		'privacy.section4.title': '4. Cookie & Pelacakan',
		'privacy.section4.content': 'Situs web ini tidak menggunakan cookie atau skrip pelacakan.',
		'privacy.section5.title': '5. Kontak',
		'privacy.section5.content': 'Perlu ngobrol? Jangan ragu untuk mengirimkan email atau WhatsApp.',
		// Terms of Service
		'terms.title': 'Syarat Layanan',
		'terms.intro': 'Dengan menggunakan Nova Tables, Anda setuju dengan syarat-syarat berikut.',
		'terms.section1.title': '1. Penggunaan Aplikasi',
		'terms.section1.content': 'Nova Tables dibuat untuk orang-orang yang bekerja dengan Microsoft SQL Server setiap hari dan sekadar ingin tempat yang rapi untuk mencari sesuatu, menulis kueri, dan membaca jawabannya.',
		'terms.section2.title': '2. Hanya Microsoft SQL Server',
		'terms.section2.content': 'Nova Tables bekerja hanya dengan Microsoft SQL Server. Ini adalah aplikasi desktop lokal.',
		'terms.section3.title': '3. Tanggung Jawab Data',
		'terms.section3.content': 'Anda bertanggung jawab atas data dan kueri Anda sendiri. Nova Tables tidak menjalankan modifikasi diam-diam terhadap basis data Anda.',
		'terms.section4.title': '4. Modifikasi',
		'terms.section4.content': 'Nova Tables sengaja kecil dan terfokus. Beberapa alat database lanjutan sengaja tidak menjadi bagian dari aplikasi.',
		'terms.section5.title': '5. Kontak',
		'terms.section5.content': 'Perlu ngobrol? Jangan ragu untuk mengirimkan email atau WhatsApp.'
	}
};

export function t(key: TranslationKey, lang: Lang = 'en'): string {
	return translations[lang][key];
}