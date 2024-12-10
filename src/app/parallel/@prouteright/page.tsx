import dynamic from "next/dynamic";
import { setTimeout } from "node:timers/promises";

const DummyDyn = dynamic(() => import("@/lib/picsum"));

const RightSection = async () => {
	const res = await setTimeout(2000, "Right Section");
	return (
		<div className="flex flex-col items-center justify-center border-2 border-purple-300 m-2 border-dashed rounded-md bg-slate-500">
			{res}
			<DummyDyn />
		</div>
	);
};

export default RightSection;
