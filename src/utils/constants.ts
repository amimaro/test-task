import { nanoid } from "nanoid";

const accountAddress = "0xb701FdCc9Db05d5AD0d7B6aAbb42DBf09ec28Ad0";

const defaults = {
  publicAddress: accountAddress,
  accountBalance: 3.405,
  ethPrice: 1700,
  pastTransactions: [
    {
      id: nanoid(),
      date: "2022-05-12 09:55:11",
      value: 3,
      to: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      from: accountAddress,
    },
    {
      id: nanoid(),
      date: "2022-05-12 10:55:11",
      value: 2,
      to: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      from: accountAddress,
    },
    {
      id: nanoid(),
      date: "2022-05-12 11:55:11",
      value: 3,
      to: "0xb19181c403D451A1e161b305eb08DfD422ffd6DD",
      from: accountAddress,
    },
  ],
};

export default defaults;
