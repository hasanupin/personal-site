/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, a as addAttribute, d as renderComponent, b as createAstro, u as unescapeHTML, F as Fragment, e as renderHead, f as renderSlot } from '../chunks/astro/server_b58aT3ap.mjs';
/* empty css                                 */
import { c as compiledContent, f as frontmatter } from '../chunks/about_DEWsNirV.mjs';
export { renderers } from '../renderers.mjs';


const defaultIconDimensions = Object.freeze(
  {
    left: 0,
    top: 0,
    width: 16,
    height: 16
  }
);
const defaultIconTransformations = Object.freeze({
  rotate: 0,
  vFlip: false,
  hFlip: false
});
const defaultIconProps = Object.freeze({
  ...defaultIconDimensions,
  ...defaultIconTransformations
});
const defaultExtendedIconProps = Object.freeze({
  ...defaultIconProps,
  body: "",
  hidden: false
});

const defaultIconSizeCustomisations = Object.freeze({
  width: null,
  height: null
});
const defaultIconCustomisations = Object.freeze({
  // Dimensions
  ...defaultIconSizeCustomisations,
  // Transformations
  ...defaultIconTransformations
});

function mergeIconTransformations(obj1, obj2) {
  const result = {};
  if (!obj1.hFlip !== !obj2.hFlip) {
    result.hFlip = true;
  }
  if (!obj1.vFlip !== !obj2.vFlip) {
    result.vFlip = true;
  }
  const rotate = ((obj1.rotate || 0) + (obj2.rotate || 0)) % 4;
  if (rotate) {
    result.rotate = rotate;
  }
  return result;
}

function mergeIconData(parent, child) {
  const result = mergeIconTransformations(parent, child);
  for (const key in defaultExtendedIconProps) {
    if (key in defaultIconTransformations) {
      if (key in parent && !(key in result)) {
        result[key] = defaultIconTransformations[key];
      }
    } else if (key in child) {
      result[key] = child[key];
    } else if (key in parent) {
      result[key] = parent[key];
    }
  }
  return result;
}

function getIconsTree(data, names) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  const resolved = /* @__PURE__ */ Object.create(null);
  function resolve(name) {
    if (icons[name]) {
      return resolved[name] = [];
    }
    if (!(name in resolved)) {
      resolved[name] = null;
      const parent = aliases[name] && aliases[name].parent;
      const value = parent && resolve(parent);
      if (value) {
        resolved[name] = [parent].concat(value);
      }
    }
    return resolved[name];
  }
  (names || Object.keys(icons).concat(Object.keys(aliases))).forEach(resolve);
  return resolved;
}

function internalGetIconData(data, name, tree) {
  const icons = data.icons;
  const aliases = data.aliases || /* @__PURE__ */ Object.create(null);
  let currentProps = {};
  function parse(name2) {
    currentProps = mergeIconData(
      icons[name2] || aliases[name2],
      currentProps
    );
  }
  parse(name);
  tree.forEach(parse);
  return mergeIconData(data, currentProps);
}
function getIconData(data, name) {
  if (data.icons[name]) {
    return internalGetIconData(data, name, []);
  }
  const tree = getIconsTree(data, [name])[name];
  return tree ? internalGetIconData(data, name, tree) : null;
}

const unitsSplit = /(-?[0-9.]*[0-9]+[0-9.]*)/g;
const unitsTest = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
function calculateSize(size, ratio, precision) {
  if (ratio === 1) {
    return size;
  }
  precision = precision || 100;
  if (typeof size === "number") {
    return Math.ceil(size * ratio * precision) / precision;
  }
  if (typeof size !== "string") {
    return size;
  }
  const oldParts = size.split(unitsSplit);
  if (oldParts === null || !oldParts.length) {
    return size;
  }
  const newParts = [];
  let code = oldParts.shift();
  let isNumber = unitsTest.test(code);
  while (true) {
    if (isNumber) {
      const num = parseFloat(code);
      if (isNaN(num)) {
        newParts.push(code);
      } else {
        newParts.push(Math.ceil(num * ratio * precision) / precision);
      }
    } else {
      newParts.push(code);
    }
    code = oldParts.shift();
    if (code === void 0) {
      return newParts.join("");
    }
    isNumber = !isNumber;
  }
}

