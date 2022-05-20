const words = [
  'Armour',
  'Barrymore',
  'Cabot',
  'Catholicism',
  'Chihuahua',
  'Christianity',
  'Easter',
  'Frenchman',
  'Lowry',
  'Mayer',
  'Orientalism',
  'Pharaoh',
  'Pueblo',
  'Pullman',
  'Rodeo',
  'Saturday',
  'Sister',
  'Snead',
  'Syrah',
  'Tuesday',
  'Woodward',
  'abbey',
  'absence',
  'absorption',
  'abstinence',
  'absurdity',
  'abundance',
  'acceptance',
  'accessibility',
  'accommodation',
  'accomplice',
  'accountability',
  'accounting',
  'accreditation',
  'accuracy',
  'acquiescence',
  'acreage',
  'actress',
  'actuality',
  'adage',
  'adaptation',
  'adherence',
  'adjustment',
  'adoption',
  'adultery',
  'advancement',
  'advert',
  'advertisement',
  'advertising',
  'advice',
  'aesthetics',
  'affinity',
  'aggression',
  'agriculture',
  'aircraft',
  'airtime',
  'allegation',
  'allegiance',
  'allegory',
  'allergy',
  'allies',
  'alligator',
  'allocation',
  'allotment',
  'altercation',
  'ambulance',
  'ammonia',
  'anatomy',
  'anemia',
  'ankle',
  'announcement',
  'annoyance',
  'annuity',
  'anomaly',
  'anthropology',
  'anxiety',
  'apartheid',
  'apologise',
  'apostle',
  'apparatus',
  'appeasement',
  'appellation',
  'appendix',
  'applause',
  'appointment',
  'appraisal',
  'archery',
  'archipelago',
  'architecture',
  'ardor',
  'arrears',
  'arrow',
  'artisan',
  'artistry',
  'ascent',
  'assembly',
  'assignment',
  'association',
  'asthma',
  'atheism',
  'attacker',
  'attraction',
  'attractiveness',
  'auspices',
  'authority',
  'avarice',
  'aversion',
  'aviation',
  'babbling',
  'backlash',
  'baker',
  'ballet',
  'balls',
  'banjo',
  'baron',
  'barrier',
  'barrister',
  'bases',
  'basin',
  'basis',
  'battery',
  'battling',
  'bedtime',
  'beginner',
  'begun',
  'bending',
  'bicycle',
  'billing',
  'bingo',
  'biography',
  'biology',
  'birthplace',
  'blackberry',
  'blather',
  'blossom',
  'boardroom',
  'boasting',
  'bodyguard',
  'boldness',
  'bomber',
  'bondage',
  'bonding',
  'bones',
  'bonus',
  'bookmark',
  'boomer',
  'booty',
  'bounds',
  'bowling',
  'brainstorming',
  'breadth',
  'breaker',
  'brewer',
  'brightness',
  'broccoli',
  'broth',
  'brotherhood',
  'browsing',
  'brunch',
  'brunt',
  'building',
  'bullion',
  'bureaucracy',
  'burglary',
  'buyout',
  'by-election',
  'cabal',
  'cabbage',
  'calamity',
  'campaign',
  'canonization',
  'captaincy',
  'carcass',
  'carrier',
  'cartridge',
  'cassette',
  'catfish',
  'caught',
  'celebrity',
  'cemetery',
  'certainty',
  'certification',
  'charade',
  'chasm',
  'check-in',
  'cheerleader',
  'cheesecake',
  'chemotherapy',
  'chili',
  'china',
  'chivalry',
  'cholera',
  'cilantro',
  'circus',
  'civilisation',
  'civility',
  'clearance',
  'clearing',
  'clerk',
  'climber',
  'closeness',
  'clothing',
  'clutches',
  'coaster',
  'coconut',
  'coding',
  'collaborator',
  'colleague',
  'college',
  'collision',
  'colors',
  'combustion',
  'comedian',
  'comer',
  'commander',
  'commemoration',
  'commenter',
  'commissioner',
  'commune',
  'competition',
  'completeness',
  'complexity',
  'computing',
  'comrade',
  'concur',
  'condominium',
  'conduit',
  'confidant',
  'configuration',
  'confiscation',
  'conflagration',
  'conflict',
  'consist',
  'consistency',
  'consolidation',
  'conspiracy',
  'constable',
  'consul',
  'consultancy',
  'contentment',
  'contents',
  'contractor',
  'conversation',
  'cornerstone',
  'corpus',
  'correlation',
  'councilman',
  'counselor',
  'countdown',
  'countryman',
  'coverage',
  'covering',
  'coyote',
  'cracker',
  'creator',
  'criminality',
  'crocodile',
  'cropping',
  'cross-examination',
  'crossover',
  'crossroads',
  'culprit',
  'cumin',
  'curator',
  'curfew',
  'cursor',
  'custard',
  'cutter',
  'cyclist',
  'cyclone',
  'cylinder',
  'cynicism',
  'daddy',
  'damsel',
  'darkness',
  'dawning',
  'daybreak',
  'dealing',
  'dedication',
  'deduction',
  'defection',
  'deference',
  'deficiency',
  'definition',
  'deflation',
  'degeneration',
  'delegation',
  'delicacy',
  'delirium',
  'deliverance',
  'demeanor',
  'demon',
  'demonstration',
  'denomination',
  'dentist',
  'departure',
  'depletion',
  'depression',
  'designation',
  'despotism',
  'detention',
  'developer',
  'devolution',
  'dexterity',
  'diagnosis',
  'dialect',
  'differentiation',
  'digger',
  'digress',
  'dioxide',
  'diploma',
  'disability',
  'disarmament',
  'discord',
  'discovery',
  'dishonesty',
  'dismissal',
  'disobedience',
  'dispatcher',
  'disservice',
  'distribution',
  'distributor',
  'diver',
  'diversity',
  'docking',
  'dollar',
  'dominance',
  'domination',
  'dominion',
  'donkey',
  'doorstep',
  'doorway',
  'dossier',
  'downside',
  'drafting',
  'drank',
  'drilling',
  'driver',
  'drumming',
  'drunkenness',
  'duchess',
  'ducking',
  'dugout',
  'dumps',
  'dwelling',
  'dynamics',
  'eagerness',
  'earnestness',
  'earnings',
  'eater',
  'editor',
  'effectiveness',
  'electricity',
  'elements',
  'eloquence',
  'emancipation',
  'embodiment',
  'embroidery',
  'emperor',
  'employment',
  'encampment',
  'enclosure',
  'encouragement',
  'endangerment',
  'enlightenment',
  'enthusiasm',
  'environment',
  'environs',
  'envoy',
  'epilepsy',
  'equation',
  'equator',
  'error',
  'espionage',
  'estimation',
  'evacuation',
  'exaggeration',
  'examination',
  'exclamation',
  'expediency',
  'exploitation',
  'extinction',
  'eyewitness',
  'falls',
  'fascism',
  'fastball',
  'feces',
  'feedback',
  'ferocity',
  'fertilization',
  'fetish',
  'finale',
  'firing',
  'fixing',
  'flashing',
  'flask',
  'flora',
  'fluke',
  'folklore',
  'follower',
  'foothold',
  'footing',
  'forefinger',
  'forefront',
  'forgiveness',
  'formality',
  'formation',
  'formula',
  'foyer',
  'fragmentation',
  'framework',
  'fraud',
  'freestyle',
  'frequency',
  'friendliness',
  'fries',
  'frigate',
  'fulfillment',
  'function',
  'functionality',
  'fundraiser',
  'fusion',
  'futility',
  'gallantry',
  'gallery',
  'genesis',
  'genitals',
  'girlfriend',
  'glamour',
  'glitter',
  'glucose',
  'google',
  'grandeur',
  'grappling',
  'greens',
  'gridlock',
  'grocer',
  'groundwork',
  'grouping',
  'gunman',
  'gusto',
  'habitation',
  'hacker',
  'hallway',
  'hamburger',
  'hammock',
  'handling',
  'hands',
  'handshake',
  'happiness',
  'hardship',
  'headcount',
  'header',
  'headquarters',
  'heads',
  'headset',
  'hearth',
  'hearts',
  'heath',
  'hegemony',
  'height',
  'hello',
  'helper',
  'helping',
  'helplessness',
  'hierarchy',
  'hoarding',
  'hockey',
  'homeland',
  'homer',
  'honesty',
  'horror',
  'horseman',
  'hostility',
  'housing',
  'humility',
  'hurricane',
  'iceberg',
  'ignition',
  'illness',
  'illustration',
  'illustrator',
  'immunity',
  'immunization',
  'imperialism',
  'imprisonment',
  'inaccuracy',
  'inaction',
  'inactivity',
  'inauguration',
  'indecency',
  'indicator',
  'inevitability',
  'infamy',
  'infiltration',
  'influx',
  'iniquity',
  'innocence',
  'innovation',
  'insanity',
  'inspiration',
  'instruction',
  'instructor',
  'insurer',
  'interact',
  'intercession',
  'intercourse',
  'intermission',
  'interpretation',
  'intersection',
  'interval',
  'intolerance',
  'intruder',
  'invasion',
  'investment',
  'involvement',
  'irrigation',
  'iteration',
  'jenny',
  'jogging',
  'jones',
  'joseph',
  'juggernaut',
  'juncture',
  'jurisprudence',
  'juror',
  'kangaroo',
  'kingdom',
  'knocking',
  'laborer',
  'larceny',
  'laurels',
  'layout',
  'leadership',
  'leasing',
  'legislation',
  'leopard',
  'liberation',
  'licence',
  'lifeblood',
  'lifeline',
  'ligament',
  'lighting',
  'likeness',
  'line-up',
  'lineage',
  'liner',
  'lineup',
  'liquidation',
  'listener',
  'literature',
  'litigation',
  'litre',
  'loathing',
  'locality',
  'lodging',
  'logic',
  'longevity',
  'lookout',
  'lordship',
  'lustre',
  "ma'am",
  'machinery',
  'madness',
  'magnificence',
  'mahogany',
  'mailing',
  'mainframe',
  'maintenance',
  'majority',
  'manga',
  'mango',
  'manifesto',
  'mantra',
  'manufacturer',
  'maple',
  'martin',
  'martyrdom',
  'mathematician',
  'matrix',
  'matron',
  'mayhem',
  'mayor',
  'means',
  'meantime',
  'measurement',
  'mechanics',
  'mediator',
  'medics',
  'melodrama',
  'memory',
  'mentality',
  'metaphysics',
  'method',
  'metre',
  'miner',
  'mirth',
  'misconception',
  'misery',
  'mishap',
  'misunderstanding',
  'mobility',
  'molasses',
  'momentum',
  'monarchy',
  'monument',
  'morale',
  'mortality',
  'motto',
  'mouthful',
  'mouthpiece',
  'mover',
  'movie',
  'mowing',
  'murderer',
  'musician',
  'mutation',
  'mythology',
  'narration',
  'narrator',
  'nationality',
  'negligence',
  'neighborhood',
  'neighbour',
  'nervousness',
  'networking',
  'nexus',
  'nightmare',
  'nobility',
  'nobody',
  'noodle',
  'normalcy',
  'notification',
  'nourishment',
  'novella',
  'nucleus',
  'nuisance',
  'nursery',
  'nutrition',
  'nylon',
  'oasis',
  'obscenity',
  'obscurity',
  'observer',
  'offense',
  'onslaught',
  'operation',
  'opportunity',
  'opposition',
  'oracle',
  'orchestra',
  'organisation',
  'organizer',
  'orientation',
  'originality',
  'ounce',
  'outage',
  'outcome',
  'outdoors',
  'outfield',
  'outing',
  'outpost',
  'outset',
  'overseer',
  'owner',
  'oxygen',
  'pairing',
  'panther',
  'paradox',
  'parliament',
  'parsley',
  'parson',
  'passenger',
  'pasta',
  'patchwork',
  'pathos',
  'patriotism',
  'pendulum',
  'penguin',
  'permission',
  'persona',
  'perusal',
  'pessimism',
  'peter',
  'philosopher',
  'phosphorus',
  'phrasing',
  'physique',
  'piles',
  'plateau',
  'playing',
  'plaza',
  'plethora',
  'plurality',
  'pneumonia',
  'pointer',
  'poker',
  'policeman',
  'polling',
  'poster',
  'posterity',
  'posting',
  'postponement',
  'potassium',
  'pottery',
  'poultry',
  'pounding',
  'pragmatism',
  'precedence',
  'precinct',
  'preoccupation',
  'pretense',
  'priesthood',
  'prisoner',
  'privacy',
  'probation',
  'proceeding',
  'proceedings',
  'processing',
  'processor',
  'progression',
  'projection',
  'prominence',
  'propensity',
  'prophecy',
  'prorogation',
  'prospectus',
  'protein',
  'prototype',
  'providence',
  'provider',
  'provocation',
  'proximity',
  'puberty',
  'publicist',
  'publicity',
  'publisher',
  'pundit',
  'putting',
  'quantity',
  'quart',
  'quilting',
  'quorum',
  'racism',
  'radiance',
  'ralph',
  'rancher',
  'ranger',
  'rapidity',
  'rapport',
  'ratification',
  'rationality',
  'reaction',
  'reader',
  'reassurance',
  'rebirth',
  'receptor',
  'recipe',
  'recognition',
  'recourse',
  'recreation',
  'rector',
  'recurrence',
  'redemption',
  'redistribution',
  'redundancy',
  'refinery',
  'reformer',
  'refrigerator',
  'regularity',
  'regulator',
  'reinforcement',
  'reins',
  'reinstatement',
  'relativism',
  'relaxation',
  'rendition',
  'repayment',
  'repentance',
  'repertoire',
  'repository',
  'republic',
  'reputation',
  'resentment',
  'residency',
  'resignation',
  'restaurant',
  'resurgence',
  'retailer',
  'retention',
  'retirement',
  'reviewer',
  'riches',
  'righteousness',
  'roadblock',
  'robber',
  'rocks',
  'rubbing',
  'runoff',
  'saloon',
  'salvation',
  'sarcasm',
  'saucer',
  'savior',
  'scarcity',
  'scenario',
  'scenery',
  'schism',
  'scholarship',
  'schoolboy',
  'schooner',
  'scissors',
  'scolding',
  'scooter',
  'scouring',
  'scrimmage',
  'scrum',
  'seating',
  'sediment',
  'seduction',
  'seeder',
  'seizure',
  'self-confidence',
  'self-control',
  'self-respect',
  'semicolon',
  'semiconductor',
  'semifinal',
  'senator',
  'sending',
  'serenity',
  'seriousness',
  'servitude',
  'sesame',
  'setup',
  'sewing',
  'sharpness',
  'shaving',
  'shoplifting',
  'shopping',
  'siding',
  'simplicity',
  'simulation',
  'sinking',
  'skate',
  'sloth',
  'slugger',
  'snack',
  'snail',
  'snapshot',
  'snark',
  'soccer',
  'solemnity',
  'solicitation',
  'solitude',
  'somewhere',
  'sophistication',
  'sorcery',
  'souvenir',
  'spaghetti',
  'specification',
  'specimen',
  'specs',
  'spectacle',
  'spectre',
  'speculation',
  'sperm',
  'spoiler',
  'squad',
  'squid',
  'staging',
  'stagnation',
  'staircase',
  'stairway',
  'stamina',
  'standpoint',
  'standstill',
  'stanza',
  'statement',
  'stillness',
  'stimulus',
  'stocks',
  'stole',
  'stoppage',
  'storey',
  'storyteller',
  'stylus',
  'subcommittee',
  'subscription',
  'subsidy',
  'suburb',
  'success',
  'sufferer',
  'supposition',
  'suspension',
  'sweater',
  'sweepstakes',
  'swimmer',
  'syndrome',
  'synopsis',
  'syntax',
  'system',
  'tablespoon',
  'taker',
  'tavern',
  'technology',
  'telephony',
  'template',
  'tempo',
  'tendency',
  'tendon',
  'terrier',
  'terror',
  'terry',
  'theater',
  'theology',
  'therapy',
  'thicket',
  'thoroughfare',
  'threshold',
  'thriller',
  'thunderstorm',
  'ticker',
  'tiger',
  'tights',
  'to-day',
  'tossing',
  'touchdown',
  'tourist',
  'tourney',
  'toxicity',
  'tracing',
  'tractor',
  'translation',
  'transmission',
  'transmitter',
  'trauma',
  'traveler',
  'treadmill',
  'trilogy',
  'trout',
  'tuning',
  'twenties',
  'tycoon',
  'tyrant',
  'ultimatum',
  'underdog',
  'underwear',
  'unhappiness',
  'unification',
  'university',
  'uprising',
  'vaccination',
  'validity',
  'vampire',
  'vanguard',
  'variation',
  'vegetation',
  'verification',
  'viability',
  'vicinity',
  'victory',
  'viewpoint',
  'villa',
  'vindication',
  'violation',
  'vista',
  'vocalist',
  'vogue',
  'volcano',
  'voltage',
  'vomiting',
  'vulnerability',
  'waistcoat',
  'waitress',
  'wardrobe',
  'warmth',
  'watchdog',
  'wealth',
  'weariness',
  'whereabouts',
  'whisky',
  'whiteness',
  'widget',
  'width',
  'windfall',
  'wiring',
  'witchcraft',
  'withholding',
  'womanhood',
  'words',
  'workman',
  'youngster',
]

