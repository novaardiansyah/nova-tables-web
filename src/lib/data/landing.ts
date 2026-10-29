import type { Lang } from './translations';

export const links = {
	github: 'https://github.com/novaardiansyah/nova-tables-rust',
	documentation: 'https://github.com/novaardiansyah/nova-tables-rust#quick-start--development',
	releases: 'https://github.com/novaardiansyah/nova-tables-rust/releases',
	license: 'https://github.com/novaardiansyah/nova-tables-rust/blob/main/LICENSE',
	website: 'https://novaardiansyah.id',
	email: 'mailto:admin@novaardiansyah.id',
	downloads: {
		windows:
			'https://s3.novaardiansyah.id/release/Nova%20Tables/v2.1.0/nova-tables_2.1.0_x64-setup.exe',
		appimage:
			'https://s3.novaardiansyah.id/release/Nova%20Tables/v2.1.0/nova-tables_2.1.0_amd64.AppImage',
		deb: 'https://s3.novaardiansyah.id/release/Nova%20Tables/v2.1.0/nova-tables_2.1.0_amd64.deb',
		rpm: 'https://s3.novaardiansyah.id/release/Nova%20Tables/v2.1.0/nova-tables-2.1.0-1.x86_64.rpm'
	}
} as const;

export type DownloadPlatform = keyof typeof links.downloads;

export interface LandingStat {
	value: string;
	label: string;
}

export interface LandingCopy {
	nav: {
		features: string;
		capabilities: string;
		security: string;
		documentation: string;
		github: string;
		download: string;
		menu: string;
		close: string;
		language: string;
		themeToLight: string;
		themeToDark: string;
	};
	hero: {
		badge: string;
		titleLead: string;
		titleAccent: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
		platforms: string;
		imageAlt: string;
		stats: LandingStat[];
	};
	showcase: {
		eyebrow: string;
		title: string;
		description: string;
		items: {
			label: string;
			title: string;
			description: string;
			bullets: string[];
			image: string;
			alt: string;
		}[];
	};
	value: {
		eyebrow: string;
		title: string;
		description: string;
		quote: string;
		quoteSource: string;
		items: { number: string; title: string; description: string }[];
	};
	capabilities: {
		eyebrow: string;
		title: string;
		description: string;
		editor: { title: string; description: string; footnote: string };
		plans: { title: string; description: string };
		grid: { title: string; description: string };
		history: { title: string; description: string };
		writes: { title: string; description: string };
		json: { title: string; description: string };
		export: { title: string; description: string };
	};
	developer: {
		eyebrow: string;
		title: string;
		description: string;
		steps: { title: string; description: string }[];
	};
	architecture: {
		eyebrow: string;
		title: string;
		description: string;
		layers: { label: string; detail: string }[];
		stats: LandingStat[];
		footnote: string;
	};
	security: {
		eyebrow: string;
		title: string;
		description: string;
		badges: string[];
		items: { title: string; description: string }[];
	};
	download: {
		eyebrow: string;
		title: string;
		description: string;
		primaryCta: string;
		secondaryCta: string;
		platforms: {
			id: DownloadPlatform;
			name: string;
			detail: string;
			format: string;
		}[];
		note: string;
		source: string;
		sourceLink: string;
		version: string;
	};
	footer: {
		description: string;
		columns: { title: string; links: { label: string; href: string }[] }[];
		builtWith: string;
		copyright: string;
	};
}

