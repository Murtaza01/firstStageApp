import { v4 as uuidv4 } from "uuid";

const classData = [
  {
    id: uuidv4(),
    title: "Pronunciation",
    paragraph: "Freshmen 2023-2024",
    instructor: "Karrar Haider",
    image: "pronunciationClass",
    resources: [
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_1",
        link: "/BEP/BEP_lucture_1.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_2",
        link: "/BEP/BEP_lucture_2.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_3",
        link: "/BEP/BEP_lucture_3.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_4",
        link: "/BEP/BEP_lucture_4.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_5",
        link: "/BEP/BEP_lucture_5.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_6",
        link: "/BEP/BEP_lucture_6.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "BEP_lucture_7",
        link: "/BEP/BEP_lucture_7.pdf",
        type: "link",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Introduction to Literature",
    paragraph: "First Year Morning & Evening",
    instructor: "alyaanaser alyaanaser",
    image: "literatureClass",
    resources: [
      {
        id: uuidv4(),
        linkTitle: "literature introduction p.1",
        link: "/literature/lit_intro_2.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "literature introduction p.2",
        link: "/literature/lit_intro_2.pdf",
        type: "link",
      },
      {
        id: uuidv4(),
        linkTitle: "Literature Definition",
        link: "https://youtu.be/H4OEVtyBqFE?si=LdSdz728ot4mR8aw",
        type: "video",
      },
      {
        id: uuidv4(),
        linkTitle: "What is literature for",
        link: "https://youtu.be/4RCFLobfqcw?si=v07qMPg2k7_WwsIt",
        type: "video",
      },
      {
        id: uuidv4(),
        linkTitle: "What is literature",
        link: "https://youtu.be/qvbMNIViMq4?si=52Sj3sHbs2TJAXBC",
        type: "video",
      },
      {
        id: uuidv4(),
        linkTitle: "figurative language and sound devices",
        link: "https://youtu.be/jC6MsrRf_1k?si=aH4qg8fcJvsja3X3",
        type: "video",
      },
      {
        id: uuidv4(),
        linkTitle: "Introduction to lyric poetry",
        link: "https://youtu.be/iVJh4KGWGrs?si=PXv6tPhFqp93nR7f",
        type: "video",
      },
      {
        id: uuidv4(),
        linkTitle: "Sweet and Low",
        link: "https://youtu.be/YtC__V02I0k?si=jP9MV-ejN_rvJWbA",
        type: "video",
      },
      {
        id: uuidv4(),
        linkTitle: "summary of the poem:'A Red,Red Rose'",
        link: "https://youtu.be/8jua1HIKdVE?si=mtLacWa0fc4s3aBi",
        type: "video",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "premiere annee 2023 2024",
    paragraph: "departement d'anglais",
    instructor: "wissan mosaddeq",
    image: "frenchClass",
    resources: [
      {
        id: uuidv4(),
        linkTitle: "",
        link: "",
        type: "",
      },
    ],
  },
  {
    id: uuidv4(),
    title: "Grammar-First Year 2024",
    paragraph: "English Department-COA",
    instructor: "Headway CIV",
    image: "grammarClass",
    resources: [
      {
        id: uuidv4(),
        linkTitle: "Grammar Curriculum",
        link: "/grammar/grammar_curriculum.docx.pdf",
        type: "link",
      },
    ],
  },
];

export default classData;
