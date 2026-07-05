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
      src: "https://images.unsplash.com/photo-1757967350347-e796a659d30c?auto=format&fit=crop&w=1200&q=80",
      alt: "Condensación en el cristal de una ventana por exceso de humedad en casa",
      credito: "Foto: Unsplash",
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
      src: "https://images.unsplash.com/photo-1501297875943-27f3803b4956?auto=format&fit=crop&w=1200&q=80",
      alt: "Macrofotografía de gotas de agua, ilustrando la diferencia entre vapor y evaporación",
      credito: "Foto: Unsplash",
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
      src: "https://images.unsplash.com/photo-1550963295-019d8a8a61c5?auto=format&fit=crop&w=1200&q=80",
      alt: "Limpieza con spray y bayeta, hábito clave para evitar la fiebre del humidificador",
      credito: "Foto: Unsplash",
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
  {
    slug: "levoit-superior-studio-evaporativo-filtro-dos-anos",
    titulo: "Levoit presenta el Superior Studio: un evaporativo con filtro que dura hasta dos años",
    fecha: "2026-06-20",
    categoria: "Novedades",
    publicado: true,
    resumen:
      "Levoit anuncia el Superior Studio, un humidificador evaporativo con filtro lavable de hasta dos años de vida y solo 19 dB en su nivel más bajo. Aún no está en Amazon España.",
    imagenPortada: {
      src: "https://levoit.com/cdn/shop/files/levoit-superior-studio-smart-evaporative-humidifier-6081922.jpg?v=1779264913",
      alt: "Levoit Superior Studio, nuevo humidificador evaporativo inteligente",
      credito: "Imagen: Levoit",
    },
    contenido: [
      "Levoit, la marca que ya conocemos bien en este blog gracias al Dual 200S que tenemos analizado en nuestro ranking, presentó el 3 de junio su nuevo Superior Studio, un humidificador evaporativo que ataca directamente el problema que comentamos siempre con esta tecnología: el mantenimiento del filtro. Según la nota de prensa oficial (confirmada también en la propia web de Levoit), el filtro de este modelo está pensado para durar hasta dos años con lavado semanal, frente a los 6 meses habituales de la mayoría de evaporativos domésticos, incluido el Philips HU2716 que ya tenemos en catálogo.",
      "El dato de ruido también llama la atención: 19 dB en el nivel más bajo, una cifra que normalmente asociamos a ultrasónicos silenciosos, no a evaporativos, que suelen rondar los 33-38 dB por el ventilador que necesitan para forzar el paso de aire por el filtro. Si esa cifra se confirma en uso real (Levoit la mide a 1,5 metros, según la ficha técnica), estaríamos ante uno de los evaporativos más silenciosos que hemos visto pasar por este tipo de análisis.",
      "El resto de la ficha: depósito de 4,5 litros, hasta 400 ml/h de caudal, autonomía de 40 horas al mínimo (10 horas a máxima potencia), cobertura para estancias de hasta 56 m², sensor de humedad con ±5% de precisión, modo automático, y una función de descalcificación con ciclo de ácido cítrico que se activa sola. Todo controlable desde la app VeSync, la misma que ya usan otros modelos de la marca.",
      "El precio de salida es de 139,99 dólares para la versión inteligente y 129,99 para la versión sin conectividad, con el filtro de repuesto a 24,99 dólares la unidad. Por ahora solo lo hemos visto confirmado a la venta en Levoit.com y en Amazon de Estados Unidos: no aparece todavía en Amazon España ni en la tienda europea de Levoit, así que si quieres uno ya mismo desde aquí, de momento no es posible sin recurrir a importación.",
      "Mientras llega (si llega) a nuestro mercado, si lo que te atrae es la promesa de un evaporativo con menos mantenimiento de filtro, el Levoit Dual 200S que ya tenemos analizado sigue siendo la opción disponible hoy en Amazon España de esta misma marca, aunque sea ultrasónico y no evaporativo, así que el mantenimiento que evita es distinto (agua destilada en vez de cambio de filtro).",
      "Para entender por qué el dato del filtro a dos años es relevante, hay que mirarlo con la calculadora en la mano. El filtro del Philips HU2716 que ya tenemos analizado cuesta en torno a 25-30 euros y dura hasta seis meses, lo que supone entre 50 y 60 euros al año solo en recambios si lo usas a diario. Si el filtro del Superior Studio realmente aguanta dos años con un lavado semanal, el coste se reduce a una fracción de eso a largo plazo, aunque el precio de compra inicial del aparato sea algo más alto. Es exactamente el tipo de cuenta a tres años que recomendamos hacer siempre antes de comparar precios de compra entre modelos.",
      "El sistema de descalcificación automática con ácido cítrico también merece una mención aparte, porque ataca un problema que solemos repetir en los artículos sobre limpieza: la cal acumulada en las paredes del depósito es uno de los sitios donde más fácil se agarra el biofilm bacteriano. Que el propio aparato active un ciclo de limpieza con ácido cítrico de forma periódica no sustituye los hábitos básicos de higiene que explicamos al hablar de la fiebre del humidificador, pero sí reduce el margen de error de quien se olvida de hacerlo a mano con la frecuencia que toca.",
      "Conviene ser prudentes con la cifra de los 19 dB hasta que la podamos comprobar con reseñas de uso real fuera de las condiciones de laboratorio del fabricante, algo que repetimos siempre en este blog con cualquier especificación que viene únicamente de la propia marca. Si se confirma, sería un argumento de peso para quien quiere un evaporativo en el dormitorio sin el zumbido de ventilador habitual de esta tecnología; si en la práctica se queda más cerca de los 25-28 dB, seguiría siendo un buen resultado dentro de su categoría, aunque menos espectacular que el titular de la nota de prensa.",
      "Lo más interesante de este lanzamiento, más allá de si llega o no a España pronto, más allá de si llega o no a España pronto, es la dirección que marca: que una marca grande esté invirtiendo en alargar la vida útil del filtro evaporativo es una buena noticia para el bolsillo a medio plazo de cualquiera que compre evaporativos, sea de esta marca o de otra, porque el coste recurrente del filtro es precisamente el argumento que más echa para atrás a quien duda entre ultrasónico y evaporativo. Si la promesa de los dos años se sostiene con un uso real y no solo en condiciones de laboratorio, sería un cambio de verdad notable en esa balanza de costes que repetimos siempre en este blog.",
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
      { comercio: "Amazon", href: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG" },
    ],
  },
  {
    slug: "dyson-ph2-denox-purificador-humidificador-cocinas-gas-espana",
    titulo:
      "Dyson lanza en España el PH2 De-NOx: el purificador-humidificador que captura el dióxido de nitrógeno de las cocinas de gas",
    fecha: "2026-07-01",
    categoria: "Novedades",
    publicado: false,
    resumen:
      "Dyson lanza en España el PH2 De-NOx: purificador, humidificador y ventilador con filtro K-Carbon que captura más NO₂. Analizamos si merece sus 679 euros.",
    imagenPortada: {
      src: "https://eshopfrontend.orange.es/dw/image/v2/BJWB_PRD/on/demandware.static/-/Sites-devices-master-catalog/default/dw8dc64b51/images/3711158/dyson_purificador_cool_ph2denox_foto1.png",
      alt: "Dyson Purifier Humidify+Cool PH2 De-NOx en blanco y dorado",
      credito: "Imagen: Dyson / Orange España",
    },
    contenido: [
      "Si tienes cocina a gas en casa y no llevas un medidor de calidad del aire, hay muchas posibilidades de que el ambiente de tu cocina supere con regularidad los límites de dióxido de nitrógeno que la OMS considera seguros mientras cocinas. No es alarmismo: es lo que llevan señalando los estudios desde hace años y lo que un análisis publicado en Science Advances en mayo de 2024 por investigadores de la Universidad de Stanford confirmó con mediciones en más de cien hogares reales. El dióxido de nitrógeno, el NO₂ de los químicos, es el mismo contaminante que conocemos de los tubos de escape de los coches, pero en versión doméstica, silencioso, inodoro a concentraciones bajas, y producido directamente por los quemadores de la placa cada vez que enciendes el fuego para hacer la cena.",
      "El estudio de Stanford estimó que las cocinas de gas y propano elevan la exposición media a NO₂ en unos 4 ppb de forma crónica en los hogares analizados, y que esa exposición adicional está probablemente detrás de unos 50.000 casos de asma infantil activos solo en Estados Unidos. En diciembre de 2025, un segundo análisis publicado en PNAS Nexus con datos a escala nacional concluyó que la contaminación de las cocinas de gas representa más de la mitad de la exposición total a NO₂ de algunos hogares. Y en abril de 2026 apareció publicado en PubMed un nuevo trabajo que vincula la exposición a dióxido de nitrógeno de cocinas de gas con peores resultados de sueño en niños. La conversación científica sobre este tema no ha parado en dos años, y sigue apuntando en la misma dirección.",
      "España no es Estados Unidos, y las extrapolaciones directas entre estudios realizados en geografías distintas siempre hay que hacerlas con cautela. Pero el NO₂ interior no respeta fronteras geográficas: los quemadores de gas producen dióxido de nitrógeno por la misma reacción química independientemente de si están en una cocina de Manhattan o de Zaragoza. Y España, con decenas de millones de viviendas que todavía cuentan con cocinas de gas natural, comparte exactamente el mismo escenario de base. La OMS fijó en 2021 su guía de calidad del aire interior para NO₂ en 25 µg/m³ como media anual y en 200 µg/m³ como valor límite horario, cifras que distintos estudios de campo muestran que pueden superarse fácilmente mientras se cocina, incluso con la ventana de la cocina abierta y el extractor encendido.",
      "En ese contexto llega el Dyson Purifier Humidify+Cool PH2 De-NOx, el primer aparato de la marca que lleva un filtro diseñado específicamente para capturar dióxido de nitrógeno en el hogar: el K-Carbon, un filtro impregnado con carbonato potásico (K₂CO₃) que según Dyson puede adsorber hasta un 50% más de NO₂ que los modelos anteriores de la gama. El aparato lleva varios meses en el mercado internacional y ya está disponible en España a través de dyson.es, El Corte Inglés, Media Markt, FNAC, Orange y Movistar, con un precio actual de 679 euros en la web oficial (el precio de venta recomendado era de 799 euros, hay un descuento activo en el momento de publicar esto). No es una compra de impulso. Nadie va a confundir el PH2 De-NOx con un humidificador de entrada. Pero hace tres cosas simultáneamente que hasta ahora había que resolver con tres aparatos distintos.",
      "El PH2 es, a la vez, un purificador de aire de alta gama, un humidificador y un ventilador. No se trata de tres funciones mediocres metidas en la misma carcasa para justificar el precio: cada una de las tres funciona de manera independiente y con especificaciones que aguantan comparación con aparatos dedicados exclusivamente a esa función. La torre mide 92 centímetros de altura, pesa algo más de ocho kilos y es visualmente llamativa; el diseño de Dyson es lo suficientemente reconocible como para que mucha gente lo coloque en el salón como elemento decorativo además de funcional, lo cual dice algo del cuidado puesto en la carcasa pero también del precio al que se vende. El argumento de Dyson para justificarlo es sencillo: un purificador de gama alta cuesta entre 300 y 500 euros, un humidificador bueno entre 80 y 150, y un ventilador con purificación otros 300. Tres aparatos, tres enchufes, tres mantenimientos. O uno solo.",
      "La filtración tiene tres niveles. El primero es el filtro HEPA H13, que captura el 99,95% de las partículas de hasta 0,1 micras: polvo, pelos de mascotas, esporas de moho, bacterias, partículas PM2.5 que son las que más preocupan a los neumólogos por su capacidad de penetrar profundamente en el pulmón. El segundo nivel es el filtro de carbón activado K-Carbon, el componente estrella de esta versión De-NOx, que retiene gases, compuestos orgánicos volátiles y ese dióxido de nitrógeno adicional procedente de quemadores y estufas de leña. El tercer nivel es un filtro catalítico para eliminar el formaldehído: a diferencia de los dos anteriores, este no se satura y no necesita reposición porque destruye el formaldehído convirtiéndolo en agua y CO₂. El conjunto está sellado, lo que significa que el aire no puede eludir ninguna de esas capas entre la entrada y la salida del aparato.",
      "El formaldehído merece un párrafo aparte porque ha sido el gran tema de Dyson en los últimos años de purificadores. Es un gas inodoro e incoloro que durante años emiten de forma continua ciertos materiales de construcción, adhesivos, muebles de madera prensada y algunos revestimientos. No se percibe, no irrita la nariz a concentraciones habituales en interiores, y el cuerpo lo metaboliza sin síntomas evidentes en dosis bajas, pero la Agencia Internacional para la Investigación del Cáncer lo clasifica como cancerígeno del Grupo 1 en exposición crónica. Los modelos anteriores de purificadores Dyson ya incluían el filtro catalítico para formaldehído; la novedad del PH2 De-NOx es sumar la protección específica contra NO₂ sin sacrificar ninguna de las capas anteriores, todo en un único filtro combinado HEPA+K-Carbon que dura alrededor de doce meses con doce horas de uso diario.",
      "La función de humidificación, que es la que más nos ocupa en este blog, funciona con un depósito de cinco litros que da para unas 36 horas de operación en el nivel mínimo o en torno a diez horas a máxima potencia. La cobertura de humidificación es de 41 m³, equivalente a una habitación de unos 15 a 18 metros cuadrados con techo estándar, bien dimensionado para un dormitorio o un despacho pero insuficiente si lo que quieres es humidificar un salón grande. El sistema incluye lo que Dyson llama UV Cleanse: una lámpara ultravioleta que irradia el agua del depósito antes de vaporizarla para reducir la carga bacteriana. Ya explicamos en nuestro artículo sobre la fiebre del humidificador que la luz UV-C no sustituye a la limpieza manual del depósito, pero sí añade una capa de protección real, especialmente en un aparato cuyos filtros internos pueden degradarse si el agua que emite está contaminada.",
      "Para la purificación, la cobertura sube a 81 m³, bastante más generosa que los 41 m³ de humidificación. La diferencia entre ambas cifras no es un descuido de diseño sino una limitación física: humidificar requiere caudal de agua real, y dimensionar un humidificador para 81 m³ necesitaría un depósito y un caudal que harían el aparato mucho más grande y probablemente más ruidoso de lo que ya es. Es el mismo techo que tiene toda la categoría: los modelos con mayor cobertura de humidificación necesitan rellenarse con más frecuencia o llevan depósitos de mucha mayor capacidad. En el caso del PH2, con cinco litros y treinta y seis horas de autonomía mínima, el equilibrio resulta razonable para un uso doméstico en habitaciones de tamaño convencional.",
      "Como ventilador, el PH2 proyecta el aire purificado y humidificado con una oscilación de hasta 90 grados, suficiente para repartir el flujo por buena parte de un salón o un dormitorio. El nivel de ruido máximo es de 62,4 decibelios, que en una habitación silenciosa resulta notorio y que nadie querría encendido a tope mientras intenta dormir; en modo silencioso baja a 46 decibelios, un nivel perfectamente tolerable para tenerlo encendido mientras se trabaja, se ve una película o se hace cualquier actividad que no requiera silencio absoluto, aunque esté por encima del casi imperceptible de un ultrasónico de dormitorio de gama media, que puede bajar de los 26-28 dB. Si lo que buscas es un humidificador para pasar la noche en el máximo silencio posible, el PH2 no es tu aparato. Si lo que buscas es algo que trabaje en el salón durante las horas de actividad purificando, humidificando y ventilando, el 46 dB en modo silencioso es razonable para ese uso.",
      "La integración con el ecosistema digital es la que ya esperamos de Dyson: la app MyDyson para iOS y Android permite ver en tiempo real los datos del sensor interior —partículas PM2.5 y PM10, NO₂, compuestos orgánicos volátiles y humedad relativa—, programar horarios de encendido y apagado, ajustar velocidad y ángulo de oscilación, y recibir notificaciones cuando la calidad del aire baja de los umbrales configurados. El mando a distancia curvo con imán que viene incluido en la caja permite ajustar el aparato desde el sofá sin tocar el teléfono. La pantalla LCD en el propio aparato muestra los datos en tiempo real. Hay algo útil en tener un aparato que no solo humidifica sino que también te dice cuántos compuestos orgánicos volátiles hay en el ambiente de tu salón en este momento, especialmente si acabas de renovar los muebles o has pintado una habitación hace poco.",
      "El filtro HEPA+K-Carbon tiene una vida útil estimada de doce meses con doce horas de uso diario, según Dyson. El recambio cuesta en torno a 50-60 euros en la tienda oficial, lo que supone un gasto recurrente de esa cifra al año si se usa a diario. El filtro catalítico de formaldehído, en cambio, no necesita reposición. Con esos números en la mano, el coste total a tres años de un Dyson PH2 —sin contar el consumo eléctrico, que en reposo baja a menos de 0,5 vatios— se sitúa alrededor de los 850-870 euros, asumiendo un filtro al año. No es un aparato barato en la compra inicial ni en el mantenimiento recurrente. En este blog siempre recomendamos hacer el cálculo a tres años antes de comparar precios de compra inicial entre modelos, y en el caso del Dyson esa cuenta es honesta: 679 de compra más tres recambios de filtro suman más de 800 euros en el horizonte de tres años de uso.",
      "Siendo honestos: para quien tiene un piso con cocina de inducción o vitrocerámica, sin problemas de calidad del aire especiales y que busca simplemente un humidificador para el dormitorio en invierno, el Dyson PH2 De-NOx es un aparato sobredimensionado para esa necesidad y el presupuesto se puede invertir mucho mejor en otro sitio. El Levoit Dual 200S que ya tenemos analizado hace su función de humidificación en un dormitorio sin el peso, la complejidad ni el coste del Dyson. El PH2 tiene sentido como compra cuando la purificación del aire es una necesidad real y prioritaria: si hay mascotas en casa, si alguien tiene alergias o asma, si el entorno exterior tiene contaminación notable, si la vivienda tiene muebles de madera prensada o acabados con lacas recientes, o si se cocina mucho con gas. En esos casos, pagar 679 euros por algo que reemplaza varios aparatos y mide en tiempo real la calidad del aire tiene una lógica que se sostiene.",
      "Volviendo al punto de partida del artículo: si tienes cocina de gas y cocinas con frecuencia —especialmente si la cocina no está bien separada del salón o del comedor donde pasas la mayor parte del día—, el componente De-NOx es el argumento más diferencial del PH2 respecto a cualquier otro purificador-humidificador del mercado español en este momento. No hay muchos purificadores domésticos que vendan explícitamente la captura adicional de NO₂ como característica principal, y el K-Carbon es el primero en llegar a España con ese argumento en un aparato de uso residencial asequible (todo lo que es asequible a 679 euros). Si en tu casa la cocina de gas no es un factor —por tener inducción, vitrocerámica, o una cocina cerrada con buena extracción hacia el exterior—, ese argumento pasa de ser el central a ser una ventaja menor frente a otros purificadores del mercado con precio de compra inferior.",
      "En cuanto a dónde comprarlo: el Dyson PH2 De-NOx está disponible en España en dyson.es, El Corte Inglés, Media Markt, FNAC, Orange y Movistar. El precio en el momento de escribir este artículo es de 679 euros en la web oficial de Dyson España, con descuento activo respecto al precio de venta recomendado de 799 euros. Dyson aplica su política de igualación de precio habitual: si en los siete días posteriores a la compra encuentras el mismo modelo a un precio inferior en El Corte Inglés, Media Markt o FNAC, te devuelven la diferencia. El modelo disponible en España es el blanco/dorado. El envío gratuito en 24 horas está disponible en las principales ciudades en pedidos realizados antes de las 17:00 de lunes a jueves. No lo hemos encontrado en Amazon España en el momento de publicar esto, así que el canal de compra más directo sigue siendo la web oficial o los distribuidores autorizados mencionados.",
      "Lo más interesante de este lanzamiento, más allá del debate sobre si 679 euros son muchos o pocos para lo que ofrece, es la dirección que señala para la categoría en su conjunto. Que la purificación del aire y la humidificación estén llegando al mismo aparato con especificaciones serias en las dos funciones es el paso lógico para un sector que hasta hace relativamente poco pensaba en las dos cosas como productos completamente separados. El Blueair 2-in-1 Purify+Humidify que también está entrando al mercado apunta a la misma tendencia. Para el usuario, la pregunta ya no va a ser 'purificador o humidificador' sino 'un aparato que haga las dos cosas bien o dos aparatos separados que las hagan perfectas cada uno'. La respuesta correcta depende del espacio disponible, del presupuesto y de cuántos enchufes, cuántos depósitos y cuántos mantenimientos paralelos uno está dispuesto a gestionar. No hay una respuesta universal.",
      "Mientras tanto, si tienes cocina de gas, llevas tiempo con la sospecha de que el aire de tu casa no está en el mejor estado posible —especialmente si hay niños o alguien con asma o alergias— y buscas un único aparato que resuelva la purificación, la humidificación y la ventilación sin dejar ángulos sin cubrir, el Dyson PH2 De-NOx es el argumento más completo que ha llegado a España hasta la fecha para hacerlo de una vez. Con 679 euros de compra inicial y un recambio de filtro al año. Si esa cifra te parece alta para lo que necesitas en concreto, o si solo usas gas en la calefacción y no en la cocina, hay opciones más ajustadas al caso específico, y la primera pregunta que conviene hacerse antes de mirar el precio de cualquier aparato es exactamente qué quieres resolver, con qué frecuencia y en qué espacio. La respuesta a esa pregunta es lo que determina si el Dyson tiene sentido o si hay una alternativa que te sirve mejor por bastante menos.",
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
    slug: "levoit-neoclassic-humidificador-lavavajillas",
    titulo: "Levoit presenta el NeoClassic: humidificadores con piezas aptas para el lavavajillas",
    fecha: "2026-07-06",
    categoria: "Novedades",
    publicado: false,
    resumen:
      "Levoit presenta el NeoClassic: humidificadores con piezas aptas para el lavavajillas y protección antimicrobiana. Aún sin fecha para España.",
    imagenPortada: {
      src: "https://levoit.com/cdn/shop/files/neoclassic-650-humidifier-3705360.jpg?v=1778850794",
      alt: "Levoit NeoClassic 650, nuevo humidificador con piezas aptas para lavavajillas",
      credito: "Imagen: Levoit",
    },
    contenido: [
      "Si hay una queja que se repite en cualquier reseña de humidificador, en cualquier foro, en cualquier comentario debajo de nuestros propios artículos, es esta: funciona genial, pero limpiarlo es un incordio. Boquillas estrechas por las que apenas entra la mano, depósitos que hay que fregar a ciegas, bandejas que casi piden un destornillador para llegar al fondo. Levoit, la marca que ya conocemos bien en este blog por el Dual 200S, ha decidido atacar ese problema de frente con su nueva gama NeoClassic, presentada el 3 de junio según la nota de prensa oficial de la compañía.",
      "La gama consta de cuatro modelos: NeoClassic 450 y 450S, con depósito de 4,2 litros, 270 ml/h de caudal, cobertura de hasta 40 m² y 42 horas de autonomía; y NeoClassic 650 y 650S, con 6,2 litros, 320 ml/h, hasta 50 m² y 62 horas. Los precios de salida van de 49,99 a 79,99 dólares según el modelo, con las versiones \"S\" añadiendo conectividad a través de la app VeSync que Levoit ya usa en el resto de su catálogo.",
      "Lo que de verdad diferencia a esta gama, según la marca, no es la potencia ni la autonomía: es el diseño de la bandeja. Un sistema de \"giro y extracción\" deja todo el recorrido del agua accesible, y todas las piezas que tocan el agua —bandeja, protector de niebla, depósito, tapa y filtro— son aptas para el lavavajillas. Hasta donde hemos visto, es de las pocas veces que un fabricante grande convierte esto en el argumento central de un lanzamiento, en vez de dejarlo como una línea más de la ficha técnica.",
      "No es un capricho de diseño. En nuestro artículo sobre la fiebre del humidificador ya explicamos que buena parte del riesgo real de estos aparatos viene precisamente de ahí: del agua estancada y del biofilm que se acumula en las paredes del depósito cuando la limpieza se pospone porque resulta incómoda. Si meter las piezas en el lavavajillas es de verdad tan sencillo como promete Levoit, es razonable esperar que la gente lo haga con más frecuencia que fregando a mano con un cepillo por una boca estrecha.",
      "Los modelos 650 y 650S suman además un material antimicrobiano registrado por la EPA estadounidense en las superficies en contacto con el agua, que según el fabricante inhibe el crecimiento de moho durante 28 días. Es una protección adicional, no un sustituto de la limpieza regular —lo mismo que ya señalamos con la luz UV-C de otros modelos—, pero suma una capa más frente a un problema que sí está documentado en la literatura médica.",
      "En cuanto al ruido, Levoit anuncia 21 dB en modo sueño para los modelos 450 y 26 dB para los 650, cifras que, si se confirman en uso real y no solo en laboratorio, están en la franja baja que buscamos siempre para un dormitorio. El modo automático mantiene una precisión de sensor de ±5%, en línea con lo que ya vimos en el Dual 200S que tenemos analizado en el blog.",
      "Las versiones S incorporan la app VeSync con programación de horarios, seguimiento de humedad y un \"Modo Escena\" con ambientes preconfigurados, además de una función llamada SleepWake pensada para automatizar el encendido y apagado según la rutina de sueño. Charlie Park, vicepresidente de investigación y desarrollo de Levoit, lo resume así en la nota de prensa: \"NeoClassic es nuestra respuesta a la frustración de la limpieza, diseñada específicamente para un mantenimiento sin esfuerzo sin comprometer el rendimiento\".",
      "Por ahora el NeoClassic solo está confirmado a la venta en Levoit.com y en Amazon de Estados Unidos. No lo hemos encontrado todavía en Amazon España ni en la tienda europea de la marca, así que si te interesa desde aquí tocará esperar o recurrir a la importación. Es el mismo patrón que vimos hace unas semanas con el Superior Studio, otro lanzamiento reciente de Levoit: la marca suele estrenar novedades primero en su mercado doméstico antes de traerlas a Europa.",
      "Mientras se confirma si el NeoClassic llega a España y cuándo, si lo que buscas ya mismo es un humidificador de esta marca disponible hoy en Amazon España, el Levoit Dual 200S que tenemos analizado sigue siendo la opción real, aunque su forma de facilitar el mantenimiento sea distinta: pasa por el higrostato y el agua destilada, no por meter piezas en el lavavajillas.",
      "Conviene esperar a reseñas de uso real antes de dar por buena, sin matices, la promesa de \"apto para lavavajillas\": el calor y los detergentes son más agresivos que un fregado a mano, y habrá que comprobar cómo aguantan las juntas de goma y las piezas de plástico más finas tras decenas de ciclos, algo que ni Levoit puede garantizar todavía porque el producto acaba de salir al mercado.",
      "Lo interesante de este lanzamiento, más allá de si llega pronto o tarde a España, es la dirección que marca: que un fabricante grande convierta la facilidad de limpieza en el argumento de venta principal, en vez de en un apartado menor de la ficha técnica, es una buena noticia para cualquiera que use humidificador, sea de esta marca o de otra. Si de verdad se traduce en gente limpiando su aparato con más frecuencia porque ya no es un incordio, el beneficio real está en la salud del aire que respiras en casa.",
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
      { comercio: "Amazon", href: "https://www.amazon.es/Levoit-Humidificador-Dual-200S-Smart/dp/B0CT91XZLG" },
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
