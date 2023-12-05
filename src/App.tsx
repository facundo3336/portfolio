import "./App.css";
import { Container } from "./components/Container/Container";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";

function App() {
  return (
    <div className="bg-dots-background min-h-screen bg-primary relative">
      <div className="absolute top-0 left-0 right-0">
        <Header />
      </div>
      <section>
        <Container>
          <div className="min-h-screen flex flex-col justify-center">
            <div className="drop-shadow-text-shadow sm:drop-shadow-text-shadow-sm">
              <div className="text-white text-5xl drop-shadow-text-shadow sm:drop-shadow-text-shadow-sm sm:text-8xl md:text-9xl lg:text-xxl font-retro flex flex-col justify-center align-middle w-fit m-auto ">
                <div className="flex justify-center align-middle">
                  <span className="cursor-default">W</span>
                  <span className="cursor-default">H</span>
                  <span className="cursor-default">O</span>
                  <span className="cursor-default">'</span>
                  <span className="cursor-default">S</span>
                </div>
                <div className="flex justify-center align-middle">
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
      <section>
        <Container>
          <div>
            <Title textBeforeTitle="Introduction" titleText="About me" />
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;
