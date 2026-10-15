// Emphasize established technical terms without changing the supplied claims.
const technicalTerms = /\b(PostgreSQL exclusion constraints|transaction-level locking|Transaction locking|Nodemailer\/SMTP|RFID-based identification|RFID identification|ultrasonic sensing|controlled report access|role-based authentication|React, NestJS, and PostgreSQL|81 automated tests)\b/gi;

export function CaseStudyText({ text }: { text: string }) {
  return text.split(technicalTerms).map((part, index) =>
    index % 2 ? <strong key={index}>{part}</strong> : part,
  );
}

export function CaseStudyParagraphs({ text }: { text: string }) {
  const paragraphs: string[] = [];
  for (const sentence of text.split(/(?<=[.!?])\s+(?=[A-Z])/)) {
    const previous = paragraphs.at(-1);
    if (previous && previous.length + sentence.length < 260) {
      paragraphs[paragraphs.length - 1] = `${previous} ${sentence}`;
    } else {
      paragraphs.push(sentence);
    }
  }
  return paragraphs.map((paragraph) => <p key={paragraph}><CaseStudyText text={paragraph} /></p>);
}
