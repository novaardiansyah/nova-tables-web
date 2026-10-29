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
		'features.security.description': 'Your saved connections live on your computer only, and passwords are protected by your operating system\'s own secure storage.',
		'features.theme.title': 'Dark & Light Themes',
		'features.theme.description': 'Switch between dark and light themes, and customize fonts and editor typography.',
		'features.theme.settings': 'Customise themes, fonts and editor typography.',
		'features.tech.title': 'Tech Stack',
		'features.tech.items.electron': 'Electron 30 - Desktop application framework',
		'features.tech.items.monaco': 'Monaco Editor - Editor engine behind VS Code',
		'features.tech.items.sqlserver': 'Microsoft SQL Server - Supported database engine',
		'features.tech.items.tailwind': 'Tailwind CSS - Styling',
		'features.tech.items.vite': 'Vite 5 - Build tool',
		'features.copyright': 'Copyright &copy; 2026 Nova Ardiansyah. https://novaardiansyah.id',
		// Privacy Policy
		'privacy.title': 'Privacy Policy',
		'privacy.intro': 'This privacy policy explains how Nova Tables handles your data and outlines your privacy rights.',
		'privacy.section1.title': '1. Local Application Architecture',
		'privacy.section1.content': 'Nova Tables operates entirely on your local machine. No database credentials, connection strings, schema information, or query results are ever transmitted to our servers or third parties. All processing occurs locally within your isolated environment.',
		'privacy.section2.title': '2. Zero Telemetry & Data Collection',
		'privacy.section2.content': 'We do not collect personal data, usage statistics, diagnostic telemetry, or error reports. Your application activities, queries, and connected databases remain strictly private and confidential.',
		'privacy.section3.title': '3. Secure Credential Management',
		'privacy.section3.content': 'Database connection secrets, including passwords and sensitive connection parameters, are stored locally on your machine utilizing your operating system\'s native keychain (such as DPAPI on Windows, Keychain on macOS, or Secret Service on Linux). Exported credentials can optionally be protected using AES-256-GCM encryption.',
		'privacy.section4.title': '4. Website & Cookies Policy',
		'privacy.section4.content': 'This informational website does not deploy tracking cookies, advertising trackers, or fingerprinting scripts. Local storage is strictly utilized to persist user interface preferences such as language selection and light/dark theme modes.',
		'privacy.section5.title': '5. Contact & Privacy Inquiries',
		'privacy.section5.content': 'If you have questions, feedback, or security inquiries regarding our privacy practices, you may reach out directly to the maintainer via email at admin@novaardiansyah.id or via WhatsApp at (+62) 895-0666-8480.',
		// Terms of Service
		'terms.title': 'Terms of Service',
		'terms.intro': 'Please read these Terms of Service carefully before utilizing Nova Tables.',
		'terms.section1.title': '1. License & Permitted Use',
		'terms.section1.content': 'Nova Tables is distributed under the MIT License. You are granted permission to access, download, run, copy, modify, merge, publish, distribute, sublicense, and sell copies of the software, subject to the conditions of the license.',
		'terms.section2.title': '2. Supported Environment',
		'terms.section2.content': 'Nova Tables is specifically engineered as a desktop client for Microsoft SQL Server. It is provided for database management, query composition, result viewing, and schema administration tasks.',
		'terms.section3.title': '3. User Responsibility & Database Safety',
		'terms.section3.content': 'You are solely responsible for all database queries and modifications executed using Nova Tables. The application will never run silent updates or background modifications against your databases; all generated scripts must be deliberately executed by you.',
		'terms.section4.title': '4. Disclaimer of Warranty & Limitation of Liability',
		'terms.section4.content': 'The software is provided "as is", without warranty of any kind, express or implied. In no event shall the authors or copyright holders be liable for any claim, damages, data loss, or other liability arising from the use of the software.',
		'terms.section5.title': '5. Inquiries & Community Support',
		'terms.section5.content': 'For bug reports, feature requests, or general inquiries, please open an issue on the official GitHub repository or contact the maintainer directly at admin@novaardiansyah.id.'
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
		'features.security.description': 'Koneksi yang tersimpan hanya ada di komputer Anda, dan kata sandi dilindungi oleh penyimpanan aman sistem operasi Anda.',
		'features.theme.title': 'Tema Gelap & Terang',
		'features.theme.description': 'Beralih antara tema gelap dan terang, dan kustomisasi font serta tipografi editor.',
		'features.theme.settings': 'Kustomisasi tema, font, dan tipografi editor.',
		'features.tech.title': 'Stack Teknologi',
		'features.tech.items.electron': 'Electron 30 - Framework aplikasi desktop',
		'features.tech.items.monaco': 'Monaco Editor - Mesin editor di balik VS Code',
		'features.tech.items.sqlserver': 'Microsoft SQL Server - Mesin basis data yang didukung',
		'features.tech.items.tailwind': 'Tailwind CSS - Styling',
		'features.tech.items.vite': 'Vite 5 - Alat build',
		'features.copyright': 'Copyright &copy; 2026 Nova Ardiansyah. https://novaardiansyah.id',
		// Privacy Policy
		'privacy.title': 'Kebijakan Privasi',
		'privacy.intro': 'Kebijakan privasi ini menjelaskan bagaimana Nova Tables menangani data Anda serta menguraikan hak privasi Anda.',
		'privacy.section1.title': '1. Arsitektur Aplikasi Lokal',
		'privacy.section1.content': 'Nova Tables beroperasi secara lokal sepenuhnya di komputer Anda. Kredensial database, string koneksi, data skema, dan hasil kueri tidak pernah dikirim ke server kami maupun pihak ketiga. Semua pemrosesan berlangsung di lingkungan lokal Anda.',
		'privacy.section2.title': '2. Tanpa Pengumpulan Data & Telemetri',
		'privacy.section2.content': 'Kami tidak mengumpulkan data pribadi, statistik penggunaan, diagnostik telemetri, atau laporan error. Aktivitas penggunaan aplikasi, kueri yang dijalankan, dan database yang terhubung bersifat sepenuhnya privat.',
		'privacy.section3.title': '3. Keamanan Penyimpanan Kredensial',
		'privacy.section3.content': 'Informasi sensitif seperti kata sandi koneksi disimpan di penyimpanan aman bawaan sistem operasi Anda (DPAPI pada Windows, Keychain pada macOS, atau Secret Service pada Linux). Ekspor koneksi dilindungi dengan enkripsi standar AES-256-GCM berbasis kata sandi.',
		'privacy.section4.title': '4. Kebijakan Cookie & Situs Web',
		'privacy.section4.content': 'Situs web informasional ini tidak menggunakan cookie analitik pelacak, tracker periklanan, atau skrip fingerprinting. Penyimpanan lokal browser hanya digunakan untuk menyimpan preferensi tampilan seperti bahasa dan mode tema gelap/terang.',
		'privacy.section5.title': '5. Kontak & Pertanyaan Privasi',
		'privacy.section5.content': 'Jika Anda memiliki pertanyaan seputar privasi atau keamanan, silakan hubungi pengembang melalui email admin@novaardiansyah.id atau WhatsApp (+62) 895-0666-8480.',
		// Terms of Service
		'terms.title': 'Syarat Layanan',
		'terms.intro': 'Harap baca Syarat Layanan ini dengan saksama sebelum menggunakan Nova Tables.',
		'terms.section1.title': '1. Lisensi & Izin Penggunaan',
		'terms.section1.content': 'Nova Tables didistribusikan di bawah Lisensi MIT. Anda diberikan hak untuk mengunduh, menjalankan, memodifikasi, mendistribusikan, dan menggunakan perangkat lunak ini secara bebas sesuai dengan ketentuan lisensi terbuka yang berlaku.',
		'terms.section2.title': '2. Lingkungan yang Didukung',
		'terms.section2.content': 'Nova Tables dirancang khusus sebagai klien desktop untuk Microsoft SQL Server. Aplikasi disediakan untuk membantu pengelolaan database, penulisan kueri SQL, penjelajahan tabel, dan analisis kinerja secara efisien.',
		'terms.section3.title': '3. Tanggung Jawab Pengguna & Integritas Data',
		'terms.section3.content': 'Anda bertanggung jawab penuh atas segala kueri dan perubahan yang Anda eksekusi ke database Anda. Nova Tables tidak pernah menjalankan perubahan atau pembaruan otomatis yang tidak Anda konfirmasi secara sadar.',
		'terms.section4.title': '4. Batasan Tanggung Jawab & Jaminan',
		'terms.section4.content': 'Perangkat lunak ini disediakan "sebagaimana adanya" tanpa jaminan apa pun, baik tersurat maupun tersirat. Pengembang tidak bertanggung jawab atas segala bentuk kerugian data, gangguan operasional, atau kerusakan yang timbul dari penggunaannya.',
		'terms.section5.title': '5. Bantuan & Dukungan Pengguna',
		'terms.section5.content': 'Untuk pelaporan masalah teknis, permintaan fitur baru, atau pertanyaan lainnya, Anda dapat membuat issue pada repositori GitHub resmi atau mengirimkan pesan langsung ke pengembang.'
	}
};

export function t(key: TranslationKey, lang: Lang = 'en'): string {
	return translations[lang][key];
}