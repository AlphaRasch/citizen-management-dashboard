export const generateMockCitizens = (count) => {
    const citizens = [];
    for (let i = 0; i < count; i++) {
        citizens.push({
            id: i + 1,
            fullName: `Гражданин ${i + 1}`,
            birthDate: new Date(
                1950 + Math.floor(Math.random() * 50),
                Math.floor(Math.random() * 12),
                Math.floor(Math.random() * 28)
            ).toISOString(),
            address: `ул. Примерная, д. ${Math.floor(Math.random() * 100)}`,
            status: ['active', 'archived'][Math.floor(Math.random() * 2)],
            familyMembers: Array.from({ length: Math.floor(Math.random() * 5) }, (_, idx) => ({
                id: idx + 1,
                name: `Член семьи ${idx + 1}`,
                relation: ['Супруг', 'Ребенок', 'Родитель'][Math.floor(Math.random() * 3)],
                birthDate: new Date(
                    1950 + Math.floor(Math.random() * 50),
                    Math.floor(Math.random() * 12),
                    Math.floor(Math.random() * 28)
                ).toISOString()
            })),
            education: {
                degree: ['Бакалавр', 'Магистр', 'Кандидат наук'][Math.floor(Math.random() * 3)],
                university: `Университет ${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`
            }
        });
    }
    return citizens;
};