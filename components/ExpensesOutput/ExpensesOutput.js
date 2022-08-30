import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Cat Food",
    amount: 29.99,
    date: new Date("2022-08-27"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 4.99,
    date: new Date("2021-12-01"),
  },
  {
    id: "e4",
    description: "Notebook",
    amount: 10.99,
    date: new Date("2022-01-05"),
  },
  {
    id: "e5",
    description: "Dog Food",
    amount: 10.99,
    date: new Date("2022-07-01"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
