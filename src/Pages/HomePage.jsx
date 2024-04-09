import "./Home.css";
import "animate.css";
import { MainLayout } from "../Layout/MainLayout.jsx";
import { CurriculumnPDF } from "../components/CurriculumnPDF.jsx";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Button } from "../components/Buttons/Button.jsx";
import { DownloadBtn } from "../components/Buttons/DownloadBtn.jsx";
import { ButtonGmail } from "../components/Buttons/ButtonGmail.jsx";
import { Loading } from "../components/Animations/Loading.jsx";
import { Cube } from "../components/Animations/Cube.jsx";

export const HomePage = () => {
  return (
    <MainLayout>
      <section className="container-home">
        <article className="article-home">
          <h1 className="title-home animate__animated animate__bounceInLeft">
            Desarrollador Web
          </h1>
          <p className="description">
            Programador enfocado en el desarrollo web y app. Tengo habilidades
            tanto en el Front-End como en Back-End. Sin embargo mi especialidad
            y enfoque principal está en el Back-End.
          </p>
          <div className="ball">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </article>
        <section className="animation animate__animated animate__bounceInUp">
          <Cube />
        </section>
        <section className="btn-home">
          <h2 className="animate__animated animate__bounceInRight">
            Daniel Montero Castro
          </h2>
          <div className="btn-container">
            <ButtonGmail className="button">CONTACTAR</ButtonGmail>

            <PDFDownloadLink
              document={<CurriculumnPDF />}
              fileName="Daniel_Montero_Castro_CV.pdf">
              {({ loading }) =>
                loading ? (
                  <Button type="button">
                    <Loading />
                  </Button>
                ) : (
                  <DownloadBtn />
                )
              }
            </PDFDownloadLink>
          </div>
        </section>
      </section>
    </MainLayout>
  );
};
