export type FAQCategory = {
	id: string;
	title: string;
	questions: { question: string; answer: string }[];
};

export const faqCategories: FAQCategory[] = [
	{
		id: "orders",
		title: "Commandes",
		questions: [
			{
				question: "Comment puis-je passer une commande ?",
				answer:
					"Parcourez nos produits, ajoutez les articles à votre panier et procédez au paiement. Vous serez guidé(e) étape par étape tout au long du processus.",
			},
			{
				question: "Puis-je modifier ou annuler ma commande après l'avoir passée ?",
				answer:
					"Une fois la commande validée, les modifications ne sont généralement plus possibles. Si votre commande n'a pas encore été traitée, contactez-nous dès que possible et nous ferons de notre mieux pour répondre à votre demande.",
			},
			{
				question: "Quel est le délai de traitement des commandes ?",
				answer:
					"Cela depend de votre commande, le délai est indiqué sur la page produit. Vous recevrez un e-mail de confirmation dès l'expédition.",
			},
			{
				question: "Puis-je demander une facture pour ma commande ?",
				answer:
					"Oui. Si vous avez besoin d'une facture, assurez-vous de fournir vos informations de facturation lors du paiement. La facture sera envoyée par e-mail avec votre confirmation de commande.",
			},
		],
	},
	{
		id: "payments",
		title: "Paiements",
		questions: [
			{
				question: "Quels modes de paiement acceptez-vous ?",
				answer:
					"Nous acceptons toutes les principales cartes de crédit et de débit, ainsi que d'autres modes de paiement disponibles via notre prestataire sécurisé. Les options s'affichent lors du paiement.",
			},
			{
				question: "Mes informations de paiement sont-elles sécurisées ?",
				answer:
					"Absolument. Tous les paiements sont traités par un prestataire certifié PCI. Nous ne stockons jamais vos coordonnées bancaires complètes sur nos serveurs.",
			},
			{
				question: "Mon paiement a échoué. Que dois-je faire ?",
				answer:
					"Vérifiez d'abord vos coordonnées bancaires et assurez-vous que votre compte est suffisamment approvisionné. Si le problème persiste, essayez un autre mode de paiement ou contactez votre banque. Vous pouvez également nous solliciter pour obtenir de l'aide.",
			},
			{
				question: "Quand serai-je débité(e) ?",
				answer:
					"Le paiement est traité au moment de l'achat. Pour les précommandes, vous pouvez être débité(e) lors de la commande ou à l'expédition, selon le produit.",
			},
		],
	},
	{
		id: "shipping",
		title: "Livraison",
		questions: [
			{
				question: "Quelles sont vos options de livraison ?",
				answer:
					"Nous proposons des livraisons standard et express, en point relais ou à domicile. Les méthodes disponibles et les délais estimés s'affichent lors du paiement en fonction de votre localisation.",
			},
			{
				question: "Livrez-vous à l'international ?",
				answer: "Non, nous livrons uniquement en France métropolitaine.",
			},
			{
				question: "Comment puis-je suivre ma commande ?",
				answer:
					"Une fois votre commande expédiée, vous recevrez un e-mail de confirmation contenant un numéro de suivi et un lien pour suivre votre colis en temps réel.",
			},
			{
				question: "Que faire si mon colis arrive endommagé ?",
				answer:
					"Si votre commande arrive endommagée, prenez des photos des dégâts et contactez-nous immédiatement. Nous ferons le nécessaire pour résoudre le problème rapidement.",
			},
		],
	},
	{
		id: "returns",
		title: "Retours & Échanges",
		questions: [
			{
				question: "Quelle est votre politique de retour ?",
				answer:
					"Aucun retour n'est possible pour les coffrets créatifs. Pour les produits de notre boutique, nous acceptons les retours dans les 14 jours suivant la livraison. Les articles doivent être inutilisés, dans leur emballage d'origine et dans le même état qu'à la réception. Consultez notre page de politique de retours pour plus de détails.",
			},
			{
				question: "Comment initier un retour ?",
				answer:
					"Pour effectuer un retour, contactez notre équipe support avec votre numéro de commande et le motif du retour. Nous vous fournirons les instructions et, le cas échéant, une étiquette de retour.",
			},

			{
				question: "Quel est le délai pour le remboursement ?",
				answer:
					"Une fois votre article retourné reçu et inspecté, les remboursements sont généralement traités sous 5 à 10 jours ouvrés. Le montant sera crédité sur votre mode de paiement initial.",
			},
		],
	},
	{
		id: "discounts",
		title: "Codes promo & Offres",
		questions: [
			{
				question: "Proposez-vous des réductions pour les nouveaux clients ?",
				answer:
					"Oui ! Les nouveaux clients peuvent s'inscrire à notre newsletter pour bénéficier d'une remise de bienvenue de -10%. Le formulaire d'inscription se trouve sur notre page d'accueil.",
			},
			{
				question: "Comment appliquer un code promo ?",
				answer:
					"Lors du paiement, vous trouverez un champ pour saisir votre code promo. Entrez le code et la réduction s'appliquera automatiquement au total de votre commande.",
			},
			{
				question: "Puis-je utiliser plusieurs codes promo sur une seule commande ?",
				answer:
					"Un seul code promo peut être appliqué par commande. Le système utilisera automatiquement celui qui offre la meilleure remise si plusieurs sont saisis.",
			},
		],
	},
];
