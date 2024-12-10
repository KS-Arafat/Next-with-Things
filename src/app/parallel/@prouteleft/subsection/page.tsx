import LongPage from "@/lib/long";
import { log } from "console";
const Subsection = async () => {
	const { renderToString } = await import("react-dom/server");
	const html = renderToString(<LongPage />);
	log(html);
	return (
		<div className="border-2 border-fuchsia-300 m-2 border-dashed rounded-md bg-slate-500">
			Sub Section
		</div>
	);
};

export default Subsection;
