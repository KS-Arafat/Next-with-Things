"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
const Subsection = () => {
	const msg = [
		"Prefetch /dummy",
		"Are you Sure?",
		"REAAAALLLLLY?",
		"Prefetched /dummy",
	];
	const [count, setCount] = useState(0);
	const router = useRouter();

	const incrementCounter = () => {
		setCount(count + 1);
		if (count === 2) router.prefetch("/dummy");
	};

	return (
		<div className="flex flex-col items-center justify-center border-2 border-fuchsia-300 m-2 border-dashed rounded-md bg-slate-500">
			<span className="text-sm pt-2 text-fuchsia-300">(Client)</span>
			<span>Sub Section</span>
			<button
				className="border border-sky-300 rounded-md"
				onClick={() => {
					if (count != 3) incrementCounter();
				}}
			>
				<span className="bg-gradient-to-tr p-2 from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent font-serif font-thin ">
					{msg[count]}
				</span>
			</button>
			<Link
				className={`underline transition-all text-base mb-2 underline-offset-2 ${
					count == 3 ? "text-sky-400" : ""
				}`}
				href={"/dummy"}
				prefetch={false}
			>
				Dummy Landing
			</Link>
		</div>
	);
};

export default Subsection;
