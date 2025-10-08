import AdvancedCounterForm from "@/components/AdvancedCounterForm";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Advanced | Counter State App",
	description: "Advanced Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Advanced Counter App
					</CardTitle>
				</CardHeader>

				<CardContent>
					<AdvancedCounterForm />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
