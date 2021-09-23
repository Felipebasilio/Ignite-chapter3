import { Client } from "faunadb";
import { browser } from "process";

// Operações de consulta ao banco não podem ser feitas no browser => INSEGURO

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY,
});