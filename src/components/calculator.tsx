"use client"; // Enables client-side rendering for this component

// Import necessary hooks from React
import { useState, ChangeEvent } from "react";

 // Import the image at the top
 import Image from 'next/image'
 import bgImage from '../../public/cal2.jpg'; // Import the image at the top
// Import custom UI components from the UI directory
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Default export of the CalculatorComponent function
export default function Calculator() {
  // State hooks for managing input numbers and the result
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [activeInput, setActiveInput] = useState<"num1" | "num2">("num1");

  // Handler for updating num1 state on input change
  const handleNum1Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum1(e.target.value);
    setActiveInput("num1"); // Set active input to num1
  };

  // Handler for updating num2 state on input change
  const handleNum2Change = (e: ChangeEvent<HTMLInputElement>): void => {
    setNum2(e.target.value);
    setActiveInput("num2"); // Set active input to num2
  };

  // Function to add a number (0-9) to the active input (num1 or num2)
  const handleDigitClick = (digit: string): void => {
    if (activeInput === "num1") {
      setNum1((prev) => prev + digit);
    } else {
      setNum2((prev) => prev + digit);
    }
  };
  

  // Function to perform addition and set the result
  const add = (): void => {
    setResult((parseFloat(num1) + parseFloat(num2)).toString());
  };

  // Function to perform subtraction and set the result
  const subtract = (): void => {
    setResult((parseFloat(num1) - parseFloat(num2)).toString());
  };

  // Function to perform multiplication and set the result
  const multiply = (): void => {
    setResult((parseFloat(num1) * parseFloat(num2)).toString());
  };

  // Function to perform division and set the result
  const divide = (): void => {
    if (parseFloat(num2) !== 0) {
      setResult((parseFloat(num1) / parseFloat(num2)).toString());
    } else {
      setResult("Error: Division by zero");
    }
  };

  // Function to perform modulus operation
  const modulus = (): void => {
    setResult((parseFloat(num1) % parseFloat(num2)).toString());
  };

  // Function to perform exponentiation (num1 ^ num2)
  const exponentiate = (): void => {
    setResult((parseFloat(num1) ** parseFloat(num2)).toString());
  };

  // Function to perform bitwise AND operation
  const bitwiseAnd = (): void => {
    setResult((parseInt(num1) & parseInt(num2)).toString());
  };

  // Function to perform bitwise OR operation
  const bitwiseOr = (): void => {
    setResult((parseInt(num1) | parseInt(num2)).toString());
  };

  // Function to clear the inputs and result
  const clear = (): void => {
    setNum1("");
    setNum2("");
    setResult("");
    setActiveInput("num1"); // Reset to num1 as active input
  };

  // JSX return statement rendering the calculator UI
  return (
    <div className=" relative flex flex-col items-center justify-center h-screen ">
      <Image
  src={bgImage}
  layout="fill"
  objectFit="cover"
  alt="Background Image"
/>
      {/* Center the calculator within the screen */}
      <Card className=" relative w-full max-w-md p-6 bg-gradient-to-br from-pink-900 to-blue-200  dark:bg-gray-800 shadow-lg rounded-lg">
        {/* Card header with title */}
        <CardHeader>
          <CardTitle className=" w-100 text-3xl font-bold bg-gradient-to-br from-pink-900 to-blue-200 items-center justify-center text-center">
            Simple Calculator
          </CardTitle>
        </CardHeader>
        {/* Card content including inputs, buttons, and result display */}
        <CardContent className="space-y-4">
          {/* Input fields for numbers */}
          <div className="grid grid-cols-2 gap-4 ">
            <div className="flex flex-col space-y-2 ">
              <Label htmlFor="num1" className="text-xl font-bold text-gray-900 dark:text-gray-300">Number 1</Label>
              <Input className="font-bold text-white bg-gradient-to-br from-pink-800 to-blue-200  "
                id="num1"
                type="number"
                value={num1}
                onChange={handleNum1Change}
                onFocus={() => setActiveInput("num1")} // Set active input on focus
                placeholder="Enter a number"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Label htmlFor="num2" className=" text-xl font-bold text-gray-900 dark:text-gray-300">Number 2</Label>
              <Input className=" font-bold text-white bg-gradient-to-br from-pink-800 to-blue-200 "
                id="num2"
                type="number"
                value={num2}
                onChange={handleNum2Change}
                onFocus={() => setActiveInput("num2")} // Set active input on focus
                placeholder="Enter a number"
              />
            </div>
          </div>
          {/* Number buttons for 0-9 */}
<div className="grid grid-cols-3 gap-2 ">
  {Array.from({ length: 10 }, (_, digit) => (
    <Button
      key={digit}
      variant="outline"
      className="text-xl font-bold text-gray-900 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200 hover:bg-red-600"
      onClick={() => handleDigitClick(digit.toString())}
    >
      {digit}
    </Button>
  ))}
</div>

          {/* Buttons for arithmetic operations */}
          <div className="grid grid-cols-4 gap-2">
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-900 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200 "
              onClick={add}
            >
              +
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={subtract}
            >
              -
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={multiply}
            >
              *
            </Button>
            <Button
              variant="outline"
              className="text-2xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={divide}
            >
              /
            </Button>
            <Button
              variant="outline"
              className="text-xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={modulus}
            >
              %
            </Button>
            <Button
              variant="outline"
              className="text-xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={exponentiate}
            >
              ^
            </Button>
            <Button
              variant="outline"
              className="text-xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={bitwiseAnd}
            >
              AND
            </Button>
            <Button
              variant="outline"
              className="text-xl font-bold text-gray-700 dark:text-gray-300 bg-gradient-to-br from-pink-900 to-blue-200"
              onClick={bitwiseOr}
            >
              OR
            </Button>
          </div>
          {/* Display the result */}
          <div className="flex flex-col space-y-2 ">
            <Label className="text-xl font-bold text-gray-700 dark:text-gray-300" htmlFor="result">Result</Label>
            <Input className="bg-gradient-to-br from-pink-900 to-blue-200"
              id="result"
              type="text"
              value={result}
              placeholder="Result"
              readOnly
            />
          </div>
          {/* Clear button to reset inputs and result */}
          <Button variant="outline" className="w-full bg-gradient-to-br from-pink-900 to-blue-200" onClick={clear} >
            Clear
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
