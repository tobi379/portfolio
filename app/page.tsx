"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X, Linkedin, Mail, ExternalLink, Download, Code, Database, Globe, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function TobiasPortfolio() {
  const [isDark, setIsDark] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "education", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { id: "home", label: "Inicio" },
    { id: "about", label: "Sobre mi" },
    { id: "projects", label: "Proyectos" },
    { id: "skills", label: "Habilidades" },
    { id: "education", label: "Educación" },
    { id: "contact", label: "Contacto" },
  ]

  const projects = [
    {
      title: "KTM Bicicletas",
      description:
        "Desarrollé el e-commerce oficial de bicicletas KTM en Argentina para la empresa Dal Santo Ind. y Com. S.A., distribuidor oficial de la marca. El sitio permite explorar todos los modelos disponibles, ver sus especificaciones completas y reservar bicicletas directamente desde la web, gestionando pedidos y comprobantes de pago en un sistema completamente administrable.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL"],
      image: "/ktm.png",
      link: "https://ktmbikesargentina.com.ar"
    },
    {
      title: "Firebird Bikes",
      description: "Fire Bird Bikes es una plataforma web desarrollada para Dal Santo Ind. y Com. S.A., fabricante y distribuidor oficial de bicicletas Fire Bird en Argentina. El sitio actúa como catálogo digital completo, donde los usuarios pueden explorar todos los modelos disponibles, ver imágenes detalladas, fichas técnicas, y luego localizar el distribuidor más cercano para realizar la compra.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL / Prisma", "Node.js"],
      image: "/firebird.png",
      link: "https://bicicletasfirebird.com.ar"
    },
    {
      title: "Solo Calificados",
      description:
        "Solo Calificados es una plataforma web moderna que conecta proveedores de servicios con propietarios, enfocándose especialmente en barrios privados. La plataforma garantiza la calidad y confiabilidad de los servicios mediante un sistema de calificación y verificación de proveedores.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MySQL / Prisma", "Node.js"],
      image: "/solocalificados.png",
      link: "https://solocalificados.com"
    },
    {
      title: "Bot Cali",
      description:
        "Bot de WhatsApp diseñado para conectar usuarios con proveedores de servicios y comercios calificados. El bot actúa como un asistente virtual inteligente que facilita la búsqueda y contacto con profesionales, ofreciendo una experiencia fluida y personalizada. Implementa un sistema completo de verificación y registro de usuarios, junto con un catálogo dinámico de servicios y comercios que se actualiza en tiempo real. La interfaz interactiva, basada en botones y listas, permite una navegación intuitiva, mientras que el sistema de plantillas de mensajes personalizadas asegura una comunicación efectiva y profesional. El bot incluye funcionalidades avanzadas como el compartir información de contacto y ubicaciones, un sistema de métricas para seguimiento de interacciones, y un sistema de soporte integrado para asistir a los usuarios en todo momento.",
      tech: ["Node.js", "Express.js", "MySQL", "Whatsapp API", "Axios"],
      image: "/bot.jpg",
      link: "https://wa.me/5491136645216"
    },
    {
      title: "Hospitalia",
      description:
        "Hospitalia es una aplicación de escritorio robusta y moderna diseñada para la gestión integral de pacientes y fichas médicas. Desarrollada con un enfoque en la usabilidad y seguridad, esta solución permite a instituciones médicas y congregaciones religiosas mantener un control detallado de sus afiliados, incluyendo información personal, datos médicos y seguimiento de tratamientos. La aplicación implementa un sistema de autenticación seguro, gestión de base de datos local y actualizaciones automáticas, todo mientras mantiene una interfaz intuitiva y responsive que facilita el trabajo diario del personal médico y administrativo.",
      tech: ["Electron", "HTML5", "Tailwind CSS", "JavaScript", "Node.js", "SQLite"],
      image: "/gestion.png",
      // link: "https://wa.me/5491136645216"
    },
  ]

  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
      icon: <Code className="h-6 w-6" />,
    },
    {
      category: "Maquetación y Estilos",
      skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "HTML", "CSS"],
      icon: <Globe className="h-6 w-6" />,
    },
    {
      category: "Backend & Database",
      skills: ["Next.js API Routes", "MySQL", "Prisma ORM"],
      icon: <Database className="h-6 w-6" />,
    },
  ]

  const education = [
    {
      degree: "Licenciatura en Gestión de Tecnología Informática",
      institution: "Universidad Abierta Interamericana (UAI)",
      location: "Buenos Aires, Argentina",
      period: "Ago 2024 – Dic 2027",
      status: "En curso",
      description:
        "Formación universitaria en sistemas de información, gestión de proyectos tecnológicos, infraestructura IT y análisis de datos.",
    },
    {
      degree: "Curso de Desarrollo Web Fullstack",
      institution: "Digital House",
      location: "Modalidad online",
      period: "Mar 2022 – Jul 2023",
      status: "Completado",
      description:
        "Capacitación en desarrollo web fullstack con tecnologías como React, Next.js, TypeScript, Tailwind CSS, MySQL, Prisma ORM, Node.js, entre otras.",
    },
    {
      degree: "Desarrollador Fullstack",
      institution: "MindHub",
      location: "Modalidad online",
      period: "Abr 2021 – Ago 2021",
      status: "Completado",
      description:
        "Capacitación intensiva en desarrollo web fullstack con tecnologías como React, Next.js, TypeScript, Tailwind CSS, MySQL, Prisma ORM, Node.js, entre otras.",
    },
    {
      degree: "Bachiller Bilingüe",
      institution: "Colegio St. Trinnean's",
      location: "Buenos Aires, Argentina",
      period: "Mar 2013 – Dic 2018",
      status: "Completado",
      description: "Formación bilingüe con orientación académica en inglés. Preparación para exámenes Cambridge.",
    },
  ]

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${isDark ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"}`}
    >
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Tobias Pazos
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id ? "text-blue-600 dark:text-blue-400" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
            <Button variant="ghost" size="sm" onClick={toggleTheme} className="ml-4">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button variant="ghost" size="sm" onClick={toggleTheme}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item.id ? "text-blue-600 dark:text-blue-400" : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="/logo.jpeg"
                alt="Tobias Pazos"
                className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-white dark:border-gray-700"
              />
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Fullstack Developer
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Desarrollador web especializado en aplicaciones modernas con Next.js, React y TypeScript. Comprometido con
              la entrega de soluciones eficientes orientadas al usuario.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
              >
                Ver Mis Proyectos
              </Button>
              <Button size="lg" variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Descargar CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Sobre Mí</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Soy un desarrollador web fullstack con experiencia en el desarrollo de aplicaciones modernas
                  utilizando tecnologías como Next.js, React, TypeScript y JavaScript. Tengo un manejo sólido de bases
                  de datos relacionales como MySQL y PostgreSQL.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Actualmente curso la Licenciatura en Gestión de Tecnología Informática, combinando habilidades
                  técnicas con conocimientos en gestión de proyectos y sistemas de información. Me comprometo con la
                  mejora continua y el aprendizaje constante.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Freelance Developer
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                    Estudiante Universitario
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Inglés Avanzado
                  </Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Experiencia Profesional</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Desarrollador Web Freelance</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Enero 2023 – Actualidad</p>
                        <p className="text-sm mt-2">Trabajo independiente para clientes de Argentina y otros países</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Certificaciones</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div>
                      <h4 className="font-semibold">First Certificate in English (FCE)</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Cambridge English Qualifications</p>
                      <p className="text-sm mt-2">Nivel C1 acreditado internacionalmente</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Proyectos Destacados</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                project.link ? (
                  <a 
                    key={index} 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {project.title}
                          <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ) : (
                  <div key={index}>
                    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                          {project.title}
                        </CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Habilidades Técnicas</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skillCategories.map((category) => (
                <Card key={category.category} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg text-white">
                        {category.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {category.skills.map((skill) => (
                        <Badge key={skill} className="bg-gradient-to-r from-blue-600 to-teal-600 text-white">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Card className="max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle>Herramientas y Tecnologías Adicionales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Git", "GitHub", "Visual Studio Code", "Metodologías Ágiles", "Control de Versiones"].map(
                      (tool) => (
                        <Badge key={tool} variant="outline">
                          {tool}
                        </Badge>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Formación Académica</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                        <CardDescription className="text-lg font-medium">{edu.institution}</CardDescription>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{edu.location}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant={edu.status === "En curso" ? "default" : "secondary"}>{edu.period}</Badge>
                        <Badge variant={edu.status === "En curso" ? "destructive" : "outline"}>{edu.status}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Contacto</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              ¿Tenes un proyecto en mente? Me encantaría escuchar sobre él y ver cómo puedo ayudarte.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">t.pazos.carbonell@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">linkedin.com/in/tobias-pazos</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:t.pazos.carbonell@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Enviar Email
                </Button>
              </a>
              <a 
                href="https://linkedin.com/in/tobias-pazos"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Tobias Pazos.
          </p>
        </div>
      </footer>
    </div>
  )
}