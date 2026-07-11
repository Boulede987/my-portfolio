import { ReactNode } from 'react';

interface Props {
  text: string;
  className?: string;
}

const FormattedText = ({ text, className }: Props) => {
  const lines = text.trim().split('\n');
  const elements: ReactNode[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    const content = paragraphLines.join(' ').trim();
    if (content) {
      elements.push(
        <p key={elements.length} className={`mb-4 last:mb-0 ${className ?? ''}`}>
          {content}
        </p>
      );
    }
    paragraphLines = [];
  };

  const flushList = () => {
    if (listItems.length > 0) {
      elements.push(
        <ul key={elements.length} className={`list-disc list-outside pl-5 space-y-1.5 mb-4 last:mb-0 ${className ?? ''}`}>
          {listItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    }
    listItems = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushList();
      flushParagraph();
      continue;
    }
    if (line.startsWith('- ')) {
      flushParagraph();
      listItems.push(line.slice(2));
    } else {
      flushList();
      paragraphLines.push(line);
    }
  }
  flushList();
  flushParagraph();

  return <>{elements}</>;
};

export default FormattedText;
