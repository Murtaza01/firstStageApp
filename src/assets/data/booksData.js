import betterEnglishPronun from "../images/better_english_pronunciation.jpg";
import englishConversation from "../images/english_conversation.jpg";
import englishGrammarInUse from "../images/english_grammar_in_use.jpg";
import selectReading from "../images/select_reading.jpg";
import computer_1 from "../images/computer_1.jpg";
import computer_2 from "../images/computer_2.jpg";
import totem1 from "../images/totem1.jpg";

const booksData = [
  {
    title: "Better English Pronunciation",
    author: "J.D O'Connor",
    image: betterEnglishPronun,
    link: "https://bayanebartar.org/file-dl/library/IELTS5/Better-English-Pronunciation/Better-English-Pronunciation.pdf",
  },

  {
    title: "English Conversation",
    author: "Jean L. Yates",
    image: englishConversation,
    link: "https://gosafir.com/mag/wp-content/uploads/2020/06/%D8%AF%D8%A7%D9%86%D9%84%D9%88%D8%AF-%D8%B1%D8%A7%DB%8C%DA%AF%D8%A7%D9%86-%DA%A9%D8%AA%D8%A7%D8%A8-Practice-Makes-Perfect-English-Conversation-%D8%A8%D9%87-%D8%B5%D9%88%D8%B1%D8%AA-PDF.pdf",
  },
  {
    title: "Select Readings",
    author: "Linda Lee",
    image: selectReading,
    link: "https://cdn3.booksdl.org/get.php?md5=6477e658ff8b4d54487c046eb5f0213d&key=CJPBGNLGTHFPNT44",
  },
  {
    title: "Totem 1",
    author: "Marie-José Lopes",
    image: totem1,
    link: "https://cloudflare-ipfs.com/ipfs/bafykbzacec6ywqcwk3we322i3xs6blqxhojlkec4qndlhnessob6cpqud6rcy?filename=Marie-Jos%C3%A9%20Lopes%2C%20Jean-Thierry%20Le%20Bougnec%20-%20Totem%201%20%E2%80%93%20Ausgabe%20f%C3%BCr%20den%20deutschsprachigen%20Raum_%20Kursbuch%20mit%20DVD-ROM%20und%20digitalem%20Lernpaket_%20m%C3%A9thode%20de%20fran%C3%A7ais%20_%20Kursbuch%20mit%20DVD-ROM%20und%20digitalem%20Ler.pdf",
  },
  {
    title: "English Grammar in use",
    author: "Raymond Murphy",
    image: englishGrammarInUse,
    link: "https://canadadotnet.files.wordpress.com/2020/05/english-grammar-in-use-intermediate.pdf",
  },
  {
    title: "Computer_1",
    author: "-",
    image: computer_1,
    link: "https://cloudflare-ipfs.com/ipfs/bafykbzacec2kvvhpv6melcxshbkefse22foelkrz4smopkmn4ha4s2nkals6q?filename=%28%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%88%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%D9%87%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D9%8A%D8%A9%29%20%D8%B2%D9%8A%D8%A7%D8%AF%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D9%88%D8%AF%2C%20%D8%BA%D8%B3%D8%A7%D9%86%20%D8%AD%D9%85%D9%8A%D8%AF%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%AC%D9%8A%D8%AF%20-%20%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%88%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%D9%87%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%A7%D9%88%D9%84.%201-%D8%A7%D9%84%D8%AF%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9%20%D9%84%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%282014%29.pdf",
  },
  {
    title: "Computer_2",
    author: "-",
    image: computer_2,
    link: "https://cloudflare-ipfs.com/ipfs/bafykbzacea2y5tvfvs4yku4ac2aytzvh5d3htxiv6hqdl6j7vqitr7mx6gi74?filename=%28%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%88%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%D9%87%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D9%8A%D8%A9%29%20%D8%B2%D9%8A%D8%A7%D8%AF%20%D9%85%D8%AD%D9%85%D8%AF%20%D8%B9%D8%A8%D9%88%D8%AF%2C%20%D8%BA%D8%B3%D8%A7%D9%86%20%D8%AD%D9%85%D9%8A%D8%AF%20%D8%B9%D8%A8%D8%AF%20%D8%A7%D9%84%D9%85%D8%AC%D9%8A%D8%AF%20-%20%D8%A7%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AD%D8%A7%D8%B3%D9%88%D8%A8%20%D9%88%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%D8%A7%D8%AA%D9%87%20%D8%A7%D9%84%D9%85%D9%83%D8%AA%D8%A8%D9%8A%D8%A9%20%D8%A7%D9%84%D8%AC%D8%B2%D8%A1%20%D8%A7%D9%84%D8%AB%D8%A7%D9%86%D9%8A.%202-%D8%A7%D9%84%D8%AF%D8%A7%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A7%D9%85%D8%B9%D9%8A%D8%A9%20%D9%84%D9%84%D8%B7%D8%A8%D8%A7%D8%B9%D8%A9%20%282016%29.pdf",
  },
];

export default booksData;
