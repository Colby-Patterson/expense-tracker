import axios from "axios";
import { URL } from "@env";

export function storeExpense(expenseData) {
  axios.post(URL + "expenses.json", expenseData);
}
