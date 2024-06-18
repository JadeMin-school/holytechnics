const keywords = [
	"오늘의 학식",
	"오늘의 시간표",
];

export function randomKeyword(): string {
	return keywords[Math.floor(Math.random() * keywords.length)];
}