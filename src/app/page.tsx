import BasicCounterForm from "@/components/BasicCounterForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Counter State App",
	description: "Basic Counter State App",
};

const page = () => {
	return (
		<>
			{/* creating full-screen centered layout that adapt to mobile viewport changes. */}
			<section className="grid h-[80dvh] place-items-center">
				{/*Defining the width to 20rem or 320px keeps the design consistent everywhere*/}
				<Card className="w-xs">
					<CardHeader>
						{/*  Centers the title text */}
						<CardTitle className="grid place-items-center text-2xl">
							Basic Counter App
						</CardTitle>
					</CardHeader>
					<CardContent>
						{/* Importing the BasicCounterForm component */}
						<BasicCounterForm />
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
