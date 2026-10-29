import type { Lang } from './translations';

export interface LegalSubsection {
	title: string;
	paragraphs: string[];
	items?: string[];
}

export interface LegalSection {
	id: string;
	title: string;
	paragraphs?: string[];
	items?: string[];
	subsections?: LegalSubsection[];
}

export interface LegalDocument {
	eyebrow: string;
	title: string;
	intro: string;
	effectiveLabel: string;
	updatedLabel: string;
	effectiveDate: string;
	updatedDate: string;
	tocLabel: string;
	notice: string;
	sections: LegalSection[];
}

const enPrivacy: LegalDocument = {
	eyebrow: 'Legal',
	title: 'Privacy Policy',
	intro:
		'This Privacy Policy explains what information Nova Tables processes, where that information is stored, and which choices you have. Nova Tables is a local-first desktop application: it has no user accounts, no cloud backend, and no telemetry.',
	effectiveLabel: 'Effective date',
	updatedLabel: 'Last updated',
	effectiveDate: '29 October 2026',
	updatedDate: '29 October 2026',
	tocLabel: 'On this page',
	notice:
		'This document reflects the behaviour of Nova Tables as of the date above and is provided for transparency. It is not legal advice and has not been reviewed by a qualified lawyer. Statutory rights that cannot be waived continue to apply.',
	sections: [
		{
			id: 'introduction',
			title: 'Introduction',
			paragraphs: [
				'This Privacy Policy applies to the Nova Tables desktop application, the Nova Tables website at nova-tables.novaardiansyah.id, and the documentation and release pages we publish (together, the "Service").',
				'Nova Tables is developed and maintained by Nova Ardiansyah, an individual developer, who is the controller for the limited processing described in this Policy. No company or other legal entity is currently presented as the operator of the Service.',
				'This Policy does not apply to Microsoft SQL Server, to the databases you connect to, or to third-party websites and services. Those are operated by their own providers under their own terms and privacy policies.',
				'The Application is designed to run entirely on your device. We do not operate a service that receives your connections, credentials, queries, or database content.'
			]
		},
		{
			id: 'information-we-collect',
			title: 'Information We Collect',
			paragraphs: [
				'We do not collect personal information through the Application. The Application contains no analytics, telemetry, advertising, tracking, or crash-reporting components, and it does not require an account or a sign-in.',
				'The categories below describe the limited information that may exist when you use the Service.'
			],
			subsections: [
				{
					title: 'Information you provide voluntarily',
					paragraphs: [
						'If you contact us by email, WhatsApp, or a GitHub issue, we receive the information you choose to include, such as your name, contact details, a description of the problem, logs, or screenshots. GitHub issues are hosted by GitHub and are also subject to GitHub\'s privacy policy.'
					]
				},
				{
					title: 'Information processed locally on your device',
					paragraphs: [
						'Connection settings, database credentials, saved queries, query history, exported files, and interface preferences are created and stored by the Application on your device. We do not receive or have access to this information.'
					]
				},
				{
					title: 'Technical information from downloads and the website',
					paragraphs: [
						'When you visit the Website or download an installer, the providers hosting those resources may process standard technical data in server logs, such as IP address, browser or client type, requested file, and timestamp. We do not use this data to identify you, build profiles, or measure behaviour.'
					]
				},
				{
					title: 'Website preferences',
					paragraphs: [
						'The Website stores your language and theme preferences in your browser\'s local storage. The Website does not set analytics or advertising cookies and does not use fingerprinting scripts.'
					]
				},
				{
					title: 'Information we do not collect',
					paragraphs: ['We do not collect or receive:'],
					items: [
						'Names, email addresses, or account credentials for the Application.',
						'Database credentials, connection strings, or server addresses.',
						'SQL statements, query results, execution plans, or schema metadata.',
						'Usage analytics, feature events, or session recordings.',
						'Advertising identifiers, precise location, or device fingerprints.',
						'Crash reports or diagnostic telemetry.'
					]
				}
			]
		},
		{
			id: 'database-connections-and-credentials',
			title: 'Database Connections and Credentials',
			paragraphs: [
				'Nova Tables connects directly from your device to the Microsoft SQL Server instance you configure, using the Tabular Data Stream (TDS) protocol. Connection traffic is exchanged between your device and your server. We are not an intermediary and do not receive that traffic.',
				'Connection details such as server host, port, username, database name, TLS options, environment label, and folder are stored in a local SQLite database inside your operating system\'s application data directory, for example ~/.local/share/nova-tables/connections.sqlite on Linux or %APPDATA%\\nova-tables\\connections.sqlite on Windows.',
				'Current versions store the SQL Server password in that local SQLite database and do not use an operating-system keychain or encrypt the database file. Saved credentials therefore rely on your operating system\'s file permissions and disk security. We recommend full-disk encryption, a locked user account, and restricted file permissions on shared machines.',
				'You can export selected connections and folders into a single JSON file protected with AES-256-GCM and a key derived from your passphrase using PBKDF2 (100,000 iterations). Encryption and decryption happen locally, and the file is written only to the location you choose. You are responsible for that file and its passphrase.',
				'Your SQL Server may log sessions according to its own configuration. That logging is controlled by you or your organization, not by Nova Tables.'
			]
		},
		{
			id: 'sql-queries-and-database-content',
			title: 'SQL Queries and Database Content',
			paragraphs: [
				'SQL statements you write, execution results, execution plans, table structures, and database metadata are processed in memory on your device and displayed in the interface.',
				'Query history is stored locally and includes the statement, status, duration, row count, error message, database name, and timestamp. The Application keeps up to 500 of the most recent history entries per connection and removes older entries automatically.',
				'Saved queries and connection folders are also stored locally. None of this content is transmitted to us or to third parties by the Application.',
				'When you export results to CSV or JSON, the Application writes a file to the location you choose. That file is outside our control and is governed by your own storage and sharing practices.',
				'If your SQL Server is remote, data travels between your device and that server over the network using the settings you provide, including TLS options. That communication is between you and the operator of the server.'
			]
		},
		{
			id: 'local-data-storage',
			title: 'Local Data Storage',
			paragraphs: [
				'The Application keeps its data in a local SQLite store inside the operating system application data directory. The store contains:'
			],
			items: [
				'Connection configurations, environment labels, and folders.',
				'Saved SQL Server usernames and passwords.',
				'Saved queries and query history.',
				'Application settings such as theme, fonts, editor options, and timezone.',
				'Interface state such as the last connected connection and tree ordering.'
			],
			subsections: [
				{
					title: 'Your control over local data',
					paragraphs: [
						'You can delete connections, folders, saved queries, and history from within the Application. You can also remove the nova-tables application data directory to delete all locally stored data.',
						'Uninstalling the Application may leave the application data directory in place, so review and remove it manually if you want to erase everything.'
					]
				}
			]
		},
		{
			id: 'data-sharing-and-disclosure',
			title: 'Data Sharing and Disclosure',
			paragraphs: [
				'We do not sell, rent, trade, or share personal information. The Application has no mechanism to transmit your data to us, and we do not operate analytics, advertising, or data-broker relationships.',
				'Limited disclosure may occur in the following situations:'
			],
			items: [
				'Hosting providers that serve the Website, release downloads, and source code process standard web requests under their own policies.',
				'If required by applicable law, regulation, or valid legal process, we may disclose information we actually hold, which in practice is normally limited to support correspondence.',
				'We may disclose information where necessary to protect rights, safety, or the integrity of the Service, or to defend against legal claims.'
			]
		},
		{
			id: 'third-party-services',
			title: 'Third-Party Services and Dependencies',
			paragraphs: [
				'The Service relies on the following third parties. They are independently operated and are not data processors acting on our instructions for your database content.'
			],
			items: [
				'Microsoft SQL Server: the database engine you connect to. It is a Microsoft product governed by Microsoft\'s terms, and you are responsible for licensing it.',
				'GitHub: hosts the source code, issue tracker, and release notes under GitHub\'s terms and privacy policy.',
				'File hosting at files.novaardiansyah.id: serves installer downloads and may keep standard access logs.',
				'Open-source libraries bundled with the Application, including Tauri, Rust crates, React, Monaco Editor, rusqlite, and tiberius. They run locally, do not transmit data on their own, and remain governed by their respective licenses.'
			]
		},
		{
			id: 'data-retention-and-deletion',
			title: 'Data Retention and Deletion',
			paragraphs: [
				'We do not retain application data because we do not receive it. Local data remains on your device until you delete it through the Application or by removing the application data directory.',
				'Support correspondence is kept only as long as needed to handle the request and for a reasonable period afterwards, then deleted. Content you publish on GitHub is retained under GitHub\'s policies until you or GitHub delete it.',
				'Hosting providers retain server logs according to their own retention schedules. We do not maintain a separate copy of those logs.',
				'Files you export from the Application, including encrypted connection exports and CSV or JSON results, are stored wherever you save them and are not deleted by the Application.'
			]
		},
		{
			id: 'data-security',
			title: 'Data Security',
			paragraphs: [
				'The local-first design reduces exposure: there are no accounts to compromise, no cloud copy of your data, and no telemetry channel.',
				'The Application relies on operating-system file permissions to protect its local SQLite store. That store is not encrypted by the Application in current versions, so anyone with access to your user account or disk may be able to read saved connections and passwords.',
				'Connection exports can be protected with AES-256-GCM and PBKDF2 key derivation. The strength of that protection depends on the passphrase you choose and on the security of the device that stores the file.',
				'The Website is served over HTTPS. No method of storage or transmission is completely secure, and we cannot guarantee absolute security.',
				'If you discover a security issue, please report it to admin@novaardiansyah.id so it can be assessed and addressed.'
			]
		},
		{
			id: 'international-transfers',
			title: 'International Data Transfers',
			paragraphs: [
				'The Application processes your data locally, and we do not transfer it across borders.',
				'If you contact us or use GitHub, your information may be processed in countries where those providers operate, including the United States, under their own safeguards. We do not operate our own international data transfers.'
			]
		},
		{
			id: 'your-rights',
			title: 'Your Rights and Choices',
			paragraphs: [
				'Because we do not collect personal information through the Application, most privacy choices are exercised directly on your device by deleting connections, history, or the application data directory.',
				'Where applicable law provides privacy rights, such as the EU General Data Protection Regulation, the California Consumer Privacy Act as amended by the CPRA, Indonesia\'s Personal Data Protection Law (UU No. 27 Tahun 2022), or other similar laws, you may have the right to access, correct, delete, restrict, or object to processing, to request portability, to withdraw consent, and to lodge a complaint with a supervisory authority. These rights apply to the information we actually hold, which is normally limited to support correspondence.',
				'We do not sell or share personal information for cross-context behavioural advertising, and no opt-out is required. We do not use personal information for automated decision-making or profiling.',
				'To exercise a right, contact admin@novaardiansyah.id. We may ask for information needed to verify your identity and will respond within the period required by applicable law. We will not discriminate against you for exercising your rights.'
			]
		},
		{
			id: 'childrens-privacy',
			title: 'Children\'s Privacy',
			paragraphs: [
				'Nova Tables is a professional developer tool and is not directed to children. We do not knowingly collect personal information from children under 13, or under the minimum age set by local law where that age is higher.',
				'If you believe a child has provided personal information to us, contact admin@novaardiansyah.id and we will delete it.'
			]
		},
		{
			id: 'changes',
			title: 'Changes to This Privacy Policy',
			paragraphs: [
				'We may update this Policy to reflect changes in the Application, legal requirements, or our practices. The revised version will be published on this page with a new "Last updated" date.',
				'Material changes may also be noted in release notes where practical. Continued use of the Service after the effective date constitutes acceptance of the revised Policy to the extent permitted by law.'
			]
		},
		{
			id: 'contact',
			title: 'Contact',
			paragraphs: [
				'Questions, requests, or concerns about this Policy can be sent to Nova Ardiansyah at admin@novaardiansyah.id.',
				'You can also find the project at novaardiansyah.id and at github.com/novaardiansyah/nova-tables-rust. We aim to respond within a reasonable period.'
			]
		}
	]
};

