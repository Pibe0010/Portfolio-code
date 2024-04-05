import { Image, Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../../Utils/Curriculumn/CurriculumnStyle.js";
import logo from "../../assets/4913181.png";

export const CVPageOne = () => {
  return (
    <Page style={styles.page}>
      <Text style={styles.title}>Daniel Montero Castro</Text>
      <Image src={logo} style={styles.imageLogo} />

      <View style={styles.section}>
        <Text style={styles.paragraph}>
          ¡Hola! Me llamo Daniel. Soy una persona autodidacta con ganas de
          seguir aprendiendo y evolucionar en el ámbito laboral, de la
          tecnología y personal. Mi país de origen es Argentina aunque llevo 10
          años viviendo en España, he pasado por varios trabajos a lo largo de
          mi vida trabajando de limpieza de coches al detalle, repartidor,
          jardinero, pero no me sentía satisfecho conmigo mismo y tomé la
          decisión de agarrar mi vida y dirigirla a lo que más me apasiona, que
          es el mundo de la programación y la tecnología.
        </Text>
        <Text style={styles.paragraph}>
          Llevo un año estudiando por mi cuenta haciendo cursos de programación
          web por mi cuenta y decidí dar un paso más y me apunté a un Bootcamp
          de programación web Full-Stack, me di cuenta de que me encanta la
          programación, poder ayudar a mis compañeros, trabajar en equipo,
          compartir conocimientos, investigar. Me di cuenta de que es mundo muy
          amplio y extenso el mundo de la programación.
        </Text>
        <Text style={styles.paragraph}>
          En el camino para convertirme en unos de los mejores programando tomé
          la decisión de ir por el lado del Back-End aunque tengo habilidades
          Front-End, sigo practicando ambas, pero mi enfoque es el back. Estoy
          dispuesto a seguir aprendiendo cualquier Framework, biblioteca o
          idiomas para conseguir mis objetivos.
        </Text>
        <Text style={styles.paragraph}>Gracias por leer mi CV.</Text>
        <Text style={styles.paragraph}>
          No es el más fuerte el que sobrevive, ni el más inteligente, sino el
          que responde mejor al cambio. - Charles Darwin -
        </Text>
      </View>
      <View style={styles.numberPages}>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </View>
    </Page>
  );
};
