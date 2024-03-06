-- INSERCION DE DATOS EN CATEGORIA -- 

INSERT INTO `yumyum-database`.`categories`
(`idcategories`,
`name`,
`description`,
`url_img`)
VALUES
(default,
"Tejido a mano",
"Productos tejidos a mano con materiales de alta calidad",
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709222985/r7myakqlpfuznuuqcnoy.jpg"),
(default,
"Aretes",
"Aretes con diversos estilos para que complementes tu personalidad",
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709222985/r7myakqlpfuznuuqcnoy.jpg"),
(default,
"Pulseras",
"Pulseras coloridas, elegantes y sofisticadas",
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709229933/pulseras_gwdnyp.png"),
(default,
"Collares",
"Productos tejidos a mano con materiales de alta calidad",
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1707952546/Collar-Perlas.webp"),
(default,
"Otros accesorios",
"Encuentra muchísimos más productos lindos y divertidos aquí",
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709230009/llavero_kvmqig.jpg");

-- INSERCION DE DATOS EN PRODUCTOS -- 

INSERT INTO `yumyum-database`.`products`
(`idproducts`,
`name`,
`description`,
`amount_stock`,
`price`,
`url_img`,
`categories_idcategories`)
VALUES
(DEFAULT,
"Aretes Gota",
"Broche de seguridad en acero hipoalergenico materia del dije del arete en acrílico",
20,
15000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709230842/aretes-gota_ascz1e.webp",
2),
(DEFAULT,
"Aretes chupeta",
"Broche de seguridad en acero hipoalergenico materia del dije del arete en acrílico",
20,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709230908/aretes-chupeta_af4lfy.webp",
2),
(DEFAULT,
"Aretes chupeta corazon",
"Broche de seguridad en acero hipoalergenico materia del dije del arete en acrílico",
20,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709230947/aretes-corazon_dpqe3i.jpg",
2),
(DEFAULT,
"Aretes Galleta",
"Broche de seguridad en acero hipoalergenico materia del dije del arete en acrílico",
20,
14000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709230985/aretes-galleta_ozfx2y.jpg",
2),
(DEFAULT,
"Aretes osito de gomita",
"Broche de seguridad en acero hipoalergenico materia del dije del arete en acrílico",
20,
16000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231026/aretes-gomita_cfk5we.jpg",
1),
(DEFAULT,
"",
"",
0,
0.0,
"",
2),
(DEFAULT,
"Collar Margarita",
"Collar margaritas en rodio",
20,
20000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231064/collar-margarita_z4fatp.webp",
4),
(DEFAULT,
"Collar flores",
"Collar flores en rodio",
20,
25000.0,
"https://m.media-amazon.com/images/I/616EqSySjCL._AC_SX522_.jpg",
4),
(DEFAULT,
"Porta Carnet Harry Potter",
"Porta Carnet en plastico con colgante en tela",
20,
8000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231173/portacarnet-hp_blrlok.jpg",
5),
(DEFAULT,
"",
"",
0,
0.0,
"",
1),
(DEFAULT,
"Manilla para pareja",
"Manilla tejida para parejas",
20,
5000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231411/manilla-tejida_vtjumd.jpg",
3),
(DEFAULT,
"",
"",
0,
0.0,
"",
1),
(DEFAULT,
"Choker flores",
"Choker hecho a mano",
20,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231726/chocker-florecitas_h2ukpz.webp",
4),
(DEFAULT,
"",
"",
0,
0.0,
"",
1),
(DEFAULT,
"Pulsera neon",
"Manilla o pulsera neon personalizada",
20,
8500.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231583/manilla-neon_brsbaw.jpg",
3),
(DEFAULT,
"Collar corazon",
"Collar en rodio",
20,
20000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709231929/collar-corazon_qwctuw.jpg",
4),
(DEFAULT,
"Bucket hat fresa",
"Tejido en crochet con lana hipoalergenia suave y caliente 50% algodon 50% poliester ",
15,
60000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559279/gorro-fresita_dpvgnd.jpg",
1),
(DEFAULT,
"Bucket hat abeja",
"Tejido en crochet con lana hipoalergenia suave y caliente 50% algodon 50% poliester",
15,
60000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559321/gorro-abejita_evtmb2.jpg",
1),
(DEFAULT,
"Bucket hat vaca",
"Tejido en crochet con lana hipoalergenia suave y caliente 50% algodon 50% poliester",
15,
60000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559349/gorro-vaquita_bp1ga9.jpg",
1),
(DEFAULT,
"Manilla infinito",
"Manilla tejida",
15,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559424/manilla-tejida_znlvob.png",
3),
(DEFAULT,
"Manilla sencilla",
"Manilla tejida",
12,
10000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559473/manilla-tejida-sencilla_veipsu.webp",
3),
(DEFAULT,
"Sujetador gafas",
"Tira en mostacilla, abalorios, pedrerías",
15,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559541/sujetador-gafas_osy8uv.webp",
5),
(DEFAULT,
"Llavero Gato en crochet",
"Tejido en crochet con lana en poliéster suave y delicado ",
15,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559575/llavero-tejido_putecz.webp",
5),
(DEFAULT,
"Llaveros Amigurumi ballena",
"Tejido en crochet con lana en poliéster suave y delicado ",
12,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559608/llavero-tejido-ballena_jm3fov.jpg",
5),
(DEFAULT,
"Laveros Amigurumi aguacate",
"Tejido en crochet con lana en poliester suave y delicado",
12,
12000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709559643/llavero-tejido-aguacate_yzqb59.jpg",
5),
(DEFAULT,
"Bucket hat pollito",
"Tejido en crochet con lana hipoalergenia suave y caliente 50% algodon 50% poliester",
15,
60000.0,
"https://res.cloudinary.com/dvun7eeq1/image/upload/v1709561381/gorro-pollito_ikyblc.jpg",
5);