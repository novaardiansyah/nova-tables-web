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
	| 'features.connections.selection'
	| 'features.connections.export'
	| 'features.connections.import'
	| 'features.connections.new'
	| 'features.queries.title'
	| 'features.queries.description'
	| 'features.queries.changes'
	| 'features.queries.cellMenu'
	| 'features.table.title'
	| 'features.table.description'
	| 'features.table.tableMenu'
	| 'features.export.title'
	| 'features.export.description'
	| 'features.security.title'
	| 'features.security.description'
	| 'features.theme.title'
	| 'features.theme.description'
	| 'features.theme.settings'
	| 'features.tech.title'
	| 'features.tech.items.tauri'
	| 'features.tech.items.monaco'
	| 'features.tech.items.sqlserver'
	| 'features.tech.items.tailwind'
	| 'features.tech.items.vite'
	| 'features.copyright';

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
		'features.connections.selection': 'Select several connections for bulk actions.',
		'features.connections.export': 'Export connections and their folders as one encrypted file.',
		'features.connections.import': 'Import the file on another machine with the same password.',
		'features.connections.new': 'A new connection, tested before it is saved.',
		'features.queries.title': 'Query Execution',
		'features.queries.description': 'Write and run queries with syntax highlighting, auto-completion, and query execution modes.',
		'features.queries.changes': 'Ready-to-run UPDATE statements from your edits.',
		'features.queries.cellMenu': 'Right-click a cell for edit, copy and delete actions.',
		'features.table.title': 'Table Design',
		'features.table.description': 'Design and alter tables visually with column drag-and-drop reordering and searchable data types.',
		'features.table.tableMenu': 'Right-click a table for object actions.',
		'features.export.title': 'Export Results',
		'features.export.description': 'Export results directly to RFC 4180 CSV or formatted JSON, and review query history anytime.',
		'features.security.title': 'Security & Privacy',
		'features.security.description': 'Your saved connections live on your computer only, and passwords stay in the app\'s local SQLite store, protected by your operating system\'s file permissions.',
		'features.theme.title': 'Dark & Light Themes',
		'features.theme.description': 'Switch between dark and light themes, and customize fonts and editor typography.',
		'features.theme.settings': 'Customise themes, fonts and editor typography.',
		'features.tech.title': 'Tech Stack',
		'features.tech.items.tauri': 'Tauri v2 - Native desktop framework',
		'features.tech.items.monaco': 'Monaco Editor - Editor engine behind VS Code',
		'features.tech.items.sqlserver': 'Microsoft SQL Server - Supported database engine',
		'features.tech.items.tailwind': 'Tailwind CSS - Styling',
		'features.tech.items.vite': 'Vite 5 - Build tool',
		'features.copyright': 'Copyright &copy; 2026 Nova Ardiansyah. https://novaardiansyah.id'
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
		'features.connections.selection': 'Pilih beberapa koneksi untuk tindakan massal.',
		'features.connections.export': 'Ekspor koneksi dan folder mereka sebagai satu file terenkripsi.',
		'features.connections.import': 'Impor file pada mesin lain dengan kata sandi yang sama.',
		'features.connections.new': 'Koneksi baru, diuji sebelum disimpan.',
		'features.queries.title': 'Eksekusi Kueri',
		'features.queries.description': 'Tulis dan jalankan kueri dengan penyorotan sintaks, auto-completion, dan mode eksekusi kueri.',
		'features.queries.changes': 'Pernyataan UPDATE siap pakai yang dihasilkan dari hasil edit Anda.',
		'features.queries.cellMenu': 'Klik kanan sel untuk aksi edit, salin, dan hapus.',
		'features.table.title': 'Desain Tabel',
		'features.table.description': 'Desain dan ubah tabel secara visual dengan reordering kolom drag-and-drop dan tipe data yang dapat dicari.',
		'features.table.tableMenu': 'Klik kanan tabel untuk aksi objek.',
		'features.export.title': 'Ekspor Hasil',
		'features.export.description': 'Ekspor hasil langsung ke RFC 4180 CSV atau JSON yang diformat, dan tinjau riwayat kueri kapan saja.',
		'features.security.title': 'Keamanan & Privasi',
		'features.security.description': 'Koneksi yang tersimpan hanya ada di komputer Anda, dan kata sandi tersimpan di database SQLite lokal aplikasi yang dilindungi izin file sistem operasi Anda.',
		'features.theme.title': 'Tema Gelap & Terang',
		'features.theme.description': 'Beralih antara tema gelap dan terang, dan kustomisasi font serta tipografi editor.',
		'features.theme.settings': 'Kustomisasi tema, font, dan tipografi editor.',
		'features.tech.title': 'Stack Teknologi',
		'features.tech.items.tauri': 'Tauri v2 - Framework desktop native',
		'features.tech.items.monaco': 'Monaco Editor - Mesin editor di balik VS Code',
		'features.tech.items.sqlserver': 'Microsoft SQL Server - Mesin basis data yang didukung',
		'features.tech.items.tailwind': 'Tailwind CSS - Styling',
		'features.tech.items.vite': 'Vite 5 - Alat build',
		'features.copyright': 'Copyright &copy; 2026 Nova Ardiansyah. https://novaardiansyah.id'
	}
};

export function t(key: TranslationKey, lang: Lang = 'en'): string {
	return translations[lang][key];
}