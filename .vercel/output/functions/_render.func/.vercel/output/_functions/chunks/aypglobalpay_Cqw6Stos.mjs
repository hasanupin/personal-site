/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>An all-in-one platform that uses advanced data analytics to ensure faster hiring, better decision-making, and easier management. Do business across countries with convenience, and grow with AYP!</p>";

				const frontmatter = {"title":"AYP Global Pay","url":"https://app.ayp-group.com/staff/sign-in","tags":["react","laravel","MySQL","Lambda","Serverless"],"date":"2022 - Now"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/projects/aypglobalpay.md";
				const url = "/projects/aypglobalpay";
				function rawContent() {
					return "\nAn all-in-one platform that uses advanced data analytics to ensure faster hiring, better decision-making, and easier management. Do business across countries with convenience, and grow with AYP!\n";
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

export { _page as _ };
