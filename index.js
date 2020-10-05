import XLSX from "xlsx";
import * as Sharing from "expo-sharing";
import * as FileSystem from "expo-file-system";

export default async function createExcelFile(data, filename = "file") {
  const ws = XLSX.utils.json_to_sheet(data);
  const wb = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(wb, ws, filename.toLocaleUpperCase);

  const wbout = XLSX.write(wb, {
    type: "base64",
    bookType: "xlsx",
  });

  const uri = FileSystem.cacheDirectory + `${filename}.xlsx`;

  await FileSystem.writeAsStringAsync(uri, wbout, {
    encoding: FileSystem.EncodingType.Base64,
  });

  await Sharing.shareAsync(uri, {
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    dialogTitle: "MyWater data",
    UTI: "com.microsoft.excel.xlsx",
  });
}
