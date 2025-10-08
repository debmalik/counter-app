"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const BasicCounterForm = () => {
	// State variable to hold the current count value, initialized to 0
	const [count, setCount] = useState(0);
	// Function to call plus button for the count
	const plus = () => {
		setCount(count + 1);
	};
	// Function to call minus button for the count
	const minus = () => {
		setCount(count - 1);
	};

	return (
		//spacing towards the y-axis for this component
		<div className="space-y-6">
			<div className="text-center text-xl">
				{/* Display the current counter value & Distructuring count variable for showing current value */}
				Counter Value: <span className="font-semibold">{count}</span>
			</div>

			{/*  Layout for displaying items in two columns with spacing for visual clarity */}
			<div className="grid grid-cols-2 gap-4">
				{/* Create two buttons for plus and minus */}
				<Button
					//  Calls the 'minus' function when clicked
					onClick={minus}
					variant={"destructive"}
					// Adds a pointer cursor on hover for better UX
					className="cursor-pointer">
					<CircleMinus />
					Minus 1
				</Button>

				<Button
					// Calls the 'plus' function when clicked
					onClick={plus}
					className="cursor-pointer">
					<CirclePlus /> Plus 1
				</Button>
			</div>
		</div>
	);
};

export default BasicCounterForm;
