export default function decorate(block) {
  const [quoteWrapper] = block.children;
  console.log(block);
  console.log(quoteWrapper);
  const blockquote = document.createElement('blockquote');
  blockquote.textContent = quoteWrapper.textContent.trim();
  quoteWrapper.replaceChildren(blockquote);
}
