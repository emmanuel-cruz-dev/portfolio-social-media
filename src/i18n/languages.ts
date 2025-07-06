import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About Me",
        certifications: "Studies",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        title: "Switch to Spanish",
        lightMode: "Switch to dark mode",
        darkMode: "Switch to light mode",
      },
      footer: {
        phrase: "There is no plan B for success",
        channels: "Recommended channels",
        freecodecamp: "Technical courses in spanish",
        platzi: "Online professional learning",
        projects: "Course practices",
        foodie: "Cooking recipes website",
        baristas: "Coffee shop website",
        award: "Achievements",
        congratulations:
          "Congratulations! You've reached the epic end of my portfolio. You've earned the",
        rank: "professional navigator",
        thanks: "medal. Thanks for visiting!",
        paragraph: "Developed by",
      },
      sections: {
        welcome: "Hello! I'm Emmanuel",
        hero: {
          title: "frontend developer",
          description:
            "Welcome to the second version of my portfolio! Designed especially for social media. If you have any questions, please feel free to write to me through any of my contact platforms",
          cv: "Download",
          email: "Copy Email",
          emailCopied: "¡Email copied!",
        },
        about: {
          title: "A Little About Me",
          description:
            "Discover how my experience and skills can add value to your projects.",
          hi: "I'm",
          paragraph:
            "Transitioning to Fullstack, expanding my backend knowledge while applying React, TypeScript, and agile methodologies in real projects. I have developed MVPs working with stakeholders and complete development teams.",
          contactMe: "Contact me",
          courses: "online courses",
          practice: "practice hours",
          subtitle: "Want to",
          copy: "Discover my latest projects, created with dedication and focus on every detail.",
          button: "See more",
        },
        certifications: {
          title: "Formation and Certifications",
          description:
            "Courses, titles and certifications that support my knowledge and skills",
          platzi:
            "Course that encompasses the fundamentals of programming and computational logic",
          javascript:
            "Certification dedicated to the development of algorithms and data structures in JavaScript",
          responsive:
            "Certification with an emphasis on HTML, CSS, adaptable design and web accessibility",
          htmlcss:
            "Theoretical and practical course to improve skills in advanced web design",
          uxresearch:
            "Focused on methodologies to understand needs, behaviors and motivations, optimizing the user experience",
          nucba:
            "Practical learning workshop for the use of no-code tools and applications based on artificial intelligence",
          url: "Go to website",
          img: "Expand image",
        },
        skills: {
          title: "Tech Stack",
          description:
            "Technologies and methodologies that I use to take your projects to the next level",
          subtitle1: "Web Development",
          subtitle2: "Frameworks and Libraries",
          subtitle3: "Development Tools",
          subtitle4: "Design and Prototyping",
          subtitle5: "Project Management",
          html: "Hypertext Markup Language",
          css: "Cascading Style Sheets",
          javascript: "Web programming language",
          react: "JavaScript library for building user interfaces",
          angular: "JavaScript framework for building web applications",
          tailwind: "Utility CSS framework",
          bootstrap: "Front-End development framework",
          nodejs: "JavaScript runtime environment",
          express:
            "Node.js framework for building backend applications and RESTful APIs",
          figma: "User interface design tool",
          git: "Version control system",
          github: "Collaborative development platform",
          sass: "Syntactically Awesome Style Sheets",
          webflow: "Web design and development platform",
          photoshop: "Image editing software",
          vscode: "Source code editor",
          jira: "Agile project management and development tracking",
          clickUp:
            "Comprehensive project and task management with agile methodologies",
          notion: "Organization, documentation, and collaborative databases",
          trello: "Kanban boards for visual task organization",
        },
        services: {
          title: "Building Digital Experiences",
          description:
            "These core principles guide every line of code and design, ensuring that every project is accessible, engaging, and efficient",
          cardTitle1: "Usability Above All",
          cardDescription1:
            "Every design decision is focused on delivering an engaging, frictionless experience",
          cardTitle2: "Speed ​​that Matters",
          cardDescription2:
            "A well-optimized site delivers fast results, both in speed and search engine rankings",
          cardTitle3: "Perfect in Every Screen",
          cardDescription3:
            "From mobile to desktop, a design that intuitively adjusts to each format with fluidity is essential",
        },
        contact: {
          title: "I'm Just a Message Away",
          description:
            "Available for projects, inquiries, and collaborations. Don't hesitate to write me.",
          subtitle: "Get in touch",
          name: "Name",
          email: "Email Address",
          message: "Message...",
          send: "Send",
          sending: "Sending message...",
          nameTitle: "Please enter your name",
          emailTitle: "Please enter your email address",
          messageTitle: "Please enter your message",
          success: "Success! Message sent successfully.",
          error: "Something went wrong. Please try again later.",
        },
        projects: {
          title: "Featured Works",
          description: "Explore a sample of my work and skills in action.",
          pollos:
            "This site brings the fictional restaurant from Breaking Bad into the digital world. Inspired by the visual style of restaurants like KFC, this site combines an attractive design with details that refer to the series. Explore a visual experience that will make you feel like you're in a real Gus Fring franchise.",
          lockKey:
            "Password manager designed to offer secure and efficient credential management. The project was developed as part of a collaborative experience-oriented simulation for the No Country platform. (Trial version)",
          jinjer:
            "Music artist platform inspired by the band Jinjer. The site offers a complete experience: bilingual navigation (English/Spanish) with interactive sections, including news, biographies, tour dates, discography, music player, multimedia gallery and an online store",
          literarium:
            "Digital library modern that blends the traditional library experience with cutting-edge technology. Intuitive navigation between detailed sections, content adapted to each section, and responsive design for a personalized experience",
          button: "Visit site",
          link: "More details",
          buttonTitle: "Watch the live demo of the project",
          githubTitle: "Explore the project source code",
        },
      },
      musicPlayer: {
        albumCover: "Cover of",
        songTitle: "Song Title",
        artist: "Artist",
        prev: "Previous",
        play: "Play",
        pause: "Pause",
        next: "Next",
        expand: "Expand",
        collapse: "Collapse",
      },
      lastUpdate: "Last update",
    },
  },
  es: {
    translation: {
      navbar: {
        home: "Inicio",
        about: "Sobre mí",
        certifications: "Estudios",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        title: "Cambiar a Inglés",
        lightMode: "Cambiar a modo oscuro",
        darkMode: "Cambiar a modo claro",
      },
      footer: {
        phrase: "No hay plan B para el éxito",
        channels: "Canales recomendados",
        freecodecamp: "Cursos técnicos en español",
        platzi: "Aprendizaje profesional en línea",
        projects: "Prácticas de cursos",
        foodie: "Web de recetas de cocina",
        baristas: "Sitio web de cafetería",
        award: "Logros",
        congratulations:
          "¡Felicidades! Alcanzaste el épico final de mi portfolio. Te ganaste la medalla de",
        rank: "navegante profesional.",
        thanks: "¡Gracias por tu visita!",
        paragraph: "Desarrollado por",
      },
      sections: {
        welcome: "Hola! Soy Emmanuel",
        hero: {
          title: "desarrollador frontend",
          description:
            "¡Bienvenido a la segunda versión de mi portfolio! Pensado especialmente para redes sociales. Si tenés alguna consulta, escribime a través de mis plataformas de contacto",
          cv: "Descargar",
          email: "Copiar Email",
          emailCopied: "¡Email copiado!",
        },
        about: {
          title: "Un Poco Sobre Mí",
          description:
            "Descubrí cómo mi experiencia y habilidades pueden agregar valor a tus proyectos.",
          hi: "Soy",
          paragraph:
            "En transición hacia Fullstack, expandiendo mis conocimientos en backend mientras aplico React, TypeScript y metodologías ágiles en proyectos reales. He desarrollado MVPs trabajando con stakeholders y equipos de desarrollo completos.",
          contactMe: "Contactame",
          courses: "cursos en línea",
          practice: "horas de práctica",
          subtitle: "Querés",
          copy: "Descubrí mis últimos proyectos, creados con dedicación y enfoque en cada detalle.",
          button: "Ver más",
        },
        certifications: {
          title: "Formación y Certificaciones",
          description:
            "Cursos, títulos y certificaciones que avalan mis conocimientos y habilidades",
          platzi:
            "Curso que abarca fundamentos de programación y lógica computacional",
          javascript:
            "Certificación dedicada al desarrollo de algoritmos y estructuras de datos en JavaScript",
          responsive:
            "Certificación con enfoque en HTML, CSS, diseño adaptable y accesibilidad web",
          htmlcss:
            "Curso teórico práctico para perfeccionar habilidades en diseño web avanzado",
          uxresearch:
            "Enfocado en metodologías para entender necesidades, comportamientos y motivaciones, optimizando la experiencia de usuario",
          nucba:
            "Taller práctico de aprendizaje para el uso de herramientas no-code y aplicaciones basadas en inteligencia artificial",
          url: "Ir al sitio web",
          img: "Expandir imagen",
        },
        skills: {
          title: "Stack Tecnológico",
          description:
            "Tecnologías y metodologías que utilizo para llevar tus proyectos al siguiente nivel",
          subtitle1: "Desarrollo Web",
          subtitle2: "Frameworks y Bibliotecas",
          subtitle3: "Herramientas de Desarrollo",
          subtitle4: "Diseño y Prototipado",
          subtitle5: "Gestión de Proyectos",
          html: "Lenguaje de Marcado de Hipertexto",
          css: "Hojas de Estilo en Cascada",
          javascript: "Lenguaje de programación web",
          react:
            "Biblioteca de JavaScript para construir interfaces de usuario",
          angular: "Framework de JavaScript para construir aplicaciones web",
          tailwind: "Framework de CSS utilitario",
          bootstrap: "Marco de desarrollo de Front-End",
          nodejs: "Entorno de ejecución de JavaScript",
          express:
            "Framework de Node.js para construir aplicaciones backend y APIs RESTful",
          figma: "Herramienta de diseño de interfaz de usuario",
          git: "Sistema de control de versiones",
          github: "Plataforma de desarrollo colaborativo",
          sass: "Hojas de Estilo Sintácticamente Asombrosas",
          webflow: "Plataforma de diseño y desarrollo web",
          photoshop: "Software de edición de imágenes",
          vscode: "Editor de código fuente",
          jira: "Gestión ágil de proyectos y seguimiento de desarrollo",
          clickUp:
            "Gestión integral de proyectos y tareas con metodologías ágiles",
          notion: "Organización, documentación y bases de datos colaborativas",
          trello: "Tableros Kanban para organización visual de tareas",
        },
        services: {
          title: "Construyendo Experiencias Digitales",
          description:
            "Estos principios fundamentales guían cada línea de código y diseño, asegurando que cada proyecto sea accesible, atractivo y eficiente",
          cardTitle1: "Usabilidad ante Todo",
          cardDescription1:
            "Cada decisión de diseño está enfocada en ofrecer una experiencia atractiva y sin fricciones",
          cardTitle2: "Velocidad que Importa",
          cardDescription2:
            "Un sitio bien optimizado ofrece resultados rápidos, tanto en velocidad como en posicionamiento web",
          cardTitle3: "Perfecto en Cada Pantalla",
          cardDescription3:
            "Desde móviles hasta escritorios, un diseño que se ajusta intuitivamente a cada formato con fluidez es esencial",
        },
        contact: {
          title: "Estoy a un Mensaje de Distancia",
          description:
            "Disponible para proyectos, consultas y colaboraciones. No dudes en escribirme.",
          subtitle: "Contactame",
          name: "Nombre",
          email: "Correo electrónico",
          message: "Mensaje...",
          send: "Enviar",
          sending: "Enviando mensaje...",
          nameTitle: "Ingresa tu nombre",
          emailTitle: "Ingresa tu correo electrónico",
          messageTitle: "Ingresa tu mensaje",
          success: "¡Éxito! Mensaje enviado correctamente.",
          error: "Algo salió mal. Intenta de nuevo más tarde.",
        },
        projects: {
          title: "Trabajos Destacados",
          description:
            "Explora una muestra de mi trabajo y habilidades en acción.",
          pollos:
            "Este sitio lleva el restaurante ficticio de Breaking Bad al mundo digital. Inspirado en el estilo visual de restaurantes como KFC, esta página combina un diseño atractivo con detalles que remiten a la serie. Explora una experiencia visual que te hará sentir en una franquicia de Gus Fring.",
          lockKey:
            "Administrador de contraseñas pensado para ofrecer una gestión segura y eficiente de credenciales. El proyecto fue desarrollado en el marco de una simulación orientada a experiencias colaborativas, para la plataforma No Country. (Versión de prueba)",
          jinjer:
            "Plataforma de artista musical inspirada en la banda Jinjer. El sitio ofrece una experiencia completa: navegación bilingüe (inglés/español) con secciones interactivas, incluye noticias, biografías, fechas de gira, discografía, reproductor de música, galería multimedia y una tienda en línea",
          literarium:
            "Biblioteca digital moderna que fusiona la experiencia de una librería tradicional con tecnología de vanguardia. Navegación intuitiva entre secciones detalladas, contenido adaptado a cada sección y diseño responsivo para una experiencia personalizada",
          button: "Visitar sitio",
          link: "Más detalles",
          buttonTitle: "Ver la demo en vivo del proyecto",
          githubTitle: "Explorar el código fuente del proyecto",
        },
      },
      musicPlayer: {
        albumCover: "Portada de",
        songTitle: "Título de la canción",
        artist: "Artista",
        prev: "Anterior",
        play: "Reproducir",
        pause: "Pausar",
        next: "Siguiente",
        expand: "Expandir",
        collapse: "Contraer",
      },
      lastUpdate: "Última actualización",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
