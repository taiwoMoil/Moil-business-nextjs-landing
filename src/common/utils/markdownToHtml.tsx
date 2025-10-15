import {remark} from 'remark';
import html from 'remark-html';

export function parseMarkdownToHtml(markdown: string) {
    const processedContent = remark().use(html).processSync(markdown).toString();
    return processedContent;
}