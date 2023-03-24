import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
//import styles from '../styles/Home.module.css';
//import link from 'next/link';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
		<Head>
			<title>{siteTitle}</title>
		</Head>
		<section className={utilStyles.haedingMd}>
			<p>Hi I'm a Software Engineer!</p>
			<p>
				I build web apps, mobile apps, desktop apps. Click here to see my previous projects.
				<a href="https://nextjs.org/learn"> My portfolio </a>.)
			</p>
		</section>
		<section className={'${utilStyles.headingMd} ${utilStyles.padding1px}'}>
			<h2 className={utilStyles.headingLg}>Blog</h2>
			<ul className={utilStyles.list}>
				{allPostsData.map(({ id, date, title }) => (
					<li className={utilStyles.listItem} key={id}>
						{/*{title}
						<br />
						{id}
						<br />
						{date}
						<br />*/}
						<Link href={`/posts/${id}`}>{title}</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={date} />
						</small>
					</li>
				))}
			</ul>
		</section>
	</Layout>
  );
}
