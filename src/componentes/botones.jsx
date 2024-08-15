import React from 'react'

export default function Display({ value }) {
  return (
    <>
        <input value="lo que sea" readOnly />
    </>
  )
}

import React from 'react'

export default function Button({ children }) {
  return (
    <button>{children}</button>
  )
}
const advancedKeypad = [
    '7', '8', '9', 'DEL', 'AC',
    '4', '5', '6', '*', '/',
    '1', '2', '3', '+', '-',
    '0', '.', 'EXP', 'Ans', 'EXE',
    '√', 'x²', 'log', 'ln', '1/x', // '√' \u221A - 'x²' \u00B2
];
const basicKeypad = [
    '7', '8', '9', 'DEL', 'AC',
    '4', '5', '6', '*', '/',
    '1', '2', '3', '+', '-',
    '0', '.', 'EXP', 'Ans', 'EXE'
];
