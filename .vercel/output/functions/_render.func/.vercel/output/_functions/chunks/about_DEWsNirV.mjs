/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>Highly skilled and experienced law enforcement professional with over two decades of service in various specialized units. Adept at conducting complex investigations, coordinating tactical operations, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding the law. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.</p>";

				const frontmatter = {"title":"about","name":"Moh Hasanudin M","designation":"Software Engineer","location":"Malang, East Java","pronouns":"Hasan","website":"http://tafutza.hn/kos"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/about/about.md";
				const url = "/about/about";
				function rawContent() {
					return "\nHighly skilled and experienced law enforcement professional with over two decades of service in various specialized units. Adept at conducting complex investigations, coordinating tactical operations, and providing leadership in high-pressure situations. Known for exceptional problem-solving abilities, strategic thinking, and dedication to upholding the law. Seeking opportunities to leverage expertise in a challenging environment where I can continue to make a meaningful impact.\n";
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
