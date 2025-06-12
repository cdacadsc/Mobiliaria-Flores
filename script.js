
// CARRUSEL DE IMÁGENES
const carouselImg = document.getElementById("carousel-img");
const imageList = ['image2.png', 'image3.png', 'image4.png', 'image5.png', 'image9.png', 'image10.png', 'image11.png', 'image12.png', 'image13.png'];
let index = 0;
function changeImage() {
  carouselImg.classList.add("fade-out");
  setTimeout(() => {
    index = (index + 1) % imageList.length;
    carouselImg.src = imageList[index];
    carouselImg.classList.remove("fade-out");
  }, 1000);
}
setInterval(changeImage, 5000);

// CARRUSEL DE TESTIMONIOS
let testimonios = document.querySelectorAll('.testimonio');
let tIndex = 0;
function cambiarTestimonio() {
  testimonios[tIndex].classList.remove('active');
  tIndex = (tIndex + 1) % testimonios.length;
  testimonios[tIndex].classList.add('active');
}
setInterval(cambiarTestimonio, 7000);

// CHATBOT FUNCIONALIDAD CON BOTONES
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const question = btn.textContent;
    const log = document.getElementById('chat-log');
    log.innerHTML += "<div><b>Tú:</b> " + question + "</div>";
    let lower = question.toLowerCase();
    let response = "Gracias por tu mensaje. Te responderemos pronto.";

    if (lower.includes("qué rentan") || lower.includes("qué artículos") || lower.includes("ofrecen")) {
      response = "Ofrecemos brincolines, mesas, sillas, carpas, inflables, sonido, luces y más.";
    } else if (lower.includes("dónde están") || lower.includes("ubicación") || lower.includes("ubicados")) {
      response = "Estamos en San Luis Potosí Capital. Pregunta por cobertura en tu zona.";
    } else if (lower.includes("anticipo") || lower.includes("apartado")) {
      response = "Depende la fecha y el mobiliario solicitado. Si es una fecha lejana, pedimos 20% de anticipo. Si es cercana, se liquida al momento de instalar.";
    } else if (lower.includes("cuánta anticipación") || lower.includes("reservar")) {
      response = "Te recomendamos reservar al menos con una semana de anticipación.";
    } else if (lower.includes("promociones") || lower.includes("paquetes") || lower.includes("combo")) {
      response = "Sí, tenemos paquetes con descuentos. Escríbenos por WhatsApp para más detalles.";
    } else if (lower.includes("contrato") || lower.includes("contratos") || lower.includes("hacen contratos")) {
      response = "Sí, hacemos contratos para garantizar el servicio y brindarte mayor seguridad.";
    } else if (lower.includes("precio") || lower.includes("cuánto cuesta") || lower.includes("costo")) {
      response = "Para precios o disponibilidad contáctanos directamente por WhatsApp.";
    }

    log.innerHTML += "<div><i>Bot está escribiendo...</i></div>";
    setTimeout(() => {
      const sound = document.getElementById("pop-sound");
      if (sound) sound.play();
      const tempMsg = log.querySelector("i");
      if (tempMsg) tempMsg.parentElement.remove();
      log.innerHTML += "<div><b>Bot:</b> " + response + "</div>";
      log.scrollTop = log.scrollHeight;
    }, 1000);
  });
});


// NUEVAS RESPUESTAS LÓGICAS
document.querySelectorAll(".faq-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const question = btn.textContent;
    const log = document.getElementById('chat-log');
    log.innerHTML += "<div><b>Tú:</b> " + question + "</div>";
    let lower = question.toLowerCase();
    let response = "Gracias por tu mensaje. Te responderemos pronto.";

    if (lower.includes("inflables para adultos")) {
      response = "Sí, contamos con inflables grandes y resistentes para adultos.";
    } else if (lower.includes("tipo de carpas")) {
      response = "Ofrecemos carpas elegantes, tipo pabellón, y carpas sencillas para sombra.";
    } else if (lower.includes("juegos mecánicos") || lower.includes("electrónicos")) {
      response = "No rentamos juegos mecánicos ni electrónicos por el momento.";
    } else if (lower.includes("decoración")) {
      response = "Sí, ofrecemos servicio de decoración bajo pedido especial.";
    } else if (lower.includes("temático")) {
      response = "Sí, contamos con mobiliario temático para niños: princesas, superhéroes, etc.";
    } else if (lower.includes("colonias") || lower.includes("entregas")) {
      response = "Hacemos entregas en toda la ciudad de San Luis Potosí Capital.";
    } else if (lower.includes("cobran por entregar")) {
      response = "El costo de entrega depende de la distancia. En zonas cercanas puede ser gratis.";
    } else if (lower.includes("fuera de san luis")) {
      response = "Sí, hacemos envíos fuera de SLP, con costo adicional. Consulta tu zona.";
    } else if (lower.includes("cancelo")) {
      response = "Si cancelas con al menos 5 días de anticipación, se devuelve el anticipo. Después de eso, no.";
    } else if (lower.includes("cuánto dura la renta") || lower.includes("tiempo dura la renta")) {
      response = "La renta estándar es por 8 horas, pero se puede extender con costo extra.";
    } else if (lower.includes("se daña")) {
      response = "En caso de daño, se evalúa si fue accidental o intencional para determinar el costo.";
    } else if (lower.includes("promociones entre semana")) {
      response = "Sí, ofrecemos promociones y descuentos en eventos de lunes a jueves.";
    } else if (lower.includes("tarjeta")) {
      response = "Aceptamos pagos en efectivo, transferencia y algunas tarjetas bancarias.";
    } else if (lower.includes("cómo puedo pagar")) {
      response = "Puedes pagar en efectivo, por transferencia bancaria o con tarjeta (consulta disponibilidad).";
    } else if (lower.includes("fianza")) {
      response = "No pedimos fianza, pero sí un anticipo dependiendo del evento.";
    } else if (lower.includes("personal que instala")) {
      response = "Sí, nuestro personal está capacitado y es muy cuidadoso con los artículos.";
    } else if (lower.includes("factura")) {
      response = "Sí, podemos emitir factura si nos proporcionas tus datos fiscales.";
    } else if (lower.includes("paquete básico")) {
      response = "Un paquete básico incluye 1 inflable pequeño, 2 mesas y 10 sillas.";
    } else if (lower.includes("horario manejan")) {
      response = "Atendemos de 9:00 a.m. a 8:00 p.m., todos los días de la semana.";
    } else if (lower.includes("combinar varios paquetes")) {
      response = "Sí, puedes combinar paquetes y obtener un descuento especial.";
    }

    log.innerHTML += "<div><i>Bot está escribiendo...</i></div>";
    setTimeout(() => {
      const sound = document.getElementById("pop-sound");
      if (sound) sound.play();
      const tempMsg = log.querySelector("i");
      if (tempMsg) tempMsg.parentElement.remove();
      log.innerHTML += "<div><b>Bot:</b> " + response + "</div>";
      log.scrollTop = log.scrollHeight;
    }, 1000);
  });
});
