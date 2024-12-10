import { setTimeout } from "node:timers/promises";
import React from "react";

const Dummy = async () => {
	const res = await setTimeout(2000, "This is TEST Fetch");

	return (
		<div className="border-2 border-indigo-300 m-2 border-dotted rounded-md bg-slate-500 capitalize">
			{res}
		</div>
	);
};

export default Dummy;
