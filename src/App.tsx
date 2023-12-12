import "./App.css";
import { Card } from "./components/Card/Card";
import { Carousel } from "./components/Carousel/Carousel";
import { Container } from "./components/Container/Container";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ProjectCard } from "./components/Project-card/Project-card";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div className="bg-dots-background min-h-screen bg-primary relative">
      <div className="absolute top-0 left-0 right-0">
        <Header />
      </div>
      <section>
        <Container mobilePadding>
          <div className="min-h-screen flex flex-col justify-center">
            <div className="drop-shadow-text-shadow sm:drop-shadow-text-shadow-sm">
              <div className="text-white text-5xl drop-shadow-text-shadow sm:drop-shadow-text-shadow-sm sm:text-8xl md:text-9xl lg:text-xxl font-retro flex flex-col justify-center align-middle w-fit m-auto ">
                <div className="flex justify-center align-middle animate-fadeInLeft">
                  <span className="cursor-default">W</span>
                  <span className="cursor-default">H</span>
                  <span className="cursor-default">O</span>
                  <span className="cursor-default">'</span>
                  <span className="cursor-default">S</span>
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
            <Title textBeforeTitle="Introduction" titleText="About me" />
            <div className="md:flex md:items-center md:gap-10 md:pt-16 md:justify-between text-sm md:text-base lg:text-lg">
              <div className="md:order-2 animate-fadeInRight">
                <div className="animate-morph  overflow-hidden sm:h-64 h-40 lg:h-72 md:m-0 mt-10 w-60 sm:w-80  md:h-60 lg:w-96 xl:h-80 xl:w-[27rem]">
                  <img src="./personal-photo.jpg" alt="Facundo Cabral image" />
                </div>
              </div>
              <div className="flex flex-col gap-6 pt-9 md:max-w-xs md:pt-0 lg:max-w-sm xl:max-w-lg animate-fadeInLeft">
                <p className="text-violet">
                  Hello there, I'm so happy you are here!
                </p>
                <p className="text-white">
                  Hi, I'm Facundo! I consider myself an optimistic person and I
                  always have the wish of learn and constantly train my
                  abilities. I'm looking for new experiences in the technology
                  sector, with so much energy to give the best of myself.
                </p>
                <p className="text-white">
                  I have knowledge in HTML, CSS, React, SASS, Javascript,
                  NextJS, Firestore, MongoDB and software testing. I have worked
                  with GitHub, Jira, Trello, Postman and Mantis. I have
                  intermediate English and I continue study the language every
                  day.
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
              textBeforeTitle="What I have done so far"
              titleText="Projects and Experiences"
            />
            <div className="pt-20 gap-16 flex flex-col md:grid md:grid-cols-2 md:gap-14 lg:grid-cols-3">
              <ProjectCard
                title="Avocode"
                buttonText="See Website"
                buttonLink="https://avocode.io"
                imageUrl="/avocode.ico"
              >
                As a Frontend Developer, I was tasked with developing Avocode’s
                brand-new landing page. Leveraging the power of NextJS, I
                crafted a cutting-edge, dynamic, and visually appealing static
                site that truly showcases the essence of their brand.
                Collaborating with a team of talented designers, we brought
                together the perfect fusion of creativity and functionality.
              </ProjectCard>
              <ProjectCard
                title="Eshop"
                buttonText="See Repository"
                buttonLink="https://github.com/facundo3336/account-portal"
                imageUrl="/shop.png"
              >
                With the help of a full stack developer with more of the years
                of experience I made this project to practice my skills. In this
                landing page I learned a lot and started to develop knowledge in
                NextJs.
              </ProjectCard>
              <ProjectCard
                title="Pokedex"
                buttonText="See Repository"
                buttonLink="https://github.com/facundo3336/pokedex"
                imageUrl="/pokedex.webp"
              >
                I create a pokedex simulator to improve my skill using and
                calling an api. In this site you can see a list of Pokemons and
                their details
              </ProjectCard>
            </div>
          </div>
        </Container>
      </section>
      <section id="skills" className="pt-20 md:pt-32">
        <Container mobilePadding={false}>
          <div className="px-9 sm:px-0 pb-2 sm:pb-16 lg:pb-24">
            <Title textBeforeTitle="what I do" titleText="Skills" />
          </div>
          <Carousel scrollFrom="Left" />
          <Carousel scrollFrom="Right" />
        </Container>
      </section>
      <section id="contact" className="py-24 md:pt-40">
        <Container mobilePadding>
          <Title titleText="Contact" textBeforeTitle="get in touch" />
          <div className="grid gap-12 pt-20 md:grid-cols-2 lg:grid-cols-3">
            <Card
              description="Do you want to know more about me? Visit my Linkedin"
              link="https://www.linkedin.com/in/facundo-cabral-90ab9122a"
              linkText="Visit Linkedin"
              title="Linkedin"
            />
            <Card
              description="You can see all my projects in my personal GitHub"
              link="https://github.com/facundo3336"
              linkText="Visit HitHub"
              title="GitHub"
            />
            <Card
              description="Prefer to mail? Send me an email and I'll get back to you soon"
              link="mailto:fcv3336@gmail.com"
              linkText="Send email"
              title="Email"
            />
          </div>
        </Container>
      </section>
      <Footer />
    </div>
  );
}

export default App;
