import type { APIPostsBrowseResult } from "commerce-kit";

export type BlogPost = {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	author: {
		name: string;
		initial: string;
		avatarUrl?: string;
	};
	date: string;
	readingTime: string;
	views: number;
	commentsCount: number;
	imageUrl: string;
};

type JSONContent = {
	type?: string;
	attrs?: {
		level?: number;
		src?: string;
		alt?: string;
		href?: string;
		target?: string;
		[key: string]: unknown;
	};
	content?: JSONContent[];
	marks?: {
		type: string;
		attrs?: {
			href?: string;
			target?: string;
			[key: string]: unknown;
		};
	}[];
	text?: string;
};

type APIPostResult = APIPostsBrowseResult["data"][number] & {
	seo?: {
		title?: string | null;
		description?: string | null;
		canonical?: string | null;
	} | null;
	content: JSONContent;
};

// Utilities for rendering Tiptap JSONContent from the YNS API
export function extractTextFromJSONContent(node: JSONContent): string {
	if (!node) return "";
	if (node.type === "text") return node.text || "";
	if (Array.isArray(node.content)) {
		return node.content.map((child) => extractTextFromJSONContent(child)).join(" ");
	}
	return "";
}

export function renderHTMLFromJSONContent(node: JSONContent): string {
	if (!node) return "";
	if (node.type === "text") {
		let text = node.text || "";
		if (node.marks) {
			for (const mark of node.marks) {
				if (mark.type === "bold") text = `<strong>${text}</strong>`;
				if (mark.type === "italic") text = `<em>${text}</em>`;
				if (mark.type === "underline") text = `<u>${text}</u>`;
				if (mark.type === "link")
					text = `<a href="${mark.attrs?.href}" target="${mark.attrs?.target || "_blank"}">${text}</a>`;
			}
		}
		return text;
	}
	const childrenHTML = Array.isArray(node.content)
		? node.content.map((child) => renderHTMLFromJSONContent(child)).join("")
		: "";
	if (node.type === "paragraph") return `<p>${childrenHTML}</p>`;
	if (node.type === "heading")
		return `<h${node.attrs?.level || 2}>${childrenHTML}</h${node.attrs?.level || 2}>`;
	if (node.type === "bulletList") return `<ul>${childrenHTML}</ul>`;
	if (node.type === "orderedList") return `<ol>${childrenHTML}</ol>`;
	if (node.type === "listItem") return `<li>${childrenHTML}</li>`;
	if (node.type === "blockquote") return `<blockquote>${childrenHTML}</blockquote>`;
	if (node.type === "image") return `<img src="${node.attrs?.src}" alt="${node.attrs?.alt || ""}" />`;
	if (node.type === "hardBreak") return `<br />`;
	return childrenHTML;
}

export function mapAPIPostToBlogPost(post: APIPostResult): BlogPost {
	const rawText = extractTextFromJSONContent(post.content);
	const excerpt = rawText.slice(0, 150) + "...";

	// Formatting date
	const dateObj = new Date(post.publishedAt || post.createdAt);
	const dateStr = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long" }).format(dateObj);

	// Estimating reading time
	const wordsPerMinute = 200;
	const wordCount = rawText.split(/\s+/).length;
	const readingTime = Math.max(1, Math.ceil(wordCount / wordsPerMinute)) + " min";

	return {
		slug: post.slug,
		title: post.title,
		excerpt: post.seo?.description || excerpt,
		content: renderHTMLFromJSONContent(post.content) || "<p>Aucun contenu disponible.</p>",
		author: {
			name: "L'équipe EcloKit",
			initial: "E",
		},
		date: dateStr,
		readingTime: readingTime,
		views: 0,
		commentsCount: 0,
		imageUrl:
			post.image ||
			"https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=1200",
	};
}