//  trendy words lmao
//  224 words, top 4 searches = 896 words
const words2 = [
  'dope',
  'GOAT',
  'gucci',
  'lit',
  'OMG',
  'salty',
  'sick',
  'fire',
  'snatched',
  'TBH',
  'tea',
  'thirsty',
  'YOLO',
  'bae',
  'basic',
  'BF',
  'GF',
  'BFF',
  'bruh',
  'cap',
  'curve',
  'emo',
  'fam',
  'flex',
  'karen',
  'no cap',
  'noob',
  'roblox',
  'minecraft',
  'fortnite',
  'squad',
  'sus',
  'tight',
  'smash',
  'epic',
  'shook',
  'highkey',
  'mood',
  'clap',
  'bussin',
  'among us',
  'skrt',
  'woke',
  'savage',
  'AF',
  'twerk',
  'turnt',
  'bromance',
  'tyler1',
  'twitch clips',
  'pokimane',
  'xqc',
  'ninja',
  'cringe',
  'dub',
  'L',
  'W',
  'imposter',
  'MrBeast',
  'Disguised Toast',
  'trolled',
  'vlog',
  'kanye west',
  'dude perfect',
  'logan paul',
  'jake paul',
  'lebron',
  'elon musk',
  'tesla',
  'wall street bets',
  'BTS',
  'dream',
  'dunkey',
  'daily dose of internet',
  'netflix and chill',
  'league of legends',
  'pewdiepie',
  'btmc',
  'ludwig',
  'chug jug',
  'boomer',
  'IQ',
  'mark rober',
  'american ninja warrior',
  'SNL',
  'faze',
  'clout',
  'kobe',
  'dogecoin',
  'to the moon',
  'stocks',
  'kpop',
  'jubilee',
  'ben awad',
  'blueface',
  'marques brownlee',
  'linus',
  'louis vuitton',
  'sssniperwolf',
  'purses',
  'fashion',
  'makeup tutorial',
  'david dobrik',
  'day in a life',
  'college',
  'college decision',
  'matt stonie',
  'inside edtion',
  'apology video',
  'apology',
  'food review',
  'james charles',
  'holding myself accounting',
  'kourtney kardashian',
  'miley cyrus',
  'nicki minaj',
  'kloe kardashian',
  'jennifer lopez',
  'kendall jenner',
  'beyonce',
  'kim kardashian',
  'kylie jenner',
  'apple',
  'iphone',
  'samsung galaxy',
  'shorts',
  'donald trump',
  'bernie sanders',
  'first class',
  'unreal engine',
  'nikkietutorials',
  'glam',
  'vogue',
  'every outfit',
  'skin care',
  'amongst us',
  'tiktok imposter',
  'haunted',
  'peppa pig',
  '3 A.M. ghosts',
  'thicc',
  'cooking',
  'baking',
  'anime',
  'memes',
  'funny reaction',
  'epic gamer moments',
  'to catch a predator',
  'amourath',
  'lilpichu',
  'chia',
  'sweet anita',
  'its hafu',
  'xchocobars',
  'dizzykitten',
  '24 hours',
  'instant karma',
  'daddy',
  'mechanical keyboards',
  'osu',
  'reacting to',
  'try not to laugh',
  'try not to cry',
  'try not to cringe',
  'epic fails',
  'bang energy',
  'king copycat',
  'house tour',
  'makeup routine',
  'blush',
  'jealous',
  'before and after',
  'lifting weights',
  'diy',
  'slime',
  'cocomelon',
  'asmr',
  'music',
  'markiplier',
  'jacksepticeye',
  'shane dawson',
  'old town road among us',
  'game of thrones',
  'buzzfeed',
  'sis vs bro',
  'pokemon',
  'projared',
  'ben shapiro',
  'vanossgaming',
  'jenna marbles',
  'viral',
  'duet',
  'blooper',
  'crafting',
  'easycraf',
  'art and craft',
  't-series',
  'pokemon go',
  'joe rogan',
  'watch mojo',
  'cmanflip',
  'cody ko',
  'WWE',
  '3080 ti',
  'Clippers',
  'Lakers',
  'you chillin girl',
  'aoc',
  'happy birthday to this cutie',
  'alexisren',
  'loren gray',
  'yolarobert',
  'scarlett rose leithold',
  'elisha herbert',
  'juliana herz',
  'ootd',
  'tiktok cringe',
  'vampire',
  'valorant',
  'simp',
  'simping',
  'sushi',
  'urmomashley',
  '$500,000',
  'millionaire',
  'ufc',
  'boxing',
  'drama',
  'tiktok',
  'videogamedunkey',
  'mike tyson',
  'gordon ramsay',
  'kendrick lamar',
  'sis vs bro',
  'nintendo',
  'wwe',
  'peppa pig',
  'avengers',
  'gta 5',
  'minecraft',
  'shane dawson',
  'mr beast',
  'fgteev',
  'ssundee',
  't series',
  'gacha life',
  'Stephen Colbert',
  'flamingo',
  'nightcore',
  'jake paul boxing',
  'youtuber boxing',
  'lazar beam',
  'eminem',
  'post malone',
  'vanossgaming',
  'memes',
  'Jeffree star',
  'cardi b',
  'juice wrld',
  'game of thrones',
  'ESPN',
  'unspeakable',
  'John Oliver',
  'NBA young boy',
  'try not to laugh',
  'blackpink',
  'coryxkenshin',
  'avengers endgame',
  'dude perfect',
  'last week tonight',
  'chad wild clay',
  'donkey',
  'nfl',
  'jre',
  'buzzfeed unsolved',
  'game theory',
  'popularmmos',
  'drake',
  'borderlands 3',
  'Colbert',
  'sml',
  'itsfunneh',
  'undisputed',
  'seth meyers',
  'rachel maddow',
  'prepared',
  'pokemon sword and shield',
  'jeffy',
  'trevor noah',
  'critical role',
  'trisha paytas',
  'blippi',
  'gmm',
  'first take',
  'queen',
  'ryans toy review',
  'tati',
  'funny videos',
  'bad bunny',
  'good mythical morning',
  'people vs food',
  'jinx',
  'buzzfeed multiplayer',
  'travis scott',
  'alec baldwin',
  'simone biles',
  'kim and kanye',
  'forza horizon 5',
  'battlefield 2042',
  'mortal kombat',
  'dune',
  'squid game',
  'tiktok pasta',
  'kim kardashina pete davidson',
  'fc barcelona',
  'real madrid',
  'harry styles',
  'one direction',
  'ryan reynolds',
  'johnny depp',
  'gigachad',
  'viral tiktok products',
  'testing viral tiktok',
  'charli d amelio',
  'khabane lame',
  'bella poarch',
  'addison rae',
  'will smith',
  'zach king',
  'kimberly loaiza',
  'Dixie d amelio',
  'jason resulo',
  'dwayne johnson',
  'michael le',
  'billie eilish',
  'brent rivera',
  'jojo siwa',
  'avani gregg',
  'joe albanese',
  'selena gomez',
  'kylie jenner',
  'james charles',
  'baby ariel',
  'lucas and marcus',
  'wigo fellas',
  'netflix',
  'tiktoks that are funny',
  'hilarious tiktoks',
  'to catch a predator',
  'chris hansen',
  'powerfuljre',
  'penguinz0',
  'israel adesanya',
  'conner mcgregor',
  'cars',
  'muscle cars',
  'carwow',
  'chill songs',
  'justin eng',
  'motivation',
  'epicurious',
  'ethoslab',
  'creator clash',
  'graham stephan',
  'chael sonnen',
  'hells kitchen',
  'the baus',
  'girl with dogs',
  'shorelife mafia',
  'mike tyson boxing',
  'luke damant',
  'bloons tower defence',
  'minecraft music',
  'sean o malley',
  'poppy playtime',
  'scary games',
  'babish culinary universe',
  'classic tetris',
  'boxing highlights',
  'ufc highlights',
  'nick eh 30',
  'kodak black',
  'lyrical lemonade',
  'moneybagg yo',
  'jack harlow',
  'gunna',
  'lil baby',
  'lil uzi vert',
  'chess',
  'learn to code',
  'hilarious reactions',
  'computerphile',
  'doug demuro',
  'vsauce',
  'minecraft parodies',
  'epic fornite dubs',
  'yassuo',
  'topgear',
  'ISAB',
  'bruce lee',
  'russian slapping',
  'ludwig moments',
  'millionaire mansions',
  'pranking scammers',
  'mark rober',
]

module.exports = { words, words2 }
