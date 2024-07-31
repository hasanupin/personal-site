/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>AYP Global Pay is an all-in-one platform designed to streamline and enhance various aspects of business operations across multiple countries. Utilizing advanced data analytics, the platform accelerates the hiring process, enables more informed decision-making, and simplifies overall management tasks. By integrating cutting-edge technologies such as React, Laravel, MySQL, Lambda, and Serverless architecture, AYP Global Pay offers a seamless and efficient solution for businesses looking to expand and operate internationally with ease and convenience. The platform’s robust features and user-friendly interface support companies in managing their global workforce, ensuring compliance with regional regulations, and fostering growth.</p>";

				const frontmatter = {"title":"AYP Global Pay","url":"https://app.ayp-group.com/staff/sign-in","tags":["react","laravel","MySQL","Lambda","Serverless"],"date":"2022 - Now"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/projects/aypglobalpay.md";
				const url = "/projects/aypglobalpay";
				function rawContent() {
					return "\nAYP Global Pay is an all-in-one platform designed to streamline and enhance various aspects of business operations across multiple countries. Utilizing advanced data analytics, the platform accelerates the hiring process, enables more informed decision-making, and simplifies overall management tasks. By integrating cutting-edge technologies such as React, Laravel, MySQL, Lambda, and Serverless architecture, AYP Global Pay offers a seamless and efficient solution for businesses looking to expand and operate internationally with ease and convenience. The platform's robust features and user-friendly interface support companies in managing their global workforce, ensuring compliance with regional regulations, and fostering growth.";
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
