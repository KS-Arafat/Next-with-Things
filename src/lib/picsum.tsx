import Image from "next/image";
import React from "react";

const Picsum = async () => {
	return (
		<Image
			src={"https://picsum.photos/200/300"}
			width={200}
			height={300}
			alt="Picsum Image"
			className="m-2"
		/>
	);
};

export default Picsum;
