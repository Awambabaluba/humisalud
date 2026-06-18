import levoitImg from "@/assets/products/levoit-dual-200s.webp";
import philipsImg from "@/assets/products/philips-hu2716-nanocloud.webp";
import xiaomiImg from "@/assets/products/xiaomi-smart-humidifier-2.webp";
import cecotecImg from "@/assets/products/cecotec-pure-aroma-300-yang.webp";
import winixImg from "@/assets/products/winix-l500.webp";
import rowentaImg from "@/assets/products/rowenta-aqua-perfect.webp";

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
  fecha: string;
  resumen: string;
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
    titulo: "¿Cuál es la humedad ideal en casa? Lo que dicen RITE y la OMS",
    fecha: "2026-06-08",
    categoria: "Salud",
    resumen:
      "Repasamos qué rango de humedad relativa recomiendan las normativas de referencia y qué pasa si te sales de él, por arriba o por abajo, con ejemplos de lo que pasa en una casa española de verdad.",
    imagenPortada: {
      src: levoitImg,
      alt: "Humidificador Levoit Dual 200S funcionando en un dormitorio",
      credito: "Imagen: Levoit / VeSync",
    },
    contenido: [
      "Hay una cosa que casi nadie revisa en su casa y que probablemente debería: la humedad del aire. Todo el mundo tiene un termostato, todo el mundo sabe si en el salón hace frío o calor, pero pregúntale a alguien cuánta humedad relativa hay en su dormitorio y lo más normal es que se quede en blanco. Y sin embargo, ese dato explica por qué te despiertas con la garganta como papel de lija en febrero, por qué la piel se te agrieta en los nudillos en cuanto llega el frío, o por qué el bebé tose por las noches sin tener ningún resfriado de por medio.",
      "El Reglamento de Instalaciones Térmicas en los Edificios, el RITE, que es la normativa española que regula estas cosas, sitúa el confort higrotérmico de interiores entre el 40% y el 60% de humedad relativa. No es un capricho técnico: es el rango en el que el cuerpo humano se encuentra cómodo, las mucosas no se resecan y, al mismo tiempo, no se favorece la aparición de moho ni de ácaros. Por debajo del 30% empiezan los problemas típicos del invierno con calefacción: nariz seca, garganta irritada, piel tirante, más electricidad estática de la cuenta cuando tocas el pomo de una puerta. Por encima del 65%, en cambio, el problema cambia de cara pero no de gravedad: condensación en las ventanas, manchas de humedad en las esquinas, y un caldo de cultivo perfecto para ácaros y moho en cuestión de semanas.",
      "La Organización Mundial de la Salud lleva años señalando la relación directa entre la humedad de las viviendas y los problemas respiratorios, sobre todo en población infantil y en personas con asma o alergias. No es casualidad que las consultas de pediatría se llenen de toses nocturnas justo cuando empieza la temporada de calefacción. El aire seco irrita las vías respiratorias altas y las deja más vulnerables a virus que, por otro lado, también sobreviven mejor en ambientes secos. Y el aire excesivamente húmedo, por la vía contraria, dispara la población de ácaros del polvo, uno de los alérgenos domésticos más comunes, que se reproducen especialmente bien por encima del 60-65% de humedad.",
      "El dormitorio suele ser la habitación más castigada, y por una razón muy concreta: pasamos ahí entre seis y nueve horas seguidas, con la puerta cerrada, sin ventilar, y muchas veces con la calefacción puesta toda la noche en invierno. Si encima el radiador es de los antiguos, de esos que caldean rápido pero no añaden ni una gota de humedad al ambiente, el resultado es que te metes en la cama con un 45% de humedad relativa y te despiertas con un 22%. La sensación de sequedad en la garganta que notas al levantarte no es cosa tuya: es literalmente el aire de la habitación deshidratándote mientras duermes, poco a poco, sin que te enteres.",
      "Aquí es donde mucha gente se confunde y piensa que el problema de la humedad es solo cosa del invierno. En verano, con el aire acondicionado a tope, pasa exactamente lo contrario pero con el mismo resultado final: los equipos de A/C deshumidifican el aire como efecto secundario de enfriarlo, así que si vives en una zona ya de por sí seca (buena parte del interior peninsular, por ejemplo), puedes acabar con una humedad relativa ridículamente baja también en pleno agosto, solo que nadie lo asocia porque está pensando en el calor y no en la sequedad.",
      "Lo curioso es que el cuerpo se acostumbra a la sequedad mucho antes de que sea saludable, de la misma manera que te acostumbras al desorden de una habitación hasta que dejas de verlo. Por eso fiarse de la sensación térmica o de \"cómo se respira\" no funciona: para cuando notas molestias evidentes, lleva semanas o meses por debajo del umbral recomendado. La única forma fiable de saberlo es medirlo, con un higrómetro, que hoy cuesta menos que un café con tostada y que muchos humidificadores con app ya traen integrado de fábrica.",
      "Hablando de medir: si tienes un humidificador con sensor de humedad y modo automático, como el Levoit Dual 200S de la foto de portada, lo que hace es justamente eso — vigilar el porcentaje real del ambiente y ajustar el caudal de vapor para mantenerte dentro del rango saludable sin que tengas que estar pendiente. Es la diferencia entre encender un aparato a ciegas y dejarlo toda la noche a tope, o tener algo que de verdad sabe cuándo parar.",
      "Otra cosa que conviene aclarar: el rango de 40-60% no es una zona donde \"más es mejor\". Hay gente que, al enterarse de que el aire seco es malo, se va al otro extremo y mantiene el humidificador encendido a máxima potencia todo el día, todos los días. El resultado, si no tienes higrostato que corte automáticamente, es empujar la humedad por encima del 65% sin darte cuenta, con la sorpresa de moho en las esquinas de las ventanas al cabo de un mes. El objetivo no es humedecer, es equilibrar.",
      "Esto es precisamente lo que hace tan interesante la tecnología evaporativa, como la del Philips HU2716 NanoCloud: al funcionar empapando un filtro con un ventilador detrás, el propio sistema se autorregula — cuanto más seco está el ambiente, más rápido evapora el agua del filtro, y cuanto más húmedo, más lento. Es casi imposible pasarse de humedad con un evaporativo bien dimensionado, lo cual lo convierte en una opción razonable para quien tiene miedo de \"hacerlo mal\" con el humidificador.",
      "Hay grupos de población para los que este equilibrio importa todavía más: bebés, personas mayores y quienes tienen alguna patología respiratoria de base (asma, EPOC, alergias estacionales fuertes). En todos estos casos, tanto el extremo seco como el extremo húmedo tienen consecuencias más serias y más rápidas que en un adulto sano. Si en tu casa hay alguien en estas circunstancias, no es capricho llevar un control algo más estricto del rango de humedad, sobre todo en el dormitorio donde duerme esa persona.",
      "Para quien quiera ir más allá de \"comprar un humidificador y ya veremos\", lo razonable es calcular antes cuántos litros por hora necesita realmente la habitación, según sus metros cuadrados y la altura del techo. No es lo mismo equipar un dormitorio de 12 m² que un salón de 30 con techos altos, y comprar por estética en vez de por caudal real es el error número uno que vemos repetirse en las reseñas de gente que se queja de que \"no nota nada\". Si quieres hacerlo bien desde el principio, en nuestra calculadora puedes meter tus metros y te decimos qué caudal necesitas de verdad.",
      "Un error muy habitual es colocar el humidificador justo al lado de la mesilla de noche, pegado al móvil que está cargando o cerca de un enchufe regletero. El vapor, aunque parezca inofensivo, deja una fina capa de humedad sobre cualquier superficie cercana, y a la larga eso no le sienta bien a los componentes electrónicos. La recomendación de los propios fabricantes —que casi nadie lee porque viene en la letra pequeña del manual— es dejar al menos medio metro de distancia con cualquier aparato eléctrico y, si puedes, colocarlo a una altura media, ni a ras de suelo ni encima de un mueble muy alto, para que el vapor se reparta de forma uniforme por la habitación en vez de acumularse en una esquina.",
      "Otro mito que conviene desmontar: las plantas de interior no son un sustituto real de un humidificador, aunque internet esté lleno de listas de \"plantas que humidifican tu casa\". Es cierto que las plantas liberan algo de vapor de agua por transpiración, pero la cantidad es tan pequeña comparada con el volumen de aire de una habitación que el efecto medible sobre la humedad relativa es prácticamente insignificante salvo que llenes la casa de decenas de plantas grandes, lo cual trae sus propios problemas de mantenimiento. Son una ayuda estética y psicológica, no una solución higrotérmica.",
      "Si vives en un edificio antiguo, sin doble acristalamiento ni aislamiento térmico moderno, el problema de la humedad se complica por otro frente: la pérdida de calor es tan alta que la calefacción tiene que trabajar más tiempo y a más potencia para mantener una temperatura agradable, y cuanto más tiempo está encendida la calefacción, más se reseca el ambiente de forma acumulativa a lo largo del día. En estos casos, un humidificador no es un lujo añadido, es casi una pieza más del sistema de climatización, tan necesario como el propio radiador para que el resultado final sea realmente confortable y no solo \"caliente pero seco\".",
      "También nos preguntan a menudo cuánto se tarda en notar la diferencia después de empezar a usar un humidificador. La respuesta honesta, según lo que cuentan los propios usuarios en las reseñas que hemos revisado para este estudio, es que la sequedad de garganta y nariz suele mejorar en pocos días, casi de inmediato, mientras que cosas como la piel agrietada de las manos o la electricidad estática tardan algo más, entre una y dos semanas, porque son efectos acumulados que necesitan su tiempo para revertirse igual que tardaron en aparecer.",
      "Y un último aviso importante, que se nos queda corto si no lo decimos claro: ventilar la casa cinco o diez minutos al día sigue siendo imprescindible, humidificador o no. Un error que vemos repetirse es pensar que como ya tienes el humidificador puesto, ya no hace falta abrir ventanas, y eso es un planteamiento equivocado: ventilar renueva el aire, se lleva el CO2 acumulado y los contaminantes del ambiente interior, cosas que ningún humidificador soluciona por sí solo. Lo ideal es ventilar brevemente y luego, con la ventana cerrada, dejar que el humidificador haga su trabajo de mantener el equilibrio el resto del día.",
      "En cuanto al gasto eléctrico de tener el humidificador funcionando varias horas al día durante todo el invierno, las cifras son bastante más modestas de lo que la gente suele imaginar: un modelo ultrasónico de tamaño medio, encendido unas ocho horas diarias, consume en torno a 15-20 kWh al mes, lo que al precio actual de la electricidad se traduce en unos pocos euros mensuales, muy por debajo de lo que cuesta tener la calefacción encendida ese mismo tiempo. Es un argumento que solemos repetir porque mucha gente descarta el humidificador pensando que va a notarlo en la factura, cuando en realidad el coste real es prácticamente residual comparado con el beneficio en confort y en menos resfriados de la familia durante los meses fríos.",
      "El otro error de cálculo habitual, y este sí tiene impacto real en si el aparato cumple o no su función, es comprar por estética o por lo que ocupa en la estantería en vez de por la cobertura real en metros cuadrados que necesita la habitación. Un humidificador pensado para 15 m² metido en un salón de 30 con techos altos va a estar siempre forzado al máximo sin conseguir nunca el rango de humedad deseado, y eso genera la falsa sensación de que \"el aparato no funciona\", cuando en realidad el problema es puramente de dimensionado. Antes de comprar, merece la pena hacer el cálculo con los metros reales del espacio, la altura del techo y las horas de uso previstas, en vez de fiarse solo de la foto del producto.",
      "Al final, todo esto no va de perseguir un número exacto con obsesión de laboratorio, sino de tener una casa donde se respire bien: sin la garganta raspada al despertar, sin la piel tirante en invierno, sin condensación pegajosa en los cristales en noviembre. Esta noche, antes de acostarte, no estaría de más echar un vistazo a un higrómetro si tienes uno a mano. Es muy probable que el número que veas explique alguna de esas pequeñas molestias que llevas semanas achacando a cualquier otra cosa menos a la más obvia: el aire que respiras dentro de tu propia casa.",
    ],
    imagenes: [
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      {
        src: xiaomiImg,
        alt: "Humidificador inteligente Xiaomi con control por aplicación móvil",
        credito: "Imagen: Xiaomi",
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
      { comercio: "Amazon", href: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG" },
    ],
  },
  {
    slug: "evaporativo-vs-ultrasonico-cual-elegir",
    titulo: "Evaporativo vs. ultrasónico: la pregunta que más nos hacéis",
    fecha: "2026-06-15",
    categoria: "Guías",
    resumen:
      "Las dos tecnologías más vendidas resuelven el mismo problema de formas muy distintas. Aquí la diferencia real, no la de la ficha de marketing, con ejemplos de cuándo conviene cada una.",
    imagenPortada: {
      src: philipsImg,
      alt: "Humidificador evaporativo Philips HU2716 NanoCloud sobre una mesa de salón",
      credito: "Imagen: Philips / Versuni",
    },
    contenido: [
      "Si hay una pregunta que se repite semana tras semana en los comentarios y en los correos que nos llegan, es esta: ¿evaporativo o ultrasónico? Y la respuesta corta —\"depende\"— se queda corta de verdad, porque no es solo una cuestión de presupuesto, es una cuestión de cómo funciona cada aparato por dentro y qué consecuencias tiene eso en tu salón o en tu dormitorio durante los próximos tres años, no solo el primer mes de uso.",
      "Empecemos por el que más se vende: el ultrasónico. Por dentro lleva una membrana piezoeléctrica que vibra a una frecuencia altísima, tan rápido que rompe el agua en gotitas microscópicas que salen disparadas como una nube de vapor frío. Es un mecanismo sencillo, barato de fabricar, silencioso por naturaleza, y esa es la razón por la que domina el mercado de entrada y de gama media: cualquier marca puede sacar un modelo de 25-40 euros que cumple sobradamente para un dormitorio pequeño.",
      "El problema del ultrasónico aparece en cuanto usas agua del grifo en una zona de agua dura, que en España es casi toda la mitad sur y buena parte del interior. La membrana no distingue entre moléculas de agua y minerales disueltos (calcio, magnesio), así que los expulsa igual que el agua, en forma de un polvo blanco finísimo que se va depositando sobre los muebles, la pantalla de la tele, y —esto es lo que de verdad nos preocupa— en tus propios pulmones, porque lo estás respirando sin darte cuenta noche tras noche.",
      "La solución de toda la vida es usar agua destilada o desmineralizada en el ultrasónico, lo cual elimina casi del todo el problema del polvo blanco pero añade un coste recurrente (las garrafas de agua destilada) y una tarea más a la lista de cosas que hay que acordarse de hacer. Si vives solo y te organizas bien, no es gran cosa. Si tienes una casa con niños, trabajo y mil cosas más en la cabeza, es de esas tareas que se acaban olvidando, y entonces vuelve el polvo blanco.",
      "El evaporativo —como el Philips HU2716 NanoCloud de la portada de este artículo— funciona de una manera completamente distinta: un ventilador empuja aire a través de un filtro empapado de agua, y es ese paso a través del filtro el que humedece el aire, sin atomizar nada ni expulsar minerales. El filtro actúa de barrera: la cal y los minerales del agua se quedan retenidos ahí dentro, no salen disparados a la habitación. Esto significa que puedes usar agua del grifo sin miedo al polvo blanco, una ventaja nada pequeña si vives en zona de agua dura y no quieres complicarte la vida.",
      "Pero el evaporativo tiene una ventaja todavía menos conocida y que, para mí, es la más interesante de las dos tecnologías: se autorregula solo. Cuanto más seco está el ambiente, más rápido se evapora el agua del filtro (por pura física, la evaporación va más rápido cuanto menor es la humedad relativa del aire que pasa por encima), y cuanto más húmedo está, más lento. El resultado práctico es que es casi imposible pasarse de humedad con un evaporativo: el propio sistema frena solo cuando el ambiente ya está suficientemente húmedo, sin necesidad de higrostato electrónico ni de que tú estés pendiente del aparato.",
      "La contrapartida, porque siempre hay una, es el mantenimiento del filtro. En el caso del Philips, el filtro FY3446 tiene una vida útil recomendada de hasta seis meses, y aunque no es caro en comparación con el aparato, es un gasto que se repite y que hay que recordar. Si no cambias el filtro cuando toca, no es solo que pierda eficacia: un filtro viejo y húmedo durante meses es exactamente el tipo de sitio donde proliferan bacterias, así que el mantenimiento del evaporativo no es opcional si quieres que siga siendo la opción higiénica que se supone que es.",
      "Para quien quiere algo intermedio sin complicarse con filtros, existe una tercera vía que mencionamos de pasada porque no es el tema central de este artículo: los modelos con tecnología UV-C, como el Xiaomi Smart Humidifier 2, que siguen siendo ultrasónicos en esencia (vaporizan agua) pero añaden una lámpara ultravioleta interna que, según el fabricante, reduce la carga bacteriana del agua antes de expulsarla. Funciona, pero solo si limpias el depósito con la regularidad que toca: la luz UV-C no es magia que sustituya a la higiene básica.",
      "Entonces, ¿cuál elegir? Si lo que buscas es para un dormitorio o la habitación de un bebé, y puedes comprometerte a usar agua destilada (o tienes ya un descalcificador en casa), el ultrasónico de gama media-alta con higrostato y modo automático —como el Levoit Dual 200S— es una apuesta segura: silencioso, controlado, sin sorpresas de humedad excesiva gracias al sensor. Si en cambio tienes alergias, vives en zona de agua muy dura y no quieres ni pensar en comprar garrafas de agua destilada cada semana, el evaporativo te quita ese problema de encima desde el primer día, a cambio de acordarte de cambiar el filtro un par de veces al año.",
      "Hay un tercer escenario que no debería ignorarse: el presupuesto ajustado para una habitación pequeña, donde un ultrasónico básico de menos de 30 euros, como el Cecotec Pure Aroma 300 Yang, cumple perfectamente su función siempre que se sea consciente de sus límites — depósito pequeño, sin higrostato, y la obligación de usar agua filtrada o destilada si no quieres polvo blanco en los muebles. No es mejor ni peor que las otras opciones, es simplemente una herramienta distinta para una necesidad distinta, y pretender que un modelo de 25 euros rinda como uno de 100 es la receta segura para la decepción.",
      "Algo en lo que insistimos siempre y que aquí cobra especial sentido: las cifras de \"99,9% antibacteriano\" o \"elimina el 99,97% de las bacterias\" que aparecen en las cajas de casi todos estos aparatos, sean evaporativos, ultrasónicos o UV-C, son datos del propio fabricante, obtenidos en condiciones de laboratorio que rara vez se reproducen en una casa normal con polvo, mascotas y ventanas abiertas. No decimos que sean mentira, decimos que hay que leerlas como lo que son: un argumento de venta, no una garantía médica verificada por un tercero independiente.",
      "En cuanto al ruido, que es uno de los factores que más nos preguntan para dormitorios, los ultrasónicos suelen llevar ventaja por diseño: al no tener motor de ventilador moviendo aire de forma continua, los mejores modelos bajan de los 26-28 decibelios en modo nocturno, un nivel que la mayoría de personas ni siquiera percibe mientras duerme. Los evaporativos, al depender de un ventilador para forzar el paso de aire por el filtro, suelen rondar los 33-38 decibelios incluso en su modo más silencioso, que sigue siendo bajo pero es perceptible si tienes el sueño ligero o el aparato muy cerca de la cabecera.",
      "El consumo eléctrico también difiere, aunque en ambos casos hablamos de cifras modestas a lo largo de un año. Un ultrasónico típico consume entre 20 y 30 vatios en funcionamiento continuo, mientras que un evaporativo con ventilador suele estar en una franja similar o algo menor, entre 12 y 20 vatios, porque no necesita energía para vibrar ninguna membrana, solo para mover el aire. La diferencia real en la factura a final de año es pequeña, unos pocos euros, así que no debería ser el factor decisivo de tu elección entre una tecnología y otra.",
      "Donde sí hay una diferencia de peso es en el coste total a tres años, que es el horizonte que recomendamos mirar siempre antes de comprar cualquier humidificador. Un ultrasónico bien cuidado apenas tiene gastos recurrentes más allá del agua destilada si la usas (unos 15-20 euros al año en garrafas, si no tienes ya un sistema de ósmosis en casa). Un evaporativo, en cambio, necesita cambiar el filtro una o dos veces al año, y en el caso del Philips ese filtro cuesta en torno a 25-30 euros la unidad, lo que en tres años puede suponer entre 75 y 150 euros solo en recambios, una cifra que conviene tener en la cabeza antes de comparar precios de compra inicial.",
      "Si usas agua del grifo en el evaporativo de forma prolongada, aunque el filtro retenga la mayoría de minerales, con los meses el propio filtro va acumulando cal en su superficie y pierde algo de eficacia de evaporación, lo cual es otra razón más para no alargar su vida útil más allá de lo que recomienda el fabricante aunque visualmente parezca que sigue funcionando. Un filtro saturado de cal no solo evapora peor, también es un sitio donde la suciedad se agarra con más facilidad, así que apurar el filtro \"para ahorrar\" suele salir caro por el otro lado: en higiene y en rendimiento real.",
      "En tamaño y presencia física, el evaporativo suele ganar por necesitar más espacio interno para alojar el filtro y el ventilador, así que si tu mesilla de noche o tu estantería son pequeñas, puede que un ultrasónico compacto encaje mejor visualmente en el espacio disponible. No es una diferencia enorme, pero en habitaciones pequeñas, donde cada centímetro de superficie libre cuenta, puede inclinar la balanza a favor del modelo más discreto.",
      "Si tuviéramos que resumir todo esto en una recomendación rápida para quien tiene prisa: dormitorio o cuarto de bebé, prioridad al silencio y dispuesto a usar agua destilada — ultrasónico con higrostato. Alergias, agua muy dura en tu zona, o simplemente quieres olvidarte del tema del agua mineral — evaporativo, asumiendo el cambio de filtro un par de veces al año. Presupuesto muy ajustado para una habitación pequeña sin pretensiones de control automático — ultrasónico básico, sabiendo que tendrás que vigilar tú mismo cuánto tiempo lo dejas encendido.",
      "La seguridad merece un párrafo aparte, sobre todo si hay niños o mascotas en casa. Los modelos híbridos con función de vapor caliente, que esterilizan parte del agua calentándola antes de expulsarla, alcanzan temperaturas en la boquilla de salida que pueden causar quemaduras leves si un niño pequeño mete la mano por curiosidad, así que esa función conviene reservarla para habitaciones donde el aparato quede fuera del alcance, o desactivarla directamente y quedarse con el modo de vapor frío cuando hay peques correteando por casa. Los ultrasónicos y evaporativos de vapor frío no tienen este riesgo, otro punto a su favor para dormitorios infantiles.",
      "La función de apagado automático sin agua, que ya viene de serie en la inmensa mayoría de modelos actuales —tanto ultrasónicos como evaporativos, incluyendo los de gama de entrada—, es una de esas características que parecen menores hasta que evitan un problema real: sin ella, un aparato que se queda sin agua y sigue intentando funcionar puede sobrecalentar la resistencia o el motor, acortando su vida útil de forma notable. Si vas a comprar un humidificador, comprobar que tiene esta función no debería ser opcional, da igual la tecnología o el presupuesto.",
      "Al final, la decisión entre evaporativo y ultrasónico depende menos de cuál es \"objetivamente mejor\" y más de qué tipo de mantenimiento estás dispuesto a asumir de forma constante, porque ambos lo necesitan, solo que de manera diferente: uno te pide agua destilada con frecuencia, el otro te pide acordarte del filtro cada pocos meses. Elige el que mejor se adapte a tu rutina real, no al ideal de rutina que te gustaría tener, y vivirás mucho más contento con el resultado a partir del segundo mes de uso, que es cuando de verdad se nota la diferencia entre acertar y no acertar.",
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
      { comercio: "Amazon", href: "https://www.amazon.es/Philips-Serie-2000-HU2716-Humidificador/dp/B08LW4K16N" },
    ],
  },
  {
    slug: "fiebre-del-humidificador-prevencion",
    titulo: "Qué es la 'fiebre del humidificador' y cómo evitarla con hábitos sencillos",
    fecha: "2026-06-18",
    categoria: "Salud",
    resumen:
      "Es un caso real y documentado de neumonitis por hipersensibilidad. No es alarmismo: con una limpieza regular y unos hábitos básicos, el riesgo es prácticamente nulo.",
    imagenPortada: {
      src: rowentaImg,
      alt: "Humidificador Rowenta con tratamiento antibacteriano del agua",
      credito: "Imagen: Rowenta / Groupe SEB",
    },
    contenido: [
      "Cuando empezamos a escribir sobre humidificadores, una de las primeras cosas que nos preguntó un lector fue si era verdad lo que había leído por ahí sobre la \"fiebre del humidificador\". Sonaba a leyenda urbana, del tipo de cosas que circulan exageradas por foros, pero no lo es: es un cuadro clínico real, documentado en literatura médica desde hace décadas, con nombre técnico (neumonitis por hipersensibilidad asociada a humidificadores) y con una causa perfectamente identificada. Y lo mejor de todo es que se previene con una limpieza de cinco minutos un par de veces por semana, así que no hay razón para asustarse, solo para tomárselo en serio.",
      "La causa de fondo es sencilla de entender: el agua estancada en el depósito de un humidificador, sobre todo si lleva varios días sin cambiarse, es un caldo de cultivo perfecto para bacterias y para los hongos y mohos que crecen en superficies húmedas. El humidificador, que está diseñado precisamente para lanzar esa agua al aire en forma de vapor o de niebla fina, lo que hace en esas condiciones es lanzar también al aire esas bacterias y las endotoxinas que producen, justo a la altura a la que las respiras durante horas mientras duermes o trabajas cerca del aparato.",
      "El cuadro clínico, cuando aparece, se parece mucho a una gripe: fiebre, escalofríos, tos, sensación de ahogo y malestar general, que suelen aparecer horas después de haber estado expuesto al vapor contaminado y que, en los casos descritos en la literatura médica desde los años ochenta, mejoraban al alejarse del humidificador y empeoraban de nuevo al volver a usarlo. Es lo que en medicina se llama un patrón de exposición-mejora-recaída, y es precisamente ese patrón el que ayudó a identificar la causa en los primeros casos documentados, casi siempre en entornos con humidificadores industriales o domésticos que llevaban mucho tiempo sin limpiarse.",
      "Aquí es importante poner las cosas en su sitio: estos casos no aparecen porque tengas un humidificador en casa, sino porque ese humidificador concreto lleva semanas o meses con agua estancada y sin una limpieza mínima. La inmensa mayoría de usuarios de humidificadores domésticos no tienen jamás ningún problema, exactamente igual que la inmensa mayoría de gente que tiene una nevera no sufre una intoxicación alimentaria: el riesgo existe, está descrito, y se elimina casi por completo con hábitos de higiene que no llevan más de cinco minutos.",
      "El primer hábito, y el más importante: cambia el agua todos los días. Esto suena obvio pero es el error número uno que cometemos casi todos en algún momento: rellenar el depósito sobre el agua que ya había, en vez de vaciarlo del todo, enjuagarlo y poner agua fresca. Rellenar sobre agua vieja es como añadir agua limpia a un vaso que ya tenía posos: diluye un poco el problema, pero no lo elimina, y con el tiempo el biofilm de bacterias que se va formando en las paredes del depósito sigue ahí, alimentándose de cada nueva ronda de agua que añades.",
      "El segundo hábito es vaciar y secar completamente el depósito cada dos o tres días, no solo cambiar el agua. El motivo es que las bacterias y el biofilm no viven solo en el agua, sino que se adhieren a las paredes internas del depósito, sobre todo en las zonas que quedan siempre húmedas y a oscuras, condiciones ideales para su crecimiento. Dejar el depósito secar al aire, aunque sea un par de horas, rompe ese ciclo de humedad constante que necesitan para proliferar sin descanso.",
      "El tercer hábito, que mucha gente se salta porque parece exagerado, es limpiar el depósito con una mezcla de agua y vinagre blanco (a partes iguales, o un poco más de vinagre) una vez por semana, dejándolo actuar unos quince o veinte minutos antes de aclarar bien. El vinagre, por su acidez, disuelve tanto los restos de cal como el biofilm bacteriano que el agua sola no quita, y es un método barato, accesible y sin químicos agresivos que cualquiera puede hacer en la cocina sin comprar nada especial.",
      "Si vives en una zona de agua dura —buena parte de la España peninsular, especialmente el centro y el sur— hace falta un cuarto hábito: descalcificar el depósito cada dos semanas con un ciclo de vinagre diluido algo más concentrado, porque la cal acumulada en las paredes y en los componentes internos crea micro-rugosidades donde las bacterias se agarran con mucha más facilidad que en una superficie lisa. Cuanta más cal, más superficie de agarre, así que mantener el depósito libre de calcificación no es solo una cuestión estética, es directamente una cuestión de higiene.",
      "Los humidificadores con depósitos grandes, como el Winix L500 de la imagen de portada, con sus 7,5 litros de capacidad, tienen una ventaja y una trampa al mismo tiempo: la ventaja es que duran muchísimas horas sin necesidad de rellenar, lo cual es estupendo para salones grandes o estancias donde no quieres estar pendiente del aparato cada pocas horas. La trampa es precisamente esa: cuanto más dura el agua sin cambiarse, más tiempo tiene para que se forme biofilm, así que con depósitos grandes hay que ser todavía más disciplinado con la rutina de vaciado y limpieza, no menos.",
      "Los modelos híbridos con función de vapor caliente, como el Rowenta Aqua Perfect, tienen aquí una ventaja interesante: el calentamiento del agua antes de convertirla en vapor mata buena parte de la carga bacteriana por el simple efecto de la temperatura, de forma parecida a como hervir agua la esteriliza. Esto no es excusa para descuidar la limpieza —el depósito sigue acumulando minerales y biofilm en las zonas que no llegan a calentarse tanto— pero sí reduce algo el margen de error comparado con un ultrasónico de vapor frío puro, donde no hay ningún paso que reduzca la carga bacteriana antes de lanzarla al aire.",
      "Para los modelos de entrada, como el Cecotec Pure Aroma, con depósitos pequeños de 300 ml, hay una paradoja curiosa: al tener tan poca capacidad, el agua se renueva con más frecuencia simplemente porque hay que rellenarlo varias veces al día, lo cual de forma indirecta reduce el tiempo que el agua pasa estancada. Eso no sustituye a la limpieza periódica del depósito en sí, pero explica por qué los modelos pequeños rara vez aparecen en los casos documentados de fiebre del humidificador: sencillamente, el agua no tiene tiempo de estancarse tanto como en un depósito de varios litros que se rellena una vez a la semana.",
      "Vale la pena aclarar también una confusión que nos llega bastante a menudo: la fiebre del humidificador no tiene nada que ver con la legionelosis, aunque ambas se asocien popularmente a \"agua estancada que da problemas respiratorios\". La legionela es una bacteria concreta que necesita temperaturas templadas (entre 25 y 45 grados aproximadamente) y sistemas con cierta complejidad, como torres de refrigeración o circuitos de agua caliente sanitaria mal mantenidos, para multiplicarse de forma peligrosa; es muy poco probable que aparezca en el depósito de un humidificador doméstico que se usa a temperatura ambiente. La fiebre del humidificador, en cambio, está causada por un conjunto más amplio de bacterias, hongos y sus toxinas, y el mecanismo de daño es distinto: no es una infección como tal, sino una reacción de hipersensibilidad del sistema inmune ante esas partículas inhaladas repetidamente.",
      "Desde el punto de vista médico, cuando un paciente llega a consulta con fiebre, tos y sensación de ahogo que mejoran al salir de casa o de la oficina y empeoran al volver, los neumólogos suelen investigar el entorno como parte del diagnóstico diferencial, preguntando específicamente por sistemas de humidificación, aires acondicionados con torres de enfriamiento, o ambientes laborales con maquinaria que genere aerosoles de agua. Es un diagnóstico que requiere descartar antes otras causas más comunes, como una gripe normal o una neumonía bacteriana, así que no es algo que se diagnostique a la ligera ni algo que deba preocupar de forma desproporcionada a alguien que simplemente tiene un humidificador en casa y lo cuida con un mínimo de regularidad.",
      "Las personas con el sistema inmunitario debilitado —por edad avanzada, por tratamientos oncológicos, por enfermedades crónicas que afectan a las defensas— son las que de verdad necesitan un nivel de cuidado algo más estricto, no porque el humidificador en sí sea más peligroso para ellas, sino porque su capacidad de respuesta ante cualquier carga bacteriana o fúngica inhalada es menor. Si en tu casa hay alguien en esta situación, la recomendación práctica es simple: en vez de limpiar el depósito un par de veces por semana, hazlo cada vez que lo rellenes, y considera usar agua destilada en vez de agua del grifo, que reduce además el aporte de minerales que sirven de \"alimento\" adicional para según qué microorganismos.",
      "Un mito que circula bastante y que conviene desmontar: que los modelos con lámpara UV-C, como el Xiaomi Smart Humidifier 2, te eximen de la limpieza regular porque \"ya esterilizan el agua ellos solos\". La luz ultravioleta sí reduce la carga bacteriana del agua que pasa cerca de la lámpara en el momento de la exposición, pero no limpia ni desinfecta las paredes del depósito, los racores, ni las zonas donde el agua no llega a recibir luz directa de forma uniforme. Tratar el UV-C como un sustituto de la limpieza manual es exactamente el tipo de falsa sensación de seguridad que puede llevar a alguien a relajar los hábitos básicos, que son los que de verdad marcan la diferencia.",
      "¿Cuándo hay que preocuparse de verdad y consultar a un médico? Si aparece fiebre, tos seca persistente o sensación de falta de aire que coincide claramente con el uso del humidificador y que mejora al apagarlo y ventilar la habitación durante un par de días, es razonable acudir a consulta y mencionar explícitamente que tienes un humidificador en casa, sobre todo si llevaba tiempo sin una limpieza a fondo. No es motivo de pánico ni de urgencias, es información relevante que ayuda al médico a orientar el diagnóstico más rápido, igual que mencionarías si has viajado recientemente o si convives con alguien que ha estado enfermo.",
      "Un detalle práctico que facilita muchísimo mantener todos estos hábitos sin que se conviertan en una carga: fíjate, antes de comprar, en si el depósito tiene boca ancha y si las piezas internas son fácilmente desmontables sin herramientas. Un depósito con una boca estrecha, de esos en los que apenas entra la mano, hace que limpiar bien las paredes internas sea una tarea incómoda que se acaba posponiendo semana tras semana, mientras que un diseño con boca ancha y pocas piezas que desmontar convierte la limpieza en algo que de verdad se hace con la regularidad que toca, porque no supone una batalla cada vez.",
      "Aunque tu agua del grifo no sea especialmente dura, no está de más hacer un ciclo de descalcificación con vinagre cada mes como rutina de fondo, independientemente del agua de tu zona, simplemente porque cualquier acumulación mineral, por pequeña que sea, crea superficies más rugosas donde el biofilm se agarra con más facilidad que en una superficie completamente lisa. Es una precaución barata, de quince minutos, que conviene incorporar al calendario de limpieza de la casa igual que se incorpora cambiar las sábanas o limpiar la nevera, sin necesidad de esperar a ver cal visible para empezar a hacerlo.",
      "Si te vas unos días de vacaciones y el humidificador se queda parado con agua dentro, no lo enciendas a la vuelta sin más: vacía el depósito, acláralo bien y, si han pasado más de cuatro o cinco días, dale un repaso rápido con vinagre antes de volver a llenarlo de agua fresca. El agua estancada durante un periodo largo sin uso es justo el escenario en el que más biofilm se acumula sin que nadie lo note, porque nadie está revisando el aparato mientras la casa está vacía.",
      "Con estos hábitos —agua fresca a diario, depósito seco un par de horas cada dos o tres días, vinagre semanal, descalcificación si tu agua es dura— el riesgo real de cualquier problema asociado a la humedad del depósito es prácticamente nulo para un uso doméstico normal. El patrón que sí hay que evitar, y es el que de verdad aparece en los casos documentados, es el del humidificador que se enciende, se rellena sobre agua vieja durante semanas, y nunca se desmonta para una limpieza en profundidad. Cinco minutos un par de veces por semana es la diferencia entre un aparato que te ayuda a respirar mejor y uno que, por pura dejadez, hace justo lo contrario.",
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
      { comercio: "Amazon", href: "https://www.amazon.es/Winix-Humidificador-Ultras%C3%B3nico-silencioso-humidificaci%C3%B3n/dp/B08PBZ9KH3" },
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
