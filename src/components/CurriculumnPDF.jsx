import { Document } from "@react-pdf/renderer";
import { CVPageOne } from "./Curriculum/CVPageOne.jsx";
import { CVPageTwo } from "./Curriculum/CVPageTwo.jsx";
import { CVPageTree } from "./Curriculum/CVPageTree.jsx";

export const CurriculumnPDF = () => {
  return (
    <Document>
      <CVPageOne />
      <CVPageTwo />
      <CVPageTree />
    </Document>
  );
};