const enTerms: LegalDocument = {
	eyebrow: 'Legal',
	title: 'Terms of Service',
	intro:
		'These Terms govern your use of the Nova Tables desktop application and website. The source code is released under the MIT License, and these Terms do not reduce the rights that license grants you.',
	effectiveLabel: 'Effective date',
	updatedLabel: 'Last updated',
	effectiveDate: '29 October 2026',
	updatedDate: '29 October 2026',
	tocLabel: 'On this page',
	notice:
		'These Terms reflect the current distribution model of Nova Tables and are provided for transparency. They are not legal advice and have not been reviewed by a qualified lawyer. Some provisions, particularly governing law and liability, may require review by counsel in your jurisdiction. Mandatory consumer rights are unaffected.',
	sections: [
		{
			id: 'acceptance',
			title: 'Acceptance of Terms',
			paragraphs: [
				'These Terms of Service ("Terms") govern your download, installation, access to, and use of the Nova Tables desktop application, including its updates, documentation, and website (together, the "Service"). The Service is provided by Nova Ardiansyah, an individual developer ("we", "us", "our").',
				'By downloading, installing, accessing, or using the Service, you agree to these Terms. If you do not agree, do not use the Service.',
				'If you use the Service on behalf of an organization, you represent that you are authorized to accept these Terms on its behalf.',
				'These Terms apply alongside the MIT License that governs the source code. If these Terms conflict with the MIT License in relation to the software code, the MIT License prevails.'
			]
		},
		{
			id: 'definitions',
			title: 'Definitions',
			items: [
				'Application: the Nova Tables desktop application for Microsoft SQL Server, including any update we distribute.',
				'Software: the source code, binaries, and bundled components that make up the Application.',
				'Website: the pages published at nova-tables.novaardiansyah.id and related documentation pages.',
				'Service: the Application, the Website, documentation, release downloads, and any support we provide.',
				'User, you: the individual or organization that downloads, installs, or uses the Service.',
				'Developer, we: Nova Ardiansyah, the individual who develops and distributes Nova Tables.',
				'Third-Party Services: products and services operated by others, including Microsoft SQL Server, GitHub, and download hosting providers.',
				'Database: a Microsoft SQL Server instance and its contents that you access through the Application.',
				'Content: SQL statements, results, schemas, files, and other data you process with the Application.',
				'Generated SQL: UPDATE, DELETE, CREATE TABLE, or other statements the Application prepares for you to review and execute.'
			]
		},
		{
			id: 'license-and-permitted-use',
			title: 'License and Permitted Use',
			paragraphs: [
				'The Software\'s source code is released under the MIT License. That license grants permission to use, copy, modify, merge, publish, distribute, sublicense, and sell copies of the Software, subject to its conditions, including preserving the copyright and permission notice.',
				'These Terms do not limit or add conditions to the rights the MIT License grants in the Software\'s code. They govern your use of distributed builds, the Website, documentation, branding, and any support we provide.',
				'Third-party components included in the Application remain governed by their own licenses.',
				'You may use the Application for personal, educational, or commercial purposes, including against production databases, provided you hold the authorizations required for that use.'
			]
		},
		{
			id: 'user-responsibilities',
			title: 'User Responsibilities',
			paragraphs: ['You are responsible for:'],
			items: [
				'Maintaining lawful access permissions for every database you connect to.',
				'Protecting your credentials and your device account.',
				'Confirming that you are authorized to read or modify the data you access.',
				'Reviewing SQL statements and generated scripts before executing them.',
				'Maintaining backups and recovery procedures appropriate to your data.',
				'Complying with applicable laws, contracts, and organizational policies.',
				'Deciding when to install updates and testing them before using them with important data.'
			]
		},
		{
			id: 'database-operations',
			title: 'Database Operations and Data Responsibility',
			paragraphs: [
				'All database operations are initiated by you. The Application does not run silent background modifications against your databases; generated UPDATE, DELETE, and DDL statements must be reviewed and executed deliberately.',
				'You remain solely responsible for the queries you execute, the data and schema changes you make, database integrity, permissions, and backup and recovery procedures.',
				'Execution guards and confirmation prompts are conveniences, not a substitute for your own review.',
				'We have no access to your databases and cannot recover lost or corrupted data.'
			]
		},
		{
			id: 'acceptable-use',
			title: 'Acceptable Use',
			paragraphs: ['You agree not to use the Service to:'],
			items: [
				'Violate applicable laws or regulations.',
				'Access databases without authorization or beyond the permissions granted to you.',
				'Disrupt, damage, or gain unauthorized access to systems, data, or networks.',
				'Distribute malware or facilitate attacks on other systems.',
				'Remove or alter copyright, license, or attribution notices in breach of the MIT License or third-party licenses.',
				'Misrepresent the Application as an official product of another party, or use Nova Tables branding in a way that implies endorsement without permission.',
				'Misrepresent modified builds as the original Application in a manner that is likely to deceive users.'
			],
			subsections: [
				{
					title: 'Enforcement',
					paragraphs: [
						'We may decline support or stop distributing the Application to anyone who violates these Terms. This does not limit rights you already hold under the MIT License for copies you lawfully obtained.'
					]
				}
			]
		},
		{
			id: 'intellectual-property',
			title: 'Intellectual Property',
			paragraphs: [
				'The Nova Tables name, logo, visual identity, Website design, and documentation are owned by Nova Ardiansyah and are not licensed under the MIT License unless explicitly stated.',
				'The Software\'s source code is licensed under the MIT License. Copyright in the code remains with the author and contributors.',
				'Third-party libraries remain the property of their authors and are used under their respective licenses.',
				'Microsoft, SQL Server, and Windows are trademarks of Microsoft Corporation. Nova Tables is an independent project and is not affiliated with, endorsed by, or sponsored by Microsoft.',
				'Feedback you send may be used to improve the Service without any obligation to compensate you.'
			]
		},
		{
			id: 'third-party-software',
			title: 'Third-Party Software and Services',
			paragraphs: [
				'The Application includes open-source components such as Tauri, Rust crates, React, Monaco Editor, rusqlite, and tiberius, and it communicates with Microsoft SQL Server instances that you configure.',
				'Your use of Microsoft SQL Server requires a valid license from Microsoft and is governed by Microsoft\'s terms.',
				'Downloads may be served by third-party hosting, and source code and issue tracking are hosted on GitHub. Those services are governed by their own terms and privacy policies.',
				'We are not responsible for third-party services, for their availability, or for changes they make.'
			]
		},
		{
			id: 'updates-and-changes',
			title: 'Updates and Changes',
			paragraphs: [
				'We may release updates, change or remove features, or discontinue distribution at any time. Current versions do not include an automatic updater; updates are downloaded and installed manually from the release pages.',
				'We do not promise a particular update schedule, support period, or backward compatibility.',
				'You are responsible for testing an update before using it with important data.'
			]
		},
		{
			id: 'warranty-disclaimer',
			title: 'Disclaimer of Warranties',
			paragraphs: [
				'To the maximum extent permitted by applicable law, the Service is provided "as is" and "as available", without warranties of any kind, express or implied, including implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement. This is consistent with the MIT License.',
				'We do not warrant that the Application will be compatible with every SQL Server version or configuration, that it will operate uninterrupted or error-free, or that query results, generated SQL, or execution plans are correct or complete.',
				'Nothing in these Terms excludes warranties or rights that cannot be excluded under applicable consumer law.'
			]
		},
		{
			id: 'limitation-of-liability',
			title: 'Limitation of Liability',
			paragraphs: [
				'To the maximum extent permitted by applicable law, we are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, or for loss of profits, revenue, data, databases, goodwill, or business interruption, arising from or related to the Service.',
				'This includes loss or corruption of data, incorrect or failed queries, unauthorized access to your databases, service interruptions, and reliance on generated SQL or execution plans.',
				'Where liability cannot lawfully be excluded, our total aggregate liability arising from or related to the Service is limited to the amount you paid for the Application in the twelve months preceding the claim, if any.',
				'Nothing in these Terms limits liability for fraud, wilful misconduct, death or personal injury caused by negligence, or any other liability that cannot be limited by law.',
				'The Application is not a backup service. You are responsible for maintaining independent backups of your data.'
			]
		},
		{
			id: 'indemnification',
			title: 'Indemnification',
			paragraphs: [
				'To the extent permitted by applicable law, you agree to indemnify and hold harmless Nova Ardiansyah from claims, damages, liabilities, and reasonable costs arising from your use of the Service in violation of these Terms or applicable law, or from database operations you perform, except to the extent the claim results from our wilful misconduct.',
				'This section does not apply where consumer law prohibits such an obligation.'
			]
		},
		{
			id: 'termination',
			title: 'Suspension and Termination',
			paragraphs: [
				'You may stop using the Service at any time and delete your local data.',
				'We may suspend or discontinue distribution, support, or access to the Website at any time, including where these Terms are violated.',
				'Termination does not revoke rights already granted to you under the MIT License for copies you lawfully obtained. Provisions that by their nature should survive termination, including disclaimers, liability limits, indemnification, intellectual property, and governing law, continue to apply.'
			]
		},
		{
			id: 'governing-law',
			title: 'Governing Law and Dispute Resolution',
			paragraphs: [
				'These Terms are governed by the laws of the Republic of Indonesia, without regard to conflict-of-law rules, because the developer is an individual based in Indonesia. This choice does not deprive you of mandatory protections granted by the law of your country of residence.',
				'Before starting formal proceedings, please contact admin@novaardiansyah.id and allow 30 days for an amicable resolution.',
				'If a dispute cannot be resolved amicably, it may be submitted to the competent courts of Indonesia, unless mandatory law gives you the right to bring a claim before the courts of your own jurisdiction.',
				'Note: Nova Tables is operated by an individual developer. No company registration, registered office, or business identification number is currently published. The governing-law and jurisdiction provisions above require confirmation by a qualified legal professional before they are relied upon.'
			]
		},
		{
			id: 'changes-to-terms',
			title: 'Changes to These Terms',
			paragraphs: [
				'We may revise these Terms from time to time. The revised version will be published on this page with a new "Last updated" date, and material changes may be noted in release notes where practical.',
				'Revised Terms become effective on the date stated on this page. Continued use of the Service after that date constitutes acceptance to the extent permitted by law. If you do not agree, stop using the Service.'
			]
		},
		{
			id: 'contact',
			title: 'Contact',
			paragraphs: [
				'Questions about these Terms can be sent to Nova Ardiansyah at admin@novaardiansyah.id.',
				'Bug reports and feature requests can be filed at github.com/novaardiansyah/nova-tables-rust. General information is available at novaardiansyah.id.'
			]
		}
	]
};

