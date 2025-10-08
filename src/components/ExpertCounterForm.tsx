"use client";

import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
import { Button } from "./shadcnui/button";

const ExpertCounterForm = () => {
	// State to hold the counter value,initialized at 0
	const [count, setCount] = useState(0);

	const plusOne = () => {
		//<=99 to prevent going above 100
		if (count <= 99) {
			setCount(count + 1);
		}
	};
	const minusOne = () => {
		//Decreases count by one , if the vluse is >=1 to prevent going below 0
		if (count >= 1) {
			setCount(count - 1);
		}
	};
	const plusTen = () => {
		//Increases count by 10, if the value is <=90 to prevent going above 100
		if (count <= 90) {
			setCount(count + 10);
		}
	};
	const minusTen = () => {
		//Decreases count by 10, if the value is >=10 to prevent going below 0
		if (count >= 10) {
			setCount(count - 10);
		}
	};

	return (
		<div className="space-y-8">
			<div className="text-center text-xl">
				{/* Destructuring count to display current value of state */}
				Counter Value: <span className="font-semibold">{count}</span>
			</div>

			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusOne}
					// disable the button based on the current value of count, it is useing for safty chaeck and better user experience
					disabled={count <= 1}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 1
				</Button>

				<Button
					onClick={plusOne}
					disabled={count > 99}
					className="cursor-pointer">
					<CirclePlus /> Plus 1
				</Button>

				<Button
					onClick={minusTen}
					disabled={count < 10}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinus /> Minus 10
				</Button>
				<Button
					onClick={plusTen}
					disabled={count > 90}
					className="cursor-pointer">
					<CirclePlus /> Plus 10
				</Button>
			</div>
		</div>
	);
};

export default ExpertCounterForm;