export const landingContent: Record<Lang, LandingCopy> = {
	en: {
		nav: {
			features: 'Features',
			capabilities: 'Capabilities',
			security: 'Security',
			documentation: 'Documentation',
			github: 'GitHub',
			download: 'Download',
			menu: 'Open menu',
			close: 'Close menu',
			language: 'Language',
			themeToLight: 'Switch to light mode',
			themeToDark: 'Switch to dark mode'
		},
		hero: {
			badge: 'Native desktop SQL client for Microsoft SQL Server',
			titleLead: 'SQL Server work,',
			titleAccent: 'without the noise.',
			description:
				'Nova Tables brings connections, schema browsing, queries, and results into one focused desktop workspace. Built with Tauri and Rust, it stays local, stays quick, and stays out of your way.',
			primaryCta: 'Download v2.1.0',
			secondaryCta: 'Explore on GitHub',
			platforms: 'Windows x64 · Linux AppImage · .deb · .rpm',
			imageAlt: 'Nova Tables workspace with a SQL editor above a results grid',
			stats: [
				{ value: '~60–80 MB', label: 'Documented memory footprint' },
				{ value: 'Tauri v2', label: 'Native desktop shell' },
				{ value: 'Rust 2021', label: 'Performance-critical core' },
				{ value: 'Local-first', label: 'No account or telemetry' }
			]
		},
		showcase: {
			eyebrow: 'Inside the product',
			title: 'Three surfaces. One quiet workspace.',
			description:
				'Move between the tree, the editor, and the designer without losing your place. Every screen is built around the same simple idea: the work stays in front of you.',
			items: [
				{
					label: 'Workspace',
					title: 'Editor above, results below.',
					description:
						'The resizable results grid stays in view while you write. The header keeps the database picker, execution guard, estimated plan, and run control within reach.',
					bullets: [
						'Resizable editor and grid',
						'Database-aware tabs',
						'Estimated plan in one click'
					],
					image: '/demo/workspace.webp',
					alt: 'Nova Tables workspace with query tabs and a results grid'
				},
				{
					label: 'Connections',
					title: 'A tree built for environments.',
					description:
						'Keep production, staging, and local connections apart with environment badges, nested folders, recent sessions, and quick connect.',
					bullets: [
						'Nested folders and drag handles',
						'Recent-session shortcuts',
						'Bulk selection actions'
					],
					image: '/demo/connections.webp',
					alt: 'Nova Tables connection tree with environment badges and folders'
				},
				{
					label: 'Table designer',
					title: 'Structure without guesswork.',
					description:
						'Edit columns, lengths, defaults, nullability, identity, keys, and foreign keys side by side, then review the generated DDL before applying it.',
					bullets: [
						'Columns and keys together',
						'Searchable data types',
						'Generated DDL preview'
					],
					image: '/demo/table-designer.webp',
					alt: 'Nova Tables table designer with columns and foreign keys'
				}
			]
		},
		value: {
			eyebrow: 'Why Nova Tables',
			title: 'Small on purpose.',
			description:
				'Nova Tables is made for people who work with Microsoft SQL Server every day and simply want a tidy place to look something up, write a query, and read the answer.',
			quote: 'It stays deliberately small and focused on doing that well.',
			quoteSource: 'Nova Tables README',
			items: [
				{
					number: '01',
					title: 'One engine, deeply.',
					description:
						'No dialect switches or plugin matrix. The tree, editor, designer, and grid are tuned to SQL Server objects, T-SQL, and the way SQL Server reports results.'
				},
				{
					number: '02',
					title: 'Local, by default.',
					description:
						'Connections, preferences, and query history live in a local SQLite store. There is no account, no cloud sync, and no telemetry to opt out of.'
				},
				{
					number: '03',
					title: 'Native, not wrapped.',
					description:
						'Tauri v2 and Rust replace a browser runtime with a native shell. The documented footprint is roughly 60–80 MB of memory, with instant native startup.'
				}
			]
		},
		capabilities: {
			eyebrow: 'Capabilities',
			title: 'The tools you reach for, already in place.',
			description:
				'Nova Tables covers the loop from browsing a schema to reviewing the SQL that changes it.',
			editor: {
				title: 'A Monaco editor with guardrails',
				description:
					'Syntax highlighting, completion, line wrapping, and Ctrl+R re-runs. Choose silent, alert-readonly, or alert execution guards depending on how much confirmation you want.',
				footnote: 'Ctrl+R · Silent Mode · Estimated plan'
			},
			plans: {
				title: 'See the plan',
				description:
					'Inspect estimated execution plans as an operator tree with cost analysis, or open the raw XML.'
			},
			grid: {
				title: 'A grid that keeps up',
				description:
					'Three-state sorting, filter by cell value, foreign key links, and in-grid editing that highlights pending changes.'
			},
			history: {
				title: 'Every query, remembered',
				description:
					'Executions are logged locally with row count, duration, and errors. Search, reopen, delete, or clear history per database.'
			},
			writes: {
				title: 'Review every write',
				description:
					'Edits become UPDATE and DELETE statements with primary keys in the WHERE clause. Nothing is written silently.'
			},
			json: {
				title: 'Read a row as a record',
				description:
					'Inspect any row or selection as formatted JSON, with raw, wrapped, and XML views for long values.'
			},
			export: {
				title: 'Export without ceremony',
				description:
					'Write results or selections to RFC 4180 CSV or formatted JSON through the native save dialog.'
			}
		},
		developer: {
			eyebrow: 'Developer experience',
			title: 'From question to answer, then to review.',
			description:
				'Run a query, read the result, edit in place, and review the exact SQL before it touches your database. The loop stays inside one window.',
			steps: [
				{
					title: 'Run with intent',
					description:
						'Silent, alert-readonly, or alert. The execution guard decides how much confirmation you want before a statement runs.'
				},
				{
					title: 'Inspect in place',
					description:
						'Sort, filter, follow foreign keys, or open a row as JSON or XML without leaving the grid.'
				},
				{
					title: 'Review every write',
					description:
						'Cell edits and row deletions generate UPDATE and DELETE statements with primary keys in the WHERE clause. You apply them deliberately.'
				}
			]
		},
		architecture: {
			eyebrow: 'Performance & architecture',
			title: 'A small footprint, built on a native core.',
			description:
				'Nova Tables moves the desktop shell and database work into Rust while React and Monaco handle the interface. The result is a lighter client that starts quickly and keeps memory use in check.',
			layers: [
				{ label: 'Interface', detail: 'React 18 · strict TypeScript · Monaco Editor' },
				{ label: 'Bridge', detail: 'Tauri v2 IPC with explicit data contracts' },
				{ label: 'Native core', detail: 'Rust 2021 · tiberius + tokio' },
				{ label: 'Storage & target', detail: 'rusqlite (WAL) · Microsoft SQL Server' }
			],
			stats: [
				{ value: '~60–80 MB', label: 'Documented memory footprint' },
				{ value: '20,000', label: 'Rows per result set before trimming' },
				{ value: '2,000', label: 'Rows rendered in the virtualized grid' },
				{ value: '500', label: 'Query history entries per connection' }
			],
			footnote: 'Figures reflect documented limits from the v2.1.0 release notes, not benchmark claims.'
		},
		security: {
			eyebrow: 'Privacy & security',
			title: 'Your database stays your database.',
			description:
				'Nova Tables is a local desktop application. Your data, credentials, query history, and results never leave your computer.',
			badges: ['No account', 'No telemetry', 'No cloud sync'],
			items: [
				{
					title: 'Local SQLite store',
					description:
						'Connections and query history live in the OS application data directory. Linux: ~/.local/share/nova-tables/connections.sqlite. Windows: %APPDATA%\\nova-tables\\connections.sqlite.'
				},
				{
					title: 'Encrypted portability',
					description:
						'Connection trees export as a single file protected with AES-256-GCM and a PBKDF2-SHA-256 key (100,000 iterations).'
				},
				{
					title: 'No silent writes',
					description:
						'Edits generate UPDATE and DELETE statements for review. Result exports are written only to the path you choose in the native save dialog.'
				},
				{
					title: 'Source you can audit',
					description:
						'Nova Tables is MIT licensed. Read the code, file an issue, or build it yourself.'
				}
			]
		},
		download: {
			eyebrow: 'Download',
			title: 'Bring your SQL Server work home.',
			description:
				'Nova Tables 2.1.0 is available for Windows x64 and Linux. Pick the package that fits your machine.',
			primaryCta: 'Download Nova Tables',
			secondaryCta: 'Read the documentation',
			platforms: [
				{ id: 'windows', name: 'Windows x64', detail: 'NSIS installer', format: '.exe' },
				{ id: 'appimage', name: 'Linux x64', detail: 'Portable AppImage', format: '.AppImage' },
				{ id: 'deb', name: 'Debian / Ubuntu', detail: 'Debian package', format: '.deb' },
				{ id: 'rpm', name: 'Fedora / RHEL', detail: 'RPM package', format: '.rpm' }
			],
			note: 'The Windows installer is not code-signed yet, so SmartScreen may show a warning on first launch.',
			source: 'Prefer to build from source?',
			sourceLink: 'Read the quick start on GitHub.',
			version: 'Version 2.1.0 · MIT License'
		},
		footer: {
			description:
				'A native desktop SQL client for Microsoft SQL Server. Built with Tauri v2 and Rust.',
			columns: [
				{
					title: 'Product',
					links: [
						{ label: 'Features', href: '/#features' },
						{ label: 'Capabilities', href: '/#capabilities' },
						{ label: 'Security', href: '/#security' },
						{ label: 'Download', href: '/#download' }
					]
				},
				{
					title: 'Resources',
					links: [
						{ label: 'Documentation', href: links.documentation },
						{ label: 'GitHub', href: links.github },
						{ label: 'Release notes', href: links.releases },
						{ label: 'MIT License', href: links.license }
					]
				},
				{
					title: 'Legal',
					links: [
						{ label: 'Privacy Policy', href: '/privacy-policy' },
						{ label: 'Terms of Service', href: '/terms-of-service' }
					]
				}
			],
			builtWith: 'Built with Tauri and Rust.',
			copyright: '© 2026 Nova Ardiansyah. All rights reserved.'
		}
	},
	id: {
		nav: {
			features: 'Fitur',
			capabilities: 'Kemampuan',
			security: 'Keamanan',
			documentation: 'Dokumentasi',
			github: 'GitHub',
			download: 'Unduh',
			menu: 'Buka menu',
			close: 'Tutup menu',
			language: 'Bahasa',
			themeToLight: 'Ganti ke mode terang',
			themeToDark: 'Ganti ke mode gelap'
		},
		hero: {
			badge: 'Klien SQL desktop native untuk Microsoft SQL Server',
			titleLead: 'Pekerjaan SQL Server,',
			titleAccent: 'tanpa kebisingan.',
			description:
				'Nova Tables menyatukan koneksi, penjelajahan skema, kueri, dan hasil dalam satu ruang kerja desktop yang fokus. Dibangun dengan Tauri dan Rust, aplikasi ini tetap lokal, tetap cepat, dan tidak mengganggu alur kerja Anda.',
			primaryCta: 'Unduh v2.1.0',
			secondaryCta: 'Jelajahi di GitHub',
			platforms: 'Windows x64 · Linux AppImage · .deb · .rpm',
			imageAlt: 'Ruang kerja Nova Tables dengan editor SQL di atas grid hasil',
			stats: [
				{ value: '~60–80 MB', label: 'Jejak memori terdokumentasi' },
				{ value: 'Tauri v2', label: 'Shell desktop native' },
				{ value: 'Rust 2021', label: 'Inti performa' },
				{ value: 'Lokal', label: 'Tanpa akun atau telemetri' }
			]
		},
		showcase: {
			eyebrow: 'Di dalam produk',
			title: 'Tiga permukaan. Satu ruang kerja yang tenang.',
			description:
				'Berpindah antara pohon objek, editor, dan desainer tanpa kehilangan konteks. Setiap layar dibangun dengan ide yang sama: pekerjaan tetap ada di depan Anda.',
			items: [
				{
					label: 'Ruang kerja',
					title: 'Editor di atas, hasil di bawah.',
					description:
						'Grid hasil yang dapat diubah ukurannya tetap terlihat saat Anda menulis. Header menyimpan pemilih database, pengaman eksekusi, estimated plan, dan tombol jalankan dalam jangkauan.',
					bullets: [
						'Editor dan grid dapat diatur ukurannya',
						'Tab sadar database',
						'Estimated plan dalam satu klik'
					],
					image: '/demo/workspace.webp',
					alt: 'Ruang kerja Nova Tables dengan tab kueri dan grid hasil'
				},
				{
					label: 'Koneksi',
					title: 'Pohon objek untuk setiap lingkungan.',
					description:
						'Pisahkan koneksi production, staging, dan lokal dengan badge lingkungan, folder bersarang, sesi terbaru, dan quick connect.',
					bullets: [
						'Folder bersarang dan drag handle',
						'Pintasan sesi terbaru',
						'Aksi pilihan massal'
					],
					image: '/demo/connections.webp',
					alt: 'Pohon koneksi Nova Tables dengan badge lingkungan dan folder'
				},
				{
					label: 'Desainer tabel',
					title: 'Struktur tanpa menebak.',
					description:
						'Edit kolom, panjang, default, nullability, identity, key, dan foreign key secara berdampingan, lalu tinjau DDL yang dihasilkan sebelum diterapkan.',
					bullets: [
						'Kolom dan key dalam satu tampilan',
						'Tipe data yang dapat dicari',
						'Pratinjau DDL yang dihasilkan'
					],
					image: '/demo/table-designer.webp',
					alt: 'Desainer tabel Nova Tables dengan kolom dan foreign key'
				}
			]
		},
		value: {
			eyebrow: 'Mengapa Nova Tables',
			title: 'Kecil dengan sengaja.',
			description:
				'Nova Tables dibuat untuk orang yang bekerja dengan Microsoft SQL Server setiap hari dan hanya ingin tempat rapi untuk mencari sesuatu, menulis kueri, dan membaca jawabannya.',
			quote: 'Aplikasi ini tetap sengaja kecil dan fokus untuk melakukannya dengan baik.',
			quoteSource: 'README Nova Tables',
			items: [
				{
					number: '01',
					title: 'Satu mesin, ditelusuri dalam.',
					description:
						'Tanpa pergantian dialek atau matriks plugin. Pohon objek, editor, desainer, dan grid disesuaikan dengan objek SQL Server, T-SQL, dan cara SQL Server menampilkan hasil.'
				},
				{
					number: '02',
					title: 'Lokal secara default.',
					description:
						'Koneksi, preferensi, dan riwayat kueri tersimpan di SQLite lokal. Tidak ada akun, sinkronisasi cloud, atau telemetri yang harus dinonaktifkan.'
				},
				{
					number: '03',
					title: 'Native, bukan pembungkus.',
					description:
						'Tauri v2 dan Rust menggantikan runtime browser dengan shell native. Jejak memori terdokumentasi sekitar 60–80 MB, dengan startup native yang instan.'
				}
			]
		},
		capabilities: {
			eyebrow: 'Kemampuan',
			title: 'Alat yang Anda butuhkan, sudah tersedia.',
			description:
				'Nova Tables mencakup alur dari menelusuri skema hingga meninjau SQL yang mengubahnya.',
			editor: {
				title: 'Editor Monaco dengan pengaman',
				description:
					'Penyorotan sintaks, completion, line wrapping, dan Ctrl+R untuk menjalankan ulang. Pilih mode eksekusi silent, alert-readonly, atau alert sesuai tingkat konfirmasi yang Anda inginkan.',
				footnote: 'Ctrl+R · Silent Mode · Estimated plan'
			},
			plans: {
				title: 'Lihat rencana eksekusi',
				description:
					'Periksa estimated execution plan sebagai pohon operator dengan analisis biaya, atau buka XML mentahnya.'
			},
			grid: {
				title: 'Grid yang tetap responsif',
				description:
					'Pengurutan tiga status, filter berdasarkan nilai sel, tautan foreign key, dan edit langsung di grid dengan penanda perubahan.'
			},
			history: {
				title: 'Setiap kueri, tercatat',
				description:
					'Setiap eksekusi dicatat secara lokal dengan jumlah baris, durasi, dan error. Cari, buka kembali, hapus, atau bersihkan riwayat per database.'
			},
			writes: {
				title: 'Tinjau setiap perubahan',
				description:
					'Hasil edit menjadi pernyataan UPDATE dan DELETE dengan primary key di klausa WHERE. Tidak ada yang ditulis diam-diam.'
			},
			json: {
				title: 'Baca baris sebagai record',
				description:
					'Periksa baris atau pilihan sebagai JSON terformat, dengan tampilan raw, wrapped, dan XML untuk nilai panjang.'
			},
			export: {
				title: 'Ekspor tanpa ribet',
				description:
					'Tulis hasil atau pilihan ke CSV RFC 4180 atau JSON terformat melalui dialog simpan native.'
			}
		},
		developer: {
			eyebrow: 'Pengalaman developer',
			title: 'Dari pertanyaan ke jawaban, lalu ke tinjauan.',
			description:
				'Jalankan kueri, baca hasilnya, edit langsung, dan tinjau SQL yang tepat sebelum menyentuh database Anda. Seluruh alur tetap dalam satu jendela.',
			steps: [
				{
					title: 'Jalankan dengan niat',
					description:
						'Silent, alert-readonly, atau alert. Pengaman eksekusi menentukan seberapa banyak konfirmasi yang Anda inginkan sebelum pernyataan dijalankan.'
				},
				{
					title: 'Periksa di tempat',
					description:
						'Urutkan, filter, ikuti foreign key, atau buka baris sebagai JSON atau XML tanpa meninggalkan grid.'
				},
				{
					title: 'Tinjau setiap penulisan',
					description:
						'Edit sel dan penghapusan baris menghasilkan pernyataan UPDATE dan DELETE dengan primary key di klausa WHERE. Anda menerapkannya secara sadar.'
				}
			]
		},
		architecture: {
			eyebrow: 'Performa & arsitektur',
			title: 'Jejak kecil, dibangun di atas inti native.',
			description:
				'Nova Tables memindahkan shell desktop dan pekerjaan database ke Rust, sementara React dan Monaco menangani antarmuka. Hasilnya adalah klien yang lebih ringan, cepat dimulai, dan menjaga penggunaan memori.',
			layers: [
				{ label: 'Antarmuka', detail: 'React 18 · TypeScript strict · Monaco Editor' },
				{ label: 'Jembatan', detail: 'Tauri v2 IPC dengan kontrak data eksplisit' },
				{ label: 'Inti native', detail: 'Rust 2021 · tiberius + tokio' },
				{ label: 'Penyimpanan & target', detail: 'rusqlite (WAL) · Microsoft SQL Server' }
			],
			stats: [
				{ value: '~60–80 MB', label: 'Jejak memori terdokumentasi' },
				{ value: '20.000', label: 'Baris per result set sebelum dipangkas' },
				{ value: '2.000', label: 'Baris yang dirender di grid virtual' },
				{ value: '500', label: 'Entri riwayat kueri per koneksi' }
			],
			footnote: 'Angka ini merupakan batas terdokumentasi dari catatan rilis v2.1.0, bukan klaim benchmark.'
		},
		security: {
			eyebrow: 'Privasi & keamanan',
			title: 'Database Anda tetap milik Anda.',
			description:
				'Nova Tables adalah aplikasi desktop lokal. Data, kredensial, riwayat kueri, dan hasil Anda tidak pernah keluar dari komputer Anda.',
			badges: ['Tanpa akun', 'Tanpa telemetri', 'Tanpa sinkronisasi cloud'],
			items: [
				{
					title: 'Penyimpanan SQLite lokal',
					description:
						'Koneksi dan riwayat kueri tersimpan di direktori data aplikasi OS. Linux: ~/.local/share/nova-tables/connections.sqlite. Windows: %APPDATA%\\nova-tables\\connections.sqlite.'
				},
				{
					title: 'Portabilitas terenkripsi',
					description:
						'Pohon koneksi diekspor sebagai satu file yang dilindungi AES-256-GCM dan kunci PBKDF2-SHA-256 (100.000 iterasi).'
				},
				{
					title: 'Tanpa penulisan diam-diam',
					description:
						'Edit menghasilkan pernyataan UPDATE dan DELETE untuk ditinjau. Ekspor hasil hanya ditulis ke lokasi yang Anda pilih di dialog simpan native.'
				},
				{
					title: 'Sumber yang dapat diaudit',
					description:
						'Nova Tables berlisensi MIT. Baca kodenya, laporkan issue, atau bangun sendiri.'
				}
			]
		},
		download: {
			eyebrow: 'Unduh',
			title: 'Bawa pekerjaan SQL Server Anda pulang.',
			description:
				'Nova Tables 2.1.0 tersedia untuk Windows x64 dan Linux. Pilih paket yang sesuai dengan mesin Anda.',
			primaryCta: 'Unduh Nova Tables',
			secondaryCta: 'Baca dokumentasi',
			platforms: [
				{ id: 'windows', name: 'Windows x64', detail: 'Installer NSIS', format: '.exe' },
				{ id: 'appimage', name: 'Linux x64', detail: 'AppImage portabel', format: '.AppImage' },
				{ id: 'deb', name: 'Debian / Ubuntu', detail: 'Paket Debian', format: '.deb' },
				{ id: 'rpm', name: 'Fedora / RHEL', detail: 'Paket RPM', format: '.rpm' }
			],
			note: 'Installer Windows belum ditandatangani secara digital, jadi SmartScreen dapat menampilkan peringatan saat pertama kali dijalankan.',
			source: 'Ingin membangun dari sumber?',
			sourceLink: 'Baca quick start di GitHub.',
			version: 'Versi 2.1.0 · Lisensi MIT'
		},
		footer: {
			description:
				'Klien SQL desktop native untuk Microsoft SQL Server. Dibangun dengan Tauri v2 dan Rust.',
			columns: [
				{
					title: 'Produk',
					links: [
						{ label: 'Fitur', href: '/#features' },
						{ label: 'Kemampuan', href: '/#capabilities' },
						{ label: 'Keamanan', href: '/#security' },
						{ label: 'Unduh', href: '/#download' }
					]
				},
				{
					title: 'Sumber Daya',
					links: [
						{ label: 'Dokumentasi', href: links.documentation },
						{ label: 'GitHub', href: links.github },
						{ label: 'Catatan rilis', href: links.releases },
						{ label: 'Lisensi MIT', href: links.license }
					]
				},
				{
					title: 'Legal',
					links: [
						{ label: 'Kebijakan Privasi', href: '/privacy-policy' },
						{ label: 'Syarat Layanan', href: '/terms-of-service' }
					]
				}
			],
			builtWith: 'Dibangun dengan Tauri dan Rust.',
			copyright: '© 2026 Nova Ardiansyah. Hak cipta dilindungi.'
		}
	}
};
