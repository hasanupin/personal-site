/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>Platform To manage Payroll, Leave, Claim That supported for multiple countries with different rules of tax and integrated each other.</p>";

				const frontmatter = {"title":"AYP JuzTalent","url":"https://eprofile.juztalent.com/","tags":["angularJS","laravel","MySQL","Lambda","Serverless"],"date":"2023 - Now"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/projects/aypjuztalent.md";
				const url = "/projects/aypjuztalent";
				function rawContent() {
					return "\nPlatform To manage Payroll, Leave, Claim That supported for multiple countries with different rules of tax and integrated each other.\n";
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
