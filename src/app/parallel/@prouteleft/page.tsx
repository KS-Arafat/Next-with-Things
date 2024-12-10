import { setTimeout } from "node:timers/promises";
import Dummy from "@/lib/dummy";
import { Suspense } from "react";
import Loading from "@/lib/loading";
import Link from "next/link";
const LeftSection = async () => {
	const res = await setTimeout(1000, "Left Section");
	return (
		<div className="border-2 border-amber-300 m-2 border-dashed rounded-md bg-slate-500">
			{res}
			<Suspense fallback={<Loading />}>
				<Dummy />
			</Suspense>
			<Link
				className="text-lg font-mono hover:underline hover:text-sky-400 transition-all mb-4"
				href={"/parallel/subsection"}
			>
				Go to Subsection
			</Link>
		</div>
	);
};

export default LeftSection;
