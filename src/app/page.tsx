import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-fit p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] border-2 border-white m-2  rounded-md border-dashed">
			<div className="text-3xl font-medium">Testing Parallel route</div>
			<Link
				href={"/parallel"}
				className="hover:underline hover:underline-offset-2 hover:text-cyan-400 transition-all"
			>
				Go to Parallel Route
			</Link>
		</div>
	);
}
