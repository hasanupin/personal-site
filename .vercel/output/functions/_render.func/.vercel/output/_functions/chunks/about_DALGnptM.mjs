/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>I am a Professional Software Engineer specializing in Full-Stack Web Development, with a strong focus on PHP Web Development using Laravel and ReactJS as my preferred tech stack. My expertise includes building scalable, high-performance web applications and providing seamless user experiences through modern web technologies.</p>\n<p>In addition to my web development skills, I have experience in Mobile Development, particularly with Android, where I have developed and deployed various mobile applications. My diverse technical background allows me to create comprehensive solutions that cater to both web and mobile platforms.</p>\n<p>Furthermore, I have entrepreneurial experience as a Co-Founder of a small startup that focuses on project-based work. This role has honed my abilities in project management, team collaboration, and innovative problem-solving, allowing me to effectively lead projects from concept to completion.</p>\n<p>With a passion for technology and a commitment to continuous learning, I strive to stay updated with the latest industry trends and best practices, ensuring that my work remains at the forefront of the ever-evolving tech landscape.</p>";

				const frontmatter = {"title":"about","name":"Moh Hasanudin M","designation":"Software Engineer","location":"Malang, East Java","pronouns":"Hasan","website":"http://tafutza.hn/kos"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nI am a Professional Software Engineer specializing in Full-Stack Web Development, with a strong focus on PHP Web Development using Laravel and ReactJS as my preferred tech stack. My expertise includes building scalable, high-performance web applications and providing seamless user experiences through modern web technologies.\n\nIn addition to my web development skills, I have experience in Mobile Development, particularly with Android, where I have developed and deployed various mobile applications. My diverse technical background allows me to create comprehensive solutions that cater to both web and mobile platforms.\n\nFurthermore, I have entrepreneurial experience as a Co-Founder of a small startup that focuses on project-based work. This role has honed my abilities in project management, team collaboration, and innovative problem-solving, allowing me to effectively lead projects from concept to completion.\n\nWith a passion for technology and a commitment to continuous learning, I strive to stay updated with the latest industry trends and best practices, ensuring that my work remains at the forefront of the ever-evolving tech landscape.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _, compiledContent as c, frontmatter as f };
