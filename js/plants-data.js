// Database of medicinal plants
const plantsDatabase = [
    {
        id: 1,
        name: "Genévrier de Phénicie",
        localName: "العرعار",
        scientific: "Juniperus phoenicea",
        family: "Cupressacées",
        usedParts: "Fruit, Feuille, Ecorce",
        properties: "Les baies sont antiseptiques, anti-inflammatoires et digestives, également bénéfiques pour traiter rhumatismes, goutte, arthrite et colique. A des vertus digestives et toniques.",
        image: "images/3ar3ar.jpg",
        categories: ["digestive", "anti-inflammatory"]
    },
    {
        id: 2,
        name: "Marrube blanc",
        localName: "المريوث",
        scientific: "Marrubium vulgare L",
        family: "Labiées (Labiacées)",
        usedParts: "Plante entière",
        properties: "Fébrifuge, apéritive, stomachique, pectoral, antitoxique, antiseptique, tonicardiaque, amaigrissante, diurétique, emménagogue, dépurative du sang et désintoxiquant du foie. Utilisé aussi pour combattre les cellulites et l'obésité.",
        image: "images/meriwet.jpg",
        categories: ["digestive", "anti-inflammatory"]
    },
    {
        id: 3,
        name: "Origan",
        localName: "الزعتر",
        scientific: "Origanum Vulgare",
        family: "Labiées (Labiacées)",
        usedParts: "Sommités fleuries, Feuille, Tige",
        properties: "Action sédative, apéritif, antispasmodique, stomachique, carminative, expectorante, antiseptique, recommandé en cas de manque d'appétit, d'aérophagie, de bronchite chronique, de toux, d'irritation, d'asthme. Action antalgique, parasiticide, utile contre le rhumatisme et la cellulite.",
        image: "images/za3tar.jpg",
        categories: ["respiratory", "digestive"]
    },
    {
        id: 4,
        name: "Menthe verte",
        localName: "النعناع البري",
        scientific: "Mentha viridis L",
        family: "Labiées (Labiacées)",
        usedParts: "Feuille",
        properties: "Stomachique, carminatif, antivomitif, antidiurétique, antispasmodique, tonique, béchique, insecticide.",
        image: "images/na3na3.jpg",
        categories: ["digestive", "respiratory"]
    },
    {
        id: 5,
        name: "Lentisque",
        localName: "الضرو-البطم",
        scientific: "Pistacia lentiscus",
        family: "Anacardiacées",
        usedParts: "Fruit, Feuille",
        properties: "Astringent, expectorant, cicatrisant, très bon pour les maux de l'estomac.",
        image: "images/darw.jpg",
        categories: ["digestive", "respiratory"]
    },
    {
        id: 6,
        name: "Cresson officinal",
        localName: "حب الرشاد",
        scientific: "Lepidium sativum L",
        family: "Brassicaceés (Crucifères)",
        usedParts: "Graine, Feuille, Tige",
        properties: "Apéritive, tonique, minéralisant, antianémique, dépuratif, diurétique, hypoglycémiante, utile en cas d'asthénie, d'anémie, de scorbut, les dermatoses, les bronchites, les calculs biliaires, les affections hépatiques et urinaires. Action cicatrisantes sur les plaies, les abcès, les phlegmons, les anthrax.",
        image: "images/rachad.webp",
        categories: ["anti-inflammatory", "immunity"]
    },
    {
        id: 7,
        name: "Figuier de Barbarie",
        localName: "الهندي البري",
        scientific: "Opuntia ficus-indica",
        family: "Cactacées",
        usedParts: "Fleur, Feuille",
        properties: "Nutritives, astringents, utile pour lutte contre la diarrhée et la dysenterie, les problèmes de prostate et de peau.",
        image: "images/handi brbr.jpg",
        categories: ["digestive", "anti-inflammatory"]
    },
    {
        id: 8,
        name: "Camomille",
        localName: "البابونج-بوملال",
        scientific: "Anthemis nobilis",
        family: "Composées (Astéracées)",
        usedParts: "Fleur, Sommités-fleuries",
        properties: "Action antispasmodique, antalgique, stimulante, vermifuge et bactéricide, utile en cas de migraine, de névralgie, digestion difficile, anémie, dépression nerveuse, fièvre, règle irrégulière.",
        image: "images/babounj.jpg",
        categories: ["digestive", "anti-inflammatory"]
    },
    {
        id: 9,
        name: "Armoise blanche",
        localName: "الشيح",
        scientific: "Artemisia herba alba",
        family: "Composées (Astéracées)",
        usedParts: "Feuille, Sommités-fleuries",
        properties: "Antidiurétique, antispasmodique, emménagogue, règles douloureuses, sédatif nerveux, stomachique, syndromes prémenstruels, puissant vermifuge, étanche la soif, œuvre l'appétit et aussi toléré par les diabétiques. Utile aussi pour aromatiser le cafe.",
        image: "images/chi7.jpg",
        categories: ["digestive", "anti-inflammatory"]
    },
    {
        id: 10,
        name: "Chêne vert",
        localName: "البلوط",
        scientific: "Quercus ilex",
        family: "Fagacées",
        usedParts: "Ecorce",
        properties: "Utilisée pour renforcer les intestins.",
        image: "images/balot.jpg",
        categories: ["digestive"]
    },
    {
        id: 11,
        name: "Orge cultivée",
        localName: "الشعير",
        scientific: "Hordeum vulgare L",
        family: "Graminacées (Poacées)",
        usedParts: "Graine",
        properties: "Émolliente, rafraîchissante, dépurative, hypoglycémiante, digestive, reconstituant général de grande valeur.",
        image: "images/cha3ir.jpg",
        categories: ["digestive", "immunity"]
    },
    {
        id: 12,
        name: "Alfa",
        localName: "الحلفا",
        scientific: "Stipa tenacissima",
        family: "Graminacées (Poacées)",
        usedParts: "Tige",
        properties: "Le décocté des feuilles est recommandé pour soulager les douleurs d'estomac et pour régulariser l'hypertension artérielle.",
        image: "images/alfa.jpg",
        categories: ["digestive"]
    },
    {
        id: 13,
        name: "Blé tendre",
        localName: "القمح",
        scientific: "Triticum vulgare",
        family: "Graminacées (Poacées)",
        usedParts: "Graine",
        properties: "Revitalisant, minéralisant, le blé contient tous les éléments nécessaires pour le fonctionnement de l'organisme, utile en cas d'anémie, d'asthénie, de croissance, de tuberculose, de grossesse, d'allaitement, de constipation. La vitamine E exerce une action protectrice de la paroi des artères et abaisse le taux de cholestérol dans le sang, l'huile de germes de blé intervient dans la prévention de l'athérosclérose et des maladies cardiovasculaires.",
        image: "images/ble.jpg",
        categories: ["immunity", "digestive"]
    },
    {
        id: 14,
        name: "Noyer commun",
        localName: "الجوز",
        scientific: "Juglans regia",
        family: "Juglandacées",
        usedParts: "Fruit, Feuille, Ecorce",
        properties: "Très nutritives, vermifuge, utile en cas de diabète, de scrofule, de tuberculose, de dermatoses, de calculs urinaires. La feuille de noyer a des propriétés tonifiantes, astringentes, hypoglycémiante.",
        image: "images/jouz.jpg",
        categories: ["immunity", "anti-inflammatory"]
    },
    {
        id: 15,
        name: "Lavande",
        localName: "الخزامة",
        scientific: "Lavandula officinalis",
        family: "Labiées (Labiacées)",
        usedParts: "Sommités fleuries",
        properties: "Pectorale, stomachique, antispasmodique, sédatif, anxiété, nervosité, diaphorétique, antirhumatismale chronique, migraine.",
        image: "images/5ozama.jpg",
        categories: ["respiratory", "anti-inflammatory"]
    },
    {
        id: 16,
        name: "Basilic",
        localName: "الحبق",
        scientific: "Ocimum basilicum",
        family: "Labiées (Labiacées)",
        usedParts: "Fleur, Feuille",
        properties: "Carminatives, rafraîchissantes, les feuilles sont stimulantes, excitantes, stomachiques, sternutatoires. Utile en digestion difficile, dyspepsie nerveuse, faiblesse, vertiges, maux de tête.",
        image: "images/7be9.jpg",
        categories: ["digestive", "anti-inflammatory"]
    },
    {
        id: 17,
        name: "Germandrée tomenteuse",
        localName: "الخياطة",
        scientific: "Teucrium polium",
        family: "Labiées (Labiacées)",
        usedParts: "Sommités fleuries",
        properties: "Propriétés anti-stress et antioxydant permettant de lutter contre le vieillissement de la peau, action bénéfique sur la digestion. Utilisée pour parfumer le thé.",
        image: "images/5ayata.jpg",
        categories: ["anti-inflammatory", "digestive"]
    },
    {
        id: 18,
        name: "Laurier noble",
        localName: "الرند",
        scientific: "Laurus nobilis L",
        family: "Lauracées",
        usedParts: "Fruit (Baie), Feuille",
        properties: "Digestif, antiseptique, balsamique, carminative, béchique, stomachique, diurétique. Les feuilles sont utilisées comme condiment à cause de leur arôme agréable.",
        image: "images/rande.jpg",
        categories: ["digestive", "respiratory"]
    },
    {
        id: 19,
        name: "Ail commun",
        localName: "الثوم",
        scientific: "Allium sativum L",
        family: "Liliacées",
        usedParts: "Fruit (Bulbe)",
        properties: "Vermifuge, excitant, expectorant, stimulant, antiseptique, diurétique, hypotenseur, antirhumatismal. Agissant sur la protection des artères et des veines, hypotensive par vasodilatation des vaisseaux sanguins.",
        image: "images/toum.jpeg",
        categories: ["immunity", "anti-inflammatory"]
    },
    {
        id: 20,
        name: "Aloés",
        localName: "الصبار",
        scientific: "Aloe socotrina",
        family: "Liliacées",
        usedParts: "Feuille",
        properties: "Purgative, tonique, emménagogue et peut server à combattre les maux de l'estomac, les céphalées et stimuler l'appétit.",
        image: "images/sabare.jpg",
        categories: ["digestive", "anti-inflammatory"]
    }
];