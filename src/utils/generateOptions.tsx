import { Item } from "../types/types";
import { initialOption } from "../constants";

export const generateOptionsElements = (values?: Item[]) => {
  return [{ id: "", name: initialOption }, ...(values ?? [])]?.map(
    (item) => (
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    )
  );
}