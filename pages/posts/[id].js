import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
	return (
		<Layout>
			{/* Title head */}
			<Head>
				<title>{postData.title}</title>
			</Head>
			<article>
			<h1 className={utilStyles.headingX1}>{postData.title}</h1>
				{/*<br />
				{postData.id} 
			<br />*/}
			<div className={utilStyles.lightText}>
			{/* {postData.date} */}
			<Date dateString={postData.date} />
			</div>
			<br />
			<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
			</article>
		</Layout>
		)
}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false
	}
}


export async function getStaticProps({ params }) {
	// Add the "await" keyword like this:
	const postData = await getPostData(params.id)
	
	return {
		props: {
			postData
		}
	}
}


