/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<ul>\n<li>Developed and maintained the time attendance module, ensuring accurate tracking of employee work hours, leave, and overtime across various industries.</li>\n<li>Implemented advanced features such as biometric integration, geolocation tracking, and real-time data synchronization to enhance the functionality and reliability of the time attendance system.</li>\n<li>Led the design and development of user-friendly interfaces and reporting tools, providing HR managers with actionable insights and streamlined workflows.</li>\n<li>Collaborated with product managers, UX designers, and other engineers to gather requirements, define project scope, and deliver high-quality software solutions on time.</li>\n<li>Applied best practices in software development, including code reviews, automated testing, and continuous integration, to improve code quality and system performance.</li>\n<li>Worked closely with the customer support team to troubleshoot issues, gather feedback, and implement enhancements based on user needs and market trends.</li>\n<li>Utilized Agile methodologies to manage project timelines, prioritize tasks, and ensure iterative delivery of features, contributing to the overall success of the product.</li>\n</ul>";

				const frontmatter = {"title":"Software Engineer","date":"2021 - 2023","url":"https://mekari.com/","location":"Jakarta, Indonesia","org":"PT Mid Solusi Nusantara (Mekari)","tags":["Software Engineering","Time Attendance","HR Technology","Product Development","Agile Methodologies","Cross-functional Collaboration"]};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/works/work2.md";
				const url = "/works/work2";
				function rawContent() {
					return "\n- Developed and maintained the time attendance module, ensuring accurate tracking of employee work hours, leave, and overtime across various industries.\n- Implemented advanced features such as biometric integration, geolocation tracking, and real-time data synchronization to enhance the functionality and reliability of the time attendance system.\n- Led the design and development of user-friendly interfaces and reporting tools, providing HR managers with actionable insights and streamlined workflows.\n- Collaborated with product managers, UX designers, and other engineers to gather requirements, define project scope, and deliver high-quality software solutions on time.\n- Applied best practices in software development, including code reviews, automated testing, and continuous integration, to improve code quality and system performance.\n- Worked closely with the customer support team to troubleshoot issues, gather feedback, and implement enhancements based on user needs and market trends.\n- Utilized Agile methodologies to manage project timelines, prioritize tasks, and ensure iterative delivery of features, contributing to the overall success of the product.";
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
