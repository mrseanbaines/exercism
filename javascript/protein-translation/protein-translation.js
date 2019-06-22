const proteins = {
  Methionine: ['AUG'],
  Phenylalanine: ['UUU', 'UUC'],
  Leucine: ['UUA', 'UUG'],
  Serine: ['UCU', 'UCC', 'UCA', 'UCG'],
  Tyrosine: ['UAU', 'UAC'],
  Cysteine: ['UGU', 'UGC'],
  Tryptophan: ['UGG'],
  STOP: ['UAA', 'UAG', 'UGA'],
};

const getProtein = (obj, input) => {
  const match = Object.entries(obj).find(arr =>
    arr[1].some(codon => codon === input),
  );

  if (match) {
    return match[0];
  }

  throw new Error('Invalid codon');
};

export const translate = (RNA = []) => {
  const codons = [];

  for (let i = 0; i < RNA.length; i += 3) {
    const codon = RNA.substring(i, i + 3);

    if (getProtein(proteins, codon) === 'STOP') break;

    codons.push(codon);
  }

  return codons.map(codon => getProtein(proteins, codon));
};
