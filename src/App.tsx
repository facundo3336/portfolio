import { useRef, useState } from "react";
import "./App.css";
import { Card } from "./components/Card/Card";
import { Carousel } from "./components/Carousel/Carousel";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProjectCard } from "./components/Project-card/Project-card";
import { Title } from "./components/Title/Title";
import { DICTIONARIES } from "./data/data";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function App() {
  const [language, setLanguage] = useState<"ENGLISH" | "SPANISH">("ENGLISH");
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const isProjectsVisible = useIntersectionObserver({ ref: projectRef });
  const isAboutMeVisible = useIntersectionObserver({ ref: aboutMeRef });
  const isContactVisible = useIntersectionObserver({ ref: contactRef });

  const onClickLanguage = () => {
    if (language === "ENGLISH") {
      setLanguage("SPANISH");
    } else setLanguage("ENGLISH");
  };

  return (
    <div className="bg-dots-background min-h-screen bg-primary relative">
      <div className="absolute top-0 left-0 right-0">
        <Header
          navAbout={DICTIONARIES[language].NAV_About}
          navContact={DICTIONARIES[language].NAV_Contact}
          navProjects={DICTIONARIES[language].NAV_Projects}
          navSkills={DICTIONARIES[language].NAV_Skills}
          onClickFlagButton={onClickLanguage}
        />
      </div>
      <section>
        <Container mobilePadding>
          <div className="min-h-screen flex flex-col justify-center">
            <div className="drop-shadow-text-shadow sm:drop-shadow-text-shadow-sm">
              <div className="text-white text-5xl drop-shadow-text-shadow sm:drop-shadow-text-shadow-sm sm:text-8xl md:text-9xl lg:text-xxl font-retro flex flex-col justify-center align-middle w-fit m-auto ">
                <div className="flex justify-center align-middle animate-fadeInLeft">
                  <span className="cursor-default">
                    {DICTIONARIES[language].PresentationSubText}
                  </span>
                </div>
                <div className="flex justify-center align-middle animate-fadeInRight">
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default ">
                    F
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    A
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    C
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    U
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    N
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    D
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    O
                  </span>
                  <span className="hover:animate-rubberband inline-block text-violet cursor-default">
                    ?
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="about">
        <Container mobilePadding>
          <div>
            <Title
              textBeforeTitle={DICTIONARIES[language].AboutSubTitle}
              titleText={DICTIONARIES[language].AboutTitle}
            />
            <div
              ref={aboutMeRef}
              className="md:flex md:items-center md:gap-10 md:pt-16 md:justify-between text-sm md:text-base lg:text-lg"
            >
              <div
                className={`md:order-2 ${
                  isAboutMeVisible && "animate-fadeInRight"
                }`}
              >
                <div className="animate-morph  overflow-hidden sm:h-64 h-40 lg:h-72 md:m-0 mt-10 w-60 sm:w-80  md:h-60 lg:w-96 xl:h-80 xl:w-[27rem]">
                  <img src="./personal-photo.jpg" alt="Facundo Cabral image" />
                </div>
              </div>
              <div
                className={`flex flex-col gap-6 pt-9 md:max-w-xs md:pt-0 lg:max-w-sm xl:max-w-lg ${
                  isAboutMeVisible && "animate-fadeInLeft"
                }`}
              >
                <p className="text-violet">
                  {DICTIONARIES[language].AboutSubText}
                </p>
                <p className="text-white">
                  {DICTIONARIES[language].AboutText1}
                </p>
                <p className="text-white">
                  {DICTIONARIES[language].AboutText2}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section id="projects">
        <Container mobilePadding>
          <div className="pt-24 md:pt-48">
            <Title
              textBeforeTitle={DICTIONARIES[language].ProjectsSubTitle}
              titleText={DICTIONARIES[language].ProjectsTitle}
            />
            <div
              ref={projectRef}
              className="pt-20 gap-16 flex flex-col md:grid md:grid-cols-2 md:gap-14 lg:grid-cols-3"
            >
              <ProjectCard
                isTheCardVisible={isProjectsVisible}
                title="Avocode"
                buttonText={DICTIONARIES[language].Box1ButtonText}
                buttonLink="https://avocode.io"
                imageUrl="/avocode.ico"
              >
                {DICTIONARIES[language].Box1Text}
              </ProjectCard>
              <ProjectCard
                isTheCardVisible={isProjectsVisible}
                title="Eshop"
                buttonText={DICTIONARIES[language].Box2ButtonText}
                buttonLink="https://github.com/facundo3336/account-portal"
                imageUrl="/shop.png"
              >
                {DICTIONARIES[language].Box2Text}
              </ProjectCard>
              <ProjectCard
                isTheCardVisible={isProjectsVisible}
                title="Pokedex"
                buttonText={DICTIONARIES[language].Box3ButtonText}
                buttonLink="https://github.com/facundo3336/pokedex"
                imageUrl="/pokedex.webp"
              >
                {DICTIONARIES[language].Box3Text}
              </ProjectCard>
            </div>
          </div>
        </Container>
      </section>
      <section id="skills" className="pt-20 md:pt-32">
        <Container mobilePadding={false}>
          <div className="px-9 sm:px-0 pb-2 sm:pb-16 lg:pb-24">
            <Title
              textBeforeTitle={DICTIONARIES[language].SkillsSubTitle}
              titleText={DICTIONARIES[language].SkillsTitle}
            />
          </div>
          <Carousel scrollFrom="Left" />
          <Carousel scrollFrom="Right" />
        </Container>
      </section>
      <section ref={contactRef} id="contact" className="py-24 md:pt-40">
        <Container mobilePadding>
          <Title
            titleText={DICTIONARIES[language].ContactTitle}
            textBeforeTitle={DICTIONARIES[language].ContactSubTitle}
          />
          <div className="grid gap-12 pt-20 md:grid-cols-2 lg:grid-cols-3">
            <Card
              isCardVisible={isContactVisible}
              description={DICTIONARIES[language].ContactBox1Text}
              link="https://www.linkedin.com/in/facundo-cabral-90ab9122a"
              linkText={DICTIONARIES[language].ContactBox1ButtonText}
              title="Linkedin"
            />
            <Card
              isCardVisible={isContactVisible}
              description={DICTIONARIES[language].ContactBox2Text}
              link="https://github.com/facundo3336"
              linkText={DICTIONARIES[language].ContactBox2ButtonText}
              title="GitHub"
            />
            <Card
              isCardVisible={isContactVisible}
              description={DICTIONARIES[language].ContactBox3Text}
              link="mailto:fcv3336@gmail.com"
              linkText={DICTIONARIES[language].ContactBox3ButtonText}
              title="Email"
            />
          </div>
        </Container>
      </section>
      <Footer text={DICTIONARIES[language].FooterText} />
    </div>
  );
}

export default App;
