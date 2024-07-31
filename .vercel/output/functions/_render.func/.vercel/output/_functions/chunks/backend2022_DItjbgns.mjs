/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_b58aT3ap.mjs';

const html = "<p>The Tactical Emergency Medical Technician (TEMT) certification trains healthcare professionals to provide advanced medical care in tactical and high-risk environments, such as law enforcement operations, military settings, or emergency response scenarios. TEMTs are trained to rapidly assess and treat traumatic injuries, stabilize patients in adverse conditions, and closely collaborate with tactical and rescue teams to ensure the safety and well-being of victims.</p>";

				const frontmatter = {"title":"Certified Tactical Emergency Medical Technician (TEMT)","org":"123 Main Street, Los Angeles","tags":["Tactical Medicine","First Aid Training","Critical Care","Triage Protocol"],"url":"http://akazedu.edu/seaghi","date":1992};
				const file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/certificates/backend2022.md";
				const url = "/certificates/backend2022";
				function rawContent() {
					return "\nThe Tactical Emergency Medical Technician (TEMT) certification trains healthcare professionals to provide advanced medical care in tactical and high-risk environments, such as law enforcement operations, military settings, or emergency response scenarios. TEMTs are trained to rapidly assess and treat traumatic injuries, stabilize patients in adverse conditions, and closely collaborate with tactical and rescue teams to ensure the safety and well-being of victims.\n";
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
