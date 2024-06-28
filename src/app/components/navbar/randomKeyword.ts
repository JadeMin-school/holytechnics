const keywords = [
	"오늘의 학식",
	"오늘의 시간표",
] as const;

export function randomKeyword() {
	return keywords[Math.floor(Math.random() * keywords.length)];
}