// TODO: views should be stored in the locale storage
export const blogPosts: BlogPost[] = [
	{
		slug: "ete-diy-bronze-ennui",
		title: 'Cet été, on oublie le combo "Bronzette & Ennui" !',
		excerpt:
			"Soyons honnêtes : on adore toutes bouquiner au soleil ou peaufiner notre bronzage pendant des heures. Mais créons plutôt !",
		content: `<p>Découvrez nos 3 activités DIY pour occuper vos journées d'été.</p>`,
		author: {
			name: "Loanne HELLO",
			initial: "L",
		},
		date: "6 juin",
		readingTime: "8 min",
		views: 0,
		commentsCount: 0,
		imageUrl: "/img/girl-reading.png",
	},
	{
		slug: "introduction-au-crochet",
		title: "Comment commencer le crochet : le guide complet pour débutants",
		excerpt:
			"Vous avez toujours rêvé de créer vos propres vêtements et accessoires ? Découvrez les bases du crochet dans ce guide pas à pas.",
		content: `
      <h2>Le crochet, un art ancestral revenu à la mode</h2>
      <p>Le crochet n'est plus seulement l'activité préférée de nos grand-mères. C'est devenu un véritable phénomène de mode, porté par le mouvement DIY (Do It Yourself) et la recherche de slow-fashion.</p>
      
      <h3>Le matériel indispensable</h3>
      <p>Pour débuter, vous n'avez pas besoin de grand-chose :</p>
      <ul>
        <li>Un crochet adapté à la taille de votre fil (généralement du 4mm ou 5mm pour débuter).</li>
        <li>Une pelote de coton ou de laine douce.</li>
        <li>Une paire de ciseaux.</li>
        <li>Une aiguille à laine pour rentrer les fils.</li>
      </ul>

      <h3>Les points de base</h3>
      <p>Tout ouvrage commence par une chaînette. Ensuite, vous apprendrez la maille serrée, la demi-bride et la bride. Avec ces trois points, vous pouvez déjà réaliser 90% des projets !</p>
    `,
		author: {
			name: "Clara Pischedda",
			initial: "C",
		},
		date: "27 mars",
		readingTime: "5 min",
		views: 1240,
		commentsCount: 0,
		imageUrl: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80&w=1200",
	},
	{
		slug: "bien-choisir-sa-laine",
		title: "Comment choisir son fil à tricoter : fibres, poids et textures",
		excerpt:
			"Laine, coton, alpaga... Quel fil choisir pour quel projet ? Nous vous aidons à y voir plus clair pour ne plus vous tromper.",
		content: `
      <h2>La fibre, le cœur de votre projet</h2>
      <p>Le choix du fil est l'étape la plus cruciale de tout projet créatif. Une mauvaise fibre peut gâcher des heures de travail.</p>
      
      <h3>Les fibres naturelles animales</h3>
      <p>La laine de mouton est élastique et chaude. L'alpaga est extrêmement doux mais moins élastique. Le mohair apporte du gonflant et de la légèreté.</p>

      <h3>Les fibres végétales</h3>
      <p>Le coton est idéal pour l'été car il respire bien, mais il est peu élastique. Le lin est très résistant et devient plus doux au fil des lavages.</p>
    `,
		author: {
			name: "Clara Pischedda",
			initial: "C",
		},
		date: "2 avril",
		readingTime: "4 min",
		views: 856,
		commentsCount: 0,
		imageUrl: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=1200",
	},
	{
		slug: "votre-premier-accessoire-diy",
		title: "Créer votre premier accessoire DIY : 3 idées simples",
		excerpt:
			"Nul besoin d'être un expert pour créer des pièces uniques. Suivez nos tutoriels simples pour fabriquer vos bijoux et sacs.",
		content: `
      <h2>Le plaisir de porter ses créations</h2>
      <p>Rien ne vaut la fierté de répondre "C'est moi qui l'ai fait !" quand on vous complimente sur votre sac ou vos boucles d'oreilles.</p>
      
      <h3>1. Le sac filet en crochet</h3>
      <p>C'est l'accessoire parfait pour l'été et pour faire ses courses de manière écologique. Un projet répétitif et relaxant.</p>

      <h3>2. Le bandeau en laine</h3>
      <p>Idéal pour apprendre à tricoter ou crocheter à plat. C'est rapide et très gratifiant.</p>
    `,
		author: {
			name: "Clara Pischedda",
			initial: "C",
		},
		date: "10 avril",
		readingTime: "6 min",
		views: 2100,
		commentsCount: 0,
		imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&q=80&w=1200",
	},
	{
		slug: "astuces-diy-eco-responsable",
		title: "Astuces pour un DIY éco-responsable : créez sans polluer",
		excerpt:
			"Upcycling, teintures naturelles, recyclage... Découvrez comment intégrer l'écologie dans vos projets créatifs au quotidien.",
		content: `
      <h2>La créativité au service de la planète</h2>
      <p>Le handmade est par essence plus écologique que le fast-fashion, mais nous pouvons aller plus loin.</p>
      
      <h3>L'upcycling : la magie de la transformation</h3>
      <p>Avant d'acheter du neuf, regardez ce que vous avez. Un vieux pull peut être détricoté pour récupérer la laine.</p>

      <h3>Les teintures naturelles</h3>
      <p>Utilisez des épluchures d'oignons, des noyaux d'avocats ou des baies pour colorer vos fibres de manière non toxique.</p>
    `,
		author: {
			name: "Clara Pischedda",
			initial: "C",
		},
		date: "il y a 6 jours",
		readingTime: "3 min",
		views: 742,
		commentsCount: 0,
		imageUrl: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&q=80&w=1200",
	},
	{
		slug: "bienfaits-loisirs-creatifs-stress",
		title: "Les bienfaits des loisirs créatifs pour réduire le stress",
		excerpt:
			"Saviez-vous que créer réduit l'anxiété ? Exploration scientifique des bienfaits du fait-main sur notre équilibre mental.",
		content: `
      <h2>La créativité comme thérapie</h2>
      <p>Dans un monde qui va toujours plus vite, s'arrêter pour créer avec ses mains est un acte de résistance et de santé mentale.</p>
      
      <h3>L'état de "Flow"</h3>
      <p>Lorsque vous crochetez ou peignez, votre cerveau entre dans un état de concentration intense appelé le flow, similaire à la méditation.</p>

      <h3>La satisfaction de l'accomplissement</h3>
      <p>Terminer un projet libère de la dopamine, l'hormone du bonheur, et renforce la confiance en soi.</p>
    `,
		author: {
			name: "Clara Pischedda",
			initial: "C",
		},
		date: "27 mars",
		readingTime: "4 min",
		views: 1530,
		commentsCount: 0,
		imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200",
	},
];
