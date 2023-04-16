import { useRouter } from "next/router";

const BlogPostsPage = () => {
	const router = useRouter();
	const queryParams = router.query;

	return (
		<div>
			<h1>
				The Blog Posts: 
				{queryParams.clientprojectid}
			</h1>
		</div>
	);
};

export default BlogPostsPage();
