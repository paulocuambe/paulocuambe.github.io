// Progressive enhancement: the original code remains readable on failure.
const blocks = document.querySelectorAll('pre code[data-language]');
if (blocks.length) {
  try {
    const { highlight, normalizeLanguage } = await import(
      'https://cdn.jsdelivr.net/npm/@arborium/arborium@2.18.2/dist/arborium.js'
    );
    await Promise.all(Array.from(blocks, async (block) => {
      const language = normalizeLanguage(block.dataset.language);
      if (['text', 'plaintext', 'txt'].includes(language)) return;
      try {
        const html = await highlight(language, block.textContent);
        block.innerHTML = html;
      } catch (error) {
        console.warn(`Could not highlight ${language} code.`, error);
      }
    }));
  } catch (error) {
    console.warn('Code highlighting unavailable.', error);
  }
}
