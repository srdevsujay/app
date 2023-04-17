import { nameTagColumn } from "./nameTag";
import { typeColumn } from "./typeTag";

export const ColumnsTag = () => {
  return [nameTagColumn(), typeColumn()];
};
