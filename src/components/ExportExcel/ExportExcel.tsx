import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import exportar from "../../assets/images/exportar.svg"
import "../../styled-components/style.css"

const ExportExcel = ({dataFile, titleFile}: any) => {

  function convertDataToExcel(data: any[]) {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    return excelBuffer;
  }

  const handleExportToExcel = () => {
    const excelBuffer = convertDataToExcel(dataFile);
    const excelData = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    saveAs(excelData, `${titleFile}.xlsx`);
  };

  return (
    <button className="btn btn-export-excel ml-2" onClick={handleExportToExcel}>
      Exportar
      <img src={exportar} alt="" className="" />
    </button>
  )
}
export default ExportExcel