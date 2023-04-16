import { useRouter } from "next/router";

const PortfolioPorjectPage = () => {
	const router = useRouter();

    router.pathname
    console.log(router.pathname)
    router.query
    console.log(router.query)

	return (
		<div>
			<h1>The Portfolio Page</h1>
		</div>
	);
};

export default PortfolioPorjectPage;
