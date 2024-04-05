import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../../Utils/Curriculumn/CurriculumnStyle.js";

export const CVPageTree = () => {
  return (
    <Page style={styles.page}>
      <View style={styles.section}>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>
            Estudios más alto de educación
          </Text>
          <Text style={styles.paragraphCustom}> Educación secundaria ESO,</Text>
          <Text style={styles.paragraphCustom}>
            {" "}
            Bootcamp de programación web Full-Stack
          </Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Tipo de Industria</Text>
          <Text style={styles.paragraphCustom}> Tecnología</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>
            Total de años de experiancia
          </Text>
          <Text style={styles.paragraphCustom}> 1 año</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Carnet de Conducir</Text>
          <Text style={styles.paragraphCustom}> Carnet b</Text>
        </View>
      </View>
      <View style={styles.numberPages}>
        <Text
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
        />
      </View>
    </Page>
  );
};