const idPrivacy: LegalDocument = {
	eyebrow: 'Legal',
	title: 'Kebijakan Privasi',
	intro:
		'Kebijakan Privasi ini menjelaskan informasi apa yang diproses Nova Tables, di mana informasi tersebut disimpan, dan pilihan apa yang Anda miliki. Nova Tables adalah aplikasi desktop local-first: tidak ada akun pengguna, tidak ada backend cloud, dan tidak ada telemetri.',
	effectiveLabel: 'Tanggal berlaku',
	updatedLabel: 'Terakhir diperbarui',
	effectiveDate: '29 Oktober 2026',
	updatedDate: '29 Oktober 2026',
	tocLabel: 'Di halaman ini',
	notice:
		'Dokumen ini mencerminkan perilaku Nova Tables pada tanggal di atas dan disediakan untuk transparansi. Dokumen ini bukan nasihat hukum dan belum ditinjau oleh pengacara. Hak-hak Anda berdasarkan hukum yang tidak dapat dilepaskan tetap berlaku.',
	sections: [
		{
			id: 'introduction',
			title: 'Pendahuluan',
			paragraphs: [
				'Kebijakan Privasi ini berlaku untuk aplikasi desktop Nova Tables, situs web Nova Tables di nova-tables.novaardiansyah.id, serta dokumentasi dan halaman rilis yang kami terbitkan (bersama-sama disebut "Layanan").',
				'Nova Tables dikembangkan dan dipelihara oleh Nova Ardiansyah, seorang pengembang individu, yang menjadi pengendali atas pemrosesan terbatas yang dijelaskan dalam Kebijakan ini. Tidak ada perusahaan atau badan hukum lain yang saat ini ditampilkan sebagai operator Layanan.',
				'Kebijakan ini tidak berlaku untuk Microsoft SQL Server, database yang Anda hubungkan, atau situs dan layanan pihak ketiga. Semuanya dioperasikan oleh penyedianya masing-masing dengan syarat dan kebijakan privasi mereka sendiri.',
				'Aplikasi dirancang untuk berjalan sepenuhnya di perangkat Anda. Kami tidak mengoperasikan layanan yang menerima koneksi, kredensial, kueri, atau isi database Anda.'
			]
		},
		{
			id: 'information-we-collect',
			title: 'Informasi yang Kami Kumpulkan',
			paragraphs: [
				'Kami tidak mengumpulkan informasi pribadi melalui Aplikasi. Aplikasi tidak memuat komponen analitik, telemetri, periklanan, pelacakan, atau pelaporan crash, dan tidak memerlukan akun atau proses masuk.',
				'Kategori di bawah ini menjelaskan informasi terbatas yang mungkin ada saat Anda menggunakan Layanan.'
			],
			subsections: [
				{
					title: 'Informasi yang Anda berikan secara sukarela',
					paragraphs: [
						'Jika Anda menghubungi kami melalui email, WhatsApp, atau issue GitHub, kami menerima informasi yang Anda pilih untuk sertakan, seperti nama, detail kontak, deskripsi masalah, log, atau tangkapan layar. Issue GitHub dihosting oleh GitHub dan juga tunduk pada kebijakan privasi GitHub.'
					]
				},
				{
					title: 'Informasi yang diproses secara lokal di perangkat Anda',
					paragraphs: [
						'Pengaturan koneksi, kredensial database, kueri tersimpan, riwayat kueri, file hasil ekspor, dan preferensi antarmuka dibuat serta disimpan oleh Aplikasi di perangkat Anda. Kami tidak menerima atau memiliki akses ke informasi tersebut.'
					]
				},
				{
					title: 'Informasi teknis dari unduhan dan situs web',
					paragraphs: [
						'Saat Anda mengunjungi Situs Web atau mengunduh installer, penyedia yang menghosting sumber daya tersebut dapat memproses data teknis standar dalam log server, seperti alamat IP, jenis browser atau klien, file yang diminta, dan waktu akses. Kami tidak menggunakan data ini untuk mengidentifikasi Anda, membuat profil, atau mengukur perilaku.'
					]
				},
				{
					title: 'Preferensi situs web',
					paragraphs: [
						'Situs Web menyimpan preferensi bahasa dan tema Anda di penyimpanan lokal browser. Situs Web tidak memasang cookie analitik atau periklanan dan tidak menggunakan skrip fingerprinting.'
					]
				},
				{
					title: 'Informasi yang tidak kami kumpulkan',
					paragraphs: ['Kami tidak mengumpulkan atau menerima:'],
					items: [
						'Nama, alamat email, atau kredensial akun untuk Aplikasi.',
						'Kredensial database, connection string, atau alamat server.',
						'Pernyataan SQL, hasil kueri, execution plan, atau metadata skema.',
						'Analitik penggunaan, event fitur, atau rekaman sesi.',
						'Pengenal periklanan, lokasi presisi, atau fingerprint perangkat.',
						'Laporan crash atau telemetri diagnostik.'
					]
				}
			]
		},
		{
			id: 'database-connections-and-credentials',
			title: 'Koneksi Database dan Kredensial',
			paragraphs: [
				'Nova Tables terhubung langsung dari perangkat Anda ke instance Microsoft SQL Server yang Anda konfigurasi menggunakan protokol Tabular Data Stream (TDS). Lalu lintas koneksi dipertukarkan antara perangkat Anda dan server Anda. Kami bukan perantara dan tidak menerima lalu lintas tersebut.',
				'Detail koneksi seperti host server, port, username, nama database, opsi TLS, label lingkungan, dan folder disimpan dalam database SQLite lokal di direktori data aplikasi sistem operasi Anda, misalnya ~/.local/share/nova-tables/connections.sqlite di Linux atau %APPDATA%\\nova-tables\\connections.sqlite di Windows.',
				'Versi saat ini menyimpan password SQL Server di database SQLite lokal tersebut dan tidak menggunakan keychain sistem operasi atau mengenkripsi file database. Kredensial yang tersimpan bergantung pada izin file dan keamanan disk sistem operasi Anda. Kami menyarankan enkripsi seluruh disk, akun pengguna yang terkunci, dan izin file yang ketat pada mesin bersama.',
				'Anda dapat mengekspor koneksi dan folder terpilih ke satu file JSON yang dilindungi dengan AES-256-GCM dan kunci turunan passphrase menggunakan PBKDF2 (100.000 iterasi). Enkripsi dan dekripsi dilakukan secara lokal, dan file hanya ditulis ke lokasi yang Anda pilih. Anda bertanggung jawab atas file tersebut dan passphrase-nya.',
				'SQL Server Anda dapat mencatat sesi sesuai konfigurasinya sendiri. Pencatatan itu dikendalikan oleh Anda atau organisasi Anda, bukan oleh Nova Tables.'
			]
		},
		{
			id: 'sql-queries-and-database-content',
			title: 'Kueri SQL dan Isi Database',
			paragraphs: [
				'Pernyataan SQL yang Anda tulis, hasil eksekusi, execution plan, struktur tabel, dan metadata database diproses di memori perangkat Anda dan ditampilkan di antarmuka.',
				'Riwayat kueri disimpan secara lokal dan mencakup pernyataan, status, durasi, jumlah baris, pesan kesalahan, nama database, dan waktu eksekusi. Aplikasi menyimpan hingga 500 entri riwayat terbaru per koneksi dan menghapus entri yang lebih lama secara otomatis.',
				'Kueri tersimpan dan folder koneksi juga disimpan secara lokal. Tidak ada isi tersebut yang dikirimkan kepada kami atau pihak ketiga oleh Aplikasi.',
				'Saat Anda mengekspor hasil ke CSV atau JSON, Aplikasi menulis file ke lokasi yang Anda pilih. File tersebut berada di luar kendali kami dan tunduk pada praktik penyimpanan serta berbagi Anda sendiri.',
				'Jika SQL Server Anda bersifat remote, data berpindah antara perangkat Anda dan server tersebut melalui jaringan menggunakan pengaturan yang Anda berikan, termasuk opsi TLS. Komunikasi itu terjadi antara Anda dan operator server.'
			]
		},
		{
			id: 'local-data-storage',
			title: 'Penyimpanan Data Lokal',
			paragraphs: [
				'Aplikasi menyimpan datanya dalam penyimpanan SQLite lokal di direktori data aplikasi sistem operasi. Penyimpanan tersebut berisi:'
			],
			items: [
				'Konfigurasi koneksi, label lingkungan, dan folder.',
				'Username dan password SQL Server yang tersimpan.',
				'Kueri tersimpan dan riwayat kueri.',
				'Pengaturan aplikasi seperti tema, font, opsi editor, dan zona waktu.',
				'Status antarmuka seperti koneksi terakhir yang digunakan dan urutan tree.'
			],
			subsections: [
				{
					title: 'Kendali Anda atas data lokal',
					paragraphs: [
						'Anda dapat menghapus koneksi, folder, kueri tersimpan, dan riwayat dari dalam Aplikasi. Anda juga dapat menghapus direktori data aplikasi nova-tables untuk menghapus semua data yang tersimpan secara lokal.',
						'Menghapus instalasi Aplikasi dapat meninggalkan direktori data aplikasi, jadi periksa dan hapus secara manual jika Anda ingin menghapus semuanya.'
					]
				}
			]
		},
		{
			id: 'data-sharing-and-disclosure',
			title: 'Berbagi dan Pengungkapan Data',
			paragraphs: [
				'Kami tidak menjual, menyewakan, memperdagangkan, atau membagikan informasi pribadi. Aplikasi tidak memiliki mekanisme untuk mengirimkan data Anda kepada kami, dan kami tidak memiliki hubungan analitik, periklanan, atau data broker.',
				'Pengungkapan terbatas dapat terjadi dalam situasi berikut:'
			],
			items: [
				'Penyedia hosting yang melayani Situs Web, unduhan rilis, dan kode sumber memproses permintaan web standar sesuai kebijakan mereka sendiri.',
				'Jika diwajibkan oleh hukum, regulasi, atau proses hukum yang sah, kami dapat mengungkapkan informasi yang benar-benar kami miliki, yang dalam praktiknya biasanya terbatas pada korespondensi dukungan.',
				'Kami dapat mengungkapkan informasi bila diperlukan untuk melindungi hak, keselamatan, atau integritas Layanan, atau untuk membela diri terhadap klaim hukum.'
			]
		},
		{
			id: 'third-party-services',
			title: 'Layanan dan Dependensi Pihak Ketiga',
			paragraphs: [
				'Layanan bergantung pada pihak ketiga berikut. Mereka dioperasikan secara independen dan bukan pemroses data yang bertindak atas instruksi kami untuk isi database Anda.'
			],
			items: [
				'Microsoft SQL Server: mesin database yang Anda hubungkan. Ini adalah produk Microsoft yang diatur oleh ketentuan Microsoft, dan Anda bertanggung jawab atas lisensinya.',
				'GitHub: menghosting kode sumber, pelacak issue, dan catatan rilis sesuai ketentuan dan kebijakan privasi GitHub.',
				'Hosting file di files.novaardiansyah.id: melayani unduhan installer dan dapat menyimpan log akses standar.',
				'Pustaka open-source yang disertakan dalam Aplikasi, termasuk Tauri, crate Rust, React, Monaco Editor, rusqlite, dan tiberius. Semuanya berjalan secara lokal, tidak mengirimkan data sendiri, dan tetap diatur oleh lisensinya masing-masing.'
			]
		},
		{
			id: 'data-retention-and-deletion',
			title: 'Retensi dan Penghapusan Data',
			paragraphs: [
				'Kami tidak menyimpan data aplikasi karena kami tidak menerimanya. Data lokal tetap berada di perangkat Anda sampai Anda menghapusnya melalui Aplikasi atau dengan menghapus direktori data aplikasi.',
				'Korespondensi dukungan disimpan hanya selama diperlukan untuk menangani permintaan dan untuk periode yang wajar setelahnya, lalu dihapus. Konten yang Anda publikasikan di GitHub disimpan sesuai kebijakan GitHub sampai Anda atau GitHub menghapusnya.',
				'Penyedia hosting menyimpan log server sesuai jadwal retensi mereka sendiri. Kami tidak menyimpan salinan terpisah dari log tersebut.',
				'File yang Anda ekspor dari Aplikasi, termasuk ekspor koneksi terenkripsi dan hasil CSV atau JSON, disimpan di lokasi yang Anda tentukan dan tidak dihapus oleh Aplikasi.'
			]
		},
		{
			id: 'data-security',
			title: 'Keamanan Data',
			paragraphs: [
				'Desain local-first mengurangi paparan: tidak ada akun yang dapat disusupi, tidak ada salinan data Anda di cloud, dan tidak ada kanal telemetri.',
				'Aplikasi mengandalkan izin file sistem operasi untuk melindungi penyimpanan SQLite lokalnya. Penyimpanan tersebut tidak dienkripsi oleh Aplikasi pada versi saat ini, sehingga siapa pun yang memiliki akses ke akun pengguna atau disk Anda dapat membaca koneksi dan password yang tersimpan.',
				'Ekspor koneksi dapat dilindungi dengan AES-256-GCM dan derivasi kunci PBKDF2. Kekuatan perlindungan tersebut bergantung pada passphrase yang Anda pilih dan keamanan perangkat yang menyimpan file.',
				'Situs Web disajikan melalui HTTPS. Tidak ada metode penyimpanan atau transmisi yang sepenuhnya aman, dan kami tidak dapat menjamin keamanan mutlak.',
				'Jika Anda menemukan masalah keamanan, laporkan ke admin@novaardiansyah.id agar dapat dinilai dan ditangani.'
			]
		},
		{
			id: 'international-transfers',
			title: 'Transfer Data Internasional',
			paragraphs: [
				'Aplikasi memproses data Anda secara lokal, dan kami tidak mentransfernya lintas negara.',
				'Jika Anda menghubungi kami atau menggunakan GitHub, informasi Anda dapat diproses di negara tempat penyedia tersebut beroperasi, termasuk Amerika Serikat, sesuai pengamanan mereka sendiri. Kami tidak mengoperasikan transfer data internasional sendiri.'
			]
		},
		{
			id: 'your-rights',
			title: 'Hak dan Pilihan Anda',
			paragraphs: [
				'Karena kami tidak mengumpulkan informasi pribadi melalui Aplikasi, sebagian besar pilihan privasi dilakukan langsung di perangkat Anda dengan menghapus koneksi, riwayat, atau direktori data aplikasi.',
				'Jika hukum yang berlaku memberikan hak privasi, seperti General Data Protection Regulation Uni Eropa, California Consumer Privacy Act sebagaimana diubah oleh CPRA, Undang-Undang Perlindungan Data Pribadi Indonesia (UU No. 27 Tahun 2022), atau hukum serupa lainnya, Anda mungkin memiliki hak untuk mengakses, memperbaiki, menghapus, membatasi, atau menolak pemrosesan, meminta portabilitas, menarik persetujuan, dan mengajukan keluhan kepada otoritas pengawas. Hak tersebut berlaku atas informasi yang benar-benar kami miliki, yang biasanya terbatas pada korespondensi dukungan.',
				'Kami tidak menjual atau membagikan informasi pribadi untuk iklan perilaku lintas konteks, sehingga tidak diperlukan opt-out. Kami tidak menggunakan informasi pribadi untuk pengambilan keputusan otomatis atau pembuatan profil.',
				'Untuk menggunakan hak Anda, hubungi admin@novaardiansyah.id. Kami dapat meminta informasi yang diperlukan untuk memverifikasi identitas Anda dan akan merespons dalam jangka waktu yang diwajibkan hukum. Kami tidak akan mendiskriminasi Anda karena menggunakan hak Anda.'
			]
		},
		{
			id: 'childrens-privacy',
			title: 'Privasi Anak',
			paragraphs: [
				'Nova Tables adalah alat pengembang profesional dan tidak ditujukan untuk anak-anak. Kami tidak dengan sengaja mengumpulkan informasi pribadi dari anak di bawah 13 tahun, atau di bawah usia minimum yang ditetapkan hukum setempat jika usia tersebut lebih tinggi.',
				'Jika Anda yakin seorang anak telah memberikan informasi pribadi kepada kami, hubungi admin@novaardiansyah.id dan kami akan menghapusnya.'
			]
		},
		{
			id: 'changes',
			title: 'Perubahan Kebijakan Privasi',
			paragraphs: [
				'Kami dapat memperbarui Kebijakan ini untuk mencerminkan perubahan pada Aplikasi, persyaratan hukum, atau praktik kami. Versi revisi akan diterbitkan di halaman ini dengan tanggal "Terakhir diperbarui" yang baru.',
				'Perubahan material juga dapat dicatat dalam catatan rilis bila memungkinkan. Penggunaan Layanan secara berkelanjutan setelah tanggal berlaku merupakan penerimaan atas Kebijakan yang direvisi sejauh diizinkan hukum.'
			]
		},
		{
			id: 'contact',
			title: 'Kontak',
			paragraphs: [
				'Pertanyaan, permintaan, atau kekhawatiran tentang Kebijakan ini dapat dikirimkan kepada Nova Ardiansyah di admin@novaardiansyah.id.',
				'Anda juga dapat menemukan proyek ini di novaardiansyah.id dan github.com/novaardiansyah/nova-tables-rust. Kami berupaya merespons dalam waktu yang wajar.'
			]
		}
	]
};

