import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "../../Utils/Curriculumn/CurriculumnStyle.js";

export const CVPageTwo = () => {
  return (
    <Page style={styles.page}>
      <View style={styles.section}>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Fecha de nacimineto</Text>
          <Text style={styles.paragraphCustom}> 23-02-1987</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Localidad</Text>
          <Text style={styles.paragraphCustom}> Barcelona</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Gmail</Text>
          <Text style={styles.paragraphCustom}> Salamapatela@gmail.com</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>
            Disponobilidad para trabajar
          </Text>
          <Text style={styles.paragraphCustom}> Si</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Presencial</Text>
          <Text style={styles.paragraphCustom}> Si</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Reamoto</Text>
          <Text style={styles.paragraphCustom}> Si</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Hibrydo</Text>
          <Text style={styles.paragraphCustom}> Si</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>Idiomas</Text>
          <Text style={styles.paragraphCustom}> Español - Experto, </Text>
          <Text style={styles.paragraphCustom}> Catalán - Intermedio, </Text>
          <Text style={styles.paragraphCustom}> Inglés - Muy Basico</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}>
            Disponoblidad para cambiar de pais o localidad
          </Text>
          <Text style={styles.paragraphCustom}> Si</Text>
        </View>
        <View style={styles.div}>
          <Text style={styles.paragraphStyle}> Dipuesto a viajar</Text>
          <Text style={styles.paragraphCustom}> Si</Text>
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
