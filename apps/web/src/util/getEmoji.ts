const getEmoji = (category: string) => {
  const emojiGroups: { emoji: string; keywords: string[] }[] = [
    {
      emoji: "🍽️",
      keywords: ["dining", "eat out", "restaurant", "food", "cafe", "brunch"],
    },
    {
      emoji: "🍰",
      keywords: [
        "treats",
        "dessert",
        "cake",
        "ice cream",
        "snacks",
        "pastry",
        "coffee",
      ],
    },
    {
      emoji: "🧘‍♀️",
      keywords: ["yoga"],
    },
    {
      emoji: "🏋️",
      keywords: ["fitness", "gym", "workout", "exercise", "sports"],
    },
    {
      emoji: "🏠",
      keywords: [
        "household",
        "rent",
        "utilities",
        "maintenance",
        "repairs",
        "furniture",
      ],
    },
    {
      emoji: "💸",
      keywords: ["insurance", "reimbursement", "premium"],
    },
    {
      emoji: "📺",
      keywords: [
        "entertainment",
        "subscription",
        "movies",
        "streaming",
        "music",
      ],
    },
    {
      emoji: "💰",
      keywords: ["payroll", "salary", "income", "bonus"],
    },
    {
      emoji: "🚗",
      keywords: ["transportation", "uber", "fuel"],
    },
    {
      emoji: "🚕",
      keywords: ["taxi"],
    },
    {
      emoji: "🚌",
      keywords: ["bus"],
    },
    {
      emoji: "✈️",
      keywords: ["flight", "travel", "vacation", "trip"],
    },
    {
      emoji: "🛒",
      keywords: ["groceries", "supermarket", "market"],
    },
    {
      emoji: "⚕️",
      keywords: ["medical", "hospital", "clinic"],
    },
    {
      emoji: "💊",
      keywords: ["pharmacy", "dentist"],
    },
    {
      emoji: "💡",
      keywords: ["utilities", "electricity", "water", "internet"],
    },
    {
      emoji: "📚",
      keywords: ["education", "tuition", "books"],
    },
    {
      emoji: "🎁",
      keywords: ["gift", "birthday", "anniversary"],
    },
    {
      emoji: "💄",
      keywords: ["personal care", "beauty", "spa", "skincare"],
    },
    {
      emoji: "🐾",
      keywords: ["pets", "dog", "cat"],
    },
    {
      emoji: "❓",
      keywords: ["miscellaneous", "unknown"],
    },
  ];

  const normalizedInput = category.toLowerCase();

  for (const { emoji, keywords } of emojiGroups) {
    if (keywords.some((keyword) => normalizedInput.includes(keyword))) {
      return emoji;
    }
  }

  return "❓";
};

export default getEmoji;
