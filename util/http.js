import axios from "axios";
import { URL } from "@env";

export function storeExpense(expenseData) {
  axios.post(URL + "expenses.json", expenseData);
}

export async function fetchExpenses() {
  const response = await axios.get(URL + "expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObject = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObject);
  }
  return expenses;
}
