export interface Pub {
  title: string
  authors: string
  venue: string
  kind: string
  note: string
}

export const PUBLICATIONS: Pub[] = [
  {
    kind: 'JOURNAL ARTICLE',
    title:
      'Pemodelan Topik Cuitan tentang Danantara (Topic Modeling of Tweets about Danantara)',
    authors: 'Noor Akhnafal Aban, Chanifah Indah Ratnasari (Universitas Islam Indonesia)',
    venue:
      'Rabit: Jurnal Teknologi dan Sistem Informasi — LPPM Universitas Riau, Vol 11 No 1, January 2026',
    note: 'Indexed in Garuda (Garba Rujukan Digital, Kemdiktisaintek). Topic modeling of Twitter conversations about Danantara using BERTopic and indoSBERT embeddings.',
  },
]
