/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<ul>\n<li>Engineered and maintained robust software solutions for managing payroll across multiple countries, ensuring compliance with local regulations and seamless integration with various financial systems.</li>\n<li>Developed scalable and efficient algorithms to handle complex payroll calculations, tax deductions, and benefits administration, tailored to the unique requirements of each region.</li>\n<li>Led the end-to-end development and delivery of key product features, collaborating closely with product managers, designers, and other engineers to ensure timely and high-quality releases.</li>\n<li>Implemented best practices for code quality, testing, and continuous integration to enhance the reliability and performance of payroll systems.</li>\n<li>Coordinated with cross-functional teams to gather requirements, troubleshoot issues, and provide expert technical guidance for optimizing payroll processes.</li>\n<li>Utilized Agile methodologies to manage project timelines, prioritize tasks, and adapt to changing business needs, delivering value to clients and stakeholders effectively.</li>\n</ul>";

				const frontmatter = {"title":"Software Engineer","date":"2023 - Present","url":"http://aypgroup.com","location":"Singapore","org":"AYP Group","tags":["Software Engineering","Payroll Management","Multinational Payroll","Product Development","Agile Methodologies","Cross-functional Collaboration"]};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/works/work1.md";
				const url = "/works/work1";
				function rawContent() {
					return "\n- Engineered and maintained robust software solutions for managing payroll across multiple countries, ensuring compliance with local regulations and seamless integration with various financial systems.\n- Developed scalable and efficient algorithms to handle complex payroll calculations, tax deductions, and benefits administration, tailored to the unique requirements of each region.\n- Led the end-to-end development and delivery of key product features, collaborating closely with product managers, designers, and other engineers to ensure timely and high-quality releases.\n- Implemented best practices for code quality, testing, and continuous integration to enhance the reliability and performance of payroll systems.\n- Coordinated with cross-functional teams to gather requirements, troubleshoot issues, and provide expert technical guidance for optimizing payroll processes.\n- Utilized Agile methodologies to manage project timelines, prioritize tasks, and adapt to changing business needs, delivering value to clients and stakeholders effectively.";
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
