/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>I’m a Professional Software Engineer who works on Full-Stack Web Development, especially in PHP Web Development Using Laravel and ReactJS as my prefer Tech Stack. I have some experience in Mobile Development especially Android, and also having experience as a Co-Founder who built a small startup that works on project-based.</p>";

				const frontmatter = {"title":"about","name":"Moh Hasanudin M","designation":"Software Engineer","location":"Malang, East Java","pronouns":"Hasan","website":"http://tafutza.hn/kos"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nI'm a Professional Software Engineer who works on Full-Stack Web Development, especially in PHP Web Development Using Laravel and ReactJS as my prefer Tech Stack. I have some experience in Mobile Development especially Android, and also having experience as a Co-Founder who built a small startup that works on project-based.\n";
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