const idTerms: LegalDocument = {
	eyebrow: 'Legal',
	title: 'Syarat Layanan',
	intro:
		'Syarat ini mengatur penggunaan aplikasi desktop dan situs web Nova Tables. Kode sumber dirilis di bawah Lisensi MIT, dan Syarat ini tidak mengurangi hak yang diberikan lisensi tersebut kepada Anda.',
	effectiveLabel: 'Tanggal berlaku',
	updatedLabel: 'Terakhir diperbarui',
	effectiveDate: '29 Oktober 2026',
	updatedDate: '29 Oktober 2026',
	tocLabel: 'Di halaman ini',
	notice:
		'Syarat ini mencerminkan model distribusi Nova Tables saat ini dan disediakan untuk transparansi. Ini bukan nasihat hukum dan belum ditinjau oleh pengacara. Beberapa ketentuan, khususnya hukum yang berlaku dan tanggung jawab, mungkin memerlukan tinjauan penasihat hukum di yurisdiksi Anda. Hak konsumen yang bersifat wajib tetap berlaku.',
	sections: [
		{
			id: 'acceptance',
			title: 'Penerimaan Syarat',
			paragraphs: [
				'Syarat Layanan ini ("Syarat") mengatur pengunduhan, pemasangan, akses, dan penggunaan aplikasi desktop Nova Tables, termasuk pembaruan, dokumentasi, dan situs webnya (bersama-sama disebut "Layanan"). Layanan disediakan oleh Nova Ardiansyah, seorang pengembang individu ("kami").',
				'Dengan mengunduh, memasang, mengakses, atau menggunakan Layanan, Anda menyetujui Syarat ini. Jika Anda tidak setuju, jangan gunakan Layanan.',
				'Jika Anda menggunakan Layanan atas nama organisasi, Anda menyatakan bahwa Anda berwenang menerima Syarat ini untuk organisasi tersebut.',
				'Syarat ini berlaku bersama Lisensi MIT yang mengatur kode sumber. Jika Syarat ini bertentangan dengan Lisensi MIT terkait kode perangkat lunak, Lisensi MIT yang berlaku.'
			]
		},
		{
			id: 'definitions',
			title: 'Definisi',
			items: [
				'Aplikasi: aplikasi desktop Nova Tables untuk Microsoft SQL Server, termasuk pembaruan yang kami distribusikan.',
				'Perangkat Lunak: kode sumber, binary, dan komponen yang menyusun Aplikasi.',
				'Situs Web: halaman yang diterbitkan di nova-tables.novaardiansyah.id dan halaman dokumentasi terkait.',
				'Layanan: Aplikasi, Situs Web, dokumentasi, unduhan rilis, dan dukungan yang kami berikan.',
				'Pengguna, Anda: individu atau organisasi yang mengunduh, memasang, atau menggunakan Layanan.',
				'Pengembang, kami: Nova Ardiansyah, individu yang mengembangkan dan mendistribusikan Nova Tables.',
				'Layanan Pihak Ketiga: produk dan layanan yang dioperasikan pihak lain, termasuk Microsoft SQL Server, GitHub, dan penyedia hosting unduhan.',
				'Database: instance Microsoft SQL Server beserta isinya yang Anda akses melalui Aplikasi.',
				'Konten: pernyataan SQL, hasil, skema, file, dan data lain yang Anda proses dengan Aplikasi.',
				'SQL yang Dihasilkan: pernyataan UPDATE, DELETE, CREATE TABLE, atau pernyataan lain yang disiapkan Aplikasi untuk Anda tinjau dan jalankan.'
			]
		},
		{
			id: 'license-and-permitted-use',
			title: 'Lisensi dan Penggunaan yang Diizinkan',
			paragraphs: [
				'Kode sumber Perangkat Lunak dirilis di bawah Lisensi MIT. Lisensi tersebut memberikan izin untuk menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan menjual salinan Perangkat Lunak, dengan tunduk pada kondisinya, termasuk mempertahankan pemberitahuan hak cipta dan izin.',
				'Syarat ini tidak membatasi atau menambah kondisi pada hak yang diberikan Lisensi MIT atas kode Perangkat Lunak. Syarat ini mengatur penggunaan build yang didistribusikan, Situs Web, dokumentasi, branding, dan dukungan yang kami berikan.',
				'Komponen pihak ketiga dalam Aplikasi tetap diatur oleh lisensinya masing-masing.',
				'Anda dapat menggunakan Aplikasi untuk tujuan pribadi, pendidikan, atau komersial, termasuk terhadap database produksi, selama Anda memiliki otorisasi yang diperlukan.'
			]
		},
		{
			id: 'user-responsibilities',
			title: 'Tanggung Jawab Pengguna',
			paragraphs: ['Anda bertanggung jawab untuk:'],
			items: [
				'Memelihara izin akses yang sah untuk setiap database yang Anda hubungkan.',
				'Melindungi kredensial dan akun perangkat Anda.',
				'Memastikan bahwa Anda berwenang membaca atau mengubah data yang Anda akses.',
				'Meninjau pernyataan SQL dan skrip yang dihasilkan sebelum menjalankannya.',
				'Memelihara cadangan dan prosedur pemulihan yang sesuai dengan data Anda.',
				'Mematuhi hukum, kontrak, dan kebijakan organisasi yang berlaku.',
				'Menentukan kapan memasang pembaruan dan mengujinya sebelum digunakan dengan data penting.'
			]
		},
		{
			id: 'database-operations',
			title: 'Operasi Database dan Tanggung Jawab Data',
			paragraphs: [
				'Semua operasi database dimulai oleh Anda. Aplikasi tidak menjalankan modifikasi latar belakang secara diam-diam terhadap database Anda; pernyataan UPDATE, DELETE, dan DDL yang dihasilkan harus ditinjau dan dijalankan secara sengaja.',
				'Anda tetap bertanggung jawab penuh atas kueri yang Anda jalankan, perubahan data dan skema yang Anda lakukan, integritas database, izin, serta prosedur cadangan dan pemulihan.',
				'Pengaman eksekusi dan dialog konfirmasi adalah kemudahan, bukan pengganti tinjauan Anda sendiri.',
				'Kami tidak memiliki akses ke database Anda dan tidak dapat memulihkan data yang hilang atau rusak.'
			]
		},
		{
			id: 'acceptable-use',
			title: 'Penggunaan yang Dapat Diterima',
			paragraphs: ['Anda setuju untuk tidak menggunakan Layanan untuk:'],
			items: [
				'Melanggar hukum atau regulasi yang berlaku.',
				'Mengakses database tanpa otorisasi atau melebihi izin yang diberikan kepada Anda.',
				'Mengganggu, merusak, atau mendapatkan akses tidak sah ke sistem, data, atau jaringan.',
				'Mendistribusikan malware atau memfasilitasi serangan terhadap sistem lain.',
				'Menghapus atau mengubah pemberitahuan hak cipta, lisensi, atau atribusi yang melanggar Lisensi MIT atau lisensi pihak ketiga.',
				'Menyatakan Aplikasi sebagai produk resmi pihak lain, atau menggunakan branding Nova Tables dengan cara yang menyiratkan dukungan tanpa izin.',
				'Menyatakan build yang dimodifikasi sebagai Aplikasi asli dengan cara yang cenderung menyesatkan pengguna.'
			],
			subsections: [
				{
					title: 'Penegakan',
					paragraphs: [
						'Kami dapat menolak dukungan atau menghentikan distribusi Aplikasi kepada siapa pun yang melanggar Syarat ini. Hal ini tidak membatasi hak yang telah Anda peroleh berdasarkan Lisensi MIT atas salinan yang Anda dapatkan secara sah.'
					]
				}
			]
		},
		{
			id: 'intellectual-property',
			title: 'Kekayaan Intelektual',
			paragraphs: [
				'Nama, logo, identitas visual, desain Situs Web, dan dokumentasi Nova Tables dimiliki oleh Nova Ardiansyah dan tidak dilisensikan di bawah Lisensi MIT kecuali dinyatakan secara tegas.',
				'Kode sumber Perangkat Lunak dilisensikan di bawah Lisensi MIT. Hak cipta atas kode tetap pada penulis dan kontributor.',
				'Pustaka pihak ketiga tetap menjadi milik penulisnya dan digunakan di bawah lisensinya masing-masing.',
				'Microsoft, SQL Server, dan Windows adalah merek dagang Microsoft Corporation. Nova Tables adalah proyek independen dan tidak berafiliasi dengan, didukung oleh, atau disponsori oleh Microsoft.',
				'Umpan balik yang Anda kirimkan dapat digunakan untuk meningkatkan Layanan tanpa kewajiban memberi kompensasi kepada Anda.'
			]
		},
		{
			id: 'third-party-software',
			title: 'Perangkat Lunak dan Layanan Pihak Ketiga',
			paragraphs: [
				'Aplikasi menyertakan komponen open-source seperti Tauri, crate Rust, React, Monaco Editor, rusqlite, dan tiberius, serta berkomunikasi dengan instance Microsoft SQL Server yang Anda konfigurasi.',
				'Penggunaan Microsoft SQL Server memerlukan lisensi yang sah dari Microsoft dan diatur oleh ketentuan Microsoft.',
				'Unduhan dapat dilayani oleh hosting pihak ketiga, dan kode sumber serta pelacakan issue dihosting di GitHub. Layanan tersebut diatur oleh syarat dan kebijakan privasi mereka sendiri.',
				'Kami tidak bertanggung jawab atas layanan pihak ketiga, ketersediaannya, atau perubahan yang mereka lakukan.'
			]
		},
		{
			id: 'updates-and-changes',
			title: 'Pembaruan dan Perubahan',
			paragraphs: [
				'Kami dapat merilis pembaruan, mengubah atau menghapus fitur, atau menghentikan distribusi kapan saja. Versi saat ini tidak menyertakan pembaruan otomatis; pembaruan diunduh dan dipasang secara manual dari halaman rilis.',
				'Kami tidak menjanjikan jadwal pembaruan, periode dukungan, atau kompatibilitas mundur tertentu.',
				'Anda bertanggung jawab menguji pembaruan sebelum menggunakannya dengan data penting.'
			]
		},
		{
			id: 'warranty-disclaimer',
			title: 'Penafian Jaminan',
			paragraphs: [
				'Sejauh diizinkan hukum yang berlaku, Layanan disediakan "sebagaimana adanya" dan "sebagaimana tersedia", tanpa jaminan apa pun, baik tersurat maupun tersirat, termasuk jaminan tersirat atas kelayakan jual, kesesuaian untuk tujuan tertentu, kepemilikan, dan non-pelanggaran. Hal ini konsisten dengan Lisensi MIT.',
				'Kami tidak menjamin bahwa Aplikasi akan kompatibel dengan setiap versi atau konfigurasi SQL Server, beroperasi tanpa gangguan atau kesalahan, atau bahwa hasil kueri, SQL yang dihasilkan, atau execution plan benar dan lengkap.',
				'Tidak ada ketentuan dalam Syarat ini yang mengecualikan jaminan atau hak yang tidak dapat dikecualikan berdasarkan hukum konsumen yang berlaku.'
			]
		},
		{
			id: 'limitation-of-liability',
			title: 'Batasan Tanggung Jawab',
			paragraphs: [
				'Sejauh diizinkan hukum yang berlaku, kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, khusus, konsekuensial, eksemplar, atau punitif, atau atas kehilangan keuntungan, pendapatan, data, database, goodwill, atau gangguan usaha, yang timbul dari atau terkait dengan Layanan.',
				'Ini mencakup kehilangan atau kerusakan data, kueri yang salah atau gagal, akses tidak sah ke database Anda, gangguan layanan, dan ketergantungan pada SQL yang dihasilkan atau execution plan.',
				'Jika tanggung jawab tidak dapat dikecualikan secara sah, total tanggung jawab kami yang timbul dari atau terkait dengan Layanan dibatasi pada jumlah yang Anda bayarkan untuk Aplikasi dalam dua belas bulan sebelum klaim, jika ada.',
				'Tidak ada ketentuan dalam Syarat ini yang membatasi tanggung jawab atas penipuan, kesengajaan, kematian atau cedera pribadi akibat kelalaian, atau tanggung jawab lain yang tidak dapat dibatasi oleh hukum.',
				'Aplikasi bukan layanan cadangan. Anda bertanggung jawab memelihara cadangan independen atas data Anda.'
			]
		},
		{
			id: 'indemnification',
			title: 'Ganti Rugi',
			paragraphs: [
				'Sejauh diizinkan hukum yang berlaku, Anda setuju untuk membebaskan dan melindungi Nova Ardiansyah dari klaim, kerugian, kewajiban, dan biaya yang wajar yang timbul dari penggunaan Layanan oleh Anda yang melanggar Syarat ini atau hukum yang berlaku, atau dari operasi database yang Anda lakukan, kecuali sejauh klaim tersebut disebabkan oleh kesengajaan kami.',
				'Pasal ini tidak berlaku jika hukum konsumen melarang kewajiban tersebut.'
			]
		},
		{
			id: 'termination',
			title: 'Penangguhan dan Penghentian',
			paragraphs: [
				'Anda dapat berhenti menggunakan Layanan kapan saja dan menghapus data lokal Anda.',
				'Kami dapat menangguhkan atau menghentikan distribusi, dukungan, atau akses ke Situs Web kapan saja, termasuk jika Syarat ini dilanggar.',
				'Penghentian tidak mencabut hak yang telah diberikan kepada Anda berdasarkan Lisensi MIT atas salinan yang Anda peroleh secara sah. Ketentuan yang secara alami bertahan setelah penghentian, termasuk penafian, batasan tanggung jawab, ganti rugi, kekayaan intelektual, dan hukum yang berlaku, tetap berlaku.'
			]
		},
		{
			id: 'governing-law',
			title: 'Hukum yang Berlaku dan Penyelesaian Sengketa',
			paragraphs: [
				'Syarat ini diatur oleh hukum Republik Indonesia, tanpa memperhatikan aturan konflik hukum, karena pengembang adalah individu yang berdomisili di Indonesia. Pilihan ini tidak menghilangkan perlindungan wajib yang diberikan oleh hukum negara tempat tinggal Anda.',
				'Sebelum memulai proses formal, silakan hubungi admin@novaardiansyah.id dan berikan waktu 30 hari untuk penyelesaian secara musyawarah.',
				'Jika sengketa tidak dapat diselesaikan secara musyawarah, sengketa dapat diajukan ke pengadilan yang berwenang di Indonesia, kecuali hukum wajib memberikan hak kepada Anda untuk mengajukan klaim di pengadilan yurisdiksi Anda sendiri.',
				'Catatan: Nova Tables dioperasikan oleh pengembang individu. Tidak ada pendaftaran perusahaan, kantor terdaftar, atau nomor identitas usaha yang saat ini diterbitkan. Ketentuan hukum yang berlaku dan yurisdiksi di atas memerlukan konfirmasi dari profesional hukum yang berkualifikasi sebelum diandalkan.'
			]
		},
		{
			id: 'changes-to-terms',
			title: 'Perubahan Syarat Ini',
			paragraphs: [
				'Kami dapat merevisi Syarat ini dari waktu ke waktu. Versi revisi akan diterbitkan di halaman ini dengan tanggal "Terakhir diperbarui" yang baru, dan perubahan material dapat dicatat dalam catatan rilis bila memungkinkan.',
				'Syarat yang direvisi berlaku pada tanggal yang dinyatakan di halaman ini. Penggunaan Layanan secara berkelanjutan setelah tanggal tersebut merupakan penerimaan sejauh diizinkan hukum. Jika Anda tidak setuju, berhenti menggunakan Layanan.'
			]
		},
		{
			id: 'contact',
			title: 'Kontak',
			paragraphs: [
				'Pertanyaan tentang Syarat ini dapat dikirimkan kepada Nova Ardiansyah di admin@novaardiansyah.id.',
				'Laporan bug dan permintaan fitur dapat diajukan di github.com/novaardiansyah/nova-tables-rust. Informasi umum tersedia di novaardiansyah.id.'
			]
		}
	]
};

export const legalContent: Record<Lang, { privacy: LegalDocument; terms: LegalDocument }> = {
	en: { privacy: enPrivacy, terms: enTerms },
	id: { privacy: idPrivacy, terms: idTerms }
};
