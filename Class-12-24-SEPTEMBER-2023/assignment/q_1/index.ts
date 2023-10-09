#! /usr/bin/env node
import inquirer from 'inquirer';

interface Transaction {
  type: string;
  amount: number;
  timestamp: Date;
}

const users: Record<string, { pin: string, balance: number, transactions: Transaction[] }> = {
  '1234567890': { pin: '1234', balance: 1000, transactions: [] },
  '0987654321': { pin: '4321', balance: 500, transactions: [] },
};

let currentUser: string | null = null;

function mainMenu() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'accountNumber',
        message: 'Enter your account number:',
      },
      {
        type: 'password',
        name: 'pin',
        message: 'Enter your PIN:',
        mask: '*',
      },
    ])
    .then((answers) => {
      const { accountNumber, pin } = answers;
      if (users[accountNumber] && users[accountNumber].pin === pin) {
        currentUser = accountNumber;
        displayOptions();
      } else {
        console.log('Invalid account number or PIN. Please try again.');
        mainMenu();
      }
    });
}

function displayOptions() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: [
          'Check Account Balance',
          'Withdraw Money',
          'Check Previous Transactions',
          'End Transactions',
        ],
      },
    ])
    .then((answers) => {
      const { option } = answers;
      switch (option) {
        case 'Check Account Balance':
          console.log(`Your balance: $${users[currentUser!].balance}`);
          performAnotherTransaction();
          break;
        case 'Withdraw Money':
          withdrawMoney();
          break;
        case 'Check Previous Transactions':
          displayTransactions();
          break;
        case 'End Transactions':
          currentUser = null;
          console.log('Logged out. Have a nice day!');
          break;
      }
    });
}

function withdrawMoney() {
  inquirer
    .prompt([
      {
        type: 'number',
        name: 'amount',
        message: 'Enter the amount to withdraw:',
      },
    ])
    .then((answers) => {
      const { amount } = answers;
      if (amount <= 0) {
        console.log('Invalid amount. Please enter a positive value.');
        withdrawMoney();
      } else if (amount > users[currentUser!].balance) {
        console.log('Insufficient balance. Cannot withdraw.');
        performAnotherTransaction();
      } else {
        users[currentUser!].balance -= amount;
        users[currentUser!].transactions.push({
          type: 'Withdraw',
          amount,
          timestamp: new Date(),
        });
        console.log(`Withdrawn $${amount}. New balance: $${users[currentUser!].balance}`);
        performAnotherTransaction();
      }
    });
}

function displayTransactions() {
  const transactions = users[currentUser!].transactions;
  if (transactions.length === 0) {
    console.log('No previous transactions.');
  } else {
    console.log('Previous Transactions:');
    transactions.forEach((transaction, index) => {
      console.log(
        `${index + 1}. ${transaction.type}: $${transaction.amount} on ${transaction.timestamp}`
      );
    });
  }
  performAnotherTransaction();
}

function performAnotherTransaction() {
  inquirer
    .prompt([
      {
        type: 'confirm',
        name: 'another',
        message: 'Do you want to perform another transaction?',
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.another) {
        displayOptions();
      } else {
        users[currentUser!].transactions = [];
        currentUser = null;
        console.log('Logged out. Have a nice day!');
      }
    });
}

mainMenu();
