import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    backgroundColor: "#E4E4E4",
  },
  title: {
    textAlign: "center",
    margin: 10,
    fontWeight: 800,
  },
  imageLogo: {
    width: "300px",
    margin: "0 auto",
  },
  section: {
    margin: 30,
  },
  div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "",
    justifyContent: "space-between",
    margin: 10,
  },
  paragraph: {
    margin: 10,
    fontSize: 16,
  },
  paragraphStyle: {
    fontSize: 16,
    width: "95%",
    height: 25,
    padding: 2,
    borderBottom: "1px solid #000",
    borderTop: "1px solid #000",
  },
  paragraphCustom: {
    margin: 4,
    fontSize: 13,
  },
  numberPages: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
  },
});
