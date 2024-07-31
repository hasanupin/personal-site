/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>AYP JuzTalent is a comprehensive and versatile platform designed to streamline and optimize the management of payroll, leave, and claims across multiple countries. It addresses the complexities of handling diverse tax regulations and labor laws, ensuring compliance and efficiency in HR operations. By seamlessly integrating various modules, AYP JuzTalent provides a unified solution that simplifies the administrative workload and enhances accuracy in employee data management.</p>\n<p>The platform leverages a powerful technology stack, including AngularJS for a dynamic and responsive user interface, Laravel for robust backend operations, MySQL for reliable data storage, Lambda for scalable computing power, and Serverless architecture for enhanced flexibility and reduced infrastructure overhead. These technologies work in concert to deliver a high-performance, secure, and scalable solution that meets the evolving needs of businesses operating in a global landscape.</p>\n<p>With AYP JuzTalent, companies can manage their workforce more effectively, from processing payroll with varying tax rules to managing employee leave and claims efficiently. The platform’s user-friendly interface and comprehensive feature set enable HR professionals to handle tasks with greater ease and accuracy, leading to improved operational efficiency and employee satisfaction. AYP JuzTalent is designed to support businesses as they grow and expand across borders, providing the tools necessary to manage their human resources with confidence and precision.</p>";

				const frontmatter = {"title":"AYP JuzTalent","url":"https://eprofile.juztalent.com/","tags":["angularJS","laravel","MySQL","Lambda","Serverless"],"date":"2023 - Now"};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/projects/aypjuztalent.md";
				const url = "/projects/aypjuztalent";
				function rawContent() {
					return "\nAYP JuzTalent is a comprehensive and versatile platform designed to streamline and optimize the management of payroll, leave, and claims across multiple countries. It addresses the complexities of handling diverse tax regulations and labor laws, ensuring compliance and efficiency in HR operations. By seamlessly integrating various modules, AYP JuzTalent provides a unified solution that simplifies the administrative workload and enhances accuracy in employee data management.\n\nThe platform leverages a powerful technology stack, including AngularJS for a dynamic and responsive user interface, Laravel for robust backend operations, MySQL for reliable data storage, Lambda for scalable computing power, and Serverless architecture for enhanced flexibility and reduced infrastructure overhead. These technologies work in concert to deliver a high-performance, secure, and scalable solution that meets the evolving needs of businesses operating in a global landscape.\n\nWith AYP JuzTalent, companies can manage their workforce more effectively, from processing payroll with varying tax rules to managing employee leave and claims efficiently. The platform's user-friendly interface and comprehensive feature set enable HR professionals to handle tasks with greater ease and accuracy, leading to improved operational efficiency and employee satisfaction. AYP JuzTalent is designed to support businesses as they grow and expand across borders, providing the tools necessary to manage their human resources with confidence and precision.";
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
