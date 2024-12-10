import Loading from "@/lib/loading";
import { Suspense } from "react";

export default function RootLayout({
	children,
	prouteleft,
	prouteright,
}: Readonly<{
	children: React.ReactNode;
	prouteleft: React.ReactNode;
	prouteright: React.ReactNode;
}>) {
	return (
		<div className="border-2 border-rose-200 m-2 border-dotted rounded-md bg-slate-500 text-center font-semibold font-mono text-2xl">
			{children}
			<div className="min-w-full grid grid-cols-2 grid-rows-1 gap-5">
				<div className="">{prouteleft}</div>
				<Suspense fallback={<Loading />}>
					<div className="">{prouteright}</div>
				</Suspense>
			</div>
		</div>
	);
}
