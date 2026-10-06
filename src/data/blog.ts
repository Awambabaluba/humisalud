import levoitImg from "@/assets/products/levoit-dual-200s.webp";
import philipsImg from "@/assets/products/philips-hu2716-nanocloud.webp";
import xiaomiImg from "@/assets/products/xiaomi-smart-humidifier-2.webp";
import cecotecImg from "@/assets/products/cecotec-pure-aroma-300-yang.webp";
import winixImg from "@/assets/products/winix-l500.webp";
import rowentaImg from "@/assets/products/rowenta-aqua-perfect.webp";
import xiaomiPuri3ProImg from "@/assets/products/xiaomi-purifying-humidifier-3-pro.webp";
import xiaomiPuri3ProLlenadoImg from "@/assets/products/xiaomi-purifying-humidifier-3-pro-llenado.webp";
import xiaomiPuri3ProPantallaImg from "@/assets/products/xiaomi-purifying-humidifier-3-pro-pantalla.webp";

export interface BlogPostImagen {
  src: string;
  alt: string;
  credito?: string;
}

export interface BlogPostAfiliado {
  comercio: string;
  href: string;
}

export interface BlogPost {
  slug: string;
  titulo: string;
  /** Título corto para la etiqueta <title> (SEO) cuando `titulo` es demasiado largo para caber en 60 car. junto al sufijo " — HumiSalud". Si falta, se usa `titulo`. */
  metaTitulo?: string;
  fecha: string;
  resumen: string;
  /** Meta description corta (120-155 car.) cuando `resumen` es demasiado larga. Si falta, se usa `resumen`. */
  metaDescripcion?: string;
  categoria: string;
  contenido: string[];
  /** false mientras es un borrador pendiente de revisión humana — no aparece en /blog, sitemap ni rutas públicas */
  publicado?: boolean;
  imagenPortada?: BlogPostImagen;
  imagenes?: (BlogPostImagen | undefined)[];
  afiliados?: BlogPostAfiliado[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "humedad-ideal-en-casa-2026",
    titulo: "¿Cuánta humedad debería haber en casa? Lo que dicen el RITE y la OMS",
    metaTitulo: "¿Cuál es la humedad ideal en casa? RITE y OMS",
    fecha: "2026-06-08",
    categoria: "Salud",
    resumen:
      "Qué rango de humedad relativa marcan las normativas de referencia y qué pasa cuando te sales de él, por arriba o por abajo, con ejemplos de lo que ocurre en una casa española de verdad.",
    metaDescripcion:
      "Qué rango de humedad relativa recomiendan el RITE y la OMS, y qué pasa si te sales de él por arriba o por abajo, con ejemplos reales.",
    imagenPortada: {
      src: "https://images.unsplash.com/photo-1757967350347-e796a659d30c?auto=format&fit=crop&w=1200&q=80",
      alt: "Condensación en el cristal de una ventana por exceso de humedad en casa",
      credito: "Foto: Unsplash",
    },
    contenido: [
      "Casi nadie revisa la humedad del aire de su casa, y probablemente debería. Todo el mundo tiene termostato, todo el mundo sabe si en el salón hace frío o calor, pero pregúntale a cualquiera cuánta humedad relativa hay en su dormitorio y lo normal es que se quede en blanco. Ese dato que nadie mira explica por qué te despiertas en febrero con la garganta como papel de lija, por qué se te agrieta la piel de los nudillos en cuanto llega el frío o por qué el bebé tose de noche sin tener un triste resfriado.",
      "El Reglamento de Instalaciones Térmicas en los Edificios, el RITE, que es la normativa española que regula estas cosas, sitúa el confort higrotérmico de interiores entre el 40% y el 60% de humedad relativa. No es un capricho de ingeniero. Es el rango en el que el cuerpo se encuentra cómodo, las mucosas no se resecan y, a la vez, ni el moho ni los ácaros tienen dónde agarrarse. Por debajo del 30% empiezan los clásicos del invierno con calefacción: nariz seca, garganta irritada, piel tirante y más electricidad estática de la cuenta cuando tocas el pomo de una puerta. Por encima del 65% el problema cambia de cara pero no de gravedad, porque llegan la condensación en las ventanas, las manchas de humedad en las esquinas y, en cuestión de semanas, un caldo de cultivo perfecto para ácaros y moho.",
      "La Organización Mundial de la Salud lleva años señalando la relación directa entre la humedad de las viviendas y los problemas respiratorios, sobre todo en población infantil y en personas con asma o alergias. No es casualidad que las consultas de pediatría se llenen de toses nocturnas justo cuando arranca la temporada de calefacción. El aire seco irrita las vías respiratorias altas y las deja más vulnerables a unos virus que, para colmo, también aguantan mejor en ambientes secos. Con el aire demasiado húmedo el camino es el contrario y el destino igual de malo. Se dispara la población de ácaros del polvo, uno de los alérgenos domésticos más comunes, que se reproducen de maravilla por encima del 60-65% de humedad.",
      "El dormitorio suele ser la habitación más castigada, y se entiende. Pasamos ahí entre seis y nueve horas seguidas, con la puerta cerrada, sin ventilar y muchas veces con la calefacción puesta toda la noche en invierno. Si encima el radiador es de los antiguos, de esos que caldean rápido pero no añaden ni una gota de humedad al ambiente, te metes en la cama con un 45% de humedad relativa y te despiertas con un 22%. Esa sensación de sequedad en la garganta al levantarte no es cosa tuya. Es literalmente el aire de la habitación deshidratándote mientras duermes, poco a poco, sin que te enteres.",
      "Mucha gente se confunde aquí y da por hecho que la humedad es un asunto de invierno. En verano, con el aire acondicionado a tope, ocurre lo contrario y se acaba en el mismo sitio. Los equipos de A/C deshumidifican el aire como efecto secundario de enfriarlo, así que si vives en una zona ya de por sí seca, buena parte del interior peninsular por ejemplo, puedes plantarte en pleno agosto con una humedad relativa ridículamente baja sin que nadie lo asocie, porque uno está pensando en el calor y no en la sequedad.",
      "Lo curioso es que el cuerpo se acostumbra a la sequedad mucho antes de que sea saludable, de la misma manera que te acostumbras al desorden de una habitación hasta que dejas de verlo. Por eso fiarse de la sensación térmica, o de cómo se respira, no funciona. Cuando notas molestias evidentes llevas semanas o meses por debajo del umbral recomendado.",
      "La única forma fiable de saberlo es medirlo. Un higrómetro cuesta hoy menos que un café con tostada, y muchos humidificadores con app ya lo traen integrado de fábrica.",
      "Y ya que hablamos de medir, si tienes un humidificador con sensor de humedad y modo automático, como el Levoit Dual 200S de la foto de portada, lo que hace es justamente eso, vigilar el porcentaje real del ambiente y ajustar el caudal de vapor para mantenerte dentro del rango saludable sin que tengas que estar pendiente. Es la diferencia entre encender un aparato a ciegas y dejarlo toda la noche a tope, o tener algo que de verdad sabe cuándo parar.",
      "Conviene aclarar una cosa, porque el rango de 40-60% no es una zona donde más sea mejor. Hay quien se entera de que el aire seco es malo y se va al otro extremo, humidificador a máxima potencia todo el día, todos los días. Si no tienes un higrostato que corte automáticamente, lo que consigues es empujar la humedad por encima del 65% sin darte cuenta y encontrarte moho en las esquinas de las ventanas al cabo de un mes. El objetivo es equilibrar, no empapar.",
      "Por eso nos parece tan interesante la tecnología evaporativa, como la del Philips HU2716 NanoCloud. Al funcionar empapando un filtro con un ventilador detrás, el propio sistema se autorregula. Cuanto más seco está el ambiente, más rápido evapora el agua del filtro; cuanto más húmedo, más lento. Pasarse de humedad con un evaporativo bien dimensionado es casi imposible, y eso lo convierte en una opción razonable para quien tiene miedo de hacerlo mal.",
      "Hay gente para la que este equilibrio importa bastante más. Los bebés y las personas mayores, para empezar. También quien arrastra una patología respiratoria de base (asma, EPOC, alergias estacionales fuertes). En todos esos casos, los dos extremos, el seco y el húmedo, traen consecuencias más serias y más rápidas que en un adulto sano. Si en tu casa vive alguien así, llevar un control algo más estricto del rango de humedad no es ningún capricho, sobre todo en el dormitorio donde duerme esa persona.",
      "Para quien quiera ir más allá de comprar un humidificador y ya veremos, lo razonable es calcular antes cuántos litros por hora necesita de verdad la habitación, con sus metros cuadrados, la altura del techo y las horas de uso previstas. No es lo mismo un dormitorio de 12 m² que un salón de 30 con techos altos. Comprar por estética, o por lo que ocupa en la estantería, es el error número uno que vemos repetirse en las reseñas de quien luego se queja de que no nota nada.",
      "Un aparato pensado para 15 m² metido en ese salón de 30 va a estar siempre forzado al máximo sin conseguir nunca el rango de humedad que buscas, y de ahí sale la falsa sensación de que el humidificador no funciona, cuando el problema es de dimensionado y de nada más. Antes de pasar por caja, merece la pena hacer el cálculo con los metros reales del espacio en vez de fiarse de la foto del producto. Si quieres hacerlo bien desde el principio, en nuestra calculadora puedes meter tus metros y te decimos qué caudal necesitas de verdad.",
      "Otro error muy habitual es colocar el humidificador justo al lado de la mesilla de noche, pegado al móvil que está cargando o cerca de un enchufe regletero. El vapor parece inofensivo, pero deja una fina capa de humedad sobre cualquier superficie cercana, y a la larga eso no le sienta bien a los componentes electrónicos. Los propios fabricantes recomiendan dejar al menos medio metro de distancia con cualquier aparato eléctrico, aunque casi nadie lo lee porque viene en la letra pequeña del manual. Y si puedes, colócalo a una altura media, ni a ras de suelo ni encima de un mueble muy alto, para que el vapor se reparta de forma uniforme por la habitación en vez de acumularse en una esquina.",
      "Ya que estamos con mitos, las plantas de interior no son un sustituto real de un humidificador, por mucho que internet esté lleno de listas de plantas que humidifican tu casa. Es cierto que liberan algo de vapor de agua por transpiración. La cantidad es tan pequeña comparada con el volumen de aire de una habitación que el efecto medible sobre la humedad relativa resulta prácticamente insignificante, salvo que llenes la casa de decenas de plantas grandes, lo cual trae su propia lista de problemas de mantenimiento. Ayudan a la vista y al ánimo. No son una solución higrotérmica.",
      "Si vives en un edificio antiguo, sin doble acristalamiento ni aislamiento térmico moderno, la cosa se complica por otro frente. La pérdida de calor es tan alta que la calefacción tiene que trabajar más tiempo y a más potencia para mantener una temperatura agradable, y cuanto más rato está encendida, más se reseca el ambiente de forma acumulativa a lo largo del día. Ahí un humidificador deja de ser un lujo añadido. Es casi una pieza más del sistema de climatización, tan necesaria como el propio radiador para que la casa acabe siendo confortable de verdad y no un sitio caliente y seco.",
      "También nos preguntan a menudo cuánto se tarda en notar la diferencia después de empezar a usar un humidificador. Por lo que cuentan los propios usuarios en las reseñas que hemos revisado para este estudio, la sequedad de garganta y de nariz mejora en pocos días, casi de inmediato. La piel agrietada de las manos y la electricidad estática van más lentas, entre una y dos semanas, porque son efectos acumulados que necesitan su tiempo para revertirse igual que lo necesitaron para aparecer.",
      "Queda un aviso importante, y prefiero decirlo claro. Ventilar la casa cinco o diez minutos al día sigue siendo imprescindible, tengas humidificador o no. El error que vemos repetirse es pensar que, como ya tienes el aparato puesto, ya no hace falta abrir ventanas. Es un planteamiento equivocado. Ventilar renueva el aire, se lleva el CO2 acumulado y los contaminantes del ambiente interior, y eso no lo soluciona ningún humidificador por sí solo. Lo ideal es ventilar un rato corto y luego, con la ventana cerrada, dejar que el humidificador haga su trabajo de mantener el equilibrio el resto del día.",
      "Sobre el gasto eléctrico de tenerlo funcionando varias horas al día durante todo el invierno, las cifras son bastante más modestas de lo que la gente suele imaginar. Un modelo ultrasónico de tamaño medio, encendido unas ocho horas diarias, consume en torno a 15-20 kWh al mes, que al precio actual de la electricidad se traducen en unos pocos euros mensuales, muy por debajo de lo que cuesta tener la calefacción encendida ese mismo tiempo. Lo repetimos a menudo porque mucha gente descarta el humidificador pensando que va a notarlo en la factura, cuando el coste real es prácticamente residual comparado con el beneficio en confort y en los resfriados que la familia se ahorra durante los meses fríos.",
      "Al final nada de esto va de perseguir un número exacto con obsesión de laboratorio. Va de tener una casa donde se respire bien, sin la garganta raspada al despertar y sin la piel tirante en invierno, sin esa condensación pegajosa en los cristales de noviembre. Esta noche, antes de acostarte, no estaría de más echar un vistazo a un higrómetro si tienes uno a mano. Es muy probable que el número que veas explique alguna de esas pequeñas molestias que llevas semanas achacando a cualquier otra cosa menos a la más obvia, que es el aire que respiras dentro de tu propia casa.",
    ],
    imagenes: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: "https://images.unsplash.com/photo-1770219792143-1586d82a7101?auto=format&fit=crop&w=1200&q=80",
        alt: "Higrómetro midiendo el porcentaje de humedad relativa del ambiente",
        credito: "Foto: Unsplash",
      },
      undefined,
      undefined,
      {
        src: philipsImg,
        alt: "Humidificador evaporativo Philips HU2716 con tecnología NanoCloud",
        credito: "Imagen: Philips / Versuni",
      },
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG",
      },
    ],
  },
  {
    slug: "evaporativo-vs-ultrasonico-cual-elegir",
    titulo: "Evaporativo o ultrasónico, la pregunta que más nos hacéis",
    metaTitulo: "Evaporativo vs. ultrasónico: ¿cuál elegir?",
    fecha: "2026-06-15",
    categoria: "Guías",
    resumen:
      "Las dos tecnologías más vendidas resuelven el mismo problema por caminos muy distintos. Contamos la diferencia real, la que no sale en la ficha de marketing, y en qué casos conviene cada una.",
    metaDescripcion:
      "Comparamos evaporativo y ultrasónico sin marketing: diferencias reales de mantenimiento, ruido y consumo, y cuándo conviene elegir cada uno.",
    imagenPortada: {
      src: "https://images.unsplash.com/photo-1501297875943-27f3803b4956?auto=format&fit=crop&w=1200&q=80",
      alt: "Macrofotografía de gotas de agua, ilustrando la diferencia entre vapor y evaporación",
      credito: "Foto: Unsplash",
    },
    contenido: [
      "Semana tras semana, en los comentarios y en los correos que nos llegan, se repite la misma pregunta, ¿evaporativo o ultrasónico?",
      'La respuesta corta es "depende", y se queda corta de verdad. El presupuesto es solo una parte del asunto, y no la más importante. Lo que decide es cómo funciona cada aparato por dentro y qué consecuencias tiene eso en tu salón o en tu dormitorio durante los próximos tres años, no durante el primer mes de uso.',
      "Empecemos por el que más se vende, el ultrasónico. Dentro lleva una membrana piezoeléctrica que vibra a una frecuencia altísima, tan rápido que rompe el agua en gotitas microscópicas y las lanza al aire como una nube de vapor frío. El mecanismo es sencillo, sale barato de fabricar y encima es silencioso por naturaleza. De ahí que domine el mercado de entrada y el de gama media, porque cualquier marca puede sacar un modelo de 25-40 euros que cumple sobradamente en un dormitorio pequeño.",
      "El problema aparece en cuanto usas agua del grifo en una zona de agua dura, que en España es casi toda la mitad sur y buena parte del interior. La membrana no distingue entre moléculas de agua y minerales disueltos, así que expulsa el calcio y el magnesio igual que expulsa el agua, convertidos en un polvo blanco finísimo. Ese polvo se va depositando sobre los muebles y sobre la pantalla de la tele. También en tus propios pulmones, que es lo que de verdad nos preocupa, porque lo estás respirando noche tras noche sin darte cuenta.",
      "La solución de toda la vida es llenarlo con agua destilada o desmineralizada, que elimina casi del todo el problema del polvo blanco. A cambio aparece un coste recurrente, las garrafas, y una tarea más en la lista de cosas que hay que acordarse de hacer. Si vives solo y te organizas bien, no es gran cosa. Si tienes una casa con niños, trabajo y mil cosas más en la cabeza, es justo el tipo de tarea que se acaba olvidando. Y cuando se olvida, vuelve el polvo blanco.",
      "El evaporativo funciona de una manera completamente distinta. El Philips HU2716 NanoCloud de la portada de este artículo lleva un ventilador que empuja el aire a través de un filtro empapado de agua, y es ese paso por el filtro lo que humedece el ambiente, sin atomizar nada ni expulsar minerales. Ese es también el principio del [Xiaomi Mijia Smart Evaporative Pro](/blog/xiaomi-mijia-smart-evaporative-humidifier-pro-espana), el evaporativo más reciente que hemos analizado. El filtro hace de barrera, y la cal y los minerales del agua se quedan retenidos ahí dentro en lugar de salir disparados a la habitación. Puedes llenar el depósito en el grifo sin miedo al polvo blanco, que no es poca ventaja si vives en zona de agua dura y no quieres complicarte la vida.",
      "Hay otra ventaja del evaporativo, bastante menos conocida, que para mí es la más interesante de las dos tecnologías. Se autorregula solo. Cuanto más seco está el ambiente, más rápido se evapora el agua del filtro (pura física, la evaporación acelera cuanto menor es la humedad relativa del aire que pasa por encima), y cuanto más húmedo está, más lento va. En la práctica, pasarse de humedad con un evaporativo resulta casi imposible, porque el propio sistema frena cuando el ambiente ya está suficientemente húmedo, sin higrostato electrónico y sin que tú estés pendiente del aparato.",
      "La contrapartida, porque siempre hay una, es el mantenimiento del filtro. El del Philips, el FY3446, tiene una vida útil recomendada de hasta seis meses, y aunque no resulta caro comparado con lo que cuesta el aparato, es un gasto que se repite y que hay que recordar. Saltarse el cambio sale más caro que perder un poco de eficacia. Un filtro viejo y húmedo durante meses es exactamente el tipo de sitio donde proliferan las bacterias, así que en un evaporativo el mantenimiento deja de ser opcional si quieres que siga siendo la opción higiénica que se supone que es.",
      "Existe una tercera vía para quien quiere algo intermedio sin complicarse con filtros, y la mencionamos de pasada porque no es el tema central de este artículo. Son los modelos con tecnología UV-C, como el Xiaomi Smart Humidifier 2, ultrasónicos en esencia (vaporizan agua) a los que se añade una lámpara ultravioleta interna que, según el fabricante, reduce la carga bacteriana del agua antes de expulsarla. Funciona, pero solo si limpias el depósito con la regularidad que toca. La luz UV-C no es magia que sustituya a la higiene básica.",
      "Entonces, ¿cuál elegir?",
      "Para un dormitorio o la habitación de un bebé, si puedes comprometerte a usar agua destilada o ya tienes un descalcificador en casa, un ultrasónico de gama media-alta con higrostato y modo automático, del estilo del Levoit Dual 200S, es una apuesta segura. Va silencioso, el sensor lo mantiene controlado y no te dará sorpresas de humedad excesiva. Si tu caso es otro, alergias, agua muy dura en tu zona, ninguna gana de acarrear garrafas de agua destilada cada semana, el evaporativo te quita ese problema de encima desde el primer día. Lo pagas acordándote de cambiar el filtro un par de veces al año.",
      "Queda un tercer escenario que no debería ignorarse, el del presupuesto ajustado para una habitación pequeña. Ahí un ultrasónico básico de menos de 30 euros, como el Cecotec Pure Aroma 300 Yang, cumple perfectamente su función siempre que uno sea consciente de sus límites. El depósito es pequeño, no lleva higrostato, y tendrás que usar agua filtrada o destilada si no quieres polvo blanco en los muebles. No es mejor ni peor que las otras opciones, es una herramienta distinta para una necesidad distinta. Pretender que un modelo de 25 euros rinda como uno de 100 es la receta segura para la decepción.",
      'Insistimos siempre en algo que aquí cobra un sentido especial. Las cifras de "99,9% antibacteriano" o "elimina el 99,97% de las bacterias" que aparecen en las cajas de casi todos estos aparatos, sean evaporativos, ultrasónicos o UV-C, salen del propio fabricante y se obtienen en condiciones de laboratorio que rara vez se reproducen en una casa normal, donde hay polvo y hay mascotas y las ventanas se abren. No decimos que sean mentira. Decimos que hay que leerlas como lo que son, un argumento de venta, y no una garantía médica verificada por un tercero independiente.',
      "El ruido es de lo que más nos preguntan para dormitorios. Aquí los ultrasónicos llevan ventaja por diseño, porque no tienen un motor de ventilador moviendo aire de forma continua, y los mejores modelos bajan de los 26-28 decibelios en modo nocturno. La mayoría de las personas ni siquiera lo percibe mientras duerme. Los evaporativos dependen de un ventilador para forzar el paso del aire por el filtro, así que suelen rondar los 33-38 decibelios incluso en su modo más silencioso. Sigue siendo un nivel bajo, aunque perceptible si tienes el sueño ligero o el aparato muy cerca de la cabecera.",
      "El consumo eléctrico también difiere, aunque en ambos casos hablamos de cifras modestas a lo largo de un año. Un ultrasónico típico gasta entre 20 y 30 vatios funcionando de forma continua. Un evaporativo con ventilador se mueve en una franja similar o algo menor, entre 12 y 20 vatios, porque no necesita energía para hacer vibrar ninguna membrana, solo para mover el aire. La diferencia real en la factura a final de año son unos pocos euros, así que no debería ser el factor decisivo de tu elección entre una tecnología y otra.",
      "Donde sí hay una diferencia de peso es en el coste total a tres años, que es el horizonte que recomendamos mirar siempre antes de comprar cualquier humidificador. Un ultrasónico bien cuidado apenas tiene gastos recurrentes más allá del agua destilada, si es que la usas, unos 15-20 euros al año en garrafas para quien no tenga ya un sistema de ósmosis en casa. El evaporativo, en cambio, pide filtro nuevo una o dos veces al año, y en el caso del Philips ese filtro cuesta en torno a 25-30 euros la unidad. En tres años eso puede irse a entre 75 y 150 euros solo en recambios, una cifra que conviene tener en la cabeza antes de ponerse a comparar precios de compra inicial.",
      'Aunque el filtro retenga la mayoría de los minerales, si usas agua del grifo de forma prolongada la cal se le va acumulando en la superficie con los meses y pierde algo de eficacia de evaporación. Es una razón más para no alargar su vida útil más allá de lo que recomienda el fabricante, aunque visualmente parezca que sigue funcionando igual. Un filtro saturado de cal evapora peor y, además, la suciedad se agarra a él con más facilidad. Apurarlo "para ahorrar" suele salir caro por el otro lado, en higiene y en rendimiento real.',
      "En tamaño y presencia física, el evaporativo suele ganar, y aquí ganar es un inconveniente, porque necesita más espacio interno para alojar el filtro y el ventilador. Si tu mesilla de noche o tu estantería son pequeñas, puede que un ultrasónico compacto encaje mejor en el hueco disponible. No es una diferencia enorme. En habitaciones pequeñas, donde cada centímetro de superficie libre cuenta, sí puede inclinar la balanza a favor del modelo más discreto.",
      "Si tuviéramos que resumir todo esto en una recomendación rápida para quien tiene prisa, iría así.",
      "Para un dormitorio o un [cuarto de bebé](/blog/humidificador-para-bebe-vapor-frio-caliente-donde-poner), con el silencio por delante y disposición a comprar agua destilada, ultrasónico con higrostato.",
      "Si hay alergias en casa, o el agua de tu zona es muy dura, o simplemente quieres olvidarte del tema del agua mineral, evaporativo. Y a cambio, filtro nuevo un par de veces al año.",
      "Con un presupuesto muy ajustado para una habitación pequeña, sin pretensiones de control automático, basta un ultrasónico básico; eso sí, tendrás que vigilar tú mismo cuánto tiempo lo dejas encendido.",
      "La seguridad merece un párrafo aparte, sobre todo si hay niños o mascotas en casa. Los modelos híbridos con función de vapor caliente esterilizan parte del agua calentándola antes de expulsarla, y la boquilla de salida alcanza temperaturas capaces de causar quemaduras leves a un niño pequeño que meta la mano por curiosidad. Esa función conviene reservarla para habitaciones donde el aparato quede fuera del alcance, o desactivarla directamente y quedarse con el modo de vapor frío mientras haya peques correteando por casa. Los ultrasónicos y los evaporativos de vapor frío no tienen este riesgo, otro punto a su favor para dormitorios infantiles.",
      "La función de apagado automático sin agua ya viene de serie en la inmensa mayoría de modelos actuales, tanto ultrasónicos como evaporativos, incluyendo los de gama de entrada. Parece una de esas características menores hasta el día que te evita un problema real. Sin ella, un aparato que se queda sin agua y sigue intentando funcionar puede sobrecalentar la resistencia o el motor, acortando su vida útil de forma notable. Si vas a comprar un humidificador, comprobar que la lleva no debería ser opcional, da igual la tecnología y da igual el presupuesto.",
      'Al final, la decisión entre evaporativo y ultrasónico depende poco de cuál es "objetivamente mejor" y mucho de qué tipo de mantenimiento estás dispuesto a asumir de forma constante. Los dos lo necesitan, cada uno a su manera. Uno te pide agua destilada con frecuencia, el otro que te acuerdes del filtro cada pocos meses.',
      "Elige el que mejor se adapte a tu rutina real, no al ideal de rutina que te gustaría tener. Vivirás mucho más contento con el resultado a partir del segundo mes de uso, que es cuando de verdad se nota la diferencia entre acertar y no acertar.",
    ],
    imagenes: [
      undefined,
      {
        src: cecotecImg,
        alt: "Humidificador ultrasónico económico Cecotec Pure Aroma 300 Yang",
        credito: "Imagen: Cecotec",
      },
      undefined,
      undefined,
      {
        src: levoitImg,
        alt: "Humidificador ultrasónico Levoit Dual 200S con depósito top-fill",
        credito: "Imagen: Levoit / VeSync",
      },
      undefined,
      undefined,
      {
        src: xiaomiImg,
        alt: "Humidificador con tecnología UV-C Xiaomi Smart Humidifier 2",
        credito: "Imagen: Xiaomi",
      },
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/Philips-Serie-2000-HU2716-Humidificador/dp/B08LW4K16N",
      },
    ],
  },
  {
    slug: "fiebre-del-humidificador-prevencion",
    titulo: "La 'fiebre del humidificador' existe, y se evita con hábitos sencillos",
    metaTitulo: "Fiebre del humidificador: qué es y cómo evitarla",
    fecha: "2026-06-18",
    categoria: "Salud",
    resumen:
      "Está descrita en medicina como neumonitis por hipersensibilidad y tiene una causa identificada. Tampoco hay que alarmarse. Limpiando el depósito con regularidad y con un par de costumbres básicas, el riesgo se queda en prácticamente nulo.",
    metaDescripcion:
      "Es un caso real de neumonitis por hipersensibilidad, no alarmismo: con limpieza regular y hábitos básicos, el riesgo es prácticamente nulo.",
    imagenPortada: {
      src: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&w=1200&q=80",
      alt: "Limpieza con spray y bayeta, hábito clave para evitar la fiebre del humidificador",
      credito: "Foto: Unsplash",
    },
    contenido: [
      'Cuando empezamos a escribir sobre humidificadores, uno de los primeros lectores nos preguntó si era verdad eso de la "fiebre del humidificador". Sonaba a leyenda urbana, de esas que circulan por los foros creciendo un poco en cada mensaje. No lo es. Es un cuadro clínico real, documentado en la literatura médica desde hace décadas, con su nombre técnico (neumonitis por hipersensibilidad asociada a humidificadores) y con una causa perfectamente identificada. También se previene con una limpieza de cinco minutos un par de veces por semana, así que aquí no hay motivo para asustarse, solo para tomárselo en serio.',
      "La causa de fondo no tiene misterio. El agua que se queda estancada en el depósito, sobre todo si lleva varios días sin cambiarse, es un caldo de cultivo perfecto para las bacterias y para los hongos y mohos que crecen en cualquier superficie húmeda.",
      "Y un humidificador está diseñado justo para lanzar esa agua al aire, convertida en vapor o en niebla fina. En esas condiciones lanza también las bacterias y las endotoxinas que producen, a la altura exacta a la que las respiras durante horas, mientras duermes o trabajas al lado del aparato.",
      "Cuando el cuadro aparece, se parece bastante a una gripe: fiebre, escalofríos, tos, sensación de ahogo, malestar general. Suele darse horas después de haber estado expuesto al vapor contaminado. En los casos descritos en la literatura médica desde los años ochenta había además un detalle llamativo, y es que los síntomas mejoraban al alejarse del humidificador y volvían a empeorar en cuanto se usaba otra vez. En medicina eso se llama un patrón de exposición-mejora-recaída, y fue lo que permitió identificar la causa en los primeros casos documentados, casi siempre en entornos con humidificadores industriales o domésticos que llevaban muchísimo tiempo sin limpiarse.",
      "Conviene poner esto en su sitio. Los casos no aparecen porque tengas un humidificador en casa, sino porque ese humidificador concreto lleva semanas o meses con agua estancada y sin una limpieza mínima. La inmensa mayoría de quienes usan uno no tienen jamás el menor problema, exactamente igual que la inmensa mayoría de la gente que tiene nevera no sufre una intoxicación alimentaria. El riesgo existe y está descrito. También desaparece casi por completo con unos hábitos de higiene que no pasan de cinco minutos.",
      "El primer hábito es el más importante de todos, y es cambiar el agua todos los días. Suena obvio. Y es el error número uno que cometemos casi todos en algún momento, porque rellenar el depósito por encima del agua que ya había resulta mucho más cómodo que vaciarlo del todo, enjuagarlo y poner agua fresca.",
      "Rellenar sobre agua vieja es como echar agua limpia en un vaso que ya tenía posos. Diluye un poco el problema y no lo elimina, porque el biofilm de bacterias que se va formando en las paredes del depósito sigue ahí, alimentándose de cada ronda nueva que añades.",
      "El segundo hábito va un paso más allá y consiste en vaciar y secar del todo el depósito cada dos o tres días, sin quedarse en cambiar el agua. Las bacterias y el biofilm no viven solo en el agua, se adhieren a las paredes internas, y sobre todo a las zonas que quedan siempre húmedas y a oscuras, que son sus condiciones ideales de crecimiento. Dejar el depósito secándose al aire, aunque sean un par de horas, rompe ese ciclo de humedad continua que necesitan para proliferar sin descanso.",
      "El tercero se lo salta mucha gente porque parece exagerado. Consiste en limpiar el depósito una vez por semana con una mezcla de agua y vinagre blanco, a partes iguales o con algo más de vinagre, dejándola actuar unos quince o veinte minutos antes de aclarar bien. La acidez del vinagre disuelve los restos de cal y también el biofilm bacteriano, que es lo que el agua sola no se lleva. A mí me convence sobre todo porque es barato, está al alcance de cualquiera y no obliga a meter químicos agresivos en casa, con lo que ya hay en la cocina.",
      "Si vives en una zona de agua dura, y eso es buena parte de la España peninsular, en especial el centro y el sur, hace falta un cuarto hábito, que es descalcificar el depósito cada dos semanas con un ciclo de vinagre diluido algo más concentrado. La cal acumulada en las paredes y en los componentes internos crea micro-rugosidades, y las bacterias se agarran a ellas con muchísima más facilidad que a una superficie lisa. Cuanta más cal, más superficie de agarre. Mantener el depósito sin calcificación no va de estética, va de higiene.",
      "Los depósitos grandes, como los 7,5 litros del Winix L500 de la imagen de portada, traen una ventaja y una trampa metidas en el mismo paquete. La ventaja es que aguantan muchísimas horas sin necesidad de rellenar, algo estupendo para salones grandes o para estancias donde no quieres estar pendiente del aparato cada dos por tres. La trampa sale de ahí mismo, porque cuanto más tiempo pasa el agua sin cambiarse, más margen tiene el biofilm para formarse. Con un depósito grande hay que ser todavía más disciplinado con el vaciado y la limpieza, no menos.",
      "Los híbridos con función de vapor caliente, como el Rowenta Aqua Perfect, juegan aquí con ventaja. Calentar el agua antes de convertirla en vapor mata buena parte de la carga bacteriana por puro efecto de la temperatura, de forma parecida a como hervir agua la esteriliza. No es excusa para descuidar la limpieza, porque el depósito sigue acumulando minerales y biofilm en las zonas que no llegan a calentarse tanto, pero sí deja algo más de margen de error que un ultrasónico de vapor frío puro, donde nada reduce la carga bacteriana antes de que salga al aire.",
      "Con los modelos de entrada pasa algo curioso. El Cecotec Pure Aroma, por ejemplo, monta un depósito de 300 ml, y esa poca capacidad obliga a rellenarlo varias veces al día, así que el agua se renueva sola por pura necesidad y pasa menos tiempo estancada. No sustituye a la limpieza periódica del depósito, ojo. Pero explica por qué los modelos pequeños casi nunca aparecen en los casos documentados de fiebre del humidificador, porque el agua no llega a estancarse como en un depósito de varios litros que se rellena una vez a la semana.",
      'Merece la pena aclarar también una confusión que nos llega bastante a menudo, la de mezclar la fiebre del humidificador con la legionelosis, porque las dos se asocian popularmente a "agua estancada que da problemas respiratorios". La legionela es una bacteria concreta que, para multiplicarse de forma peligrosa, necesita temperaturas templadas (entre 25 y 45 grados aproximadamente) y sistemas con cierta complejidad, del tipo de las torres de refrigeración o los circuitos de agua caliente sanitaria mal mantenidos. Es muy poco probable que aparezca en el depósito de un humidificador doméstico que funciona a temperatura ambiente. La fiebre del humidificador la provoca un abanico más amplio de bacterias y hongos, junto con las toxinas que sueltan, y el daño se produce por otra vía, porque no hay una infección propiamente dicha, sino una reacción de hipersensibilidad del sistema inmune ante esas partículas inhaladas una y otra vez.',
      "En consulta, cuando llega un paciente con fiebre y tos y esa sensación de ahogo que mejora al salir de casa o de la oficina y empeora al volver, los neumólogos investigan el entorno como parte del diagnóstico diferencial. Preguntan por sistemas de humidificación, por aires acondicionados con torres de enfriamiento y por ambientes laborales con maquinaria que genere aerosoles de agua. Antes hay que descartar causas mucho más comunes, una gripe normal o una neumonía bacteriana, así que no es un diagnóstico que se ponga a la ligera ni algo que deba quitarle el sueño a quien tiene un humidificador en casa y lo cuida con un mínimo de regularidad.",
      "Quien sí necesita hilar más fino es la gente con el sistema inmunitario debilitado. La edad avanzada, los tratamientos oncológicos y las enfermedades crónicas que afectan a las defensas dejan a una persona con menos capacidad de respuesta ante cualquier carga bacteriana o fúngica inhalada, y no porque el humidificador sea más peligroso para ella. Si en tu casa vive alguien así, sube el listón. Limpia el depósito cada vez que lo rellenes, en lugar de un par de veces por semana, y plantéate el agua destilada en lugar de la del grifo, que encima reduce el aporte de minerales que sirven de alimento adicional a según qué microorganismos.",
      'Circula además un mito que conviene desmontar, el de que los modelos con lámpara UV-C, como el Xiaomi Smart Humidifier 2, te eximen de la limpieza regular porque "ya esterilizan ellos el agua". La luz ultravioleta reduce la carga bacteriana del agua que pasa cerca de la lámpara en el momento de la exposición, cierto, pero no limpia ni desinfecta las paredes del depósito ni los racores, y tampoco alcanza de forma uniforme las zonas donde el agua no recibe luz directa. Tomarlo como sustituto de la limpieza manual es justo el tipo de falsa sensación de seguridad que hace que alguien afloje con los hábitos básicos, que son los que de verdad te protegen.',
      "¿Cuándo hay que preocuparse de verdad y consultar a un médico? Si aparece fiebre, tos seca persistente o una falta de aire que coincide claramente con el uso del humidificador y que mejora al apagarlo y ventilar la habitación durante un par de días, es razonable acudir a consulta y mencionar de entrada que tienes un humidificador en casa, sobre todo si llevaba tiempo sin una limpieza a fondo. No es cosa de urgencias ni de pánico. Es un dato relevante que le ahorra rodeos al diagnóstico, igual que le contarías un viaje reciente o que convives con alguien que ha estado enfermo.",
      "Hay un detalle práctico que ayuda muchísimo a que todo esto no se convierta en una carga. Antes de comprar, fíjate en si el depósito tiene la boca ancha y en si las piezas internas se desmontan sin herramientas. En un depósito de boca estrecha, de esos donde apenas cabe la mano, limpiar bien las paredes internas es una incomodidad que se acaba posponiendo semana tras semana; con boca ancha y pocas piezas que desmontar, en cambio, la limpieza se hace con la regularidad que toca, porque no supone una batalla cada vez.",
      "Aunque tu agua del grifo no sea especialmente dura, no está de más hacer un ciclo de descalcificación con vinagre cada mes, como rutina de fondo y vivas donde vivas. Cualquier acumulación mineral, por pequeña que sea, deja una superficie más rugosa a la que el biofilm se agarra mejor que a una completamente lisa. Son quince minutos y cuesta cuatro perras. Yo lo metería en el calendario de limpieza de la casa junto a cambiar las sábanas o limpiar la nevera, sin esperar a ver cal visible para empezar.",
      "Si te vas unos días de vacaciones y el aparato se queda parado con agua dentro, no lo enciendas a la vuelta sin más. Vacía el depósito, acláralo bien y, si han pasado más de cuatro o cinco días, dale un repaso rápido con vinagre antes de volver a llenarlo de agua fresca. El agua parada durante un periodo largo sin uso es justo el escenario en el que más biofilm se acumula sin que nadie se entere, porque nadie está revisando el aparato con la casa vacía.",
      "Con esa rutina de fondo (agua fresca a diario, depósito seco un par de horas cada dos o tres días, vinagre semanal y descalcificación si tu agua es dura) el riesgo real de cualquier problema asociado a la humedad del depósito es prácticamente nulo en un uso doméstico normal. Lo que hay que evitar es el otro patrón, el que sí aparece en los casos documentados, ese humidificador que se enciende, se rellena sobre agua vieja durante semanas y no se desmonta nunca para una limpieza en profundidad. Cinco minutos un par de veces por semana separan el aparato que te ayuda a respirar mejor del que, por pura dejadez, acaba haciendo justo lo contrario.",
    ],
    imagenes: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: winixImg,
        alt: "Humidificador Winix L500 de gran depósito, requiere vigilar la limpieza con más frecuencia",
        credito: "Imagen: Winix",
      },
      {
        src: cecotecImg,
        alt: "Humidificador ultrasónico compacto Cecotec con depósito pequeño",
        credito: "Imagen: Cecotec",
      },
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: xiaomiImg,
        alt: "Humidificador Xiaomi Smart Humidifier 2 con lámpara UV-C interna",
        credito: "Imagen: Xiaomi",
      },
      undefined,
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/Winix-Humidificador-Ultras%C3%B3nico-silencioso-humidificaci%C3%B3n/dp/B08PBZ9KH3",
      },
    ],
  },
  {
    slug: "levoit-superior-studio-evaporativo-filtro-dos-anos",
    titulo: "Levoit Superior Studio: un evaporativo cuyo filtro aguanta hasta dos años",
    metaTitulo: "Levoit Superior Studio: filtro de 2 años",
    fecha: "2026-06-20",
    categoria: "Novedades",
    publicado: true,
    resumen:
      "Levoit anuncia el Superior Studio, un evaporativo con filtro lavable que la marca dice que dura hasta dos años, y 19 dB en el nivel más bajo. A Amazon España todavía no ha llegado.",
    metaDescripcion:
      "Levoit presenta el Superior Studio, evaporativo con filtro lavable de hasta dos años y solo 19 dB en su nivel más bajo. Aún no está en Amazon España.",
    imagenPortada: {
      src: "https://levoit.com/cdn/shop/files/levoit-superior-studio-smart-evaporative-humidifier-6081922.jpg?v=1779264913",
      alt: "Levoit Superior Studio, nuevo humidificador evaporativo inteligente",
      credito: "Imagen: Levoit",
    },
    contenido: [
      "Levoit es una vieja conocida de este blog. El Dual 200S lo tenemos analizado en nuestro ranking desde hace tiempo, así que cuando la marca presentó el 3 de junio su nuevo Superior Studio le echamos un ojo con interés. Es un humidificador evaporativo y ataca de frente el punto flaco de esa tecnología, ese que comentamos siempre, el mantenimiento del filtro. La nota de prensa oficial, confirmada además en la propia web de Levoit, dice que el filtro está pensado para durar hasta dos años lavándolo una vez por semana. Lo normal en un evaporativo doméstico son 6 meses, y ahí entra también el Philips HU2716 que ya tenemos en catálogo.",
      "La diferencia no es pequeña.",
      "El otro dato que llama la atención es el ruido. 19 dB en el nivel más bajo, una cifra que solemos ver en ultrasónicos silenciosos y casi nunca en evaporativos, que suelen moverse en los 33-38 dB por culpa del ventilador que necesitan para forzar el paso del aire por el filtro. Levoit la mide a 1,5 metros, según su ficha técnica. Si aguanta en uso real, estaríamos ante uno de los evaporativos más silenciosos que hemos visto pasar por este tipo de análisis.",
      "El resto de la ficha no desentona. Depósito de 4,5 litros, hasta 400 ml/h de caudal y 40 horas de autonomía al mínimo, que se quedan en 10 horas a máxima potencia. Cubre estancias de hasta 56 m². Lleva sensor de humedad con ±5% de precisión, modo automático y una función de descalcificación con ciclo de ácido cítrico que se activa sola. Todo se maneja desde la app VeSync, la misma que ya usan otros modelos de la marca.",
      "Sale por 139,99 dólares la versión inteligente y 129,99 la que va sin conectividad. El filtro de repuesto, 24,99 dólares la unidad. Por ahora solo lo hemos visto confirmado a la venta en Levoit.com y en Amazon de Estados Unidos. En Amazon España no aparece, y en la tienda europea de Levoit tampoco, así que quien lo quiera ya mismo desde aquí tendrá que tirar de importación.",
      "¿Y mientras llega, si es que llega? Si lo que te atrae es la promesa de un evaporativo con menos mantenimiento de filtro, el Levoit Dual 200S que ya tenemos analizado sigue siendo lo que hay disponible hoy en Amazon España de esta misma marca. Es ultrasónico, no evaporativo, conviene decirlo, así que el mantenimiento que te ahorra es otro (agua destilada en vez de cambio de filtro).",
      "Para ver por qué lo del filtro a dos años importa hay que sacar la calculadora. El filtro del Philips HU2716 que ya tenemos analizado cuesta en torno a 25-30 euros y dura hasta seis meses. Con uso diario, eso son entre 50 y 60 euros al año solo en recambios. Si el del Superior Studio aguanta de verdad dos años con un lavado semanal, a largo plazo el gasto se queda en una fracción de eso, aunque el aparato salga algo más caro de entrada. Es justo la cuenta a tres años que recomendamos hacer siempre antes de comparar precios de compra entre modelos.",
      "La descalcificación automática con ácido cítrico merece párrafo aparte, porque toca un problema que repetimos en cada artículo sobre limpieza. La cal que se agarra a las paredes del depósito es uno de los sitios donde mejor prende el biofilm bacteriano. Que el propio aparato lance un ciclo de limpieza con ácido cítrico cada cierto tiempo no sustituye los hábitos básicos de higiene que explicamos al hablar de la fiebre del humidificador, pero sí reduce el margen de error de quien se olvida de hacerlo a mano con la frecuencia que toca. Y de esos hay unos cuantos.",
      "Con los 19 dB conviene ser prudentes hasta que aparezcan reseñas de uso real, fuera de las condiciones de laboratorio del fabricante. Lo decimos siempre con cualquier especificación que viene únicamente de la propia marca. Si se confirma, es un argumento de peso para quien quiere un evaporativo en el dormitorio sin el zumbido de ventilador de toda la vida. Si en la práctica se queda más cerca de los 25-28 dB, seguiría siendo un buen resultado dentro de su categoría, solo que menos espectacular que el titular de la nota de prensa.",
      "Lo más interesante de este lanzamiento no tiene que ver con si llega pronto a España. Tiene que ver con la dirección que marca. Que una marca grande esté invirtiendo en alargar la vida útil del filtro evaporativo son buenas noticias a medio plazo para el bolsillo de cualquiera que compre evaporativos, sean de esta marca o de la competencia, porque el coste recurrente del filtro es precisamente el argumento que más echa para atrás a quien duda entre ultrasónico y evaporativo. Si la promesa de los dos años se sostiene con un uso real y no solo en condiciones de laboratorio, esa balanza de costes que repetimos siempre en el blog se movería de verdad.",
    ],
    imagenes: [
      undefined,
      {
        src: "https://levoit.com/cdn/shop/files/levoit-superior-studio-smart-evaporative-humidifier-4560408.png?v=1781004907",
        alt: "Detalle del panel de control del Levoit Superior Studio",
        credito: "Imagen: Levoit",
      },
      undefined,
      {
        src: "https://levoit.com/cdn/shop/files/levoit-superior-studio-smart-evaporative-humidifier-3364480.png?v=1780756451",
        alt: "Filtro lavable del Levoit Superior Studio, con vida útil de hasta dos años",
        credito: "Imagen: Levoit",
      },
      {
        src: levoitImg,
        alt: "Levoit Dual 200S, modelo de la misma marca ya disponible en España",
        credito: "Imagen: Levoit / VeSync",
      },
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG",
      },
    ],
  },
  {
    slug: "dyson-ph2-denox-purificador-humidificador-cocinas-gas-espana",
    titulo:
      "El purificador-humidificador Dyson PH2 De-NOx ya está en España y va a por el dióxido de nitrógeno de las cocinas de gas",
    fecha: "2026-07-01",
    categoria: "Novedades",
    publicado: false,
    resumen:
      "Purificador, humidificador y ventilador en la misma torre, con el filtro K-Carbon que captura más NO₂. Hemos mirado si el Dyson PH2 De-NOx justifica sus 679 euros.",
    imagenPortada: {
      src: "https://eshopfrontend.orange.es/dw/image/v2/BJWB_PRD/on/demandware.static/-/Sites-devices-master-catalog/default/dw8dc64b51/images/3711158/dyson_purificador_cool_ph2denox_foto1.png",
      alt: "Dyson Purifier Humidify+Cool PH2 De-NOx en blanco y dorado",
      credito: "Imagen: Dyson / Orange España",
    },
    contenido: [
      "Cocinas con gas y en casa no hay ningún medidor de calidad del aire. Entonces es bastante probable que, mientras preparas la cena, el ambiente de tu cocina se salte con regularidad los límites de dióxido de nitrógeno que la OMS da por seguros.",
      "No lo digo para asustar a nadie. Los estudios llevan años señalándolo, y un análisis publicado en Science Advances en mayo de 2024, firmado por investigadores de la Universidad de Stanford, lo confirmó midiendo en más de cien hogares reales. El dióxido de nitrógeno, el NO₂ de los químicos, es el mismo contaminante que conocemos por los tubos de escape de los coches, solo que en versión doméstica, silencioso, inodoro a concentraciones bajas y salido directamente de los quemadores de la placa cada vez que enciendes el fuego para hacer la cena.",
      "El trabajo de Stanford calculó que las cocinas de gas y propano suben la exposición media a NO₂ en unos 4 ppb de forma crónica en los hogares que analizaron, y que ese extra está probablemente detrás de unos 50.000 casos de asma infantil activos solo en Estados Unidos. En diciembre de 2025, un segundo análisis publicado en PNAS Nexus con datos a escala nacional concluyó que, en algunos hogares, la contaminación de la cocina de gas supone más de la mitad de toda la exposición a NO₂. Y en abril de 2026 apareció en PubMed un trabajo que relaciona esa misma exposición con peores resultados de sueño en niños. Dos años de conversación científica sobre el asunto y la flecha sigue apuntando al mismo sitio.",
      "España no es Estados Unidos, y extrapolar entre estudios hechos en geografías distintas exige cautela.",
      "Ahora bien, el NO₂ de interior no entiende de fronteras. Un quemador de gas produce dióxido de nitrógeno por la misma reacción química esté en una cocina de Manhattan o en una de Zaragoza, y España, con decenas de millones de viviendas que todavía cuentan con cocina de gas natural, parte exactamente del mismo escenario. La OMS fijó en 2021 su guía de calidad del aire interior para NO₂ en 25 µg/m³ de media anual y en 200 µg/m³ como valor límite horario. Distintos estudios de campo enseñan que esas cifras se rebasan con facilidad mientras se cocina, incluso con la ventana de la cocina abierta y el extractor encendido.",
      "Aquí es donde entra el Dyson Purifier Humidify+Cool PH2 De-NOx, el primer aparato de la marca con un filtro pensado expresamente para capturar dióxido de nitrógeno en el hogar. Se llama K-Carbon y va impregnado en carbonato potásico (K₂CO₃). Según Dyson, adsorbe hasta un 50% más de NO₂ que los modelos anteriores de la gama.",
      "Lleva varios meses en el mercado internacional y en España ya se vende a través de dyson.es, El Corte Inglés, Media Markt, FNAC, Orange y Movistar. En la web oficial está a 679 euros, con un descuento activo en el momento de publicar esto sobre el precio de venta recomendado de 799 euros. Nadie compra esto por impulso, ni va a confundirlo con un humidificador de entrada. Lo que hace es resolver a la vez tres cosas que hasta ahora pedían tres aparatos distintos.",
      "El PH2 es purificador de aire de gama alta, humidificador y ventilador. Y no se trata de tres funciones mediocres embutidas en la misma carcasa para justificar el precio, porque cada una va por su cuenta y con especificaciones que aguantan la comparación con aparatos dedicados solo a eso.",
      "La torre mide 92 centímetros de altura y pesa algo más de ocho kilos. Es visualmente llamativa, y el diseño de Dyson resulta lo bastante reconocible como para que mucha gente la coloque en el salón medio como elemento decorativo además de funcional. Eso dice algo del cuidado puesto en la carcasa. También del precio al que se vende.",
      "El razonamiento de Dyson para defenderlo no tiene misterio. Un purificador de gama alta cuesta entre 300 y 500 euros, un humidificador bueno entre 80 y 150, y un ventilador con purificación otros 300. Son tres aparatos, con sus tres enchufes y sus tres mantenimientos, frente a uno solo.",
      "La filtración del PH2 va en tres niveles. Abre el filtro HEPA H13, que retiene el 99,95% de las partículas de hasta 0,1 micras. Ahí caen el polvo, el pelo de las mascotas, las esporas de moho, las bacterias y las partículas PM2.5, que son las que más preocupan a los neumólogos por lo hondo que llegan al pulmón.",
      "Después entra el carbón activado K-Carbon, el componente estrella de esta versión De-NOx, encargado de los gases, los compuestos orgánicos volátiles y ese dióxido de nitrógeno de más que sueltan quemadores y estufas de leña.",
      "Y cierra un filtro catalítico contra el formaldehído. Este no se satura ni hay que reponerlo nunca, porque en vez de atrapar el gas lo destruye, convirtiéndolo en agua y CO₂. Todo el conjunto está sellado, así que el aire no puede esquivar ninguna de esas capas entre la entrada y la salida del aparato.",
      "Al formaldehído conviene dedicarle un párrafo propio, porque ha sido el gran tema de Dyson en sus últimas generaciones de purificadores. Es un gas incoloro e inodoro que ciertos materiales de construcción, adhesivos, muebles de madera prensada y algunos revestimientos emiten de forma continua durante años. No se percibe, no irrita la nariz a las concentraciones habituales de un interior y el cuerpo lo metaboliza sin síntomas evidentes en dosis bajas, pero la Agencia Internacional para la Investigación del Cáncer lo tiene clasificado como cancerígeno del Grupo 1 en exposición crónica.",
      "Los purificadores Dyson anteriores ya montaban ese filtro catalítico. Lo que aporta el PH2 De-NOx es la protección específica contra NO₂ sin sacrificar nada de lo que ya había, todo en un único filtro combinado HEPA+K-Carbon que aguanta alrededor de doce meses con doce horas de uso diario.",
      "La parte que más nos ocupa en este blog es la humidificación. El depósito es de cinco litros y da para unas 36 horas seguidas en el nivel mínimo, o en torno a diez horas si lo pones a máxima potencia.",
      "La cobertura de humidificación son 41 m³, que traducido viene a ser una habitación de unos 15 a 18 metros cuadrados con techo estándar. Para un dormitorio o un despacho está bien dimensionado. Para un salón grande se queda corto.",
      "El sistema incorpora lo que Dyson llama UV Cleanse, una lámpara ultravioleta que irradia el agua del depósito antes de vaporizarla para reducir la carga bacteriana. Ya lo explicamos en nuestro artículo sobre la fiebre del humidificador. La luz UV-C no sustituye a la limpieza manual del depósito, aunque sí añade una capa de protección real, y en un aparato cuyos filtros internos pueden degradarse si el agua que emite viene contaminada esa capa se agradece más que en otros.",
      "En purificación la cobertura sube a 81 m³, bastante más generosa que los 41 m³ de humidificación. La distancia entre las dos cifras no es un descuido de diseño, es una limitación física. Humidificar exige caudal de agua de verdad, y dimensionar esa parte para 81 m³ pediría un depósito y un caudal que harían el aparato mucho más grande y, casi seguro, más ruidoso de lo que ya es.",
      "Ese techo lo tiene la categoría entera. Los modelos con mayor cobertura de humidificación hay que rellenarlos con más frecuencia, o cargan depósitos de mucha mayor capacidad. Con cinco litros y treinta y seis horas de autonomía en el mínimo, a mí el equilibrio del PH2 me parece razonable para un uso doméstico en habitaciones de tamaño convencional.",
      "Como ventilador, proyecta el aire ya purificado y humidificado con una oscilación de hasta 90 grados, suficiente para repartir el flujo por buena parte de un salón o un dormitorio.",
      "El nivel de ruido máximo son 62,4 decibelios. En una habitación silenciosa eso se nota, y nadie lo querría a tope mientras intenta dormir. En modo silencioso baja a 46 decibelios, un nivel que se lleva perfectamente mientras trabajas, ves una película o haces cualquier cosa que no exija silencio absoluto, aunque quede por encima del casi imperceptible de un ultrasónico de dormitorio de gama media, capaz de bajar de los 26-28 dB.",
      "Para pasar la noche en el máximo silencio posible, el PH2 De-NOx no es tu aparato. En cambio, si lo que buscas es algo trabajando en el salón durante las horas de actividad, purificando, humidificando y ventilando, esos 46 dB del modo silencioso salen a cuenta.",
      "La integración con el ecosistema digital es la que uno ya espera de Dyson. La app MyDyson, para iOS y Android, enseña en tiempo real lo que ve el sensor interior (partículas PM2.5 y PM10, NO₂, compuestos orgánicos volátiles y humedad relativa), deja programar horarios de encendido y apagado, permite ajustar velocidad y ángulo de oscilación, y avisa cuando la calidad del aire cae por debajo de los umbrales que hayas configurado.",
      "En la caja viene además un mando a distancia curvo con imán, para tocar el aparato desde el sofá sin sacar el teléfono, y el propio PH2 lleva una pantalla LCD que muestra los datos según van llegando. Tener una máquina que humidifica y que encima te dice cuántos compuestos orgánicos volátiles hay ahora mismo en el ambiente de tu salón tiene su utilidad, sobre todo si acabas de renovar los muebles o has pintado una habitación hace poco.",
      "Dyson le estima al filtro HEPA+K-Carbon una vida útil de doce meses con doce horas de uso diario. El recambio ronda los 50-60 euros en la tienda oficial de Dyson, o sea un gasto recurrente de esa cifra al año si el aparato se usa a diario. El catalítico de formaldehído, en cambio, no necesita reposición.",
      "Con esos números encima de la mesa, el coste total a tres años de un Dyson PH2 se sitúa alrededor de los 850-870 euros, asumiendo un filtro al año y sin contar el consumo eléctrico, que en reposo baja a menos de 0,5 vatios. Ni la compra inicial ni el mantenimiento recurrente son baratos.",
      "En este blog insistimos siempre en hacer el cálculo a tres años antes de comparar precios de compra inicial entre modelos, y en el caso del Dyson esa cuenta es honesta. 679 de compra más tres recambios de filtro suman más de 800 euros en el horizonte de tres años de uso.",
      "Vamos a ser honestos. Quien vive en un piso con cocina de inducción o vitrocerámica, sin problemas de calidad del aire especiales, y solo busca un humidificador para el dormitorio en invierno, tiene en el PH2 De-NOx un aparato sobredimensionado para esa necesidad, y su presupuesto rinde mucho más en otro sitio. El Levoit Dual 200S que ya tenemos analizado hace su función de humidificación en un dormitorio sin el peso, la complejidad ni el coste del Dyson.",
      "El PH2 empieza a tener sentido cuando la purificación del aire es una necesidad real y prioritaria. Si hay mascotas en casa, si alguien tiene alergias o asma, si el entorno exterior tiene contaminación notable, si la vivienda arrastra muebles de madera prensada o acabados con lacas recientes, o si se cocina mucho con gas. En esos casos, pagar 679 euros por algo que reemplaza varios aparatos y además mide la calidad del aire en tiempo real es una lógica que se sostiene.",
      "Y volvemos al punto de partida. Si tienes cocina de gas y cocinas con frecuencia, sobre todo cuando la cocina no está bien separada del salón o del comedor donde pasas la mayor parte del día, el componente De-NOx es lo más diferencial que ofrece el PH2 frente a cualquier otro purificador-humidificador del mercado español en este momento. No hay muchos purificadores domésticos que vendan explícitamente la captura adicional de NO₂ como característica principal, y el K-Carbon es el primero en llegar a España con ese argumento en un aparato de uso residencial asequible, todo lo asequible que puede ser algo de 679 euros.",
      "Si en tu casa la cocina de gas no pinta nada, porque tienes inducción o vitrocerámica, o porque la cocina está cerrada y con buena extracción hacia el exterior, ese argumento deja de ser el central y se queda en una ventaja menor frente a otros purificadores del mercado con precio de compra inferior.",
      "Sobre dónde comprarlo, en España el Dyson PH2 De-NOx está disponible en dyson.es, El Corte Inglés, Media Markt, FNAC, Orange y Movistar. Mientras escribo esto, el precio en la web oficial de Dyson España es de 679 euros, con descuento activo respecto al precio de venta recomendado de 799 euros.",
      "Dyson mantiene aquí su política habitual de igualación de precio. Si en los siete días posteriores a la compra encuentras el mismo modelo más barato en El Corte Inglés, Media Markt o FNAC, te devuelven la diferencia. El modelo disponible en España es el blanco/dorado, y hay envío gratuito en 24 horas en las principales ciudades para los pedidos realizados antes de las 17:00 de lunes a jueves.",
      "En Amazon España no lo hemos encontrado en el momento de publicar esto, así que el canal de compra más directo sigue siendo la web oficial o los distribuidores autorizados mencionados.",
      "Lo más interesante de este lanzamiento, por encima del debate sobre si 679 euros son muchos o pocos para lo que ofrece, es la dirección que señala para la categoría en su conjunto. Que la purificación del aire y la humidificación acaben en el mismo aparato, y con especificaciones serias en las dos funciones, es el paso lógico de un sector que hasta hace relativamente poco pensaba en las dos cosas como productos completamente separados. El Blueair 2-in-1 Purify+Humidify, que también está entrando al mercado, apunta a esa misma tendencia.",
      "Para el usuario, la pregunta deja de ser 'purificador o humidificador'. Pasa a ser 'un aparato que haga las dos cosas bien o dos aparatos separados que las hagan perfectas cada uno'. Y la respuesta correcta cambia según el espacio disponible, el presupuesto y las ganas que uno tenga de gestionar enchufes, depósitos y mantenimientos en paralelo. Universal no hay ninguna.",
      "Mientras tanto, si cocinas con gas, llevas tiempo con la sospecha de que el aire de tu casa no está en el mejor estado posible, sobre todo habiendo niños o alguien con asma o alergias, y quieres un único aparato que resuelva la purificación, la humidificación y la ventilación sin dejar ángulos sin cubrir, el Dyson PH2 De-NOx es el argumento más completo que ha llegado a España hasta la fecha. Con sus 679 euros de compra inicial y su recambio de filtro al año.",
      "Si esa cifra te parece alta para lo que necesitas en concreto, o si el gas solo lo usas en la calefacción y no en la cocina, hay opciones más ajustadas a tu caso específico. Antes de mirar el precio de cualquier aparato conviene contestar a qué quieres resolver exactamente, con qué frecuencia y en qué espacio. De ahí sale si el Dyson tiene sentido o si hay una alternativa que te sirve mejor por bastante menos.",
    ],
    imagenes: [
      undefined,
      undefined,
      undefined,
      {
        src: "https://eshopfrontend.orange.es/dw/image/v2/BJWB_PRD/on/demandware.static/-/Sites-devices-master-catalog/default/dw46fbbe27/images/3711158/dyson_purificador_cool_ph2denox_foto2.png",
        alt: "Dyson PH2 De-NOx visto desde otro ángulo, mostrando la salida de aire y el diseño de la torre",
        credito: "Imagen: Dyson / Orange España",
      },
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: "https://eshopfrontend.orange.es/dw/image/v2/BJWB_PRD/on/demandware.static/-/Sites-devices-master-catalog/default/dwa857ac34/images/3711158/dyson_purificador_cool_ph2denox_foto3.png",
        alt: "Dyson PH2 De-NOx en modo ventilador, proyectando aire purificado y humidificado",
        credito: "Imagen: Dyson / Orange España",
      },
      undefined,
      undefined,
      undefined,
      {
        src: "https://eshopfrontend.orange.es/dw/image/v2/BJWB_PRD/on/demandware.static/-/Sites-devices-master-catalog/default/dw8002282b/images/3711158/dyson_purificador_cool_ph2denox_foto4.png",
        alt: "Detalle del Dyson PH2 De-NOx con el panel de control y pantalla LCD",
        credito: "Imagen: Dyson / Orange España",
      },
      undefined,
      undefined,
      undefined,
      undefined,
    ],
  },
  {
    slug: "humidificador-para-bebe-vapor-frio-caliente-donde-poner",
    titulo:
      "Humidificador para el bebé: por qué vapor frío, dónde colocarlo y cuándo no hace falta",
    metaTitulo: "Humidificador para bebé: vapor frío, ubicación",
    fecha: "2026-07-01",
    categoria: "Guías",
    publicado: true,
    resumen:
      "Vapor frío siempre, porque el caliente quema. Qué capacidad mínima buscar, a qué distancia de la cuna va el aparato y en qué momento toca dejarlo y llamar al pediatra.",
    metaDescripcion:
      "Vapor frío siempre, porque el caliente quema. Qué capacidad mínima buscar, a qué distancia de la cuna colocar el aparato y cuándo llamar al pediatra.",
    imagenPortada: {
      src: "https://images.unsplash.com/photo-1749703827003-8e5046941847?auto=format&fit=crop&w=1200&q=80",
      alt: "Cuna de madera en habitación de bebé tranquila y bien iluminada",
      credito: "Foto: Unsplash",
    },
    contenido: [
      "El primer resfriado del bebé llega antes de lo que uno esperaría. Con él llega la duda de si merece la pena comprar un humidificador para la habitación. Ayuda, sí, en situaciones bastante concretas, pero hay un par de cosas que conviene tener claras antes de encenderlo.",
      "Empiezo por lo único que no admite matices. Los humidificadores de vapor caliente hierven el agua antes de expulsarla, y la salida del aparato puede alcanzar temperaturas que queman si el bebé se acerca demasiado, o si entra un hermano mayor con ganas de curiosear. Los ultrasónicos y los evaporativos, que son los de vapor frío, dejan el ambiente igual de húmedo sin ese peligro.",
      "En la habitación de un bebé, vapor caliente nunca.",
      "Para un cuarto normal, de 10 a 15 metros cuadrados, yo no bajaría de un depósito de dos litros y una cobertura declarada de unos 20 m². Con menos capacidad acabas rellenando el depósito varias veces en una sola noche, que es justo cuando menos apetece levantarse. El EssenCAT Humidificador para Bebés es compacto y trae aceites esenciales de eucalipto, lavanda y naranja. El BÉABA Humidificador de vapor frío lleva años siendo una referencia en farmacias especializadas. Y si lo que te preocupa es el ruido, el Suavinex Humidificador ultrasónico funciona especialmente silencioso, pensado exactamente para no interrumpir el sueño.",
      "Dónde lo pones importa tanto como cuál compras. Superficie elevada, a unos 50-70 centímetros del suelo, y al menos metro y medio de separación hasta la cuna. El vapor necesita espacio para dispersarse antes de llegar a la altura del bebé; si el aparato queda demasiado cerca, la ropa de cama y las superficies se humedecen de más, y con el tiempo eso invita a los ácaros, que es justo lo contrario de lo que buscabas. Ni en el suelo, ni pegado a la cabecera.",
      "También hay noches en que no hace ninguna falta. Si el bebé está sano, duerme bien y el higrómetro de la habitación marca entre 45% y 60% de humedad, el aparato sobra. Se vuelve útil cuando la humedad cae por debajo de 40%, algo bastante frecuente con la calefacción en marcha. También con mocos secos o costras nasales que le dificultan respirar, con la piel muy irritada, o con esa tos seca nocturna sin fiebre que muchas veces no es más que la mucosa resentida por el aire seco de los radiadores.",
      "Y un aviso antes de terminar. Si el bebé tiene fiebre junto con síntomas respiratorios, si la tos persiste más de dos noches con el humidificador en marcha, o si aparecen signos visibles de esfuerzo respiratorio (las costillas marcadas al respirar, los labios azulados, una respiración muy rápida), eso no lo resuelve ningún aparato. Ahí toca llamar al pediatra sin esperar, no ponerse a ajustar la posición del humidificador.",
    ],
    imagenes: [
      undefined,
      undefined,
      {
        src: "https://www.beaba.com/dw/image/v2/BFPR_PRD/on/demandware.static/-/Sites-master-beaba/default/dwc156f0b9/images/packshot-hi-res/920416_product_face_1.jpg",
        alt: "BÉABA Zen Air, humidificador de vapor frío para bebés",
        credito: "Imagen: BÉABA",
      },
      undefined,
      undefined,
      undefined,
    ],
    afiliados: [
      { comercio: "Amazon", href: "https://www.amazon.es/dp/B0BZ8VVJMV?tag=david0e98-21" },
      { comercio: "Amazon", href: "https://www.amazon.es/dp/B07PJZQZ3Q?tag=david0e98-21" },
      { comercio: "Amazon", href: "https://www.amazon.es/dp/B07TTJ9T91?tag=david0e98-21" },
    ],
  },
  {
    slug: "levoit-neoclassic-humidificador-lavavajillas",
    titulo: "Levoit NeoClassic: los humidificadores que se lavan en el lavavajillas",
    metaTitulo: "Levoit NeoClassic: apto para lavavajillas",
    fecha: "2026-07-06",
    categoria: "Novedades",
    publicado: true,
    resumen:
      "La nueva gama NeoClassic de Levoit mete en el lavavajillas todas las piezas que tocan el agua, y los dos modelos grandes añaden protección antimicrobiana. Actualizado: las dos versiones conectadas ya se venden en Amazon España.",
    metaDescripcion:
      "La gama NeoClassic de Levoit mete en el lavavajillas todas las piezas que tocan el agua. Las versiones conectadas ya se venden en Amazon España.",
    imagenPortada: {
      src: "https://levoit.com/cdn/shop/files/neoclassic-650-humidifier-3705360.jpg?v=1778850794",
      alt: "Levoit NeoClassic 650, nuevo humidificador con piezas aptas para lavavajillas",
      credito: "Imagen: Levoit",
    },
    contenido: [
      "Funciona genial, pero limpiarlo es un incordio. Esa queja se repite en los foros y debajo de nuestros propios artículos con una constancia que ya no sorprende a nadie. Boquillas tan estrechas que no entra la mano. Depósitos que acabas fregando a ciegas y bandejas que casi piden un destornillador para llegar al fondo.",
      "Levoit, la marca que ya conocemos bien en este blog por el Dual 200S, ha decidido atacar ese problema de frente con su nueva gama NeoClassic, presentada el 3 de junio según la nota de prensa oficial de la compañía.",
      'La gama son cuatro modelos. El NeoClassic 450 y el 450S montan un depósito de 4,2 litros, 270 ml/h de caudal, cobertura de hasta 40 m² y 42 horas de autonomía. El NeoClassic 650 y el 650S suben a 6,2 litros, 320 ml/h, hasta 50 m² y 62 horas. Los precios de salida van de 49,99 a 79,99 dólares según el modelo, y las versiones "S" son las que añaden conectividad a través de la app VeSync que Levoit ya usa en el resto de su catálogo.',
      'Lo que de verdad diferencia a esta gama, según la marca, no es la potencia ni la autonomía, sino el diseño de la bandeja. Un sistema de "giro y extracción" deja accesible todo el recorrido del agua, y todas las piezas que lo tocan (bandeja, protector de niebla, depósito, tapa y filtro) son aptas para el lavavajillas. Puede sonar a detalle menor. No lo es para quien limpia, y a mí me parece bastante más útil que un par de vatios extra de potencia. Hasta donde hemos visto, pocas veces un fabricante grande convierte esto en el argumento central de un lanzamiento en vez de dejarlo como una línea más de la ficha técnica.',
      "No es un capricho de diseño. En nuestro artículo sobre la fiebre del humidificador ya explicamos que buena parte del riesgo real de estos aparatos nace justo de ahí, del agua estancada y del biofilm que se acumula en las paredes del depósito cuando la limpieza se pospone porque resulta incómoda. Si meter las piezas en el lavavajillas es de verdad tan sencillo como promete Levoit, es razonable esperar que la gente lo haga más a menudo que fregando a mano con un cepillo por una boca estrecha.",
      "Los modelos 650 y 650S suman además un material antimicrobiano registrado por la EPA estadounidense en las superficies en contacto con el agua, que según el fabricante inhibe el crecimiento de moho durante 28 días. No sustituye a la limpieza regular, lo mismo que ya señalamos con la luz UV-C de otros modelos. Suma una capa más frente a un problema que sí está documentado en la literatura médica.",
      "En ruido, Levoit anuncia 21 dB en modo sueño para los 450 y 26 dB para los 650. Si esas cifras se confirman en uso real y no solo en laboratorio, están en la franja baja que buscamos siempre para un dormitorio. El modo automático mantiene una precisión de sensor de ±5%, en línea con lo que ya vimos en el Dual 200S que tenemos analizado en el blog.",
      'Las versiones S incorporan la app VeSync con programación de horarios, seguimiento de humedad y un "Modo Escena" con ambientes preconfigurados, además de una función llamada SleepWake pensada para automatizar el encendido y el apagado según la rutina de sueño. Charlie Park, vicepresidente de investigación y desarrollo de Levoit, lo resume así en la nota de prensa: "NeoClassic es nuestra respuesta a la frustración de la limpieza, diseñada específicamente para un mantenimiento sin esfuerzo sin comprometer el rendimiento".',
      "Actualización del 5 de octubre de 2026: el NeoClassic ya se vende en España. Las dos versiones conectadas están desde finales del verano en Amazon España y las dos han entrado en nuestro catálogo, el [NeoClassic 450S](/producto/levoit-neoclassic-450s) con sus 4,2 litros y hasta 42 horas de autonomía, y el [NeoClassic 650S](/producto/levoit-neoclassic-650s) con 6,2 litros y 26 dB, que es el que de verdad tiene sentido en un salón. Cuando publicamos este artículo en julio la gama solo estaba confirmada en Levoit.com y en Amazon de Estados Unidos, y desde aquí tocaba esperar o tirar de importación; el [Levoit Dual 200S](/producto/levoit-dual-200s) era entonces la única opción de la marca comprable en España, y sigue siendo una compra sensata para un dormitorio, solo que ya no es la única. El patrón que señalábamos se ha cumplido con la lentitud de siempre, porque Levoit estrena en su mercado doméstico y Europa va unos meses detrás: el Superior Studio, el evaporativo con filtro de dos años que contamos unas semanas antes, a día de hoy sigue sin aparecer en Amazon España.",
      'Conviene esperar a reseñas de uso real antes de dar por buena, sin matices, la promesa de "apto para lavavajillas". El calor y los detergentes son más agresivos que un fregado a mano, y habrá que ver cómo aguantan las juntas de goma y las piezas de plástico más finas tras decenas de ciclos. Ni Levoit puede garantizarlo todavía, porque el producto acaba de salir al mercado.',
      "Lo interesante de este lanzamiento, más allá de si llega pronto o tarde a España, es la dirección que marca. Que un fabricante grande ponga la facilidad de limpieza como argumento de venta principal, y no en un apartado menor de la ficha técnica, es una buena noticia para cualquiera que use humidificador, sea de esta marca o de otra. Si de verdad se traduce en gente limpiando su aparato con más frecuencia porque ya no es un incordio, el beneficio real está en la salud del aire que respiras en casa.",
    ],
    imagenes: [
      undefined,
      {
        src: "https://levoit.com/cdn/shop/files/levoit-neo-450-humidifier-42l-top-fill-cool-mist-42h-runtime-ultra-quiet-21db-4035150.jpg",
        alt: "Levoit NeoClassic 450, con depósito de 4,2 litros y diseño top-fill",
        credito: "Imagen: Levoit",
      },
      undefined,
      undefined,
      {
        src: "https://levoit.com/cdn/shop/files/neoclassic-650-humidifier-5282726.jpg?v=1778850795",
        alt: "Bandeja desmontable del Levoit NeoClassic, apta para lavavajillas",
        credito: "Imagen: Levoit",
      },
      undefined,
      {
        src: "https://levoit.com/cdn/shop/files/levoit-neo-450-humidifier-42l-top-fill-cool-mist-42h-runtime-ultra-quiet-21db-6544693.jpg",
        alt: "Detalle del panel y luz nocturna del Levoit NeoClassic 450",
        credito: "Imagen: Levoit",
      },
      undefined,
      {
        src: levoitImg,
        alt: "Levoit Dual 200S, modelo de la misma marca ya disponible en Amazon España",
        credito: "Imagen: Levoit / VeSync",
      },
      undefined,
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG",
      },
    ],
  },
  {
    slug: "aire-acondicionado-reseca-garganta-humidificador-verano",
    titulo: "Por qué el aire acondicionado te reseca la garganta y qué hacer",
    metaTitulo: "Por qué el aire acondicionado reseca la garganta",
    fecha: "2026-07-14",
    categoria: "Salud",
    publicado: true,
    resumen:
      "En plena ola de calor, un enfermero recuerda que el aire acondicionado deja el ambiente tan seco que acaba resecando garganta y piel. Un humidificador ayuda a compensarlo.",
    metaDescripcion:
      "En plena ola de calor, un enfermero recuerda que el aire acondicionado reseca garganta y piel. Un humidificador ayuda a compensarlo.",
    imagenPortada: {
      src: "https://images.unsplash.com/photo-1709745634912-2a79b938f3c2?auto=format&fit=crop&w=1200&q=80",
      alt: "Aparato de aire acondicionado blanco instalado justo encima de una cama",
      credito: "Foto: Unsplash",
    },
    contenido: [
      "Vamos por la segunda ola de calor de 2026 y en muchas casas el aire acondicionado lleva más de una semana seguida sin apagarse apenas. Normal, cuando el termómetro no baja ni de noche. Lo que ha pasado esta semana es que varios medios (COPE, The Objective, Trendencias) han recogido las mismas declaraciones de Jorge Ángel Heras, enfermero y divulgador sanitario, sobre un efecto secundario del aire acondicionado que casi nadie tiene en cuenta. El aparato baja tanto la humedad del ambiente que acaba resecando las vías respiratorias y la piel. Es el mismo mecanismo que ya explicamos hace unas semanas al hablar de la humedad ideal en casa, solo que aquí el culpable no es la calefacción de invierno, sino el compresor del aire en pleno julio.",
      'La mecánica no tiene mucho misterio. Un aparato de aire acondicionado enfría extrayendo calor del aire, y para eso condensa parte del vapor de agua que ese aire lleva disuelto; el charco que se forma en la bandeja exterior de la unidad es justo eso. Queda un ambiente más frío, sí, pero también más seco, y esa sequedad ataca primero a las mucosas que protegen la nariz y la garganta. Heras lo resume así a COPE: "el aire acondicionado baja mucho la humedad del ambiente, y esto hace que las vías respiratorias y la piel se resequen". No es una opinión aislada. Cualquier neumólogo cuenta lo mismo cuando le preguntas por qué en verano, con el aire puesto, aparecen toses secas que nada tienen que ver con un resfriado.',
      "El propio enfermero señala en esas entrevistas un segundo problema del que se habla bastante menos. Pasar la noche entera con el aire frío incidiendo sobre el cuerpo enfría la musculatura y puede provocar calambres y contracturas, sobre todo en cuello y espalda. La típica tortícolis de verano que uno atribuye a dormir mal, cuando el causante llevaba toda la noche zumbando en la pared de enfrente.",
      'Nadie está diciendo que apagues el aire y aguantes el calor a pelo, cosa poco realista con las temperaturas de estos días. Lo que se repite en las entrevistas es usarlo de otra manera. Encenderlo un rato antes de acostarte y apagarlo después, en vez de tenerlo toda la noche. Mantener el termostato entre 24 y 26 grados en lugar de forzar mínimos que disparan el contraste térmico. Orientar las lamas hacia el techo para que el aire no golpee la cara o el cuello. Y aprovechar la ventilación natural en las horas en que ya ha refrescado fuera. Cuando eso no basta porque la habitación necesita el aire encendido buena parte de la noche, Heras lo dice con todas las letras: "también estaría bien pues utilizar un humidificador", para devolver la humedad que el propio aparato ha quitado.',
      "En verano cuesta pensar en el humidificador, que lo tenemos fichado como cosa de invierno. Pero el rango que buscamos sigue siendo el mismo 40-60% de humedad relativa del que ya hablamos al repasar el RITE y las guías de la OMS, y a ese rango le dan igual las estaciones. Un dormitorio con el aire acondicionado a tope en agosto puede acabar tan seco como uno con la calefacción a tope en enero.",
      "Aquí hablamos de contrarrestar unas horas de aire acondicionado nocturno, no de humidificar una casa entera todo el invierno. Para eso no hace falta el aparato más grande del catálogo, ni el más caro. Un ultrasónico compacto de entrada cumple de sobra. El Cecotec Pure Aroma 300 Yang, que ya tenemos analizado en el blog, lleva un depósito de 300 ml que aguanta las 6-8 horas de sueño de una habitación individual, y ronda los 20-25 euros. Si el problema es solo estacional, yo no me complicaría con un evaporativo de gama alta.",
      "Va una advertencia que ya dimos en su momento y que sigue valiendo igual. Nada de dejarlo a máxima potencia toda la noche sin control. Si la habitación es pequeña y cierras puertas y ventanas por el aire acondicionado, un humidificador sin higrostato puesto a tope puede empujar la humedad por encima del 60% en pocas horas, con el consiguiente riesgo de condensación en el cristal. Lo razonable es vigilar el ambiente con un higrómetro barato, o elegir un modelo con sensor y modo automático que se apague solo al llegar al rango saludable.",
      "Heras lo menciona de pasada y en este blog lo repetimos cada poco. Nada de esto sustituye beber agua a lo largo del día ni ventilar la casa en las horas en que el exterior está más fresco. El humidificador ayuda con la sequedad mientras duermes; no compensa una deshidratación de fondo si no bebes lo suficiente con el calor que hace estos días.",
      "Que quede claro, el aire acondicionado no es el malo de la película. Con el calor que hace esta semana sería absurdo plantearlo así. El coste aparece cuando lo usas sin pensar en la humedad, y ese coste se nota en la garganta, en la piel y a la mañana siguiente en el cuello agarrotado. Encenderlo con cabeza y apagarlo cuando ya no hace falta, más un humidificador pequeño si el dormitorio lo pide, es lo que separa pasar la ola de calor durmiendo bien de levantarte con la sensación de que algo en casa te reseca por dentro.",
    ],
    imagenes: [
      undefined,
      {
        src: "https://images.unsplash.com/photo-1762341123870-d706f257a12e?auto=format&fit=crop&w=1200&q=80",
        alt: "Unidad de aire acondicionado marcando 22 grados",
        credito: "Foto: Unsplash",
      },
      undefined,
      undefined,
      {
        src: "https://images.unsplash.com/photo-1768471569643-717e823b5f9a?auto=format&fit=crop&w=1200&q=80",
        alt: "Humidificador blanco emitiendo niebla fría sobre una mesa de madera",
        credito: "Foto: Unsplash",
      },
      {
        src: cecotecImg,
        alt: "Humidificador ultrasónico compacto Cecotec Pure Aroma 300 Yang",
        credito: "Imagen: Cecotec",
      },
      undefined,
      {
        src: "https://images.unsplash.com/photo-1624948465121-96e87ae34a87?auto=format&fit=crop&w=1200&q=80",
        alt: "Mujer bebiendo un vaso de agua para hidratarse con el calor",
        credito: "Foto: Unsplash",
      },
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/Cecotec-Humidificador-Temporizador-aromaterapia-Ultrasilencioso/dp/B07MSJDB8M",
      },
    ],
  },
  {
    slug: "xiaomi-mijia-smart-evaporative-humidifier-pro-espana",
    titulo:
      "Xiaomi se pasa a la humidificación sin niebla con el Mijia Smart Evaporative Humidifier Pro, ya a la venta en España",
    metaTitulo: "Xiaomi Mijia Smart Evaporative Humidifier Pro",
    fecha: "2026-07-21",
    categoria: "Novedades",
    publicado: true,
    resumen:
      "Xiaomi amplía su gama Mijia con un evaporativo de 5 litros que declara 30,7 dB de ruido y monta un filtro antibacteriano lavable. En Amazon España ya se puede pedir, aunque de momento todo pasa por vendedores externos.",
    metaDescripcion:
      "Xiaomi amplía su gama Mijia con un evaporativo de 5 litros, filtro lavable y 30,7 dB de ruido. Ya está en Amazon España vía vendedores externos.",
    imagenPortada: {
      src: "https://m.media-amazon.com/images/I/6148d2MArUL._AC_SX679_.jpg",
      alt: "Xiaomi Mijia Smart Evaporative Humidifier Pro, humidificador evaporativo con pantalla superior",
      credito: "Imagen: Amazon",
    },
    contenido: [
      "Xiaomi ha ampliado su gama Mijia de climatización del hogar con el Smart Evaporative Humidifier Pro, y de paso ha cambiado la tecnología que hasta ahora identificaba a la marca en este blog. El Xiaomi Smart Humidifier 2 que ya tenemos analizado combina base ultrasónica con lámpara UV-C, mientras que este Pro se va a la evaporación pura. La versión EU ya está disponible y se puede comprar desde España, aunque de momento solo a través de vendedores externos en Amazon.",
      "Ese salto de tecnología cambia bastantes cosas en el día a día.",
      "En nuestra guía sobre evaporativo frente a ultrasónico ya lo contamos. Al no pulverizar el agua en gotas microscópicas, la evaporación no arrastra minerales al aire, y por tanto no genera el polvo blanco que sí puede depositarse con los ultrasónicos cuando se usa agua del grifo. A cambio suele costar algo más de electricidad y de mantenimiento del filtro.",
      "En especificaciones, Xiaomi declara un depósito de 5 litros y un caudal de humidificación de hasta 600 ml/h, pensado para dormitorios grandes o salones medianos. También habla de hasta 20 horas seguidas en modo nocturno antes de que salte el aviso de depósito vacío.",
      "Lo que más nos ha llamado la atención es el ruido. 30,7 dB(A) es una cifra baja para un evaporativo de este caudal, y la marca lo atribuye al motor inversor de corriente continua y a la bomba de agua cerrada, sumados a un conducto de aire de baja resistencia.",
      "El filtro es antibacteriano de tipo 3D, lavable, con una vida recomendada de entre 6 y 12 meses según el uso. Xiaomi declara una eficacia antibacteriana superior al 99,9% frente a E. coli y Staphylococcus aureus. Con estos porcentajes conviene la misma cautela de siempre, la que ya aplicamos con la protección antimicrobiana de 28 días del Levoit NeoClassic. Son datos de laboratorio del propio fabricante. Sirven de referencia, no sustituyen a lavar el filtro y el depósito con la frecuencia que marca el manual, y nosotros nos fiamos bastante más de esa rutina que de la cifra.",
      "Lo más práctico para quien nos lee desde España es el precio. En la tienda oficial de Xiaomi el Mijia Smart Evaporative Humidifier Pro figura a 99,99 €. En Amazon España la cosa cambia, porque todavía no hay oferta directa de Xiaomi ni de Amazon. Las siete ofertas disponibles hoy vienen de vendedores terceros, y la más barata está en 106,03 € con envío gratuito gestionado por Tienda Siglo XXI, un vendedor con un 73% de valoraciones positivas en los últimos 12 meses.",
      "Así que merece la pena comparar antes de comprar. Hoy la tienda oficial sale más a cuenta que Amazon si no te importa esperar el envío desde fuera.",
      "Si buscas evaporativo y lo quieres ya disponible con vendedor de confianza en España, el Philips HU2716 NanoCloud que tenemos analizado sigue siendo nuestra referencia en esta tecnología. Y si prefieres quedarte con un Xiaomi conectado aunque sea con tecnología distinta, el Xiaomi Smart Humidifier 2 sigue siendo la opción real de la marca disponible hoy con vendedor directo en Amazon España.",
      "Habrá que esperar a que lleguen más unidades y opiniones de uso real para confirmar si el ruido declarado y la promesa de bajo mantenimiento del filtro se sostienen fuera del laboratorio. Por ahora es la novedad evaporativa más reciente de Xiaomi, ya se puede comprar desde España y el precio tiene matices que conviene mirar antes de decidir dónde comprarlo.",
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/dp/B0G6G6RXZW?tag=david0e98-21",
      },
    ],
  },
  {
    slug: "cuando-encender-el-humidificador-higrometro",
    titulo: "¿Cuándo hay que encender el humidificador? El calendario no manda, el higrómetro sí",
    metaTitulo: "¿Cuándo hay que encender el humidificador?",
    fecha: "2026-08-23",
    categoria: "Guías",
    resumen:
      "Cada final de agosto nos preguntáis lo mismo, y la respuesta no es una fecha. Al humidificador no lo enciende septiembre, lo enciende la calefacción. Encenderlo antes de tiempo tampoco sale gratis, aunque casi nadie cuente esa parte.",
    metaDescripcion:
      "No hay fecha fija: el humidificador lo enciende la calefacción, no el calendario. Encenderlo antes de tiempo tiene un coste que casi nadie cuenta.",
    imagenPortada: {
      src: philipsImg,
      alt: "Humidificador evaporativo Philips HU2716 NanoCloud, con higrostato y modo automático",
      credito: "Imagen: Philips / Versuni",
    },
    contenido: [
      "Todos los años, más o menos por estas fechas, empieza a llegarnos la misma pregunta por correo. ¿Cuándo hay que empezar a usar el humidificador? Quien se lo compró el invierno pasado lo tiene guardado en un armario desde marzo, ve que agosto se acaba y quiere saber si toca sacarlo ya. La respuesta corta es que no hay una fecha, y que quien te dé una se la está inventando. La larga es bastante más útil, porque explica de qué depende esto de verdad y te ahorra tener el aparato funcionando semanas antes de que haga ninguna falta.",
      "Empecemos por lo que casi todo el mundo tiene del revés. A tu casa no la seca el frío, la seca la calefacción. Suena contradictorio, porque asociamos el aire seco al invierno, pero el mecanismo es exactamente ese. El aire frío de la calle contiene muy poca agua en cantidad absoluta, aunque el parte meteorológico diga que la humedad relativa exterior es del 80 o del 90 por ciento. Cuando ese aire entra en tu casa y lo calientas hasta los 21 grados, la cantidad de agua que lleva dentro no cambia, pero la capacidad de ese aire para admitir vapor se dispara. Esa misma agua, repartida ahora en un aire con mucha más capacidad, se traduce en una humedad relativa mucho más baja. Por eso el día que enciendes el radiador es el día que tu casa empieza a secarse de verdad, y no el día que baja el termómetro.",
      "De ahí sale la regla práctica más fiable que podemos darte. Al humidificador no lo enciende el calendario, lo enciende la calefacción. Mientras no haya calefacción funcionando de forma sostenida, es muy raro que una casa española necesite humidificación, por mucho que estemos ya en septiembre y la sensación general sea que el verano se acaba.",
      "Conviene tener en la cabeza qué números son los razonables. El RITE, el reglamento español de instalaciones térmicas que [ya repasamos en su día](/blog/humedad-ideal-en-casa-2026) junto a las recomendaciones de la OMS, plantea para el diseño de instalaciones una humedad relativa interior en torno al 40-50 por ciento en invierno con calefacción, y algo más alta, del 45 al 60 por ciento, en verano con refrigeración. No es una norma que te obligue a nada en tu salón. Sí es la mejor referencia disponible de qué se considera confortable y salubre en una vivienda en España.",
      "Lo que casi nadie cuenta es que humidificar antes de tiempo no es una decisión neutra. No es que no sirva de nada, es que puede hacer daño, y el motivo tiene nombre y apellidos. Los ácaros del polvo doméstico, la principal causa de alergia respiratoria en España, dependen de la humedad del aire de una forma bastante literal.",
      "Los ácaros no beben agua, la absorben directamente del aire a través de su cutícula. Para ellos la humedad ambiental no es una comodidad, es una condición de supervivencia. Las cifras que maneja la literatura son bastante concretas. El Dermatophagoides farinae encuentra su óptimo entre el 50 y el 60 por ciento de humedad relativa, y el Dermatophagoides pteronyssinus, la especie más común en zonas húmedas, prefiere valores por encima del 75 por ciento. Por debajo del 50 por ciento la cosa se les complica seriamente, porque no consiguen captar agua suficiente y acaban muriendo. En el otro sentido funciona igual de bien. Por encima de ese 50 por ciento y con temperaturas de entre 20 y 37 grados, que es exactamente el clima de una casa con calefacción, su proliferación se acelera.",
      "Por eso a los pacientes alérgicos a ácaros se les recomienda justo lo contrario de lo que dicta la intuición, mantener la humedad relativa por debajo del 50 por ciento y evitar de forma expresa los humidificadores que la suban por encima del 60. Si en tu casa hay alguien con asma o rinitis alérgica por ácaros, encender el humidificador en septiembre por si acaso, sin haber medido nada, no es una precaución inofensiva. Es empujar el ambiente justo hacia la franja en la que los ácaros se multiplican mejor.",
      "Así que antes de nada, mide. Es el paso previo que casi nadie da y que cuesta menos que cualquier accesorio del aparato. Un higrómetro decente vale poco más que un par de cafés, y sin ese número estás decidiendo a ciegas sobre algo cuyo rango correcto es bastante estrecho. Nuestra recomendación es medir en el dormitorio, que es donde pasas más horas seguidas respirando el mismo aire, por la noche, y colocando el aparato lejos del propio humidificador y de radiadores o ventanas. A medio metro de la salida de vapor, cualquier higrómetro te dará un número que no representa la habitación.",
      "Con el número delante, la decisión casi se toma sola. Si mides por debajo del 40 por ciento de forma sostenida y la calefacción ya está funcionando, el humidificador está justificado y hará un trabajo real. Si te mueves entre el 40 y el 50, estás justo donde hay que estar, y lo mejor que puedes hacer es no tocar nada. Y si mides por encima del 50 o 55 por ciento, encender un humidificador sobra y además juega en tu contra, porque lo que tienes ahí es probablemente el problema opuesto, ventilación insuficiente o exceso de humedad, que es otra conversación distinta.",
      "Los síntomas son una pista, nunca un veredicto. Levantarte con la garganta seca, notar calambres de electricidad estática al tocar el pomo de una puerta, los labios agrietados o las juntas del parqué abriéndose son señales clásicas de aire seco, y está bien fijarse en ellas. En septiembre engañan mucho, eso sí. La garganta seca al despertar puede venir perfectamente del aire acondicionado que aún estás usando, de la alergia al polen o de dormir con la boca abierta por una congestión. Fíate antes del higrómetro que de la sensación.",
      "Tampoco va toda España al mismo ritmo, y ahí está buena parte de por qué las recomendaciones genéricas de internet fallan tanto. En el interior peninsular, con inviernos fríos, ambiente seco y muchas horas de calefacción al día, la humedad interior cae con facilidad por debajo del 40 por ciento y el humidificador tiene todo el sentido. En la cornisa cantábrica y en buena parte del litoral mediterráneo, en cambio, la humedad ambiental es lo bastante alta durante casi todo el año como para que muchas casas no lleguen a necesitarlo nunca. Allí el aparato acaba siendo un gasto que no resuelve ningún problema real.",
      "Entonces, si todavía no toca encenderlo, ¿qué tiene sentido hacer ahora, a finales de agosto? Preparar el terreno, que tampoco es poca cosa. Ese humidificador lleva desde marzo guardado en un armario, probablemente con restos de agua en algún recoveco, con el filtro tal como quedó al final de la temporada pasada y con la cal acumulada de meses de uso. Este es el momento tranquilo para vaciarlo del todo, hacerle un ciclo de descalcificación con vinagre, revisar si el filtro necesita recambio y comprobar que enciende y funciona. Mejor eso que descubrir el primer día de frío que el aparato huele raro o que el filtro está para tirar. Todo lo que contamos en su día sobre [limpieza y prevención de la fiebre del humidificador](/blog/fiebre-del-humidificador-prevencion) aplica aquí de lleno, y el arranque de temporada es justo cuando más importa.",
      "¿Y si lo que estás es pensando en comprar uno para esta temporada? Con todo lo anterior encima de la mesa, hay una característica que importa más de lo que parece, el higrostato con modo automático. Es lo que te permite fijar un objetivo, digamos el 45 por ciento, y que el aparato se pare solo al alcanzarlo en vez de seguir soltando vapor hasta convertir el dormitorio en un invernadero. Un humidificador sin higrostato depende por completo de que tú te acuerdes de apagarlo, y esa es precisamente la vía por la que se acaba pasando del 60 por ciento sin enterarte.",
      "En el catálogo que tenemos analizado, los modelos que sí llevan higrostato y modo automático son el Levoit Dual 200S, el Philips HU2716 NanoCloud, el Rowenta Aqua Boost, el Winix L500 y el Xiaomi Smart Humidifier 2. El Cecotec Pure Aroma 300 Yang, que es el modelo de entrada más económico, no lo incluye, y conviene saberlo antes de comprarlo. No es un mal aparato para su precio, pero exige que seas tú quien vigile el nivel de humedad, y eso, en la práctica, casi nadie lo hace de forma constante.",
      "Ya sabemos que no es la respuesta que esperabas si tenías el dedo en el enchufe, así que nos quedamos con una idea. No hay fecha de inicio de temporada, hay un disparador, y el disparador es la calefacción. Antes de eso, mide. Si el número está entre 40 y 50, no hagas nada, que es la mejor decisión posible. Y si hay alergia a ácaros en casa, recuerda que el humidificador puede jugar en tu contra cuando lo usas sin medir. El mejor humidificador, al final, es el que sabe estarse apagado cuando no hace falta.",
    ],
    imagenes: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: levoitImg,
        alt: "Levoit Dual 200S, humidificador ultrasónico con higrostato y modo automático",
        credito: "Imagen: Levoit / VeSync",
      },
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/dp/B08LW4K16N?tag=david0e98-21",
      },
    ],
  },
  {
    slug: "xiaomi-purifying-humidifier-3-pro-purificador-humidificador",
    titulo:
      "Xiaomi ya vende el Purifying Humidifier 3 Pro, que purifica y humidifica por separado en el mismo aparato",
    metaTitulo: "Xiaomi Purifying Humidifier 3 Pro",
    fecha: "2026-08-31",
    categoria: "Novedades",
    publicado: true,
    resumen:
      "Xiaomi ha puesto a la venta en China el Mijia Purifying Humidifier 3 Pro, con depósito de 8 litros, hasta 2.000 ml/h y un filtro de seis capas cuyo CADR es de 422 m³/h. Aquí no ha llegado. Lo que nos interesa de él, si en casa hay alergia, es que las dos funciones trabajan por separado.",
    metaDescripcion:
      "Xiaomi vende en China el Purifying Humidifier 3 Pro: 8 L, 2.000 ml/h y CADR de 422 m³/h. Aún no está en España; te contamos qué aporta.",
    imagenPortada: {
      src: xiaomiPuri3ProImg,
      alt: "Xiaomi Mijia Purifying Humidifier 3 Pro, purificador y humidificador 2 en 1, en un salón",
      credito: "Imagen: Xiaomi",
    },
    contenido: [
      "Xiaomi ya vende en China el Mijia Purifying Humidifier 3 Pro, un aparato que purifica el aire y lo humidifica a la vez. Antes pasó por Youpin, la plataforma de financiación colectiva de la marca, a finales de julio, y desde el 10 de agosto está a la venta de forma normal en JD.com por 1.999 yuanes, unos 265 euros al cambio.",
      "Aquí no se puede comprar. No está en Amazon España ni en la tienda española de Xiaomi, y nadie ha anunciado fecha para que llegue. Lo contamos de todos modos, porque la idea que hay detrás sí es relevante para mucha gente que nos lee, y en particular para quien convive con una alergia respiratoria.",
      "Las cifras que declara la marca llaman la atención incluso a quien está acostumbrado a leer fichas técnicas de esta categoría. Depósito de 8 litros, extraíble, con asa, y se puede rellenar también por arriba sin desmontar nada. El caudal máximo de humidificación llega a los 2.000 mililitros por hora. Para hacerse una idea de lo que es eso, son entre tres y diez veces lo que mueven los humidificadores domésticos que solemos analizar aquí, porque el Philips HU2716 que tenemos en catálogo entrega 200 ml/h y el Xiaomi evaporativo que ya se vende en España se queda en 600 ml/h.",
      "En purificación, Xiaomi declara un CADR de 422 m³/h para partículas y de 247 m³/h para formaldehído. El ruido en modo noche queda en 28,1 dB(A). La autonomía, en unas 16 horas seguidas.",
      "El fabricante presume además de velocidad. Dice que humidifica un dormitorio estándar en siete minutos y un salón amplio en unos diecinueve. Esas cifras hay que leerlas con la prudencia de siempre, porque son datos de laboratorio de la propia marca y no una medición independiente, igual que hacemos con el 99,97% de menos bacterias que anuncia Philips o con la protección antimicrobiana que declara Levoit. Sirven para hacerse una idea del orden de magnitud, no como promesa de lo que pasará en tu casa.",
      "A nosotros, sin embargo, lo que nos interesa de verdad de este aparato no está en ninguno de esos números, sino en un detalle de diseño que se menciona casi de pasada. La purificación y la humidificación funcionan de forma independiente. Puedes tener el filtro trabajando sin que el aparato suelte ni una gota de humedad al ambiente, y para quien tiene alergia esa es justo la función que necesita.",
      "Ya lo explicamos al hablar de [cuándo hay que encender el humidificador](/blog/cuando-encender-el-humidificador-higrometro), y merece la pena repetirlo, porque es el malentendido más caro de esta categoría. Si tu alergia es a los ácaros del polvo, humidificar te perjudica en lugar de ayudarte. Los ácaros absorben el agua directamente del aire, y por encima del 50% de humedad relativa se reproducen mejor. Por eso a un paciente alérgico a ácaros se le recomienda mantener la humedad por debajo del 50% y evitar los humidificadores que la suban del 60, justo al revés de lo que vende esta categoría de producto. Lo que sí reduce la carga de alérgenos en el aire es filtrarlo, y filtrar es la otra mitad de este aparato.",
      "El filtro es un compuesto de seis capas que, según Xiaomi, retiene partículas grandes, PM1, PM2,5, formaldehído y alérgenos comunes. En el circuito de humidificación hay además un sistema de esterilización por agua electrolizada y un filtro antibacteriano lavable, más una pulverización unidireccional pensada para que el agua no recircule ni se quede estancada dentro del aparato, y un ciclo de autolimpieza.",
      "Nada de eso es decorativo. Un depósito con agua parada y biofilm acumulado convierte al humidificador en un difusor de bacterias, que es el problema que explicamos al hablar de [la fiebre del humidificador](/blog/fiebre-del-humidificador-prevencion). En una casa con alguien alérgico o asmático, eso es exactamente lo contrario de lo que buscabas al comprarlo.",
      "El resto de la ficha es lo esperable en un aparato de este tamaño y precio. Motor de corriente continua sin escobillas, pantalla LCD semiesférica con brillo adaptativo que muestra cinco datos a la vez, ruedas giratorias para llevarlo de una habitación a otra, control desde la app Mijia y por voz con el asistente XiaoAI. Esto es un mueble y no un aparato de mesilla, así que quien busque algo discreto para un dormitorio pequeño está mirando el producto equivocado.",
      "Hay que decir también dónde está el riesgo de un aparato así en manos de quien tiene alergia. Dos mil mililitros por hora en un dormitorio cerrado es muchísima agua, y sin un higrostato bien ajustado resulta facilísimo pasar del 60% de humedad relativa sin enterarte, que es precisamente la franja en la que proliferan ácaros y moho.",
      "En esta categoría la potencia bruta no nos parece una virtud. Lo que vale es que el aparato sepa pararse a tiempo, y si algún día llega a España ese sería el punto que habría que mirar con lupa en un análisis serio, por delante de los siete minutos del titular.",
      "¿Y qué se puede comprar hoy desde aquí? De Xiaomi sí ha llegado la parte evaporativa, porque la marca vende en España el [Mijia Smart Evaporative Humidifier Pro](/blog/xiaomi-mijia-smart-evaporative-humidifier-pro-espana), aunque en Amazon lo hemos visto solo a través de vendedores externos. Para una casa con alergias, donde la higiene manda, nuestra referencia en tecnología evaporativa sigue siendo el [Philips HU2716 NanoCloud](/producto/philips-hu2716-nanocloud), que no pulveriza agua en gotas y por tanto no dispersa minerales ni polvo blanco por la habitación. Insistimos mucho con esa diferencia, ya lo sabemos, y la tienes desarrollada en nuestra guía de [evaporativo frente a ultrasónico](/blog/evaporativo-vs-ultrasonico-cual-elegir).",
      "De este lanzamiento no nos llevamos que haya que esperar a este aparato concreto, que igual no llega nunca a nuestro mercado. Nos llevamos que la industria está empezando a montar las dos funciones en la misma carcasa dejándolas separar, y ese formato sí tiene sentido para una casa con alergia, porque permite filtrar siempre y humidificar solo cuando el higrómetro dice que hace falta.",
      "Quien tenga que elegir hoy entre un purificador y un humidificador, y tenga alergia a ácaros o a polen, que empiece por el purificador. El humidificador es para el aire seco del invierno con calefacción, y solo después de haber medido.",
    ],
    imagenes: [
      undefined,
      {
        src: xiaomiPuri3ProLlenadoImg,
        alt: "Depósito de 8 litros del Xiaomi Mijia Purifying Humidifier 3 Pro, se rellena por arriba sin desmontarlo",
        credito: "Imagen: Xiaomi",
      },
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: xiaomiPuri3ProPantallaImg,
        alt: "Pantalla LCD superior del Xiaomi Mijia Purifying Humidifier 3 Pro, con PM2.5, temperatura y humedad en tiempo real",
        credito: "Imagen: Xiaomi",
      },
      undefined,
      undefined,
      undefined,
    ],
    afiliados: [
      {
        comercio: "Amazon",
        href: "https://www.amazon.es/dp/B08LW4K16N?tag=david0e98-21",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  const post = blogPosts.find((p) => p.slug === slug);
  return post && post.publicado !== false ? post : undefined;
}

export const blogPostsPublicados = blogPosts.filter((p) => p.publicado !== false);

export const blogPostsOrdenados = [...blogPostsPublicados].sort(
  (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
);

/** Posts publicados que mencionan un producto por su nombre — para enlazar desde su ficha */
export function getPostsRelacionadosConProducto(nombreProducto: string) {
  const nombre = nombreProducto.toLowerCase();
  return blogPostsOrdenados.filter(
    (p) =>
      p.titulo.toLowerCase().includes(nombre) ||
      p.resumen.toLowerCase().includes(nombre) ||
      p.contenido.some((parrafo) => parrafo.toLowerCase().includes(nombre)),
  );
}
