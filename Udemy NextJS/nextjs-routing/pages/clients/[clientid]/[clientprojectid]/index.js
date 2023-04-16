import { useRouter } from "next/router";

const SelectedClientProjectsPage = () => {
	const router = useRouter();
	const queryParams = router.query;

	return (
		<div>
			<h1>
				The Project Page for a Specfic Project: (
				{queryParams.clientprojectid}) from a Given Client: (
				{queryParams.clientid}).
			</h1>
		</div>
	);
};

export default SelectedClientProjectsPage;