function splitSVGDefs(content, tag = "defs") {
  let defs = "";
  const index = content.indexOf("<" + tag);
  while (index >= 0) {
    const start = content.indexOf(">", index);
    const end = content.indexOf("</" + tag);
    if (start === -1 || end === -1) {
      break;
    }
    const endEnd = content.indexOf(">", end);
    if (endEnd === -1) {
      break;
    }
    defs += content.slice(start + 1, end).trim();
    content = content.slice(0, index).trim() + content.slice(endEnd + 1);
  }
  return {
    defs,
    content
  };
}
function mergeDefsAndContent(defs, content) {
  return defs ? "<defs>" + defs + "</defs>" + content : content;
}
function wrapSVGContent(body, start, end) {
  const split = splitSVGDefs(body);
  return mergeDefsAndContent(split.defs, start + split.content + end);
}

const isUnsetKeyword = (value) => value === "unset" || value === "undefined" || value === "none";
function iconToSVG(icon, customisations) {
  const fullIcon = {
    ...defaultIconProps,
    ...icon
  };
  const fullCustomisations = {
    ...defaultIconCustomisations,
    ...customisations
  };
  const box = {
    left: fullIcon.left,
    top: fullIcon.top,
    width: fullIcon.width,
    height: fullIcon.height
  };
  let body = fullIcon.body;
  [fullIcon, fullCustomisations].forEach((props) => {
    const transformations = [];
    const hFlip = props.hFlip;
    const vFlip = props.vFlip;
    let rotation = props.rotate;
    if (hFlip) {
      if (vFlip) {
        rotation += 2;
      } else {
        transformations.push(
          "translate(" + (box.width + box.left).toString() + " " + (0 - box.top).toString() + ")"
        );
        transformations.push("scale(-1 1)");
        box.top = box.left = 0;
      }
    } else if (vFlip) {
      transformations.push(
        "translate(" + (0 - box.left).toString() + " " + (box.height + box.top).toString() + ")"
      );
      transformations.push("scale(1 -1)");
      box.top = box.left = 0;
    }
    let tempValue;
    if (rotation < 0) {
      rotation -= Math.floor(rotation / 4) * 4;
    }
    rotation = rotation % 4;
    switch (rotation) {
      case 1:
        tempValue = box.height / 2 + box.top;
        transformations.unshift(
          "rotate(90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
      case 2:
        transformations.unshift(
          "rotate(180 " + (box.width / 2 + box.left).toString() + " " + (box.height / 2 + box.top).toString() + ")"
        );
        break;
      case 3:
        tempValue = box.width / 2 + box.left;
        transformations.unshift(
          "rotate(-90 " + tempValue.toString() + " " + tempValue.toString() + ")"
        );
        break;
    }
    if (rotation % 2 === 1) {
      if (box.left !== box.top) {
        tempValue = box.left;
        box.left = box.top;
        box.top = tempValue;
      }
      if (box.width !== box.height) {
        tempValue = box.width;
        box.width = box.height;
        box.height = tempValue;
      }
    }
    if (transformations.length) {
      body = wrapSVGContent(
        body,
        '<g transform="' + transformations.join(" ") + '">',
        "</g>"
      );
    }
  });
  const customisationsWidth = fullCustomisations.width;
  const customisationsHeight = fullCustomisations.height;
  const boxWidth = box.width;
  const boxHeight = box.height;
  let width;
  let height;
  if (customisationsWidth === null) {
    height = customisationsHeight === null ? "1em" : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
    width = calculateSize(height, boxWidth / boxHeight);
  } else {
    width = customisationsWidth === "auto" ? boxWidth : customisationsWidth;
    height = customisationsHeight === null ? calculateSize(width, boxHeight / boxWidth) : customisationsHeight === "auto" ? boxHeight : customisationsHeight;
  }
  const attributes = {};
  const setAttr = (prop, value) => {
    if (!isUnsetKeyword(value)) {
      attributes[prop] = value.toString();
    }
  };
  setAttr("width", width);
  setAttr("height", height);
  const viewBox = [box.left, box.top, boxWidth, boxHeight];
  attributes.viewBox = viewBox.join(" ");
  return {
    attributes,
    viewBox,
    body
  };
}

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$5 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
    }
  }
  const req = Astro2.request;
  const { name = "", title, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "xlink:href")}></use> ` })}`} </svg>`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/node_modules/.pnpm/astro-icon@1.1.0/node_modules/astro-icon/components/Icon.astro", void 0);

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="gl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>CV Template</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/layouts/BaseLayout.astro", void 0);

const $$Astro$4 = createAstro();
const $$AccordionLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$AccordionLayout;
  const { title, icon } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="collapse collapse-arrow ease-in-out duration-700"> <input${addAttribute(title, "aria-label")} type="checkbox"> <div class="collapse-title font-extrabold tracking-tight md:text-2xl"> <div class="flex"> ${renderComponent($$result2, "Icon", $$Icon, { "name": icon, "class": "w-8 h-8 mr-4" })} ${title} </div> </div> <div class="collapse-content"> ${renderSlot($$result2, $$slots["default"])} </div> </div> ` })}`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/layouts/AccordionLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const { timeframe, title, description, url, tags, url_name, location } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card card-compact card-bordered border border-[oklch(var(--s))] w-full md:w-112 lg:w-128 hover:shadow-lg transition-all my-4"> <div class="card-body"> <div class="grid grid-cols-3 gap-4 mb-2"> <div class="self-start col-span-2 justify-self-start text-left"> <h1 class="uppercase card-title font-extrabold tracking-tighter md:text-2xl">${title}</h1> ${location && renderTemplate`<div class="flex items-center mt-2"> ${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:location", "class": "w-4 h-4 mr-1" })} <p class="text-sm  font-light text-secondary">${location}</p> </div>`} </div> <div class="self-center justify-self-end"> ${timeframe && renderTemplate`<div class="badge w-max h-max text-center badge-outline inline-block align-middle shadow-md font-mono"> ${timeframe} </div>`} </div> </div> <div class="grid grid-cols-3 gap-4 place-items-center"> <div class="self-start col-span-2 justify-self-start text-left"> <article class="prose text-secondary"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(description)}` })} </article> ${Array.isArray(tags) && renderTemplate`<div class="flex flex-wrap content-around gap-2 my-4"> ${tags.map((item) => renderTemplate`<span class="badge text-center inline-block align-middle w-max h-max text-sm  badge-outline shadow-md mb-1"${addAttribute(item, ":key")}>${item}</span>`)} </div>`} </div> <div class="self-center justify-self-end"> <a${addAttribute(url, "href")} target="_blank" class="link link-hover text-sm text-right flex justify-center items-center"> ${url_name} ${url !== "#" && renderTemplate`${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:link", "class": "w-4 h-4 ml-2" })}`} </a> </div> </div> </div> </div>`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro();
const $$ContactCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactCard;
  const { icon, url, url_name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a target="_blank"${addAttribute(url, "href")}> <button class="btn btn-outline btn-md mr-2">${renderComponent($$result, "Icon", $$Icon, { "name": icon, "class": "w-6 h-6" })}${url_name}</button> </a>`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/components/ContactCard.astro", void 0);

const $$Astro$1 = createAstro();
const $$Container = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Container;
  const works = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/works/work1.md": () => import('../chunks/work1_D3MkQmbc.mjs').then(n => n._),"../pages/works/work2.md": () => import('../chunks/work2_DQpVhzbr.mjs').then(n => n._)}), () => "../pages/works/*.md");
  const projects = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/projects/spotfilm.md": () => import('../chunks/spotfilm_CQJRiS8-.mjs').then(n => n._)}), () => "../pages/projects/*.md");
  const studies = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/studies/studie1.md": () => import('../chunks/studie1_BJcUcA1a.mjs').then(n => n._),"../pages/studies/studie2.md": () => import('../chunks/studie2_C8bgXWco.mjs').then(n => n._)}), () => "../pages/studies/*.md");
  const certificates = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/certificates/backend2022.md": () => import('../chunks/backend2022_DItjbgns.mjs').then(n => n._)}), () => "../pages/certificates/*.md");
  const blogs = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/blogs/home-mmouzo.md": () => import('../chunks/home-mmouzo_93DcJS4S.mjs').then(n => n._)}), () => "../pages/blogs/*.md");
  const contact = await Astro2.glob(/* #__PURE__ */ Object.assign({"../pages/contact/email.md": () => import('../chunks/email_CLqssYks.mjs').then(n => n._),"../pages/contact/github.md": () => import('../chunks/github_CMJP5Fqp.mjs').then(n => n._),"../pages/contact/linkedin.md": () => import('../chunks/linkedin_6eJE9m98.mjs').then(n => n._),"../pages/contact/telegram.md": () => import('../chunks/telegram_BBeQX-Ao.mjs').then(n => n._)}), () => "../pages/contact/*.md");
  const PDF = "/cv-20240219.pdf";
  return renderTemplate`${maybeRenderHead()}<div class="join join-vertical gap-1"> ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "About", "icon": "carbon:identification" }, { "default": ($$result2) => renderTemplate` <article class="text-justify"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(compiledContent())}` })} </article> ` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Work", "icon": "carbon:construction" }, { "default": ($$result2) => renderTemplate`${works.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "tags": item.frontmatter.tags, "url": item.frontmatter.url, "url_name": item.frontmatter.org, "location": item.frontmatter.location })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Studies", "icon": "carbon:education" }, { "default": ($$result2) => renderTemplate`${studies.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "location": item.frontmatter.location, "tags": item.frontmatter.tags, "url": item.url, "url_name": item.frontmatter.institute })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Projects", "icon": "carbon:tools" }, { "default": ($$result2) => renderTemplate`${projects.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "tags": item.frontmatter.tags, "url": item.frontmatter.url, "url_name": "View project" })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Certifications", "icon": "carbon:certificate" }, { "default": ($$result2) => renderTemplate`${certificates.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "tags": item.frontmatter.tags, "url": item.frontmatter.url, "url_name": "View Certificate" })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Blogs", "icon": "carbon:pen" }, { "default": ($$result2) => renderTemplate`${blogs.map((item) => {
    return renderTemplate`${renderComponent($$result2, "Card", $$Card, { "title": item.frontmatter.title, "timeframe": item.frontmatter.date, "description": item.compiledContent(), "url": item.frontmatter.url, "url_name": item.frontmatter.url_name })}`;
  })}` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Files", "icon": "carbon:volume-file-storage" }, { "default": ($$result2) => renderTemplate` <div class="flex justify-center w-full"> <div class="card card-compact card-bordered border-[oklch(var(--s))] w-96 md:w-112 lg:w-128 hover:shadow-lg transition-all"> <figure> <object${addAttribute(PDF, "data")} type="application/pdf" width="100%"></object> </figure> <div class="card-body"> <h2 class="card-title">Resume</h2> <p>View and download my resume by clicking on the button below</p> <div class="card-actions justify-end"> <a target="_blank"${addAttribute(PDF, "href")}> <button class="btn btn-outline"> <p>Download resume</p> ${renderComponent($$result2, "Icon", $$Icon, { "name": "carbon:document-pdf", "class": "w-6 h-6 ml-1" })} </button> </a> </div> </div> </div> </div> ` })} ${renderComponent($$result, "AccordionLayout", $$AccordionLayout, { "title": "Contact", "icon": "carbon:location-person" }, { "default": ($$result2) => renderTemplate` <div class="flex flex-wrap content-around gap-4 justify-center"> ${contact.map((item) => {
    return renderTemplate`${renderComponent($$result2, "ContactCard", $$ContactCard, { "url": item.frontmatter.url, "url_name": item.frontmatter.title, "icon": item.frontmatter.icon })}`;
  })} </div> ` })} </div>`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/components/Container.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const getYear = () => (/* @__PURE__ */ new Date()).getFullYear().toString();
  return renderTemplate`${maybeRenderHead()}<footer class="flex justify-center items-center bg-transparent py-4"> <p class="flex items-center text-center font-light text-sm text-secondary">
&copy; ${getYear()} developed by
<a target="_blank" class="link ml-1" href="https://github.com/mmouzo">Martín Mouzo Silva</a> </p> <img class="rounded-full w-4 h-4 ml-2 shadow-md border border-black" src="gl_flag_128x.png" alt="Galician Flag"> </footer>`;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="mx-auto pt-6 pb-2 relative" data-astro-cid-3ef6ksr2> <article class="flex flex-col md:flex-col items-center gap-4 w-full max-w-2xl" data-astro-cid-3ef6ksr2> <div class="flex-shrink-0 w-20 md:w-24 rounded-full shadow-sm overflow-hidden" data-astro-cid-3ef6ksr2> <img alt="avatar" src="/profile.webp" class="grayscale-[50] hover:grayscale-0" data-astro-cid-3ef6ksr2> </div> <div class="text-center" data-astro-cid-3ef6ksr2> <div class="flex justify-center md:justify-between items-center mb-2 relative" data-astro-cid-3ef6ksr2> <h1 class="text-3xl font-extrabold tracking-tight md:text-3xl relative" data-astro-cid-3ef6ksr2> ${frontmatter.name} <div class="absolute top-0 left-full ml-2 -mt-4" data-astro-cid-3ef6ksr2> <div class="badge w-max text-sm font-light badge-outline shadow-lg" data-astro-cid-3ef6ksr2> ${frontmatter.pronouns} </div> </div> </h1> </div> <h2 class="text-lg mb-2 text-secondary" data-astro-cid-3ef6ksr2> ${frontmatter.designation} </h2> <div class="flex items-center justify-center mt-1" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Icon", $$Icon, { "name": "carbon:location", "class": "w-4 h-4 mr-1", "data-astro-cid-3ef6ksr2": true })} <p class="text-sm text-secondary" data-astro-cid-3ef6ksr2>${frontmatter.location}</p> </div> </div> </article> </header> `;
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="gl"> <head><script>\n      if (localStorage.getItem("theme") === null) {\n        document.documentElement.setAttribute("data-theme", "lofi");\n      } else\n        document.documentElement.setAttribute(\n          "data-theme",\n          localStorage.getItem("theme")\n        );\n    <\/script><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.webp"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"', "><title>Cezar Kelso CV</title>", '</head> <body class="flex flex-col min-h-screen"> ', ' <div class="flex items-center absolute top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 xl:top-10 xl:right-10 z-10"> ', ' <input type="checkbox" data-toggle-theme="black,lofi" data-act-class="ACTIVECLASS" class="toggle toggle-sm mx-1 bg-secondary" checked> ', ' </div> <div class="divider mx-auto h-fit max-w-3xl w-[95vw] flex flex-nowrap bg-secondary"></div> <main class="mx-auto flex-grow max-h-[90vh] md:max-h-[70vh] max-w-3xl overflow-y-scroll py-2 grid w-[95vw]"> <div class="container"> ', " </div> </main> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderComponent($$result, "Icon", $$Icon, { "name": "carbon:moon", "class": "w-4 h-4" }), renderComponent($$result, "Icon", $$Icon, { "name": "carbon:light", "class": "w-4 h-4" }), renderComponent($$result, "Container", $$Container, {}), renderComponent($$result, "Footer", $$Footer, { "class": "flex justify-center items-center py-4" }));
}, "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/index.astro", void 0);

const $$file = "/Users/hasanupin/www/test-project/astro-cv-esquelete/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };