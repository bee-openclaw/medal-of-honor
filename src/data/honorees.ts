import { Honoree } from "@/lib/types";

export const honorees: Honoree[] = [
  {
    slug: "steve-jobs",
    name: "Steve Jobs",
    title: "Co-founder of Apple Inc.",
    born: "1955-02-24",
    died: "2011-10-05",
    birthPlace: "San Francisco, California",
    category: "tech",
    tags: ["design", "entrepreneurship", "personal computing", "mobile"],
    portraitImage: "/images/honorees/steve-jobs.png",
    summary:
      "Steve Jobs co-founded Apple and revolutionized personal computing, animated movies, music, phones, and tablet computing. His obsession with design and user experience set new standards for the entire technology industry.",
    impactStatement:
      "Steve Jobs didn't just build products — he redefined entire industries. The Macintosh brought graphical computing to the masses. The iPod and iTunes transformed how we buy and listen to music. The iPhone put a powerful computer in every pocket, creating the smartphone era that reshaped communication, commerce, and culture worldwide. His insistence that technology should be beautiful and intuitive raised the bar for every product that followed. Jobs proved that the intersection of technology and liberal arts is where the most profound innovations happen.",
    timeline: [
      {
        year: 1976,
        title: "Apple Founded",
        description:
          "Co-founded Apple Computer with Steve Wozniak and Ronald Wayne in a Los Altos garage.",
      },
      {
        year: 1984,
        title: "Macintosh Launch",
        description:
          "Introduced the Macintosh, bringing the graphical user interface to mainstream personal computing.",
      },
      {
        year: 1986,
        title: "Pixar Acquisition",
        description:
          "Acquired the Graphics Group from Lucasfilm, which became Pixar Animation Studios.",
      },
      {
        year: 1997,
        title: "Return to Apple",
        description:
          "Returned to Apple as CEO and began the company's transformation from near-bankruptcy to dominance.",
      },
      {
        year: 2001,
        title: "iPod Revolution",
        description:
          "Launched the iPod and iTunes, fundamentally changing the music industry.",
      },
      {
        year: 2007,
        title: "iPhone Unveiled",
        description:
          "Introduced the iPhone, creating the modern smartphone era and reshaping how humanity communicates.",
      },
    ],
    quotes: [
      {
        text: "Stay hungry, stay foolish.",
        source: "Stanford Commencement Speech, 2005",
      },
      {
        text: "Design is not just what it looks like and feels like. Design is how it works.",
        source: "The New York Times, 2003",
      },
      {
        text: "The people who are crazy enough to think they can change the world are the ones who do.",
        source: "Think Different campaign, 1997",
      },
    ],
    contributions: [
      {
        title: "Macintosh (1984)",
        description:
          "Made graphical user interfaces accessible to ordinary people, moving computing beyond the command line.",
      },
      {
        title: "Pixar & Toy Story (1995)",
        description:
          "Produced the world's first fully computer-animated feature film, launching a new era in entertainment.",
      },
      {
        title: "iPhone (2007)",
        description:
          "Created the modern smartphone, putting computing, communication, and the internet in everyone's pocket.",
        image: "/images/inventions/iphone.png",
        imageAlt: "Original iPhone from 2007",
      },
      {
        title: "App Store (2008)",
        description:
          "Enabled a new economy of mobile software, empowering millions of developers worldwide.",
      },
    ],
    impactMetrics: [
      { label: "iPhones Sold", value: "2.3 billion" },
      { label: "App Store Apps", value: "1.8 million" },
      { label: "Industries Redefined", value: "6+" },
    ],
    impactScore: 97,
  },
  {
    slug: "steve-wozniak",
    name: "Steve Wozniak",
    title: "Co-founder of Apple Inc. & Engineering Visionary",
    born: "1950-08-11",
    birthPlace: "San Jose, California",
    category: "tech",
    tags: ["hardware", "engineering", "personal computing", "open source"],
    portraitImage: "/images/honorees/steve-wozniak.jpg",
    summary:
      "Steve Wozniak single-handedly designed the Apple I and Apple II computers, which sparked the personal computer revolution. His engineering genius made computing accessible and affordable for ordinary people.",
    impactStatement:
      "Without Steve Wozniak, the personal computer revolution might have taken a very different path. The Apple II, which he designed almost entirely by himself, was the first mass-produced microcomputer and became the platform that launched the software industry. His elegant hardware designs — using far fewer chips than competitors thought possible — proved that computers could be affordable, reliable, and user-friendly. Wozniak's open approach to sharing technical knowledge inspired generations of engineers and helped establish Silicon Valley's culture of innovation. He demonstrated that one brilliant engineer can change the world.",
    timeline: [
      {
        year: 1975,
        title: "Homebrew Computer Club",
        description:
          "Began attending meetings and was inspired to design his own computer.",
      },
      {
        year: 1976,
        title: "Apple I",
        description:
          "Designed and hand-built the Apple I, one of the first single-board personal computers.",
      },
      {
        year: 1977,
        title: "Apple II",
        description:
          "Created the Apple II, the first mass-produced personal computer with color graphics and an open architecture.",
      },
      {
        year: 1980,
        title: "Apple IPO",
        description:
          "Apple went public, becoming one of the largest IPOs in history, validating the personal computer market.",
      },
      {
        year: 1985,
        title: "US National Medal of Technology",
        description:
          "Received the National Medal of Technology from President Reagan for contributions to personal computing.",
      },
    ],
    quotes: [
      {
        text: "My goal wasn't to make a ton of money. It was to build good computers.",
      },
      {
        text: "Never trust a computer you can't throw out a window.",
      },
      {
        text: "Wherever smart people work, doors are unlocked.",
      },
    ],
    contributions: [
      {
        title: "Apple I (1976)",
        description:
          "One of the first single-board personal computers, proving a complete computer could fit on one circuit board.",
      },
      {
        title: "Apple II (1977)",
        description:
          "The first mass-market personal computer with color graphics, sound, and an open expansion architecture.",
      },
      {
        title: "Disk II Floppy Drive (1978)",
        description:
          "Designed a floppy disk controller using far fewer components than any competitor, making storage affordable.",
      },
      {
        title: "Universal Remote (CL 9, 1987)",
        description:
          "Created the first programmable universal remote control, pioneering consumer electronics convergence.",
      },
    ],
    impactMetrics: [
      { label: "Apple II Units Sold", value: "6 million" },
      { label: "Chips Saved per Design", value: "50+" },
    ],
    impactScore: 90,
  },
  {
    slug: "tim-berners-lee",
    name: "Tim Berners-Lee",
    title: "Inventor of the World Wide Web",
    born: "1955-06-08",
    birthPlace: "London, England",
    category: "tech",
    tags: ["internet", "web", "open standards", "information"],
    portraitImage: "/images/honorees/tim-berners-lee.jpg",
    summary:
      "Tim Berners-Lee invented the World Wide Web, creating HTML, HTTP, and the first web browser. His decision to make the web free and open transformed it into the most powerful communication platform in human history.",
    impactStatement:
      "Tim Berners-Lee's invention of the World Wide Web is one of the most consequential acts of the 20th century. By creating HTML, HTTP, and URLs — and crucially, by making them freely available to everyone — he enabled the information revolution that reshaped every aspect of modern life. The web democratized access to knowledge, enabled new forms of commerce and communication, and gave a voice to billions. His ongoing advocacy for an open, decentralized web continues to shape the internet's evolution. Few individual inventions have done more to connect humanity.",
    timeline: [
      {
        year: 1980,
        title: "ENQUIRE",
        description:
          "Created ENQUIRE, a hypertext program at CERN that planted the seeds for the World Wide Web.",
      },
      {
        year: 1989,
        title: "Web Proposal",
        description:
          "Submitted 'Information Management: A Proposal' to CERN, outlining the concept of the World Wide Web.",
      },
      {
        year: 1990,
        title: "First Web Browser & Server",
        description:
          "Built the first web browser (WorldWideWeb) and web server, launching the web on Christmas Day.",
      },
      {
        year: 1993,
        title: "Web Made Free",
        description:
          "CERN released the web's source code into the public domain, ensuring it would remain open and free.",
      },
      {
        year: 1994,
        title: "W3C Founded",
        description:
          "Founded the World Wide Web Consortium (W3C) to develop open web standards.",
      },
      {
        year: 2004,
        title: "Knighted",
        description:
          "Knighted by Queen Elizabeth II for his services to the global development of the internet.",
      },
    ],
    quotes: [
      {
        text: "The Web as I envisaged it, we have not seen it yet. The future is still so much bigger than the past.",
      },
      {
        text: "This is for everyone.",
        source: "2012 Olympic Opening Ceremony tweet",
      },
      {
        text: "The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect.",
      },
    ],
    contributions: [
      {
        title: "HTML (1990)",
        description:
          "Created HyperText Markup Language, the foundational language for creating web pages.",
        image: "/images/inventions/html5.png",
        imageAlt: "HTML5 logo",
      },
      {
        title: "First Web Browser (1990)",
        description:
          "Built WorldWideWeb, the first browser and WYSIWYG HTML editor.",
      },
      {
        title: "HTTP Protocol (1990)",
        description:
          "Designed the protocol that enables web browsers and servers to communicate.",
      },
      {
        title: "World Wide Web Consortium (1994)",
        description:
          "Founded W3C to develop open standards and ensure the long-term growth of the web.",
        image: "/images/inventions/w3c.png",
        imageAlt: "W3C logo",
      },
    ],
    impactMetrics: [
      { label: "Websites Online", value: "1.9 billion" },
      { label: "Internet Users", value: "5.3 billion" },
      { label: "Web Pages Indexed", value: "50+ billion" },
    ],
    impactScore: 98,
  },
  {
    slug: "ada-lovelace",
    name: "Ada Lovelace",
    title: "The First Computer Programmer",
    born: "1815-12-10",
    died: "1852-11-27",
    birthPlace: "London, England",
    category: "tech",
    tags: ["programming", "mathematics", "algorithms", "pioneer"],
    portraitImage: "/images/honorees/ada-lovelace.jpg",
    summary:
      "Ada Lovelace wrote the first algorithm intended for a machine, making her the world's first computer programmer. Her visionary notes foresaw that computers could go far beyond mere calculation.",
    impactStatement:
      "Ada Lovelace saw the future of computing over a century before it arrived. Working with Charles Babbage's Analytical Engine in the 1840s, she wrote detailed notes that included what is recognized as the first computer program — an algorithm to compute Bernoulli numbers. More remarkably, she envisioned that computing machines could manipulate symbols and create music, going far beyond arithmetic. In an era when women were largely excluded from science, her intellectual contributions laid conceptual groundwork for the entire field of computer science. Ada Lovelace Day, celebrated annually, honors women in STEM worldwide.",
    timeline: [
      {
        year: 1833,
        title: "Met Charles Babbage",
        description:
          "At age 17, met Babbage at a party and became fascinated by his Difference Engine.",
      },
      {
        year: 1842,
        title: "Translation & Notes",
        description:
          "Translated Luigi Menabrea's article on the Analytical Engine, adding extensive notes that tripled its length.",
      },
      {
        year: 1843,
        title: "First Algorithm",
        description:
          "Published Note G, containing the first algorithm designed for machine execution — the first computer program.",
      },
      {
        year: 1980,
        title: "Ada Programming Language",
        description:
          "The US Department of Defense named its new programming language 'Ada' in her honor.",
      },
    ],
    quotes: [
      {
        text: "The Analytical Engine weaves algebraical patterns just as the Jacquard loom weaves flowers and leaves.",
        source: "Notes on the Analytical Engine, 1843",
      },
      {
        text: "That brain of mine is something more than merely mortal, as time will show.",
      },
      {
        text: "Imagination is the Discovering Faculty, pre-eminently. It is that which penetrates into the unseen worlds around us, the worlds of Science.",
      },
    ],
    contributions: [
      {
        title: "First Computer Program (1843)",
        description:
          "Wrote the first algorithm intended for machine execution, computing Bernoulli numbers on the Analytical Engine.",
      },
      {
        title: "Vision of General-Purpose Computing",
        description:
          "Foresaw that computers could process symbols, compose music, and go far beyond arithmetic.",
      },
      {
        title: "Computing as a Science",
        description:
          "Her notes established computing as a discipline worthy of rigorous study, bridging mathematics and imagination.",
      },
    ],
    impactMetrics: [
      { label: "Years Ahead of Her Time", value: "100+" },
      { label: "First Program Written", value: "1843" },
    ],
    impactScore: 88,
  },
  {
    slug: "alan-turing",
    name: "Alan Turing",
    title: "Father of Computer Science",
    born: "1912-06-23",
    died: "1954-06-07",
    birthPlace: "London, England",
    category: "tech",
    tags: [
      "computer science",
      "artificial intelligence",
      "cryptography",
      "mathematics",
    ],
    portraitImage: "/images/honorees/alan-turing.jpg",
    summary:
      "Alan Turing formalized the concept of computation with the Turing machine, broke the Enigma code during WWII, and laid the foundations for artificial intelligence. He is widely considered the father of computer science.",
    impactStatement:
      "Alan Turing's contributions to humanity are immeasurable. His 1936 paper introduced the Turing machine, providing the theoretical foundation for all modern computers. During World War II, his work at Bletchley Park breaking the Enigma code is estimated to have shortened the war by two years, saving millions of lives. After the war, he designed one of the first stored-program computers and proposed the Turing Test, launching the field of artificial intelligence. Despite facing persecution for his identity, his intellectual legacy endures as the foundation of the digital age. The Turing Award — computing's Nobel Prize — bears his name.",
    timeline: [
      {
        year: 1936,
        title: "Turing Machine",
        description:
          "Published 'On Computable Numbers,' introducing the Turing machine and formalizing the concept of algorithms.",
      },
      {
        year: 1939,
        title: "Bletchley Park",
        description:
          "Joined the Government Code and Cypher School, beginning work on breaking the Enigma code.",
      },
      {
        year: 1940,
        title: "Bombe Machine",
        description:
          "Designed the Bombe, an electromechanical device that dramatically sped up breaking Enigma-encrypted messages.",
      },
      {
        year: 1945,
        title: "ACE Computer Design",
        description:
          "Proposed the design for the Automatic Computing Engine, one of the first stored-program computer designs.",
      },
      {
        year: 1950,
        title: "Turing Test",
        description:
          "Published 'Computing Machinery and Intelligence,' proposing the Turing Test for machine intelligence.",
      },
      {
        year: 2013,
        title: "Royal Pardon",
        description:
          "Received a posthumous royal pardon from Queen Elizabeth II, 59 years after his death.",
      },
    ],
    quotes: [
      {
        text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
        source: "Computing Machinery and Intelligence, 1950",
      },
      {
        text: "Sometimes it is the people no one can imagine anything of who do the things no one can imagine.",
      },
      {
        text: "A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.",
        source: "Computing Machinery and Intelligence, 1950",
      },
    ],
    contributions: [
      {
        title: "Turing Machine (1936)",
        description:
          "Created the theoretical model of computation that underpins every modern computer.",
      },
      {
        title: "Enigma Codebreaking (1940-1945)",
        description:
          "Broke the Nazi Enigma code, helping the Allies win WWII and saving millions of lives.",
      },
      {
        title: "Bombe Machine (1940)",
        description:
          "Designed the electromechanical Bombe that could rapidly test Enigma settings.",
      },
      {
        title: "Turing Test (1950)",
        description:
          "Proposed the foundational test for machine intelligence, launching the field of AI.",
      },
    ],
    impactMetrics: [
      { label: "Lives Saved (WWII)", value: "14 million" },
      { label: "War Shortened By", value: "2 years" },
    ],
    impactScore: 96,
  },
  {
    slug: "linus-torvalds",
    name: "Linus Torvalds",
    title: "Creator of Linux and Git",
    born: "1969-12-28",
    birthPlace: "Helsinki, Finland",
    category: "tech",
    tags: ["open source", "operating systems", "software engineering", "linux"],
    portraitImage: "/images/honorees/linus-torvalds.jpg",
    summary:
      "Linus Torvalds created Linux, the open-source operating system kernel that powers most of the world's servers, smartphones, and supercomputers. He also created Git, the version control system used by virtually every software developer.",
    impactStatement:
      "Linus Torvalds created two pieces of software that underpin modern civilization. Linux, started as a hobby project in 1991, now runs the vast majority of the world's servers, all of the top 500 supercomputers, every Android phone, and much of the internet's infrastructure. Git, created in 2005, revolutionized how software is built collaboratively and enabled the open-source movement to scale globally. By choosing open-source licenses, Torvalds ensured these tools belong to everyone, enabling billions of dollars in innovation and proving that collaborative, open development can produce software superior to any proprietary alternative.",
    timeline: [
      {
        year: 1991,
        title: "Linux Announced",
        description:
          "Posted to a Usenet newsgroup: 'I'm doing a (free) operating system (just a hobby, won't be big and professional).'",
      },
      {
        year: 1994,
        title: "Linux 1.0",
        description:
          "Released Linux kernel version 1.0, marking its maturity as a production-ready operating system.",
      },
      {
        year: 2005,
        title: "Git Created",
        description:
          "Created Git in just two weeks to manage Linux kernel development after a licensing dispute with BitKeeper.",
      },
      {
        year: 2008,
        title: "Android Launch",
        description:
          "Google launched Android, built on the Linux kernel, bringing Linux to billions of mobile devices.",
      },
      {
        year: 2012,
        title: "Millennium Technology Prize",
        description:
          "Awarded the Millennium Technology Prize for creating Linux, recognizing its global impact.",
      },
    ],
    quotes: [
      {
        text: "Software is like sex: it's better when it's free.",
      },
      {
        text: "Talk is cheap. Show me the code.",
      },
      {
        text: "Most good programmers do programming not because they expect to get paid, but because it is fun to program.",
      },
    ],
    contributions: [
      {
        title: "Linux Kernel (1991)",
        description:
          "Created the operating system kernel that now powers most of the world's computing infrastructure.",
        image: "/images/inventions/tux.png",
        imageAlt: "Tux the penguin — Linux mascot",
      },
      {
        title: "Git (2005)",
        description:
          "Built the distributed version control system that became the standard tool for software collaboration worldwide.",
        image: "/images/inventions/git.png",
        imageAlt: "Git logo",
      },
      {
        title: "Open Source Movement",
        description:
          "Demonstrated that open-source development can produce enterprise-grade software, inspiring thousands of projects.",
      },
    ],
    impactMetrics: [
      { label: "Devices Running Linux", value: "2 billion+" },
      { label: "Kernel Contributors", value: "20,000+" },
      { label: "Supercomputers Using Linux", value: "100%" },
    ],
    impactScore: 95,
  },
  {
    slug: "al-khwarizmi",
    name: "Al-Khwarizmi",
    title: "Father of Algebra & Algorithms",
    born: "780",
    died: "850",
    birthPlace: "Khwarezm, Greater Khorasan",
    category: "science",
    tags: ["mathematics", "algebra", "algorithms", "astronomy"],
    portraitImage: "/images/honorees/al-khwarizmi.jpg",
    summary:
      "Muhammad ibn Musa al-Khwarizmi invented algebra, introduced the Hindu-Arabic numeral system to the Western world, and gave us the very word 'algorithm.' His mathematical works form the foundation of modern science and computing.",
    impactStatement:
      "Al-Khwarizmi's contributions are woven into the fabric of modern civilization in ways most people never realize. His book 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala' gave us the word 'algebra' and established it as an independent discipline. The Latin translation of his name — Algoritmi — became the word 'algorithm,' the fundamental concept behind every computer program ever written. He introduced the Hindu-Arabic numeral system (0-9) to the Islamic world and Europe, replacing cumbersome Roman numerals and enabling modern mathematics, commerce, and science. Without his work, the scientific revolution, the digital age, and computational thinking as we know it would not exist.",
    timeline: [
      {
        year: 820,
        title: "House of Wisdom",
        description:
          "Appointed as a scholar at the House of Wisdom in Baghdad, the greatest center of learning in the world.",
      },
      {
        year: 830,
        title: "Al-Jabr Published",
        description:
          "Published 'Al-Kitab al-Mukhtasar fi Hisab al-Jabr wal-Muqabala,' founding the discipline of algebra.",
      },
      {
        year: 835,
        title: "Hindu-Arabic Numerals",
        description:
          "Wrote 'On the Calculation with Hindu Numerals,' introducing 0-9 to the Islamic world and eventually Europe.",
      },
      {
        year: 840,
        title: "Astronomical Tables",
        description:
          "Produced refined astronomical tables (zij) used for centuries for navigation, timekeeping, and astronomy.",
      },
    ],
    quotes: [
      {
        text: "When I consider what people generally want in calculating, I found that it always is a number.",
        source: "Al-Jabr, c. 830",
      },
      {
        text: "That fondness for science, that affability and condescension which God shows to the learned, that promptitude with which he protects and supports them, has encouraged me to compose this short work.",
        source: "Preface to Al-Jabr",
      },
    ],
    contributions: [
      {
        title: "Algebra (c. 830)",
        description:
          "Created algebra as an independent mathematical discipline, providing systematic methods for solving linear and quadratic equations.",
      },
      {
        title: "Algorithms",
        description:
          "His name became the word 'algorithm' — the step-by-step procedures that are the foundation of all computer science.",
      },
      {
        title: "Hindu-Arabic Numeral System",
        description:
          "Introduced the 0-9 numeral system to the wider world, replacing Roman numerals and enabling modern mathematics.",
      },
      {
        title: "Astronomical Tables",
        description:
          "Produced highly accurate astronomical tables used for centuries in navigation and scientific calculation.",
      },
    ],
    impactMetrics: [
      { label: "Word 'Algorithm' Origin", value: "His Name" },
      { label: "Numeral System Adopted", value: "Worldwide" },
    ],
    impactScore: 94,
  },
  {
    slug: "ibn-sina",
    name: "Ibn Sina (Avicenna)",
    title: "Father of Early Modern Medicine",
    born: "980",
    died: "1037-06-18",
    birthPlace: "Afshana, Bukhara, Samanid Empire",
    category: "medicine",
    tags: ["medicine", "philosophy", "pharmacology", "science"],
    portraitImage: "/images/honorees/ibn-sina.jpg",
    summary:
      "Ibn Sina wrote 'The Canon of Medicine,' the most influential medical textbook in history, used as the standard reference in European and Islamic universities for over 600 years. He is regarded as the father of early modern medicine.",
    impactStatement:
      "Ibn Sina's 'Canon of Medicine' is one of the most important books ever written. This five-volume encyclopedia systematized all known medical knowledge of the ancient and Islamic worlds, introduced experimental medicine, described contagious diseases, outlined quarantine procedures, and cataloged over 800 medicinal substances. It was used as the primary medical textbook at universities in Europe and the Middle East from the 12th to the 17th century — longer than any other medical text in history. His philosophical works also profoundly influenced Thomas Aquinas, Duns Scotus, and the development of Western thought. Ibn Sina demonstrated that one mind could advance both the sciences and the humanities to extraordinary heights.",
    timeline: [
      {
        year: 997,
        title: "Cured the Sultan",
        description:
          "At age 17, cured the Samanid ruler Nuh ibn Mansur, gaining access to the royal library.",
      },
      {
        year: 1012,
        title: "The Book of Healing",
        description:
          "Began writing 'Kitab al-Shifa' (The Book of Healing), a vast philosophical and scientific encyclopedia.",
      },
      {
        year: 1025,
        title: "The Canon of Medicine",
        description:
          "Completed 'Al-Qanun fi al-Tibb' (The Canon of Medicine), the most influential medical text in history.",
      },
      {
        year: 1150,
        title: "Canon Translated to Latin",
        description:
          "Gerard of Cremona translated the Canon to Latin; it became the standard medical textbook in Europe for 500 years.",
      },
    ],
    quotes: [
      {
        text: "The knowledge of anything, since all things have causes, is not acquired or complete unless it is known by its causes.",
        source: "The Canon of Medicine",
      },
      {
        text: "Medicine is the science by which we learn the various states of the human body in health and when not in health.",
      },
      {
        text: "The world is divided into men who have wit and no religion, and men who have religion and no wit.",
      },
    ],
    contributions: [
      {
        title: "The Canon of Medicine (1025)",
        description:
          "A five-volume medical encyclopedia that served as the primary medical textbook worldwide for over 600 years.",
      },
      {
        title: "Contagion Theory",
        description:
          "Described contagious diseases and introduced the concept of quarantine to prevent their spread.",
      },
      {
        title: "Clinical Trials",
        description:
          "Laid out rules for testing the effectiveness of drugs, establishing principles of experimental medicine.",
      },
      {
        title: "The Book of Healing",
        description:
          "Wrote one of the largest encyclopedias ever, covering logic, natural sciences, mathematics, and metaphysics.",
      },
    ],
    impactMetrics: [
      { label: "Years as Medical Textbook", value: "600" },
      { label: "Works Authored", value: "450+" },
      { label: "Medicinal Substances Cataloged", value: "800+" },
    ],
    impactScore: 93,
  },
  {
    slug: "nikola-tesla",
    name: "Nikola Tesla",
    title: "Pioneer of Alternating Current & Modern Electrical Systems",
    born: "1856-07-10",
    died: "1943-01-07",
    birthPlace: "Smiljan, Austrian Empire (modern-day Croatia)",
    category: "science",
    tags: ["electricity", "engineering", "invention", "physics"],
    portraitImage: "/images/honorees/nikola-tesla.jpg",
    summary:
      "Nikola Tesla invented the alternating current (AC) electrical system that powers the modern world, along with the induction motor, radio technology foundations, and over 300 patents that shaped the 20th century.",
    impactStatement:
      "Nikola Tesla's alternating current system is the reason you can flip a switch and have light. His polyphase AC system, including generators, transformers, and induction motors, won the 'War of Currents' against Edison's direct current and became the global standard for electrical power distribution. Every power grid, every electrical outlet, every appliance in the world runs on principles Tesla pioneered. Beyond AC, he developed foundational technology for radio, remote control, radar, and wireless communication. His vision of wireless energy transmission was decades ahead of its time. Tesla proved that a single inventor's brilliance could literally electrify civilization.",
    timeline: [
      {
        year: 1884,
        title: "Arrived in America",
        description:
          "Arrived in New York with 4 cents in his pocket and a letter of introduction to Thomas Edison.",
      },
      {
        year: 1887,
        title: "AC Induction Motor",
        description:
          "Filed patents for the polyphase AC induction motor, the foundation of modern electrical power.",
      },
      {
        year: 1893,
        title: "World's Columbian Exposition",
        description:
          "Demonstrated AC power by illuminating the Chicago World's Fair, proving AC's superiority over DC.",
      },
      {
        year: 1895,
        title: "Niagara Falls Power Plant",
        description:
          "Designed the first large-scale AC hydroelectric power plant at Niagara Falls.",
      },
      {
        year: 1898,
        title: "Remote Control",
        description:
          "Demonstrated radio-controlled boats, inventing the concept of remote control.",
      },
    ],
    quotes: [
      {
        text: "The present is theirs; the future, for which I really worked, is mine.",
      },
      {
        text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
      },
      {
        text: "Let the future tell the truth, and evaluate each one according to his work and accomplishments.",
      },
    ],
    contributions: [
      {
        title: "Alternating Current System",
        description:
          "Invented the polyphase AC system that became the worldwide standard for electrical power generation and distribution.",
      },
      {
        title: "AC Induction Motor (1887)",
        description:
          "Created the motor that powers most of the world's machinery, from factory equipment to household appliances.",
      },
      {
        title: "Tesla Coil (1891)",
        description:
          "Invented the resonant transformer circuit used in radio technology, TV sets, and wireless communications.",
      },
      {
        title: "Niagara Falls Power Plant (1895)",
        description:
          "Designed the first major AC hydroelectric plant, proving that electricity could be transmitted over long distances.",
      },
    ],
    impactMetrics: [
      { label: "Patents Held", value: "300+" },
      { label: "Homes Powered by AC", value: "Billions" },
    ],
    impactScore: 95,
  },
  {
    slug: "marie-curie",
    name: "Marie Curie",
    title: "Pioneer of Radioactivity Research",
    born: "1867-11-07",
    died: "1934-07-04",
    birthPlace: "Warsaw, Congress Poland, Russian Empire",
    category: "science",
    tags: ["physics", "chemistry", "radioactivity", "Nobel Prize"],
    portraitImage: "/images/honorees/marie-curie.jpg",
    summary:
      "Marie Curie discovered polonium and radium, pioneered research on radioactivity, and became the first person to win Nobel Prizes in two different sciences. Her work transformed medicine, energy, and our understanding of the atom.",
    impactStatement:
      "Marie Curie's discoveries fundamentally changed humanity's understanding of matter itself. Her research on radioactivity — a term she coined — led to the discovery of two elements and opened the door to nuclear physics, cancer treatment, and atomic energy. She was the first woman to win a Nobel Prize, the first person to win two Nobel Prizes, and remains the only person to win in two different sciences. During World War I, she developed mobile X-ray units ('petites Curies') that saved countless soldiers' lives. She broke through barriers of gender discrimination in science that had stood for centuries, inspiring generations of women scientists worldwide.",
    timeline: [
      {
        year: 1898,
        title: "Discovery of Polonium & Radium",
        description:
          "Discovered two new elements — polonium (named after her homeland Poland) and radium.",
      },
      {
        year: 1903,
        title: "Nobel Prize in Physics",
        description:
          "Became the first woman to win a Nobel Prize, shared with Pierre Curie and Henri Becquerel.",
      },
      {
        year: 1911,
        title: "Nobel Prize in Chemistry",
        description:
          "Won a second Nobel Prize for her discovery of radium and polonium, the only person to win in two sciences.",
      },
      {
        year: 1914,
        title: "Mobile X-Ray Units",
        description:
          "Developed mobile radiography units for field hospitals during WWI, saving thousands of soldiers.",
      },
    ],
    quotes: [
      {
        text: "Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less.",
      },
      {
        text: "I am among those who think that science has great beauty.",
      },
      {
        text: "Be less curious about people and more curious about ideas.",
      },
    ],
    contributions: [
      {
        title: "Radioactivity Research",
        description:
          "Coined the term 'radioactivity' and conducted pioneering research that opened the field of nuclear physics.",
      },
      {
        title: "Discovery of Radium & Polonium (1898)",
        description:
          "Discovered two new elements, fundamentally advancing chemistry and enabling radiation therapy for cancer.",
      },
      {
        title: "Mobile X-Ray Units (1914)",
        description:
          "Created portable X-ray machines for WWI battlefields, revolutionizing military medicine.",
      },
    ],
    impactMetrics: [
      { label: "Nobel Prizes Won", value: "2" },
      { label: "Elements Discovered", value: "2" },
    ],
    impactScore: 94,
  },
  {
    slug: "albert-einstein",
    name: "Albert Einstein",
    title: "Architect of Modern Physics",
    born: "1879-03-14",
    died: "1955-04-18",
    birthPlace: "Ulm, Kingdom of Wurttemberg, German Empire",
    category: "science",
    tags: ["physics", "relativity", "quantum mechanics", "Nobel Prize"],
    portraitImage: "/images/honorees/albert-einstein.jpg",
    summary:
      "Albert Einstein developed the theory of relativity, fundamentally altering our understanding of space, time, energy, and gravity. His equation E=mc² is the most famous formula in science and underpins nuclear energy and modern cosmology.",
    impactStatement:
      "Albert Einstein reshaped humanity's understanding of the universe. His special theory of relativity (1905) showed that space and time are interwoven, and his general theory of relativity (1915) revealed that gravity is the curvature of spacetime itself — predictions confirmed by the detection of gravitational waves a century later. His photoelectric effect work launched quantum mechanics. E=mc² unlocked the understanding of nuclear energy. GPS satellites must account for his relativistic effects to function accurately. Einstein's work enabled technologies from nuclear power to semiconductor physics to cosmological observation, and his name became synonymous with genius itself.",
    timeline: [
      {
        year: 1905,
        title: "Miracle Year",
        description:
          "Published four revolutionary papers on the photoelectric effect, Brownian motion, special relativity, and mass-energy equivalence.",
      },
      {
        year: 1915,
        title: "General Relativity",
        description:
          "Published the general theory of relativity, describing gravity as the curvature of spacetime.",
      },
      {
        year: 1921,
        title: "Nobel Prize in Physics",
        description:
          "Awarded the Nobel Prize for his discovery of the law of the photoelectric effect.",
      },
      {
        year: 1939,
        title: "Letter to Roosevelt",
        description:
          "Wrote to President Roosevelt warning of the potential for atomic weapons, leading to the Manhattan Project.",
      },
    ],
    quotes: [
      {
        text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      },
      {
        text: "The important thing is to not stop questioning. Curiosity has its own reason for existence.",
      },
      {
        text: "If you can't explain it simply, you don't understand it well enough.",
      },
    ],
    contributions: [
      {
        title: "Special Relativity (1905)",
        description:
          "Showed that space and time are relative, and that nothing can travel faster than light.",
      },
      {
        title: "E=mc² (1905)",
        description:
          "Revealed mass-energy equivalence, the principle behind nuclear energy and the foundation of modern physics.",
      },
      {
        title: "General Relativity (1915)",
        description:
          "Described gravity as the curvature of spacetime, predicting black holes, gravitational waves, and the expanding universe.",
      },
      {
        title: "Photoelectric Effect (1905)",
        description:
          "Explained light as quanta (photons), launching quantum mechanics and enabling solar cells and digital cameras.",
      },
    ],
    impactMetrics: [
      { label: "GPS Relies on Relativity", value: "Yes" },
      { label: "Nuclear Energy Foundation", value: "E=mc²" },
    ],
    impactScore: 99,
  },
  {
    slug: "johannes-gutenberg",
    name: "Johannes Gutenberg",
    title: "Inventor of the Printing Press",
    born: "1400",
    died: "1468-02-03",
    birthPlace: "Mainz, Electorate of Mainz, Holy Roman Empire",
    category: "tech",
    tags: ["printing", "information", "publishing", "innovation"],
    portraitImage: "/images/honorees/gutenberg.jpg",
    summary:
      "Johannes Gutenberg invented the movable-type printing press, enabling the mass production of books and triggering the information revolution that led to the Renaissance, the Reformation, and the Scientific Revolution.",
    impactStatement:
      "Gutenberg's printing press was the most transformative invention of the second millennium. Before movable type, books were hand-copied — expensive, rare, and controlled by elites. Gutenberg's press made books affordable and abundant, democratizing knowledge for the first time in human history. Within 50 years of his invention, over 20 million volumes had been printed. The press enabled the Protestant Reformation, the Scientific Revolution, the spread of literacy, the rise of newspapers, and the concept of intellectual property. Every subsequent information revolution — from the telegraph to the internet — traces its lineage to Gutenberg's workshop in Mainz.",
    timeline: [
      {
        year: 1440,
        title: "Printing Press Developed",
        description:
          "Developed the movable-type printing press, combining oil-based ink, the hand mold, and a wooden press.",
      },
      {
        year: 1455,
        title: "Gutenberg Bible",
        description:
          "Printed the Gutenberg Bible (42-line Bible), the first major book produced with movable type in Europe.",
      },
      {
        year: 1500,
        title: "20 Million Books Printed",
        description:
          "Within 50 years, printing presses across Europe had produced over 20 million volumes.",
      },
    ],
    quotes: [
      {
        text: "It is a press, certainly, but a press from which shall flow in inexhaustible streams the most abundant and most marvelous liquor that has ever flowed to relieve the thirst of men.",
      },
      {
        text: "God suffers in the multitude of souls whom His word can not reach. Religious truth is imprisoned in a small number of manuscript books which confine instead of spread the public treasure.",
      },
    ],
    contributions: [
      {
        title: "Movable Type Printing Press (c. 1440)",
        description:
          "Invented the system of movable type that made mass book production possible for the first time.",
      },
      {
        title: "Gutenberg Bible (1455)",
        description:
          "Produced the first major book printed with movable type, a masterpiece of printing quality still admired today.",
      },
      {
        title: "Democratization of Knowledge",
        description:
          "Made books affordable, spreading literacy and enabling the Renaissance, Reformation, and Scientific Revolution.",
      },
    ],
    impactMetrics: [
      { label: "Books Printed by 1500", value: "20 million" },
      { label: "Literacy Rate Impact", value: "Revolutionary" },
    ],
    impactScore: 97,
  },
  {
    slug: "galileo-galilei",
    name: "Galileo Galilei",
    title: "Father of Modern Observational Science",
    born: "1564-02-15",
    died: "1642-01-08",
    birthPlace: "Pisa, Duchy of Florence",
    category: "science",
    tags: ["astronomy", "physics", "scientific method", "telescope"],
    portraitImage: "/images/honorees/galileo.jpg",
    summary:
      "Galileo championed heliocentrism, improved the telescope, discovered Jupiter's moons, and established the scientific method of observation and experiment. He is called the father of modern observational astronomy and modern physics.",
    impactStatement:
      "Galileo Galilei did more than discover celestial bodies — he changed how humanity discovers truth. By turning his improved telescope to the sky, he found Jupiter's moons, Venus's phases, sunspots, and the Milky Way's stars, providing undeniable evidence for the Copernican heliocentric model. More importantly, he insisted that nature must be understood through observation and mathematics, not authority and scripture — establishing the scientific method that would fuel every subsequent advance in human knowledge. His persecution by the Inquisition became a defining symbol of the conflict between free inquiry and dogma, and his vindication a triumph for science itself.",
    timeline: [
      {
        year: 1609,
        title: "Improved Telescope",
        description:
          "Built an improved telescope with 20x magnification and turned it toward the heavens.",
      },
      {
        year: 1610,
        title: "Jupiter's Moons Discovered",
        description:
          "Discovered four moons of Jupiter, proving not everything orbited the Earth.",
      },
      {
        year: 1632,
        title: "Dialogue Published",
        description:
          "Published 'Dialogue Concerning the Two Chief World Systems,' defending heliocentrism.",
      },
      {
        year: 1633,
        title: "Trial by Inquisition",
        description:
          "Found guilty of heresy for supporting heliocentrism, placed under house arrest for life.",
      },
    ],
    quotes: [
      {
        text: "And yet it moves.",
        source: "Attributed, after recanting heliocentrism before the Inquisition, 1633",
      },
      {
        text: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.",
      },
      {
        text: "Mathematics is the language in which God has written the universe.",
      },
    ],
    contributions: [
      {
        title: "Telescopic Astronomy (1609)",
        description:
          "Pioneered the use of the telescope for astronomical observation, revealing the true nature of the cosmos.",
      },
      {
        title: "Discovery of Jupiter's Moons (1610)",
        description:
          "Found four moons orbiting Jupiter, proving that not all celestial bodies orbit the Earth.",
      },
      {
        title: "Scientific Method",
        description:
          "Championed observation and experiment over authority, laying the foundation for modern science.",
      },
    ],
    impactMetrics: [
      { label: "Jupiter Moons Discovered", value: "4" },
      { label: "Telescope Magnification", value: "20x" },
    ],
    impactScore: 93,
  },
  {
    slug: "martin-luther-king",
    name: "Martin Luther King Jr.",
    title: "Leader of the American Civil Rights Movement",
    born: "1929-01-15",
    died: "1968-04-04",
    birthPlace: "Atlanta, Georgia",
    category: "civil-rights",
    tags: ["civil rights", "nonviolence", "equality", "justice"],
    portraitImage: "/images/honorees/martin-luther-king.jpg",
    summary:
      "Martin Luther King Jr. led the American civil rights movement through nonviolent resistance, helping end legal segregation and inspiring human rights movements worldwide. His 'I Have a Dream' speech remains one of history's most powerful calls for equality.",
    impactStatement:
      "Martin Luther King Jr. transformed the United States and inspired the world. Through nonviolent protest, moral courage, and extraordinary oratory, he led the movement that dismantled legal segregation in America, resulting in the Civil Rights Act of 1964 and the Voting Rights Act of 1965 — laws that fundamentally changed American society. His philosophy of nonviolent resistance, drawn from Gandhi and the Christian tradition, provided a moral framework adopted by liberation movements across the globe. His dream of a nation judged by character rather than color continues to challenge and inspire humanity to build a more just world.",
    timeline: [
      {
        year: 1955,
        title: "Montgomery Bus Boycott",
        description:
          "Led the 381-day Montgomery Bus Boycott after Rosa Parks' arrest, ending bus segregation.",
      },
      {
        year: 1963,
        title: "I Have a Dream",
        description:
          "Delivered the iconic 'I Have a Dream' speech to 250,000 people at the March on Washington.",
      },
      {
        year: 1964,
        title: "Nobel Peace Prize",
        description:
          "Awarded the Nobel Peace Prize at age 35, the youngest recipient at that time.",
      },
      {
        year: 1964,
        title: "Civil Rights Act",
        description:
          "The Civil Rights Act of 1964 was signed, outlawing discrimination based on race, color, religion, sex, or national origin.",
      },
    ],
    quotes: [
      {
        text: "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.",
        source: "March on Washington, 1963",
      },
      {
        text: "Injustice anywhere is a threat to justice everywhere.",
        source: "Letter from Birmingham Jail, 1963",
      },
      {
        text: "The arc of the moral universe is long, but it bends toward justice.",
      },
    ],
    contributions: [
      {
        title: "Montgomery Bus Boycott (1955)",
        description:
          "Led the successful boycott that ended racial segregation on public transit and launched the civil rights movement.",
      },
      {
        title: "Civil Rights Act of 1964",
        description:
          "His leadership was instrumental in passing the law that outlawed racial discrimination in public life.",
      },
      {
        title: "Nonviolent Resistance Philosophy",
        description:
          "Demonstrated that nonviolent moral protest can defeat institutionalized injustice, inspiring movements worldwide.",
      },
    ],
    impactMetrics: [
      { label: "March on Washington Crowd", value: "250,000" },
      { label: "Nobel Peace Prize Age", value: "35" },
    ],
    impactScore: 97,
  },
  {
    slug: "nelson-mandela",
    name: "Nelson Mandela",
    title: "Anti-Apartheid Revolutionary & President of South Africa",
    born: "1918-07-18",
    died: "2013-12-05",
    birthPlace: "Mvezo, Union of South Africa",
    category: "civil-rights",
    tags: ["anti-apartheid", "democracy", "reconciliation", "leadership"],
    portraitImage: "/images/honorees/nelson-mandela.jpg",
    summary:
      "Nelson Mandela spent 27 years in prison for fighting apartheid, then emerged to lead South Africa's peaceful transition to democracy and become its first Black president. His choice of reconciliation over revenge changed the course of a nation.",
    impactStatement:
      "Nelson Mandela's life is one of the most extraordinary stories of the 20th century. Imprisoned for 27 years for opposing apartheid, he emerged without bitterness to negotiate the peaceful end of racial segregation in South Africa. As president, he chose reconciliation over retribution, establishing the Truth and Reconciliation Commission and preventing the civil war that many predicted. He proved that a society divided by decades of institutionalized racism could transition to democracy peacefully. Mandela demonstrated that moral authority, forgiveness, and an unwavering commitment to justice can overcome systems of oppression that seem immovable. His legacy inspired democratic movements across the world.",
    timeline: [
      {
        year: 1944,
        title: "Joined the ANC",
        description:
          "Joined the African National Congress and co-founded its Youth League to fight apartheid.",
      },
      {
        year: 1964,
        title: "Imprisoned",
        description:
          "Sentenced to life imprisonment for sabotage, beginning 27 years behind bars.",
      },
      {
        year: 1990,
        title: "Released from Prison",
        description:
          "Released from Victor Verster Prison after 27 years, to worldwide celebration.",
      },
      {
        year: 1993,
        title: "Nobel Peace Prize",
        description:
          "Awarded the Nobel Peace Prize jointly with F.W. de Klerk for dismantling apartheid.",
      },
      {
        year: 1994,
        title: "President of South Africa",
        description:
          "Elected as South Africa's first Black president in the country's first fully democratic election.",
      },
    ],
    quotes: [
      {
        text: "It always seems impossible until it's done.",
      },
      {
        text: "Education is the most powerful weapon which you can use to change the world.",
      },
      {
        text: "No one is born hating another person because of the color of his skin. People must learn to hate, and if they can learn to hate, they can be taught to love.",
        source: "Long Walk to Freedom, 1995",
      },
    ],
    contributions: [
      {
        title: "End of Apartheid",
        description:
          "His lifelong struggle was instrumental in ending South Africa's system of institutionalized racial segregation.",
      },
      {
        title: "Peaceful Democratic Transition (1994)",
        description:
          "Led South Africa's peaceful transition from apartheid to democracy, avoiding the civil war many feared.",
      },
      {
        title: "Truth and Reconciliation Commission",
        description:
          "Established a model for post-conflict justice that chose healing over vengeance, adopted worldwide.",
      },
    ],
    impactMetrics: [
      { label: "Years Imprisoned", value: "27" },
      { label: "First Democratic Election", value: "1994" },
    ],
    impactScore: 96,
  },
  {
    slug: "leonardo-da-vinci",
    name: "Leonardo da Vinci",
    title: "The Universal Genius",
    born: "1452-04-15",
    died: "1519-05-02",
    birthPlace: "Vinci, Republic of Florence",
    category: "arts",
    tags: ["art", "engineering", "anatomy", "invention"],
    portraitImage: "/images/honorees/leonardo-da-vinci.jpg",
    summary:
      "Leonardo da Vinci was the quintessential Renaissance genius — painter, sculptor, architect, engineer, anatomist, and inventor. His art defined beauty, his notebooks anticipated centuries of science, and his mind remains the gold standard for human creativity.",
    impactStatement:
      "Leonardo da Vinci embodies the limitless potential of the human mind. The Mona Lisa and The Last Supper are among the most recognized artworks in history, defining Western art. But his genius extended far beyond painting — his notebooks contain designs for flying machines, armored vehicles, solar power, and hydraulic engineering, centuries before they were realized. His anatomical studies, based on dissecting over 30 human bodies, were more accurate than any before the 20th century. Leonardo proved that art and science are not opposites but complementary expressions of the same curiosity about the world. He is the original model for the term 'Renaissance man.'",
    timeline: [
      {
        year: 1482,
        title: "Moved to Milan",
        description:
          "Entered the service of Ludovico Sforza, beginning his most productive period as artist and engineer.",
      },
      {
        year: 1495,
        title: "The Last Supper",
        description:
          "Began painting The Last Supper in Milan, one of the most reproduced religious paintings in history.",
      },
      {
        year: 1503,
        title: "Mona Lisa",
        description:
          "Began painting the Mona Lisa, which would become the most famous painting in the world.",
      },
      {
        year: 1510,
        title: "Anatomical Studies",
        description:
          "Produced detailed anatomical drawings from human dissections, far ahead of contemporary medical knowledge.",
      },
    ],
    quotes: [
      {
        text: "Learning never exhausts the mind.",
      },
      {
        text: "Simplicity is the ultimate sophistication.",
      },
      {
        text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply. Being willing is not enough; we must do.",
      },
    ],
    contributions: [
      {
        title: "Mona Lisa (c. 1503)",
        description:
          "Painted the world's most famous artwork, pioneering sfumato technique and psychological portraiture.",
      },
      {
        title: "The Last Supper (1495)",
        description:
          "Created one of the most influential religious paintings, revolutionizing composition and narrative in art.",
      },
      {
        title: "Scientific Notebooks",
        description:
          "Filled over 7,000 pages with designs for flying machines, anatomy, engineering, and optics — centuries ahead of their time.",
      },
      {
        title: "Anatomical Studies",
        description:
          "Produced the most accurate human anatomical drawings until the 20th century through rigorous dissection.",
      },
    ],
    impactMetrics: [
      { label: "Notebook Pages", value: "7,000+" },
      { label: "Inventions Sketched", value: "200+" },
    ],
    impactScore: 96,
  },
  {
    slug: "neil-armstrong",
    name: "Neil Armstrong",
    title: "First Human to Walk on the Moon",
    born: "1930-08-05",
    died: "2012-08-25",
    birthPlace: "Wapakoneta, Ohio",
    category: "exploration",
    tags: ["space", "moon landing", "NASA", "aviation"],
    portraitImage: "/images/honorees/neil-armstrong.jpg",
    summary:
      "Neil Armstrong became the first human to set foot on the Moon on July 20, 1969, uttering the immortal words: 'That's one small step for man, one giant leap for mankind.' His achievement remains humanity's greatest exploration milestone.",
    impactStatement:
      "Neil Armstrong's first step on the Moon was the culmination of humanity's oldest dream — to reach beyond our world. The Apollo 11 mission, watched by 600 million people worldwide, proved that human beings could travel to another celestial body and return safely. Beyond the technical achievement, the Moon landing unified humanity in a way few events ever have, transcending borders, politics, and conflict for one shared moment of wonder. It accelerated satellite technology, materials science, computing, and inspired generations of scientists and engineers. Armstrong's quiet courage and humility in the face of the greatest adventure in human history made him the perfect representative of our species on another world.",
    timeline: [
      {
        year: 1962,
        title: "Selected as Astronaut",
        description:
          "Selected by NASA as part of the second group of astronauts, beginning his journey to the Moon.",
      },
      {
        year: 1966,
        title: "Gemini 8 Mission",
        description:
          "Commanded Gemini 8, performing the first successful docking of two spacecraft in orbit.",
      },
      {
        year: 1969,
        title: "First Moon Walk",
        description:
          "Became the first human to walk on the Moon during Apollo 11, spending 2.5 hours on the lunar surface.",
      },
      {
        year: 1969,
        title: "Presidential Medal of Freedom",
        description:
          "Awarded the Presidential Medal of Freedom by President Nixon upon return from the Moon.",
      },
    ],
    quotes: [
      {
        text: "That's one small step for man, one giant leap for mankind.",
        source: "First words on the Moon, July 20, 1969",
      },
      {
        text: "Mystery creates wonder and wonder is the basis of man's desire to understand.",
      },
      {
        text: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
      },
    ],
    contributions: [
      {
        title: "First Moon Walk (1969)",
        description:
          "Became the first human to set foot on another world, proving interplanetary travel is possible.",
      },
      {
        title: "Gemini 8 Docking (1966)",
        description:
          "Performed the first successful orbital docking, a critical technique for all future space missions.",
      },
      {
        title: "Inspiring Space Exploration",
        description:
          "His achievement inspired generations of scientists, engineers, and astronauts to push the boundaries of exploration.",
      },
    ],
    impactMetrics: [
      { label: "People Who Watched Live", value: "600 million" },
      { label: "Moon Rocks Collected", value: "47.5 lbs" },
      { label: "Time on Moon Surface", value: "2.5 hours" },
    ],
    impactScore: 97,
  },
  {
    slug: "amelia-earhart",
    name: "Amelia Earhart",
    title: "Pioneer of Aviation & Women's Rights",
    born: "1897-07-24",
    died: "1937-07-02",
    birthPlace: "Atchison, Kansas",
    category: "exploration",
    tags: ["aviation", "women's rights", "transatlantic", "pioneer"],
    portraitImage: "/images/honorees/amelia-earhart.jpg",
    summary:
      "Amelia Earhart was the first woman to fly solo across the Atlantic Ocean, set numerous aviation records, and became a symbol of courage and women's empowerment. Her disappearance during a circumnavigation attempt remains one of history's great mysteries.",
    impactStatement:
      "Amelia Earhart shattered barriers in both aviation and gender equality. As the first woman to fly solo across the Atlantic in 1932, she proved that women could match any feat of courage and skill. She set seven aviation records, helped found The Ninety-Nines (an organization of female pilots), and used her fame to advocate for women's rights and equal opportunity. Her daring flights inspired millions of women to pursue careers in aviation, science, and engineering. Even her mysterious disappearance over the Pacific in 1937 cemented her legend, ensuring her story would continue to inspire generations of women to reach for the impossible.",
    timeline: [
      {
        year: 1928,
        title: "First Woman Across the Atlantic",
        description:
          "Became the first woman to fly across the Atlantic Ocean (as a passenger), gaining international fame.",
      },
      {
        year: 1929,
        title: "The Ninety-Nines Founded",
        description:
          "Helped found The Ninety-Nines, an international organization of women pilots, serving as its first president.",
      },
      {
        year: 1932,
        title: "Solo Atlantic Crossing",
        description:
          "Became the first woman to fly solo across the Atlantic, landing in Northern Ireland after 14 hours and 56 minutes.",
      },
      {
        year: 1935,
        title: "Solo Pacific Crossing",
        description:
          "First person to fly solo from Hawaii to the US mainland, covering 2,408 miles over the Pacific.",
      },
      {
        year: 1937,
        title: "Final Flight",
        description:
          "Disappeared over the Pacific Ocean during an attempt to circumnavigate the globe at the equator.",
      },
    ],
    quotes: [
      {
        text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
      },
      {
        text: "Adventure is worthwhile in itself.",
      },
      {
        text: "Women must try to do things as men have tried. When they fail, their failure must be but a challenge to others.",
      },
    ],
    contributions: [
      {
        title: "Solo Atlantic Flight (1932)",
        description:
          "First woman to fly solo across the Atlantic, proving women's capability in aviation.",
      },
      {
        title: "Aviation Records",
        description:
          "Set seven aviation records for speed and distance, pushing the boundaries of what was possible in flight.",
      },
      {
        title: "Women in Aviation",
        description:
          "Co-founded The Ninety-Nines and inspired generations of women to pursue careers in aviation and STEM.",
      },
    ],
    impactMetrics: [
      { label: "Aviation Records Set", value: "7" },
      { label: "Atlantic Solo Crossing", value: "1932" },
    ],
    impactScore: 88,
  },
  {
    slug: "ibn-battuta",
    name: "Ibn Battuta",
    title: "The Greatest Traveler of the Medieval World",
    born: "1304-02-25",
    died: "1369",
    birthPlace: "Tangier, Marinid Sultanate (modern-day Morocco)",
    category: "exploration",
    tags: ["medieval travel", "Islamic world", "geography", "cultural exchange"],
    portraitImage: "/images/honorees/ibn-battuta.jpg",
    summary:
      "Ibn Battuta traveled over 75,000 miles across the known world over 29 years, visiting 44 modern countries. His journey, documented in the Rihla, remains the most extensive pre-modern travel account ever recorded.",
    impactStatement:
      "Ibn Battuta's 29-year journey across the medieval world was the greatest feat of exploration before the Age of Discovery. Starting from Tangier in 1325, he traveled through North Africa, the Middle East, East Africa, Central Asia, India, Southeast Asia, and China — covering more than 75,000 miles, three times more than Marco Polo. His detailed account, the Rihla, provides an irreplaceable record of 14th-century civilizations, trade networks, and cultural practices across the Islamic world and beyond. He documented legal systems, customs, architecture, and the lives of ordinary people in ways that no other source captures. Ibn Battuta proved that the medieval Islamic world was deeply interconnected and cosmopolitan.",
    timeline: [
      {
        year: 1325,
        title: "Journey Begins",
        description:
          "Left Tangier at age 21 for the Hajj pilgrimage to Mecca, beginning a journey that would last 29 years.",
      },
      {
        year: 1330,
        title: "East Africa",
        description:
          "Traveled down the East African coast, visiting Mogadishu, Mombasa, and Kilwa.",
      },
      {
        year: 1334,
        title: "India",
        description:
          "Arrived in Delhi and was appointed a judge by Sultan Muhammad bin Tughluq, serving for 8 years.",
      },
      {
        year: 1345,
        title: "China",
        description:
          "Reached China, visiting Quanzhou and Beijing, documenting Chinese civilization for the Islamic world.",
      },
      {
        year: 1354,
        title: "The Rihla",
        description:
          "Dictated his travel account, the Rihla, to Ibn Juzayy at the court of the Marinid Sultan.",
      },
    ],
    quotes: [
      {
        text: "Traveling — it leaves you speechless, then turns you into a storyteller.",
      },
      {
        text: "I set out alone, having neither a fellow-traveler in whose company I might find cheer, nor a caravan whose party I might join.",
        source: "The Rihla, 1354",
      },
    ],
    contributions: [
      {
        title: "75,000-Mile Journey (1325-1354)",
        description:
          "Traveled across 44 modern countries over 29 years, the most extensive pre-modern journey ever documented.",
      },
      {
        title: "The Rihla",
        description:
          "Dictated the most comprehensive travel account of the medieval world, an invaluable historical source.",
      },
      {
        title: "Cultural Documentation",
        description:
          "Recorded the customs, laws, and daily life of dozens of civilizations, preserving knowledge that would otherwise be lost.",
      },
    ],
    impactMetrics: [
      { label: "Miles Traveled", value: "75,000" },
      { label: "Countries Visited", value: "44" },
      { label: "Years Traveling", value: "29" },
    ],
    impactScore: 91,
  },
];
